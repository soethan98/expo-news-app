
import { useEffect, useReducer } from "react";
import { Image, View, Dimensions, StyleSheet, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { getLatestNews } from "../../../services/api";


const { width: screenWidth } = Dimensions.get('window')

const HomeCarousel = ({onNewsItemClick}) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  useEffect(() => {
    const loadingBreakingNews = async () => {
      dispatch({ type: 'FETCH_START' });
      try {
        const news = await getLatestNews();
        dispatch({ type: 'FETCH_SUCCESS', payload: news });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      }
    };
    loadingBreakingNews();
  }, []);


  const renderItem = ({ item }) =>
  (
  <TouchableOpacity style={styles.imageContainer} onPress={() => onNewsItemClick(item.articleId)}>
    <Image
      resizeMode="cover"
      source={{ uri: item.imageUrl }}
      style={styles.image}
    />
    <View style={styles.titleContainer}>
      <Text style={styles.newsTitle}>{item.title}</Text>

    </View>
  </TouchableOpacity>
  )

  const renderLoading = () => (
    <View style={styles.placeholderContainer}>
      <ActivityIndicator size="large" />
    </View>
  );

  const renderError = () => (
    <View style={styles.placeholderContainer}>
      <Text style={styles.errorText}>Error: {state.error}</Text>
    </View>
  );





  return <View style={styles.container}>
    <Text style={styles.header}>Breaking News</Text>
    {
      state.loading ? renderLoading() : state.error ?
        renderError() :
        <Carousel autoPlayInterval={2000}
          data={state.breakingNews}
          height={250}
          loop={true}
          width={screenWidth}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50,
          }}
          renderItem={renderItem} />
    }

  </View>
}


const initialState = {
  breakingNews: [],
  loading: false,
  error: null,
};


const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, breakingNews: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
const styles = StyleSheet.create({

  header: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
    marginLeft: 24
  },

  container: {
    width: screenWidth,
    flexDirection: 'column'
  },
  imageContainer: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 12

  },
  image: {
    flex: 1,
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent overlay
  },
  newsTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0,0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  placeholderContainer: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
})

export default HomeCarousel;

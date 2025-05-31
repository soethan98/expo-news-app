import { View, Text, ActivityIndicator, StyleSheet, Image, ScrollView } from "react-native";
import { getNewsById } from "../../services/api";
import { use, useEffect, useLayoutEffect, useReducer } from "react";
import NewsSource from "../../components/NewsSource";
import { getFormatedDate } from "../../utils/date";
import { FavoritesContext } from "../../store/FavoritesContext";
import IconButton from "../../components/IconButton";
import { useContext } from "react";


function DetailScreen({ navigation, route }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { articleId } = route.params;

    const favoritesNewsCtx = useContext(FavoritesContext);
    const isCurrentNewsFavorite = favoritesNewsCtx.isFavorite(articleId);


    function changeFavoriteStatusHandler() {
        if (isCurrentNewsFavorite) {
            favoritesNewsCtx.removeFavorite(articleId);
        }else{
            favoritesNewsCtx.addFavorite(articleId);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: ({tintColor}) => (
                <IconButton icon={isCurrentNewsFavorite ? 'heart' : 'heart-outline'}
                onPress={changeFavoriteStatusHandler} 
                color={tintColor}/>
            )
        });
    },[navigation, changeFavoriteStatusHandler]);    
    

    useEffect(() => {
        const loadNewsDetail = async () => {
            dispatch({ type: 'FETCH_START' })
            try {
                const newsDetails = await getNewsById(articleId);
                dispatch({ type: 'FETCH_SUCCESS', payload: newsDetails });
            } catch (error) {
                console.log(error);
                dispatch({ type: 'FETCH_ERROR', payload: error.message });
            }
        };
        loadNewsDetail();
    }, []);


    const renderLoading = () => {
        return (<View style={styles.loadingContainer}>
            <ActivityIndicator size="large" />
        </View>)
    }

    const renderNewsDetail = (item) => {

        return (
            <ScrollView style={styles.mainContainer}>
                <Image source={{ uri: item.imageUrl }} style={styles.imageContainer} />

                <View style={styles.contentContainer}>
                    <Text style={styles.titleText}>{item.title}</Text>

                    <View style={styles.metaInfoContainer}>
                        <NewsSource sourceIcon={item.sourceIcon} sourceName={item.source} />

                    </View>

                    <Text style={styles.contentText}>{item.content}</Text>
                </View>
            </ScrollView>
        );
    }

    return (
        state.loading ? renderLoading() : renderNewsDetail(state.newsDetail)


    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF', // Clean white background
    },
    contentContainer: {
        paddingHorizontal: 20, // Slightly reduced padding for a tighter feel
        marginTop: 20,
        gap: 15, // Reduced gap for a more compact look
    },
    imageContainer: {
        height: 250, // Slightly reduced height for a more balanced look
        width: '100%',
        resizeMode: 'cover',
    },
    titleText: {
        fontSize: 26, // Slightly reduced font size for better readability on smaller screens
        fontWeight: 'bold', // Emphasize the title
        color: '#333333', // Darker text for better contrast
        lineHeight: 34, // Added line height for better readability
    },
    metaInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10, // Add some space below meta info
    },
    sourceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    sourceIcon: {
        width: 20, // Slightly smaller icon
        height: 20, // Slightly smaller icon
        borderRadius: 10, // Make it circular
        marginRight: 6,
    },
    sourceNameText: {
        fontSize: 14, // Consistent font size
        color: '#666666', // Muted color for source name
        fontWeight: '500',
    },
    publishDateText: {
        fontSize: 14, // Consistent font size
        color: '#666666', // Muted color for publish date
        fontWeight: '400',
    },
    contentText: {
        fontSize: 17, // Slightly larger font size for body content
        lineHeight: 26, // Increased line height for better readability
        color: '#444444', // Slightly lighter black for content
        marginBottom: 20, // Add space at the bottom of content
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F7F7', // Light background for loading screen
    },
})


const initialState = {
    newsDetail: {},
    loading: false,
    error: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return { ...state, loading: true, error: null };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, error: null, newsDetail: action.payload }
        case 'FETCH_ERROR':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export default DetailScreen;
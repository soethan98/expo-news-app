import { StyleSheet, View, Image, Text, ActivityIndicator, FlatList } from "react-native";
import { GlobalStyles } from "../../../constants/colors";
import { useReducer, useEffect } from "react";
import { getLatestNews } from "../../../services/api";
import NewsSource from "../../../components/NewsSource";

const NewsList = ({ category }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const loadingLatestNews = async () => {
            dispatch({ type: 'FETCH_START' });
            try {
                const news = await getLatestNews(category.slug);
                console.log('this is news')
                dispatch({ type: 'FETCH_SUCCESS', payload: news });
            } catch (error) {
                dispatch({ type: 'FETCH_ERROR', payload: error.message });
            }
        };
        loadingLatestNews();

    }, [category])

    return (
        <View style={styles.container}>
            {state.loading ? (<ActivityIndicator size="large" />) :

                (state.latestNews.map((item) => {
                    return (
                        <View style={styles.itemContainer} key={item.articleId}>
                            <Image source={{ uri: item.imageUrl }} style={styles.itemImg} />
                            <View style={styles.itemInfo}>
                                <Text style={styles.itemCategory}>{item.category}</Text>
                                <Text style={styles.itemTitle}>{item.title}</Text>
                                <NewsSource sourceIcon={item.sourceIcon} sourceName={item.source}/>
                            </View>
                        </View>
                    )
                }))


            }


        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    itemImg: {
        width: 90,
        height: 100,
        borderRadius: 20,
        marginRight: 10
    },
    itemInfo: {
        flex: 1,
        gap: 10,
        justifyContent: 'space-between'
    },
    itemCategory: {
        fontSize: 12,
        textTransform: 'capitalize',
        color: GlobalStyles.colors.lightGrey
    },
    itemTitle: {
        fontSize: 12,
        color: GlobalStyles.colors.black,

        fontWeight: '600',
    },
    // itemSourceInfo: {
    //     flexDirection: 'row',
    //     gap: 8,
    //     alignItems: 'center'
    // },
    // itemSourceName: {
    //     fontSize: 10,
    //     fontWeight: '400',
    //     color: GlobalStyles.colors.darkGrey
    // },
    // itemSourceImg: {
    //     width: 20,
    //     height: 20,
    //     borderRadius: 10
    // }
})

export default NewsList;


const initialState = {
    latestNews: [],
    selectedCategory: '',
    loading: false,
    error: null

}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return { ...state, loading: true, error: null };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, latestNews: action.payload };
        case 'FETCH_ERROR':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}
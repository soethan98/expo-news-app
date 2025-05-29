import { View, Text, StyleSheet, FlatList,ActivityIndicator } from "react-native";
import { searchNews } from "../../services/api";
import { useEffect, useReducer } from "react";
import NewsItem from "../../components/NewsItem";


function SearchNewsScreen({ navigation, route }) {
    const { keyword, category, country } = route.params;
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                dispatch({ type: 'FETCH_START' });

                let categoryString = "";
                let countryString = "";
                let queryString = "";

                if (category) {
                    categoryString = `&category=${category}`;
                }
                if (country) {
                    countryString = `&country=${country}`;

                }
                if (keyword) {
                    queryString = `&q=${keyword}`
                }
                const filter = {
                    category: categoryString,
                    country: countryString,
                    query: queryString
                };
                const searchResult = await searchNews(filter);
                dispatch({ type: 'FETCH_SUCCESS', payload: searchResult });

            } catch (error) {
                dispatch({ type: 'FETCH_ERROR', payload: error.message });

            }
        }

        fetchNews();


    }, []);

    const renderLoading = () => {
        return (<View style={styles.loadingContainer}>
            <ActivityIndicator size="large" />
        </View>)
    }

    return (<View style={styles.container}>
        {
            state.loading ? renderLoading() : (
                <View>
                    <FlatList
                        data={state.searchResult}
                        keyExtractor={(item) => item.articleId.toString()}
                        renderItem={({ item }) => (
                            <NewsItem
                                data={item}
                                onNewsItemClick={() => navigation.navigate('Detail', { articleId: item.articleId })}
                            />
                        )}
                    />
                </View>
            )
        }


    </View>)
}

export default SearchNewsScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 20
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F7F7', // Light background for loading screen
    },
});

const initialState = {
    searchResult: [],
    loading: false,
    error: null
};


const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return { ...state, loading: true, error: null };
        case 'FETCH_SUCCESS':
            return { loading: false, error: null, searchResult: action.payload };
        case 'FETCH_ERROR':
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};
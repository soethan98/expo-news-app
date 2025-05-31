import { FlatList,StyleSheet, View, Text, ActivityIndicator } from "react-native";
import NewsItem from "../../components/NewsItem";
import { FavoritesContext } from "../../store/FavoritesContext";
import { useContext, useEffect, useReducer } from "react";
import { getFavoritesNews } from "../../services/api";

function SavedScreen({ navigation }) {
    const favoritesNewsCtx = useContext(FavoritesContext);
    const favoriteNews = favoritesNewsCtx.favorites;
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const loadFavorites = async () => {
            dispatch({ type: 'FETCH_START' });
            try {
                if (favoriteNews.length === 0) {
                    dispatch({ type: 'FETCH_SUCCESS', payload: [] });
                    return;
                }
                const favorites = await getFavoritesNews(favoriteNews);
                dispatch({ type: 'FETCH_SUCCESS', payload: favorites });
            } catch (error) {
                dispatch({ type: 'FETCH_ERROR', payload: error.message });
            }
        };
        loadFavorites();
    }
        , [favoritesNewsCtx.favorites]);


    const renderLoading = () => {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {state.loading ? renderLoading() : (
                <FlatList
                    data={state.favorites}
                    renderItem={({ item }) => (
                        <NewsItem
                            onNewsItemClick={(id) => navigation.navigate('Detail', { articleId: id })}
                            data={item}
                        />
                    )}
                    keyExtractor={(item) => item.articleId.toString()}
                />
            )}
        </View>
    );



}

export default SavedScreen;


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
    },
});



const initialState = {
    favorites: [],
    loading: false,
    error: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return { ...state, loading: true, error: null };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, favorites: action.payload };
        case 'FETCH_ERROR':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
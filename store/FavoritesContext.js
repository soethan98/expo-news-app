 import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext,use,useEffect,useState } from "react";



export const FavoritesContext = createContext({
    favorites: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
    isFavorite: () => {}
});

export default function FavoritesContextProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    // Load favorites from AsyncStorage on initial render
    useEffect(() => {
        const loadFavorites = async () => {
            try {
                const storedFavorites = await AsyncStorage.getItem('favorites');
                if(storedFavorites !== null){
                    setFavorites(JSON.parse(storedFavorites));
                }
            } catch (error) {
                console.error("Failed to load favorites:", error);
                
            }
        }
        loadFavorites();
    },[]);


    useEffect(() => {
        const saveFavorites = async () => {
            try {
                await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
            } catch (error) {
                console.error("Failed to save favorites:", error);
            }
        }
        saveFavorites();
    },[favorites]);

    function addFavorite(id) {
        setFavorites((currentFavorites) => [...currentFavorites, id]);
    }

    function removeFavorite(id) {
        setFavorites((currentFavorites) => currentFavorites.filter((favId) => favId !== id));
    }

    function isFavorite(id) {
        return favorites.includes(id);
    }

    const contextValue = {
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite
    };

    return (
        <FavoritesContext.Provider value={contextValue}>
            {children}
        </FavoritesContext.Provider>
    );
}
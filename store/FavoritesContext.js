import { createContext,useState } from "react";



export const FavoritesContext = createContext({
    favorites: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
    isFavorite: () => {}
});

export default function FavoritesContextProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

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
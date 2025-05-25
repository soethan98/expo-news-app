import { useState,useCallback } from "react";
import newCategoryList from "../../constants/categories";

export const useNewsCategories = () => {
    const [newsCategories,setNewsCategories] = useState(newCategoryList);

    const toggleNewsCategory = useCallback((id) => {
        setNewsCategories((prevNewsCategories) => {
            return prevNewsCategories.map((item) => {
                if(item.id === id){
                    return {
                        ...item,
                        selected:!item.selected
                    }
                }
                return item;
            })
        });
    },[]);

    return {
        newsCategories,
        toggleNewsCategory
    }
};
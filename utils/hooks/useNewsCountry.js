import { useState,useCallback } from "react";
import CountryList from "../../constants/CountryList";

export const useNewsCountries = () => {
    const [countries,setNewsCountry] = useState(CountryList);

    const toggleNewsCountry = useCallback((index) => {
        setNewsCountry((prevNewsCountries) => {
            return prevNewsCountries.map((item,i) => {
                if(i === index){
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
        countries,
        toggleNewsCountry
    };
};
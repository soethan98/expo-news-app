import { View,Text } from "react-native";
import { searchNews } from "../../services/api";
import { useEffect } from "react";


function SearchNewsScreen({navigation,route}){
    const { keyword,category,country } = route.params;

    useEffect(() => {
      const aa = async ()  => {
        try {
            let categoryString="";
            let countryString = "";
            let queryString="";

            if(category){
                categoryString = `&category=${category}`;
            }
            if(country){
                countryString = `&country=${country}`;

            }
            if(keyword){
                queryString=`&q=${keyword}`
            }
            const filter = {
                category:categoryString,
                country:countryString,
                query:queryString
            };
           const response =  await searchNews(filter);
        } catch (error) {
            
        }
      }

      aa();
    

    }, []);
     


    return (<View>
        <Text>Hello {keyword} -- {category} -- ${country}</Text>
    </View>)
}

export default SearchNewsScreen;
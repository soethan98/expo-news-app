import { View,Text } from "react-native";


function SearchNewsScreen({navigation,route}){
    const { keyword,category,country } = route.params;

    useEffect(() => {
      const searchNews = async ()  => {
        try {
            let categoryString="";
        } catch (error) {
            
        }
      }
    

    }, [])
     


    return (<View>
        <Text>Hello {keyword} -- {category} -- ${country}</Text>
    </View>)
}

export default SearchNewsScreen;
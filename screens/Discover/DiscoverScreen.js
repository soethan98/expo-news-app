import { StyleSheet, View,Text } from "react-native";
import HomeSearchBar from "../../components/HomeSearchBar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GlobalStyles } from "../../constants/colors";
import newCategoryList from "../../constants/categories";
import CheckBox from "../../components/CheckBox";
import { useNewsCategories } from "../../utils/hooks/useNewsCategories";
import { useNewsCountries } from "../../utils/hooks/useNewsCountry";

function DiscoverScreen() {

    const {top} = useSafeAreaInsets()
    const {newsCategories,toggleNewsCategory} = useNewsCategories();
    const {countries,toggleNewsCountry} = useNewsCountries();
  return   <View style={[{paddingTop:top+20},styles.container]}>
        <HomeSearchBar />
        <Text>Categories</Text>
        <View style={styles.listContainer}>
            {newsCategories.map((item) => {
                return (<CheckBox key={item.id} label={item.title} checked={item.selected} onPress={() => {
                    toggleNewsCategory(item.id);
                }}/>)
            })}
        </View>
        <Text>Country</Text>
        <View style={styles.listContainer}>
            {countries.map((item,index) => {
                return (<CheckBox key={index} label={item.name} checked={item.selected} onPress={() => {
                    toggleNewsCountry(index);
                }}/>)
            })}
        </View>
    </View>
}

export default DiscoverScreen;


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    title:{
        fontSize:18,
        fontWeight:"600",
        color:GlobalStyles.colors.black,
        marginBottom:10
    },
    listContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        gap:16,
        marginTop:12,marginBottom:20
    }
})
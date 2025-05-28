import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import HomeSearchBar from "../../components/HomeSearchBar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GlobalStyles } from "../../constants/colors";
import newCategoryList from "../../constants/categories";
import CheckBox from "../../components/CheckBox";
import { useNewsCategories } from "../../utils/hooks/useNewsCategories";
import { useNewsCountries } from "../../utils/hooks/useNewsCountry";
import { useState } from "react";

function DiscoverScreen({ navigation }) {

    const { top } = useSafeAreaInsets()
    const { newsCategories, toggleNewsCategory } = useNewsCategories();
    const { countries, toggleNewsCountry } = useNewsCountries();

    const [searchQuery, setSearchQuery] = useState("");
    const [category, setCategory] = useState("");
    const [country, setCountry] = useState("");
    return <View style={[{ paddingTop: top + 20 }, styles.container]}>
        <HomeSearchBar setSearchQuery={setSearchQuery} />
        <View style={{ paddingHorizontal: 16 }}>
            <Text>Categories</Text>
            <View style={styles.listContainer}>
                {newsCategories.map((item) => {
                    return (<CheckBox key={item.id} label={item.title} checked={item.selected} onPress={() => {
                        toggleNewsCategory(item.id);
                        setCategory(item.slug);
                    }} />)
                })}
            </View>
            <Text>Country</Text>
            <View style={styles.listContainer}>
                {countries.map((item, index) => {
                    return (<CheckBox key={index} label={item.name} checked={item.selected} onPress={() => {
                        toggleNewsCountry(index);
                        setCountry(item.code);
                    }} />)
                })}
            </View>
            <TouchableOpacity style={styles.searchBtn} onPress={() => {
                console.log(`This is query ${searchQuery.toString()} -- ${category} ${country}`);
                navigation.navigate("SearchNewsScreen", { keyword: searchQuery, category: category, country: country })
            }}>
                <Text style={styles.searchBtnText}>Search</Text>
            </TouchableOpacity>
        </View>

    </View>
}

export default DiscoverScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        color: GlobalStyles.colors.black,
        marginBottom: 10
    },
    listContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 16,
        marginTop: 12, marginBottom: 20
    },
    searchBtn: {
        backgroundColor: GlobalStyles.colors.tint,
        alignItems: 'center',
        padding: 14,
        borderRadius: 10,
        marginVertical: 10
    },
    searchBtnText: {
        color: GlobalStyles.colors.white,
        fontSize: 16,
        fontWeight: '600'
    }
})
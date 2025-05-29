import { StyleSheet, View, Text, ScrollView } from "react-native";
import HomeHeader from "./components/HomeHeader";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeSearchBar from "../../components/HomeSearchBar";
import HomeCarousel from "./components/HomeCarousel";
import { useState } from "react";
import { getLatestNews } from "../../services/api";
import { useEffect } from "react";
import Categories from "./components/Categories";
import NewsList from "./components/NewsList";

function HomeScreen({navigation}) {
    const { top } = useSafeAreaInsets()
    const [selectedCategory, setSelectedCategory] = useState({
        id: 1,
        title: 'All',
        slug: 'top',
        selected: false,
    })




    return <ScrollView style={[{ paddingTop: top }, styles.container]}>
        <HomeHeader />
        <HomeSearchBar />

        <HomeCarousel onNewsItemClick={(id) => navigation.navigate('Detail',{articleId:id})}/>

        <Categories
            onCategoryChange={
                setSelectedCategory
            }
            selectedCategory={selectedCategory}
        />
        <NewsList category={selectedCategory} onNewsItemClick={(id) => navigation.navigate('Detail',{articleId:id})}  />


    </ScrollView>
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
})
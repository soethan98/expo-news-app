import { StyleSheet, View, Text } from "react-native";
import HomeHeader from "./components/HomeHeader";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeSearchBar from "../../components/HomeSearchBar";
import HomeCarousel from "./components/HomeCarousel";
import { useState } from "react";
import { getLatestNews } from "../../services/api";
import { useEffect } from "react";
import Categories from "./components/Categories";

function HomeScreen() {
    const { top } = useSafeAreaInsets()



    return <View style={[{ paddingTop: top }, styles.container]}>
        <HomeHeader />
        <HomeSearchBar />
        
          <HomeCarousel />
          
    <Categories/>
        
    </View>
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
})
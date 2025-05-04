import { StyleSheet, TextInput, View } from "react-native";
import { GlobalStyles } from "../constants/colors";
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

function HomeSearchBar() {

    return (
    <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color={GlobalStyles.colors.lightGrey}/>
        <TextInput placeholder="Search" style={styles.inputContainer}
         autoCapitalize="none" 
         inputMode="search"
         onSubmitEditing={(value)=>{}}/>
       


    </View>);

}

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: GlobalStyles.colors.textInputBackground,
        flexDirection: 'row',
        alignItems:'center',
        borderRadius: 12,
        marginHorizontal:24,
        marginVertical:24,
        paddingHorizontal:8,
        paddingVertical:16
    },
    inputContainer:{
        flex:1,
        paddingStart:8,
        fontSize:14
    }
});

export default HomeSearchBar;



import { StyleSheet, View,Text,Switch, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../../constants/colors";
import {MaterialIcons} from '@expo/vector-icons';
import { useState } from "react";

function SettingsScreen() {
    const [isEnabled,setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((prevState) => !prevState);
   return  <View style={styles.container} >
        <TouchableOpacity style={styles.itemBtn}>
            <Text style={styles.itemBtnText}>
                About
            </Text>
            <MaterialIcons name="arrow-forward-ios" size={16} color={GlobalStyles.colors.black} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemBtn}>
            <Text style={styles.itemBtnText}>
                Send Feedback
            </Text>
            <MaterialIcons name="arrow-forward-ios" size={16} color={GlobalStyles.colors.black} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemBtn}>
            <Text style={styles.itemBtnText}>
                Privacy Policy
            </Text>
            <MaterialIcons name="arrow-forward-ios" size={16} color={GlobalStyles.colors.black} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemBtn}>
            <Text style={styles.itemBtnText}>
                Terms Of Use
            </Text>
            <MaterialIcons name="arrow-forward-ios" size={16} color={GlobalStyles.colors.black} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemBtn}>
            <Text style={styles.itemBtnText}>
                Dark Mode
            </Text>
            <Switch onValueChange={toggleSwitch} value={isEnabled} trackColor={{true : GlobalStyles.colors.tint}}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemBtn}>
            <Text style={[styles.itemBtnText,{color:'red'}]}>
                Logout
            </Text>
            <MaterialIcons name="logout" size={16} color='red' />
        </TouchableOpacity>
    </View>
}

export default SettingsScreen;


const styles = StyleSheet.create({
    container:{
        flex:1,
       padding: 20
    },
    itemBtn:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal:16,
        paddingVertical:20,
        backgroundColor: GlobalStyles.colors.white
    },
    itemBtnText: {
        fontSize:14,
        fontWeight:'500',
        color: GlobalStyles.colors.black
    },
})
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home/HomeScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import SavedScreen from "../screens/Saved/SavedScreen";
import DiscoverScreen from "../screens/Discover/DiscoverScreen";
import {Ionicons} from '@expo/vector-icons';
import { GlobalStyles } from "../constants/colors";



const BottomTabs = createBottomTabNavigator();
export default function  BottomTabNavigator(){
    return (
        <BottomTabs.Navigator screenOptions={{
            tabBarActiveTintColor:GlobalStyles.colors.tabIconSelected
        }}>
            <BottomTabs.Screen name="Home" component={HomeScreen} options={{
                headerShown: false,
                tabBarIcon :({color,size}) =>  (<Ionicons name="home" color={color} size={size}  />)
            }}/>
            <BottomTabs.Screen name="Discover" component={DiscoverScreen} options={{
                headerShown:false,
                tabBarIcon :({size,color}) => (<Ionicons name='compass' size={size} color={color} />)
            }}/>
            <BottomTabs.Screen name="Saved" component={SavedScreen} options={{

                tabBarIcon: ({size,color}) => (<Ionicons name="bookmarks" size={size} color={color}/>)
            }}/>
            <BottomTabs.Screen name="Settings" component={SettingsScreen} options={{
                tabBarIcon: ({size,color}) => (<Ionicons name="settings" size={size} color={color}/>)
            }}/>
        </BottomTabs.Navigator>
    );
}
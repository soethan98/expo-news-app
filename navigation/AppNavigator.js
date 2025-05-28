import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomNavigator';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/Welcome/WelcomeScreen';
import DetailScreen from '../screens/Details/DetailScreen';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SearchNewsScreen from '../screens/SearchNews/SearchNewsScreen';


const Stack = createNativeStackNavigator();
export default function AppNavigator() {
    return (<NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Welcome' component={WelcomeScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name='BottomTabs' component={BottomTabNavigator} options={({ navigation }) => ({
                headerShown: false,
            })} />
            <Stack.Screen name='Detail' component={DetailScreen} options={({ navigation }) => ({
                headerBackButtonDisplayMode: 'minimal',
                headerRight: ({ tintColor }) => (
                    <Pressable>
                        <Ionicons name="heart-outline" size={24} color={tintColor} />

                    </Pressable>
                )

            })} />
            <Stack.Screen name='SearchNewsScreen' component={SearchNewsScreen} options={{
                headerBackButtonDisplayMode:'minimal'
            }} />
        </Stack.Navigator>
    </NavigationContainer>);


}
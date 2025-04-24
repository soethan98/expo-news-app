import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomNavigator';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();
export default function AppNavigator(){
    return (<NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='BottomTabs' component={BottomTabNavigator} options={({navigation}) => ({
                headerShown: false
            })}/>
        </Stack.Navigator>
    </NavigationContainer>);


}
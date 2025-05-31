import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import '@react-navigation/native-stack';
import AppNavigator from './navigation/AppNavigator';
import { useFonts } from 'expo-font';
import FavoritesContextProvider from './store/FavoritesContext';

export default function App() {
  return (
    <FavoritesContextProvider>
          <AppNavigator />

    </FavoritesContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

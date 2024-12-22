import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import SplashScreen from './src/screens/SplashScreen';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { colors } from './src/styles/colors';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'SyneMono-Regular': require('./assets/fonts/SyneMono-Regular.ttf'),
    'SyneMono-Bold': require('./assets/fonts/SyneMono-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Prevent app rendering before fonts are loaded
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={colors.secondary} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Add SplashScreen as the initial screen */}
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="HomeTabs" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

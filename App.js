import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'react-native';

import SplashScreen from './src/screens/SplashScreen';  // Correct import
import SignUpScreen from './src/screens/SignUpScreen'; // Correct import
import LoginScreen from './src/screens/LoginScreen';   // Correct import
import BottomTabNavigator from './src/navigation/BottomTabNavigator'; // Assuming you have this file
import { colors } from './src/styles/colors';  // Assuming you have this file for colors

const Stack = createStackNavigator();

export default function App() {
  const [isNewUser, setIsNewUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const userData = await AsyncStorage.getItem('user');
      setIsNewUser(!userData); // If no user data, it's a new user
    };
    checkUser();
  }, []);

  if (isNewUser === null) {
    return null; // Wait until user status is checked
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={colors.secondary} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Registering all the screens */}
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeTabs" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

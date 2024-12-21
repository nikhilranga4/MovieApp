import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { StatusBar, View, Text } from 'react-native';
import { colors } from './src/styles/colors';
import { useFonts } from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'SyneMono-Regular': require('./assets/fonts/SyneMono-Regular.ttf'),
    'SyneMono-Bold': require('./assets/fonts/SyneMono-Bold.ttf'),
  });
  

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={colors.secondary} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeTabs" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

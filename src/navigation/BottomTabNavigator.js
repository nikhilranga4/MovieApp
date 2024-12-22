// BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// Import Screens
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Home Stack
const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="HomeDetails"
      component={DetailsScreen}
      options={({ route }) => ({
        title: route.params?.show?.name || 'Details',
      })}
    />
  </Stack.Navigator>
);

// Search Stack
const SearchStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Search"
      component={SearchScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SearchDetails"
      component={DetailsScreen}
      options={({ route }) => ({
        title: route.params?.show?.name || 'Details',
      })}
    />
  </Stack.Navigator>
);

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'HomeTab') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'SearchTab') {
          iconName = focused ? 'search' : 'search-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#e50914',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: { backgroundColor: '#000' },
      headerShown: false,
    })}
  >
    <Tab.Screen name="HomeTab" component={HomeStack} options={{ title: 'Home' }} />
    <Tab.Screen name="SearchTab" component={SearchStack} options={{ title: 'Search' }} />
  </Tab.Navigator>
);

export default BottomTabNavigator;

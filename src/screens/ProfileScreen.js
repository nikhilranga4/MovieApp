// ProfileScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');

  // Fetch the username from AsyncStorage
  const fetchUsername = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('username'); // Store username as 'username'
      if (storedUsername) {
        setUsername(storedUsername);
      } else {
        navigation.replace('LoginScreen'); // Redirect to login if no user is logged in
      }
    } catch (error) {
      console.error('Error fetching username:', error);
    }
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('username'); // Clear user data
      Alert.alert('Logged Out', 'You have been logged out successfully.', [
        {
          text: 'OK',
          onPress: () => navigation.replace('LoginScreen'), // Navigate to login screen
        },
      ]);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  useEffect(() => {
    fetchUsername();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.username}>Hello, {username || 'User'}!</Text>
      <Button title="Logout" onPress={handleLogout} color="#e50914" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  username: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
});

export default ProfileScreen;

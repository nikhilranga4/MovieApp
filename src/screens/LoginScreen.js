import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [animationType, setAnimationType] = useState(''); // State to control animation type
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  const handleLogin = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        const { username: storedUsername, password: storedPassword } = JSON.parse(storedUser);
        if (username === storedUsername && password === storedPassword) {
          setAnimationType('success'); // Set animation type to success
          setErrorMessage(''); // Clear error message
          setTimeout(() => {
            navigation.replace('HomeTabs'); // Navigate after animation completes
          }, 4000); // Adjust the timeout as per your animation duration
        } else {
          setAnimationType('failure'); // Set animation type to failure
          setErrorMessage('Incorrect username or password.'); // Display error message
          setTimeout(() => {
            setAnimationType(''); // Reset animation type
          }, 4000); // Return to login screen after animation
        }
      } else {
        setAnimationType('failure'); // Set animation type to failure
        setErrorMessage('No user found. Please sign up first.'); // Display error message
        setTimeout(() => {
          setAnimationType(''); // Reset animation type
        }, 4000); // Return to login screen after animation
      }
    } catch (error) {
      setAnimationType('failure'); // Set animation type to failure
      setErrorMessage('An error occurred. Please try again.'); // Display error message
      setTimeout(() => {
        setAnimationType(''); // Reset animation type
      }, 2000); // Return to login screen after animation
    }
  };

  return (
    <View style={styles.container}>
      {animationType === 'success' && (
        <LottieView
          source={require('../../assets/success.json')} // Replace with your success animation
          autoPlay
          loop={false}
          style={styles.animation}
        />
      )}
      {animationType === 'failure' && (
        <>
          <LottieView
            source={require('../../assets/failure.json')} // Replace with your failure animation
            autoPlay
            loop={false}
            style={styles.animation}
          />
          <Text style={styles.errorText}>{errorMessage}</Text>
        </>
      )}

      {!animationType && (
        <>
          <Text style={styles.title}>Login</Text>
          <TextInput
            placeholder="Username"
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            value={password}
            secureTextEntry
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUpScreen')}
            style={styles.linkButton}
          >
            <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  animation: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').width * 0.8,
  },
  title: { fontSize: 32, color: '#000', marginBottom: 20 },
  input: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#ff0000',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    width: '80%',
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
  linkButton: { marginTop: 15 },
  linkText: { color: '#ff0000', fontSize: 14, textDecorationLine: 'underline' },
  errorText: {
    marginTop: 20,
    color: '#ff0000',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default LoginScreen;

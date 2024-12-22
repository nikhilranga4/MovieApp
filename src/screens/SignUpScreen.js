import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (username && password) {
      try {
        await AsyncStorage.setItem('user', JSON.stringify({ username, password }));
        Alert.alert('Success', 'Sign-up successful!', [
          { text: 'OK', onPress: () => navigation.replace('LoginScreen') },
        ]);
      } catch (error) {
        Alert.alert('Error', 'Failed to save user data');
      }
    } else {
      Alert.alert('Error', 'Please fill in all fields');
    }
  };

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/movie-image.json')}
        autoPlay
        loop
        style={styles.animation}
      />
      <Text style={styles.title}>Sign Up</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('LoginScreen')}
        style={styles.linkButton}
      >
        <Text style={styles.linkText}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  animation: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').width * 0.8,
  },
  title: { fontSize: 32, color: '#fff', marginBottom: 20, fontFamily: 'SyneMono-Bold' },
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
});

export default SignUpScreen;

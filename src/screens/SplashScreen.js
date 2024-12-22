import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('SignUpScreen'); // Navigate to your next screen
    }, 2600); // Adjust the duration of the splash screen if needed

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/loading.json')} // Your animation file
        autoPlay
        loop={false}
        style={styles.animation}
      />
      <Text style={styles.text}>Welcome to MovieApp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Black background for the splash screen
  },
  animation: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.9, // Adjust based on your design
  },
  text: {
    color: '#fff',
    fontSize: 24,
    marginTop: 20,
    fontFamily: 'SyneMono-Bold', // Ensure this font is correctly loaded
  },
});

export default SplashScreen;

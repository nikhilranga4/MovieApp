import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Navigate to HomeScreen after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace('HomeTabs'); // Navigate to HomeTabs after splash duration
    }, 3000); // Adjust the time (in ms) for how long the splash screen shows

    // Cleanup timeout on component unmount
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
      {/* Lottie Animation */}
      <LottieView
        source={require('../../assets/movie-image.json')} // Path to your Lottie animation file
        autoPlay
        loop
      />
      <Text style={{ color: 'white', fontSize: 24, marginTop: 20 }}>Welcome to MovieApp</Text>
    </View>
  );
};

export default SplashScreen;

import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Navigate to BottomTabNavigator after 3 seconds
    const timeout = setTimeout(() => {
      navigation.replace('HomeTabs'); // Replace SplashScreen with HomeTabs
    }, 2600);

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/loading.json')}
        autoPlay
        loop={false} // Play once
        style={styles.animation} // Ensure animation size is appropriate
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
    backgroundColor: '#000', // Match app theme
  },
  animation: {
    width: Dimensions.get('window').width * 0.9, // 80% of screen width
    height: Dimensions.get('window').width * 0.9, // 80% of screen width
  },
  text: {
    color: '#fff',
    fontSize: 24,
    marginTop: 20,
    fontFamily: 'SyneMono-Bold', // Use your custom font
  },
});

export default SplashScreen;

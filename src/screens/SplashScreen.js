import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('SignUpScreen'); // Corrected screen name
    }, 2600);

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/loading.json')}
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
    backgroundColor: '#000',
  },
  animation: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.9,
  },
  text: {
    color: '#fff',
    fontSize: 24,
    marginTop: 20,
    fontFamily: 'SyneMono-Bold',
  },
});

export default SplashScreen;

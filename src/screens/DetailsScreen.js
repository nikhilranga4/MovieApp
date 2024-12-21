import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For the star icon
import Animated, { FadeIn, FadeInUp } from 'react-native-reanimated'; // For animations

const DetailsScreen = ({ route }) => {
  const { show } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Image Section */}
      <Animated.View entering={FadeIn.delay(200)}>
        <Image
          source={{ uri: show.image?.original }}
          style={styles.image}
          resizeMode="cover"
        />
      </Animated.View>

      {/* Title */}
      <Animated.Text style={styles.title} entering={FadeInUp.delay(400)}>
        {show.name}
      </Animated.Text>

      {/* Rating Section */}
      <Animated.View style={styles.ratingContainer} entering={FadeInUp.delay(600)}>
        {show.rating?.average ? (
          <>
            <Text style={styles.imdb}>IMDB</Text>
            <Ionicons name="star" size={20} color="#FFD700" />
            <Text style={styles.ratingText}>{show.rating.average} / 10</Text>
          </>
        ) : (
          <Text style={styles.noRatingText}>Rating: N/A</Text>
        )}
      </Animated.View>

      {/* Summary */}
      <Animated.Text style={styles.summary} entering={FadeInUp.delay(800)}>
        {show.summary.replace(/<[^>]*>/g, '')}
      </Animated.Text>

      {/* Additional Information */}
      <Animated.View entering={FadeInUp.delay(1000)}>
        <Text style={styles.info}>Language: {show.language}</Text>
        <Text style={styles.info}>Genres: {show.genres.join(', ')}</Text>
        <Text style={styles.info}>Premiered: {show.premiered}</Text>
        <Text style={styles.info}>Runtime: {show.runtime} mins</Text>
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  imdb: {
    fontSize: 14,
    color: '#fff',
    marginRight: 5,
  },
  ratingText: {
    fontSize: 16,
    color: '#FFD700',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  noRatingText: {
    fontSize: 16,
    color: '#d3d3d3',
    textAlign: 'center',
    marginBottom: 10,
  },
  summary: {
    fontSize: 16,
    color: '#d3d3d3',
    marginBottom: 10,
    textAlign: 'justify',
    lineHeight: 22,
  },
  info: {
    fontSize: 14,
    color: '#bbb',
    marginBottom: 5,
    lineHeight: 20,
  },
});

export default DetailsScreen;

import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For the star icon
import Animated, { FadeIn, FadeInUp } from 'react-native-reanimated'; // For animations

const DetailsScreen = ({ route }) => {
  const { show } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Floating Card Section */}
      <Animated.View entering={FadeInUp.delay(200)} style={styles.card}>
        {/* Image Section */}
        <Image
          source={{ uri: show.image?.original }}
          style={styles.image}
          resizeMode="cover"
        />

        {/* Content Section */}
        <View style={styles.contentContainer}>
          {/* Title */}
          <Text style={styles.title}>{show.name}</Text>

          {/* Rating Section */}
          <View style={styles.ratingContainer}>
            {show.rating?.average ? (
              <>
                <Text style={styles.imdb}>IMDB</Text>
                <Ionicons name="star" size={20} color="#FFD700" />
                <Text style={styles.ratingText}>{show.rating.average} / 10</Text>
              </>
            ) : (
              <Text style={styles.noRatingText}>Rating: N/A</Text>
            )}
          </View>

          {/* Summary */}
          <Text style={styles.summary}>{show.summary.replace(/<[^>]*>/g, '')}</Text>

          {/* Additional Information */}
          <View style={styles.infoContainer}>
            <Text style={styles.info}>Language: {show.language}</Text>
            <Text style={styles.info}>Genres: {show.genres.join(', ')}</Text>
            <Text style={styles.info}>Premiered: {show.premiered}</Text>
            <Text style={styles.info}>Runtime: {show.runtime} mins</Text>
          </View>
        </View>
      </Animated.View>
    </ScrollView>
  );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000',
    padding: 15,
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'rgba(143, 141, 141, 0.4)',
    borderRadius: 15,
    shadowColor: 'rgb(122, 219, 255)',
    shadowOffset: { width: 60, height: 60 },
    shadowOpacity: 0.4,
    shadowRadius: 50,
    elevation: 0,
    overflow: 'hidden',
    width: width * 0.9,
    backdropFilter: 'blur(10px)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  image: {
    width: '100%',
    height: 300,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
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
    marginBottom: 15,
  },
  summary: {
    fontSize: 16,
    color: '#d3d3d3',
    textAlign: 'justify',
    lineHeight: 22,
    marginBottom: 20,
  },
  infoContainer: {
    borderTopWidth: 1,
    borderTopColor: '#444',
    paddingTop: 15,
  },
  info: {
    fontSize: 14,
    color: '#bbb',
    marginBottom: 10,
    lineHeight: 20,
  },
});

export default DetailsScreen;

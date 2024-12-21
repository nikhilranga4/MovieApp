import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MovieCard = ({ movie, onPress }) => {
  const imageUrl = movie.image ? movie.image.medium : 'https://via.placeholder.com/210x295';
  const description = movie.summary
    ? movie.summary.replace(/<[^>]+>/g, '') // Remove HTML tags from summary
    : 'No description available';

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {/* Movie Image */}
      <Image source={{ uri: imageUrl }} style={styles.image} />
      
      {/* Movie Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title} numberOfLines={1}>{movie.name}</Text>
        <Text style={styles.rating}>IMDB ⭐ {movie.rating?.average || 'N/A'}</Text>
        <Text style={styles.description} numberOfLines={3}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: '#404040', // Dark background for the card
    borderRadius: 15, // Rounded corners
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Elevation for Android
  },
  image: {
    width: '100%',
    height: 180, // Adjust height for a balanced card layout
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  detailsContainer: {
    padding: 10, // Spacing for the details section
  },
  title: {
    fontSize: 16,
    color: '#fff', // White text for visibility
    fontWeight: 'bold',
    marginBottom: 4,
  },
  rating: {
    fontSize: 14,
    color: '#f4c10f', // Golden color for ratings
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    color: '#bbb', // Subtle gray for the description text
    lineHeight: 16,
  },
});

export default MovieCard;

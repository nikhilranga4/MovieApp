import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text, RefreshControl } from 'react-native';
import axios from 'axios';
import SearchBar from '../components/SearchBar'; // Assuming SearchBar is a custom component
import MovieCard from '../components/MovieCard'; // Assuming MovieCard is a custom component

const SearchScreen = ({ route, navigation }) => {
  const { query } = route.params || {}; // Get query from route params or set to empty string
  const [searchTerm, setSearchTerm] = useState(query || ''); // Initialize with query if present
  const [movies, setMovies] = useState([]); // Store search results
  const [loading, setLoading] = useState(false); // Loading state for API request
  const [refreshing, setRefreshing] = useState(false); // State for refresh control

  // Function to handle the search query and API call
  const handleSearch = async (query) => {
    setSearchTerm(query);  // Update the search term with the new query
    setLoading(true);  // Start loading

    try {
      const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
      setMovies(response.data); // Set the fetched movies data
    } catch (error) {
      console.error('Error searching movies:', error); // Log any errors
    }

    setLoading(false);  // End loading
  };

  // Function to handle refresh
  const onRefresh = async () => {
    setRefreshing(true);  // Start refreshing
    await handleSearch(searchTerm);  // Re-run the search with the current search term
    setRefreshing(false);  // End refreshing
  };

  // Call handleSearch whenever searchTerm changes
  useEffect(() => {
    if (searchTerm) {
      handleSearch(searchTerm);  // Trigger search if there is a search term
    }
  }, [searchTerm]);

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Type movie name"
        onSearch={handleSearch}  // Pass the handleSearch function to SearchBar
        value={searchTerm}  // Ensure SearchBar reflects the current search term
      />
      
      {/* Show loading indicator while fetching data */}
      {loading ? (
        <ActivityIndicator size="large" color="#e50914" style={styles.loader} />
      ) : (
        // If no results, show a message, else display the search results
        movies.length > 0 ? (
          <FlatList
            data={movies}
            renderItem={({ item }) => (
              <MovieCard
                movie={item.show}  // Pass the show object to MovieCard component
                onPress={() => navigation.navigate('SearchDetails', { show: item.show })} // Navigate on press
              />
            )}
            keyExtractor={(item) => item.show.id.toString()} // Use the show id as the key
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh} // Trigger refresh when pulled down
                colors={['#e50914']}  // Customize the refresh control color
              />
            }
          />
        ) : (
          // Show message if no results found
          <Text style={styles.noResults}>No movies found</Text>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',  // Black background to match typical movie apps
    paddingTop: 20,  // Some padding to avoid the status bar
    elevation: 300,
  },
  loader: {
    marginTop: 20,  // Add margin to the loader to keep it centered
  },
  noResults: {
    color: '#fff',  // White text for no results message
    textAlign: 'center',
    marginTop: 20,
  },
});

export default SearchScreen;

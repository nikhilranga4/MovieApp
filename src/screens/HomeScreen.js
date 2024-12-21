import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
  Text,
} from 'react-native';
import axios from 'axios';
import MovieCard from '../components/MovieCard'; // Assuming MovieCard is a custom component
import SearchBar from '../components/SearchBar'; // Assuming SearchBar is a custom component

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const shuffleArray = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const fetchMovies = async (currentPage = 1, append = false) => {
    try {
      const response = await axios.get(`https://api.tvmaze.com/shows?page=${currentPage}`);
      const shuffledMovies = shuffleArray(response.data);
      setMovies((prevMovies) =>
        append ? [...prevMovies, ...shuffledMovies] : shuffledMovies
      );
      setLoading(false);
      setIsLoadingMore(false);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSearch = (query) => {
    if (query.trim()) {
      navigation.navigate('SearchTab', { query });
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchMovies();
    setRefreshing(false);
  };

  const handleLoadMore = () => {
    if (!isLoadingMore) {
      setIsLoadingMore(true);
      setPage((prevPage) => {
        const nextPage = prevPage + 1;
        fetchMovies(nextPage, true);
        return nextPage;
      });
    }
  };

  const renderMovie = ({ item }) => (
    <MovieCard
      movie={item}
      onPress={() => navigation.navigate('HomeDetails', { show: item })}
    />
  );

  return (
    <View style={styles.container}>
      {/* Banner Section */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Welcome to MovieApp</Text>
        <Text style={styles.subText}>Find your favorite shows and movies</Text>
      </View>

      {/* Search Bar Section */}
      <SearchBar
        placeholder="Search Movies"
        onSearch={handleSearch}
      />

      {/* Loading or Movie List */}
      {loading ? (
        <ActivityIndicator size="large" color="#e50914" style={styles.loader} />
      ) : (
        <FlatList
          data={movies}
          renderItem={renderMovie}
          keyExtractor={(item) => item.id.toString()}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              tintColor="#e50914"
            />
          }
          numColumns={2}
          contentContainerStyle={styles.flatlistContainer}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            isLoadingMore && <ActivityIndicator size="small" color="#e50914" style={styles.loader} />
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background
  },
  banner: {
    backgroundColor: '#1E1E1E',
    paddingVertical: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  bannerText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 16,
    color: '#bbb',
    marginTop: 5,
  },
  loader: {
    marginTop: 20,
    marginBottom: 20,
  },
  flatlistContainer: {
    paddingHorizontal: 10,
  },
});

export default HomeScreen;

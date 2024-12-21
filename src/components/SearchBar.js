import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For the search icon, ensure expo/vector-icons is installed

const SearchBar = ({ placeholder = 'Search for movies...', onSearch }) => {
  const [query, setQuery] = React.useState(''); // Local state to hold the search query

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query); // Trigger the search handler from parent
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSearch}
        placeholderTextColor="#ffff"
      />
      <TouchableOpacity style={styles.iconContainer} onPress={handleSearch}>
        <Ionicons name="search" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 15,
    backgroundColor: '#333',
    borderRadius: 12,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    paddingLeft: 15,
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Roboto', // Adjust this based on your font preference
    backgroundColor: '#1c1c1c',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  iconContainer: {
    backgroundColor: '#e50914',
    padding: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchBar;

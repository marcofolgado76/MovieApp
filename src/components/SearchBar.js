import React, { useState, useContext, useEffect } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from '../utils/styles';
import { MovieContext } from '../context/MovieContext';

const SearchCard = () => {
  // Local state for the search text
  const [localSearchText, setLocalSearchText] = useState('');

  // Access search-related states and functions from the context
  const { updateSearchText, searchText } = useContext(MovieContext);

  // Function to handle the search button press
  const handleSearch = () => {
    updateSearchText(localSearchText);
  };

  // Update local search text when the global search text changes
  useEffect(() => {
    setLocalSearchText(searchText);
  }, [searchText]);

  return (
    <View style={styles.searchCard}>
      <TextInput
        style={styles.input}
        placeholder="Search movies..."
        value={localSearchText}
        onChangeText={(text) => setLocalSearchText(text)}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <FontAwesome
          name="search"
          size={24}
          color="white"
          style={styles.searchIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchCard;

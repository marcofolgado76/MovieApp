import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { styles } from '../utils/styles';
import { MovieContext } from '../context/MovieContext';

const HeaderNavigator = ({ title }) => {
  // Retrieve context values and update functions
  const {
    updateSearchShow,
    updateSortTypeShow,
    updateClearFiltersSearch,
    searchShow,
    sortTypeShow,
    clearFiltersSearch,
  } = useContext(MovieContext);

  return (
    <View style={styles.headerContainer}>
      {/* Display the header title */}
      <Text style={styles.headerText}>{title}</Text>
      <View style={styles.headerRight}>
        {/* Button to clear filters and search */}
        <TouchableOpacity onPress={() => { updateClearFiltersSearch(!clearFiltersSearch) }}>
          <FontAwesome name="eraser" size={24} color="white" style={styles.headerIcon} />
        </TouchableOpacity>
        {/* Button to show/hide sort options */}
        <TouchableOpacity onPress={() => { updateSortTypeShow(!sortTypeShow) }}>
          <FontAwesome name="sort" size={24} color="white" style={styles.headerIcon} />
        </TouchableOpacity>
        {/* Button to show/hide search bar */}
        <TouchableOpacity onPress={() => { updateSearchShow(!searchShow) }}>
          <FontAwesome name="search" size={24} color="white" style={styles.headerIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderNavigator;

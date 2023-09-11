import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { ButtonGroup, Icon } from 'react-native-elements';
import { styles } from '../utils/styles';
import { MovieContext } from '../context/MovieContext';

const MovieSorter = () => {
  // Access sorting related states and functions from the context
  const {
    updateSortOrder,
    updateSortBy,
    sortBy,
    sortOrder,
  } = useContext(MovieContext);

  // Define available sorting options
  const sortOptions = [
    { label: 'Release Date', value: 'releaseDate' },
    { label: 'Rating', value: 'rating' },
  ];

  // Function to toggle between ascending and descending sort order
  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === 'ascending' ? 'descending' : 'ascending';
    updateSortOrder(newSortOrder);
  };

  return (
    <View style={styles.sortContainer}>
      <Text style={styles.sortText}>Sort by:</Text>
      <ButtonGroup
        buttons={sortOptions.map((option) => option.label)}
        selectedIndex={sortOptions.findIndex((option) => option.value === sortBy)}
        onPress={(index) => updateSortBy(sortOptions[index].value)}
        containerStyle={styles.sortButtonGroupContainer} 
        selectedButtonStyle={styles.selectedButtonStyle}
        innerBorderStyle={styles.sortInnerBorderStyle}
        textStyle={styles.sortButtonText}
        buttonStyle={styles.sortButton}
        selectMultiple={false}
      />
      <View style={styles.sortIconContainer}>
        <Icon
          name={sortOrder === 'ascending' ? 'arrow-up' : 'arrow-down'} 
          type="font-awesome"
          onPress={toggleSortOrder}
          iconStyle={styles.sortIcon}
        />
      </View>
    </View>
  );
};

export default MovieSorter;

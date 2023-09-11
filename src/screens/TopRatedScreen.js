import React, { useEffect, useState, useContext } from 'react';
import { View, FlatList, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { getMovies } from '../services/MovieService';
import MovieCard from '../components/MovieCard';
import { styles } from '../utils/styles';
import SearchBar from '../components/SearchBar';
import SortBar from '../components/MovieSorter';
import { MovieContext } from '../context/MovieContext';
import { searchMovies, sortArrayOfObjects } from '../utils/helpers';
import { useIsConnected } from 'react-native-offline';
import CustomOfflineMessage from '../components/CustomOfflineMessage';

const TopRatedScreen = ({ navigation }) => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [mooviesPage, setMooviesPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const isConnected = useIsConnected();

  // Get context variables and functions
  const {
    searchShow,
    searchText,
    sortTypeShow,
    clearFiltersSearch,
    updateClearFiltersSearch,
    updateSearchText,
    sortBy,
    sortOrder,
    updateSortBy,
    updateSortOrder,
  } = useContext(MovieContext);

  // Fetch top-rated movies data
  const fetchTopRatedMoviesData = async (page) => {
    try {
      setIsLoading(true);
      const data = await getMovies('toprated', page);
      if (data) {
        if (page === 1) {
          setTopRatedMovies(data.results);
        } else {
          setTopRatedMovies([...topRatedMovies, ...data.results]);
        }
        if (data.results.length === 0) {
          setShowLoadMore(false);
        }
        setMooviesPage(page + 1);
      }
    } catch (error) {
      console.error('Error fetching top-rated movies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Navigate back to the previous screen
  const navigateBack = () => {
    navigation.navigate('Popular Movies');
  };

  // Load more top-rated movies
  const loadMoreMovies = () => {
    fetchTopRatedMoviesData(mooviesPage);
  };

  // Render the "Load More" button
  const renderLoadMoreButton = () => {
    if (showLoadMore && isLoading === false) {
      return (
        <TouchableOpacity style={styles.loadMoreButton} onPress={loadMoreMovies}>
          <Text style={styles.loadMoreButtonText}>Load More</Text>
        </TouchableOpacity>
      );
    }
    return null;
  };

  // Apply sorting when sort options change
  useEffect(() => {
    if (sortTypeShow === true) {
      const sortedMovies = sortArrayOfObjects(topRatedMovies, sortBy, sortOrder);
      setTopRatedMovies(sortedMovies);
    }
  }, [sortBy, sortOrder]);

  // Fetch top-rated movies data on initial screen load
  useEffect(() => {
    fetchTopRatedMoviesData(mooviesPage);
  }, []);

  // Apply search filter when search text changes
  useEffect(() => {
    if (searchShow === true) {
      const filteredMovies = searchMovies(topRatedMovies, searchText);
      setTopRatedMovies(filteredMovies);
    }
  }, [searchText]);

  // Clear filters and reset movie list
  useEffect(() => {
    if (clearFiltersSearch === true) {
      setTopRatedMovies([]);
      fetchTopRatedMoviesData(1);
      updateSearchText('');
      updateSortBy('releaseDate');
      updateSortOrder('descending');
      updateClearFiltersSearch(false);
    }
  }, [clearFiltersSearch]);

  return (
    <View style={styles.container}>
      {isConnected ? (
        <>
          {searchShow === true ? <SearchBar /> : null}
          {sortTypeShow === true ? <SortBar /> : null}

          <FlatList
            data={topRatedMovies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <MovieCard movie={item} navigation={navigation} navigateBack={navigateBack} />
            )}
            ListFooterComponent={renderLoadMoreButton}
          />
          {isLoading && (
            <ActivityIndicator
              style={styles.activityIndicator}
              size="large"
              color="#3498db"
            />
          )}
        </>
      ) : (
        // Display custom offline message when there's no internet connection
        <CustomOfflineMessage />
      )}
    </View>
  );
};

export default TopRatedScreen;

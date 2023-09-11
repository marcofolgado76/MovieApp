// MovieCard.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card, ListItem, Icon, Image } from 'react-native-elements';
import { styles } from '../utils/styles';

const MovieCard = ({ movie, navigation, navigateBack }) => {
  // Handle the press event when the card is tapped
  const handleCardPress = () => {
    // Navigate to the MovieDetailsScreen with movie details and the navigateBack function
    navigation.navigate('MovieDetailsScreen', { movie, navigateBack });
  };

  return (
    // Wrap the card with a TouchableOpacity to make it tappable
    <TouchableOpacity onPress={handleCardPress}>
      <Card containerStyle={styles.movieCard}>
        <View style={styles.cardContent}>
          <View style={styles.imageContainer}>
            {/* Display the movie poster */}
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <View style={styles.cardInfo}>
            <Card.Title style={styles.title}>{movie.title}</Card.Title>
            <Card.Divider />
            {/* Display the movie's rating */}
            <ListItem containerStyle={styles.listItem}>
              <Icon name="star" type="font-awesome" color="#3498db" />
              <Text style={styles.infoText}>Rating: <Text style={styles.bold}>{movie.vote_average.toFixed(1)}</Text></Text>
            </ListItem>
            {/* Display the movie's release date */}
            <ListItem containerStyle={styles.listItem}>
              <Icon name="calendar" type="font-awesome" color="#3498db" />
              <Text style={styles.infoText}>Release Date: <Text style={styles.bold}>{movie.release_date}</Text></Text>
            </ListItem>
            {/* Display the movie's original language */}
            <ListItem containerStyle={styles.listItem}>
              <Icon name="language" type="font-awesome" color="#3498db" />
              <Text style={styles.infoText}>Language: <Text style={styles.bold}>{movie.original_language.toUpperCase()}</Text></Text>
            </ListItem>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default MovieCard;

import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import { styles } from '../utils/styles';
import { useIsConnected } from 'react-native-offline';
import CustomOfflineMessage from '../components/CustomOfflineMessage';

const MovieDetailsScreen = ({ route }) => {
  // Retrieve movie and navigateBack function from route params
  const { movie, navigateBack } = route.params;
  // Check if the device is connected to the internet
  const isConnected = useIsConnected();

  return (
    <>
      {isConnected ? (
        <ScrollView style={styles.detailsContainer}>
          <Card containerStyle={styles.cardContainer}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
              style={styles.detailsPoster}
            />
            <Text style={styles.detailsTitle}>{movie.title}</Text>
            <Text style={styles.detailsOverview}>{movie.overview}</Text>
            <View style={styles.iconContainer}>
              <Icon name="language" type="font-awesome" color="#3498db" style={styles.icon} />
              <Text style={styles.detailsText}>Language: <Text style={styles.bold}>{movie.original_language.toUpperCase()}</Text></Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon name="calendar" type="font-awesome" color="#3498db" style={styles.icon} />
              <Text style={styles.detailsText}>Release Date: <Text style={styles.bold}>{movie.release_date}</Text></Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon name="star" type="font-awesome" color="#3498db" style={styles.icon} />
              <Text style={styles.detailsText}>Rating: <Text style={styles.bold}>{movie.vote_average}</Text></Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon name="users" type="font-awesome" color="#3498db" style={styles.icon} />
              <Text style={styles.detailsText}>Popularity: <Text style={styles.bold}>{movie.popularity}</Text></Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon name="globe" type="font-awesome" color="#3498db" style={styles.icon} />
              <Text style={styles.detailsText}>Vote Count: <Text style={styles.bold}>{movie.vote_count}</Text></Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon name="user" type="font-awesome" color="#3498db" style={styles.icon} />
              <Text style={styles.detailsText}>
                Adult Movie: <Text style={styles.bold}>{movie.adult ? 'Yes' : 'No'}</Text>
              </Text>
            </View>
            <Button title="Go Back" onPress={navigateBack} buttonStyle={styles.backButton} />
          </Card>
        </ScrollView>
      ) : (
        <View style={styles.container}>
          {/* Display custom offline message */}
          <CustomOfflineMessage />
        </View>
      )}
    </>
  );
};

export default MovieDetailsScreen;

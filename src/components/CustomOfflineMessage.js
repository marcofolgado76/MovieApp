// Import necessary dependencies
import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Import styles from external file (assumes it's defined in '../utils/styles')
import { styles } from '../utils/styles';

// Define a functional component called CustomOfflineMessage
const CustomOfflineMessage = () => {
  return (
    // Render a container view with offline message
    <View style={styles.offlineContainer}>
      {/* Render a Wi-Fi icon */}
      <Icon name="wifi" size={50} color="#3498db" style={styles.offlineIcon} />

      {/* Render a text indicating no internet connection */}
      <Text style={styles.offlineText}>No internet connection</Text>

      {/* Render a text prompting to turn on data */}
      <Text style={styles.offlineText}>Please turn on your data</Text>
    </View>
  );
};

// Export the CustomOfflineMessage component for use in other parts of the app
export default CustomOfflineMessage;

import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // You can use any icon library of your choice
import { styles } from '../utils/styles';

// Define the screens to exclude from the bottom tabs
const excludedScreens = ['MovieDetailsScreen'];

const BottomTabNavigator = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes
        .filter(route => !excludedScreens.includes(route.name)) // Filter out excluded screens
        .map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          let icon;
          let label = route.name;

          // Define the icons for each tab based on the screen name
          if (route.name === 'Popular Movies') {
            icon = isFocused ? 'fire' : 'fire';
          } else if (route.name === 'Top Rated Movies') {
            icon = isFocused ? 'star' : 'star';
          }

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={[styles.tabItem, isFocused ? styles.tabItemFocused : null]}
            >
              <FontAwesome name={icon} size={24} color={'#fff'} />
              <Text style={isFocused ? styles.tabLabelFocused : styles.tabLabel}>{label}</Text>
            </TouchableOpacity>
          );
        })}
    </View>
  );
};

export default BottomTabNavigator;

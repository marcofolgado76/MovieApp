import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PopularScreen from './src/screens/PopularScreen';
import TopRatedScreen from './src/screens/TopRatedScreen';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { MovieContextProvider } from './src/context/MovieContext';
import HeaderNavigator from './src/navigation/HeaderNavigator'; 
import MovieDetailsScreen from './src/screens/MovieDetailsScreen'; 
import { NetworkProvider } from 'react-native-offline';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <MovieContextProvider> 
      <NetworkProvider> 
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Popular"
            tabBar={props => <BottomTabNavigator {...props} />} // Custom bottom tab navigator
          >
            <Tab.Screen
              name="Popular Movies"
              component={PopularScreen} // Popular Movies screen
              options={{
                headerTitle: () => <HeaderNavigator title="Popular Movies" />, // Custom header
                headerStyle: {
                  backgroundColor: '#3498db',
                },
              }}
            />
            <Tab.Screen
              name="Top Rated Movies"
              component={TopRatedScreen} // Top Rated Movies screen
              options={{
                headerTitle: () => <HeaderNavigator title="Top Rated Movies" />, // Custom header
                headerStyle: {
                  backgroundColor: '#3498db',
                },
              }}
            />
            <Tab.Screen
              name="MovieDetailsScreen"
              component={MovieDetailsScreen} // Movie Details screen
              options={{
                headerTitle: () => <HeaderNavigator title="Movie Details" />, // Custom header
                headerStyle: {
                  backgroundColor: '#3498db',
                },
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </NetworkProvider>
    </MovieContextProvider>
  );
};

export default App;

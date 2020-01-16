import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { DetailsScreen } from './Detail'
import SplashScreen from './SplashScreen'
import { HomeScreen } from './Home';

const HomeNavigator = createStackNavigator({
  Splash: SplashScreen,
  Home: HomeScreen,
  Details: DetailsScreen,
}, {
  headerMode: 'none',
});

export const AppNavigator = createAppContainer(HomeNavigator);
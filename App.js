import React from 'react';
import { AppRegistry, StyleSheet, ListView, Text, View } from 'react-native';
import { createRouter, NavigationProvider, StackNavigation } from '@expo/ex-navigation';

import HomeScreen from './components/HomeScreen';
import ArtList from './components/ArtList';

export const Router = createRouter(() => ({
  home: () => HomeScreen,
  artList: () => ArtList,
}));

export default class App extends React.Component {

  render() {
    return (
      <NavigationProvider router={Router}>
        <HomeScreen />
      </NavigationProvider>

      // <View style={styles.container}>
      //   <HomeScreen />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 30,
  },
});

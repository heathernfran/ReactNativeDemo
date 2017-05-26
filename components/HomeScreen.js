import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createRouter, NavigationProvider, StackNavigation } from '@expo/ex-navigation';

import { Router } from '../App';

export default class HomeScreen extends React.Component {

  static route = {
    navigationBar: {
      title: 'Home',
    }
  };

  _goToScreen = (name) => {
    this.props.navigator.push(Router.getRoute(name));
  }

  // goToComponent = name => () => {
    // this.props
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text title='Home' style={styles.heading} onPress={this._goToScreen('home')}>Home</Text>
        <Text title='SF Civic Art' style={styles.heading} onPress={this._goToScreen('artList')}>SF Civic Art</Text>
      </View>
      // <View style={styles.container}>
      //   <Text title='Home' onPress={this._goToScreen('home')}>Home</Text>
      //   <Text title='SF Civic Art' onPress={this._goToScreen('artList')}>SF Civic Art</Text>
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

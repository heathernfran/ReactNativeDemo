import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Router } from '../App';

export default class HomeScreen extends React.Component {

  static route = {
    navigationBar: {
      title: 'Home',
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._goToScreen('artList')}>
          <Text style={styles.heading}>SF Civic Art</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _goToScreen = name => () => {
    this.props.navigator.push(Router.getRoute(name));
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

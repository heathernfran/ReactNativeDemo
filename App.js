import React from 'react';
import { AppRegistry, StyleSheet, ListView, Text, View } from 'react-native';

import ArtList from './components/ArtList';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Navigation</Text>
        <ArtList />
      </View>
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

import React from 'react';
import { Text, View } from 'react-native';

const Row = (props) => (
  <View>
    <Text>{`${props.title} by ${props.artist}`}</Text>
  </View>
);

export default Row;
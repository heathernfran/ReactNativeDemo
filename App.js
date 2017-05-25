import React from 'react';
import { AppRegistry, StyleSheet, ListView, Text, View } from 'react-native';

import Row from './components/Row';

const jsonUrl = 'https://data.sfgov.org/resource/bm46-8iwk.json';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    
    this.state = {
      dataSource: ds.cloneWithRows({})
    };
  }
  
  componentDidMount() {
    fetch(jsonUrl)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData)
        });
      })
      .catch((error) => {
        console.error(error);
      })
      .done();
  }
    
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Row {...rowData} />}
        />
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
});

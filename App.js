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
    
    // let dataResult = fetch(jsonUrl)
    // // fetch('http://date.jsontest.com/')
    //   .then((response) => response.json())
    //   .then((responseData) => {
    //     return responseData;
    //     // this.setState({
    //     //   dataSource: ds.cloneWithRows(dataResult)
    //     //   // dataSource: this.state.dataSource.cloneWithRows(responseData.artist)
    //     // });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   })
    //   .done();

    
    this.state = {
      // dataSource: {}
      dataSource: ds.cloneWithRows({})
    };
    // this.state = {
    //   artist: '',
    //   location_description: '',
    //   medium: '',
    //   title: '',
    // }
  }
  
  componentDidMount() {
    fetch(jsonUrl)
    // fetch('http://date.jsontest.com/')
      .then((response) => response.json())
      .then((responseData) => {
        // return responseData;
        this.setState({
          // dataSource: ds.cloneWithRows(responseData)
          dataSource: this.state.dataSource.cloneWithRows(responseData)
        });
      })
      .catch((error) => {
        console.error(error);
      })
      .done();
  }
  
  // componentWillMount() {
  //   fetch(jsonUrl)
  // //   // fetch('http://date.jsontest.com/')
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       this.setState({
  //         dataSource: this.state.dataSource.cloneWithRows(responseData.artist)
  //       });
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     })
  //     .done();
  // }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>test here</Text>
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

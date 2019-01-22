import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    
  }

  componentDidMount() {
    
  }
  

  render() {
    
    
    return (
      <View style={styles.mainContainer}>
          <View style={styles.item}>
            <View style={styles.itemImg}></View>
            <View style={styles.itemContent}></View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer:{
    marginTop: 20,
    flex: 1,
    justifyContent: 'flex-start'
  },
  item:{
    height: 150,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    flexDirection: 'row'
  },
  itemImg:{
    flex:2,
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    backgroundColor: "green"
  },
  itemContent:{
    flex:3,
    backgroundColor: "blue"
  }
});

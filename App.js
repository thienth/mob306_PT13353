import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import TestCom from './src/components/TestCom';
export default class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      username: 'thienth',
      email: 'thienth32@gmail.com'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          onChangeText={(text) => this.setState({username: text})}
        />
        <Text>{this.state.username}</Text>
        <Text>{this.state.username}</Text>
        <TestCom></TestCom>
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

import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class TestCom extends React.Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <View>
          <Image 
            style={{width: 150, height: 150}}
            source={{uri: `${this.props.content.img}`}}/>
        <Text>{this.props.content.title}</Text>
      </View>
    );
  }
}

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Name: Tran Huu Thien</Text>
        <Text>Age: 29</Text>
        <Text>Hometown: Nam Dinh</Text>
        <Text>Is Married: Yes</Text>
        <Image
          style={{width: 150, height: 200}}
          source={{uri: 'https://scontent.fhan5-2.fna.fbcdn.net/v/t1.0-9/26167120_1822184234490077_7888484618727660984_n.jpg?_nc_cat=110&_nc_ht=scontent.fhan5-2.fna&oh=154772c10c40570d848b85d43abdc1ef&oe=5CCEF67E'}}
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

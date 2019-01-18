import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import TestCom from './src/components/TestCom';
import firebaseConf from './src/helpers/firebase';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.saveNew = this.saveNew.bind(this);

    this.state = {
      multiple: 1,
      username: 'thienth',
      email: 'thienth32@gmail.com',
      tmpid: "0",
      tmptitle: "",
      tmpimg: "",
      tmpshortDesc: "",
      posts: []
    };
  }

  componentDidMount() {
    var that = this;
    firebaseConf.database().ref('posts/').once('value', function (snapshot) {
        let posts = [];
        snapshot.forEach((child) => {

          let item = {
            key: child.key,
            data: child.val()
          }
          posts.push(item);
        });

        that.setState({posts});
        console.log(that.state.posts);
    });
  }
  

  saveNew(){
    console.log(this.state.tmpid, this.state.tmptitle,
      this.state.tmpimg, this.state.tmpshortDesc);
    let newPost = {
      id: this.state.tmpid,
      title: this.state.tmptitle,
      img: this.state.tmpimg,
      shortDesc: this.state.tmpshortDesc,
    };
    let tmpPosts = [...this.state.posts];
    tmpPosts.push(newPost);
    this.setState({
      posts: tmpPosts,
      tmpid: "0",
      tmptitle: "",
      tmpimg: "",
      tmpshortDesc: "",
    });
  }

  render() {
    
    return (
       <ScrollView style={{marginTop: 50}}>
         <Text>ID bài viết mới</Text>
         <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(txt) => {this.setState({tmpid: txt})}}
          value={`${this.state.tmpid}`}
        />
        <Text>Tiêu đề bài viết </Text>
         <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(txt) => {this.setState({tmptitle: txt})}}
          value={this.state.tmptitle}
        />

        <Text>Ảnh đại diện </Text>
         <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(txt) => {this.setState({tmpimg: txt})}}
          value={this.state.tmpimg}
        />

        <Text>Mô tả ngắn </Text>
         <TextInput
          style={{height: 100, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(txt) => {this.setState({tmpshortDesc: txt})}}
          value={this.state.tmpshortDesc}
          multiline={true}
        />
        <TouchableOpacity
         style={styles.button}
         onPress={this.saveNew}
        >
          <Text>Thêm mới</Text>
        </TouchableOpacity>
          
         {this.state.posts.map(row => 
            <View key={row.key}>
              <Image source={{uri: row.data.image}} style={{width: 100, height: 100}}/>
              <Text>{row.data.name}</Text>
            </View>
          )}
       </ScrollView>
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
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
});

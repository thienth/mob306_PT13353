import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import TestCom from './src/components/TestCom';

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
      posts: [
        {
          id: 1,
          title: "Đề cử top 100 gương mặt đẹp trai nhất châu Á: Nhân vật gây sốc nhất lại không thuộc showbiz Hoa ngữ",
          img: 'http://kenh14cdn.com/zoom/460_289/2019/1/11/djsjsls-15471728449491750074128-crop-1547172849300513623247.jpg',
          shortDesc: "Ngày 10/1, danh sách đề cử top 100 gương mặt đẹp trai nhất Châu Á đã chính thức được tiết lộ với nhiều tên tuổi trong showbiz Hoa ngữ."
        },
        {
          id: 2,
          title: "Góc cây khế: Truyền thông nước ngoài bóng gió chuyện chị em Kendall và Kylie bất hòa chỉ vì của ăn của để",
          img: 'https://kenh14cdn.com/zoom/280_175/2019/1/10/ava-ngang-15471083072941271999927-crop-1547108727298370386490.png',
          shortDesc: "Ngày 10/1, danh sách đề cử top 100 gương mặt đẹp trai nhất Châu Á đã chính thức được tiết lộ với nhiều tên tuổi trong showbiz Hoa ngữ."
        }
      ]
    };
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
        <Text>{this.state.username}</Text>
         {this.state.posts.map(row => 
            <View key={row.id}>
              <Image source={{uri: row.img}} style={{width: 100, height: 100}}/>
              <Text>{row.title}</Text>
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

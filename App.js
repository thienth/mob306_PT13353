import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ListView } from 'react-native';
import TestCom from './src/components/TestCom';
export default class App extends React.Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      multiple: 1,
      username: 'thienth',
      email: 'thienth32@gmail.com',

      posts: ds.cloneWithRows([
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
      ])
    };
  }

  render() {
    
    return (
        <ListView
          dataSource={this.state.posts}
          renderRow={(r) => 
            <View>
              <Image source={{uri: r.img}} style={{width: 100, height: 100}}/>
              <Text>{r.title}</Text>
            </View>
          }
        />
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

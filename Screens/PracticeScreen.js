import React, { Component } from 'react';
import { View, Text,Image,TouchableOpacity,ScrollView, ImageBackground } from 'react-native';
import ListToppic from './Practices/ListToppic';
export default class ExploreScreen extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
        <ImageBackground
      source={require('../images/background4.jpg')}
      style={{width:"100%", height:"100%"}}
      >
      <View
          style={{
            height:200,
            width:"100%",
            //paddingTop:40,
            alignItems:'center',
          }}>
          <Text style={{
              paddingVertical:10,
              fontSize:35,
              //paddingTop:40,
              fontFamily:"Bold",
              color:"#FFF"
          }}>
          luyện đề thi!!!
          </Text>
          <Text style={{
              fontSize:20,
              color:"#FFF"
          }}>
          ĐH CNTT!!!
          </Text>
          <Image
            source={require('../images/unicorn1.png')}
            style={{height:50,width:50}}
        />
        </View>

      <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        height:"100%",
      }}>
          <View style={{
          backgroundColor:'#FFf',
          borderTopLeftRadius:60,
          borderTopRightRadius:60,
          height:1000,
        }}>
          <Text
              style={{
                paddingLeft:25,
                marginTop:18,
                color:'#000',
                fontSize:20,
                }}>
                10 ĐỀ THI MẪU:
          </Text>
            <View>
              <ListToppic
              img={require('../images/unicorn1.png')}
              title="Đề 1: KHỞI ĐỘNG THẾ GIỚI"
              bg="#fdddf3"
              onPress={()=>this.props.navigation.navigate("PracticeTopics", {itemId: 1,data: "Đề 1: KHỞI ĐỘNG THẾ GIỚI"})}
            />
            <ListToppic
              onPress={()=>this.props.navigation.navigate("PracticeTopics", {itemId: 2,data: "Đề 2: KHỞI ĐỘNG THẾ GIỚI"})}
              img={require('../images/unicorn1.png')}
              title="Đề 2: KHỞI ĐỘNG THẾ GIỚI"
              bg="#fdddf3"
            />
            <ListToppic
              onPress={()=>this.props.navigation.navigate("PracticeTopics", {itemId: 3,data: "Đề 3: KHỞI ĐỘNG THẾ GIỚI"} )}
              img={require('../images/unicorn1.png')}
              title="Đề 3: KHỞI ĐỘNG THẾ GIỚI"
              bg="#fdddf3"
            />
            <ListToppic
              onPress={()=>this.props.navigation.navigate("PracticeTopics", {itemId: 4,data: "Đề 4: KHỞI ĐỘNG THẾ GIỚI"})}
              img={require('../images/unicorn1.png')}
              title="Đề 4: KHỞI ĐỘNG THẾ GIỚI"
              bg="#fdddf3"
            />
            <ListToppic
              onPress={()=>this.props.navigation.navigate("PracticeTopics", {itemId: 5,data: "Đề 5: KHỞI ĐỘNG THẾ GIỚI"})}
              img={require('../images/unicorn1.png')}
              title="Đề 5: KHỞI ĐỘNG THẾ GIỚI"
              bg="#fdddf3"
            />
            <ListToppic
              onPress={()=>this.props.navigation.navigate("PracticeTopics", {itemId: 6,data: "Đề 6: KHỞI ĐỘNG THẾ GIỚI"})}
              img={require('../images/unicorn1.png')}
              title="Đề 6: KHỞI ĐỘNG THẾ GIỚI"
              bg="#fdddf3"
            />
            <ListToppic
              onPress={()=>this.props.navigation.navigate("PracticeTopics", {itemId: 7,data: "Đề 7: KHỞI ĐỘNG THẾ GIỚI"})}
              img={require('../images/unicorn1.png')}
              title="Đề 7: KHỞI ĐỘNG THẾ GIỚI"
              bg="#fdddf3"
            />
            <ListToppic
              onPress={()=>this.props.navigation.navigate("PracticeTopics", {itemId: 8,data: "Đề 8: KHỞI ĐỘNG THẾ GIỚI"})}
              img={require('../images/unicorn1.png')}
              title="Đề 8: KHỞI ĐỘNG THẾ GIỚI"
              bg="#fdddf3"
            />
            <ListToppic
              onPress={()=>this.props.navigation.navigate("PracticeTopics", {itemId: 9,data: "Đề 9: KHỞI ĐỘNG THẾ GIỚI"})}
              img={require('../images/unicorn1.png')}
              title="Đề 9: KHỞI ĐỘNG THẾ GIỚI"
              bg="#fdddf3"
            />
            <ListToppic
              onPress={()=>this.props.navigation.navigate("PracticeTopics", {itemId: 10,data: "Đề 10: KHỞI ĐỘNG THẾ GIỚI"})}
              img={require('../images/unicorn1.png')}
              title="Đề 10: KHỞI ĐỘNG THẾ GIỚI"
              bg="#fdddf3"
            />
            </View>
        </View>
      </ScrollView>
        
    </ImageBackground>
        
    );
  }
}

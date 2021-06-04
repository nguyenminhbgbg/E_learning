import React, { Component } from 'react';
import {StatusBar, View,StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body,Content, Right, Button, Icon, Title } from 'native-base';
import { useNavigation } from '@react-navigation/native';

export default class PracticeTopics extends Component {
    
    state = {  }
    render() {
      const {itemId,data} = this.props.route.params
      const idDe = itemId
        return (
    <Container>
    <Header style={{backgroundColor:'#d1a0a7'}}>
        <Left>
        </Left>
        <Body>
            <Title style={{fontSize:23, marginLeft:20}}>LÀM ĐỀ</Title>
        </Body>
      </Header>
      <Content style={{marginTop:5}}>

        <View style={styles.container1}>
        <Text style={styles.text}>Bắt đầu làm đề</Text>
        </View>
        <View style={{marginLeft:10, margin:5, alignContent:'center'}}>
            <Text style={styles.text}>Mã đề: {itemId}</Text>
            <Text style={styles.text}>{data}</Text>
            <Text style={styles.text}>Tổng Số câu: 55</Text>
        </View>
        <View style={styles.container1}>
          <Button rounded light
            style={{width:"40%", alignItems: 'center' }}
            onPress={()=> this.props.navigation.navigate("LamDeChiTiet" , {idDe: idDe } )}
            >
            <Text style={{color:'#efefef', margin:5, marginLeft:"15%", marginRight:'15%'}}>Bắt đầu làm đề</Text>
        </Button>
        </View>
      </Content>
    </Container>
    
        );
    }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefefe'
  },
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#fefefe'
  },
  Btn: {
    justifyContent: 'center',
    backgroundColor:'#efefef',
    alignItems: 'center',
    backgroundColor: '#fefefe'
  },
  text: {
    marginLeft:5,
    flex:1,
    fontSize: 20,
    color: '#000'
  }
});

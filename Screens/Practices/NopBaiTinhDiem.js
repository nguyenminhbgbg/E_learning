import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Header, Left, Body,Content, Right, Button, Icon, Title } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { color } from 'react-native-reanimated';

const NopBaiTinhDiem = () => {
  
  const navigation = useNavigation();

  return (
    <Container>
    <Header style={{backgroundColor:'#d1a0a7'}}>
        <Left>
        </Left>
        <Body>
            <Title style={{fontSize:23, marginLeft:20}}>TÍNH ĐIỂM</Title>
        </Body>
      </Header>
      <Content style={{marginTop:5}}>

        <View style={styles.container1}>
        <Text style={styles.text}>Nộp bài tính điểm hộ t</Text>
        </View>
        <View style={{marginLeft:10, margin:5}}>
            <Text style={styles.text}>Đề:</Text>
            <Text style={styles.text}>Tổng Số câu:</Text>
            <Text style={styles.text}>Số câu đúng:</Text>
            <Text style={styles.text}>Số câu sai:</Text>
            <Text style={styles.text}>Tỷ lệ đúng:</Text>
            <Text style={styles.text}>Nộp bài tính điểm hộ t</Text>
        </View>
        
        <View style={styles.container1}>
          <Button rounded light
            style={{width:"40%", alignItems: 'center' }}
            onPress={()=> navigation.navigate("PracticeExam")}>
            <Text style={{color:'#efefef', margin:5, marginLeft:"15%", marginRight:'15%'}}>Tiếp tục làm đề</Text>
        </Button>
        </View>
      </Content>
    </Container>
    
  );
};

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

export default NopBaiTinhDiem;
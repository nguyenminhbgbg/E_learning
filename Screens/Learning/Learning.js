<<<<<<< HEAD
import React from 'react';
import { View, Text, Button,ScrollView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Learning({ navigation }) {
  return (
    <ScrollView>
<View style={{flex:1}}>
      <Text style={{color:'#000000',fontSize:25, marginTop:10}} >
        Hiện Tại Đơn(Simple Present)
      </Text>
      <Text style={{fontSize:24, margin:3}}>
      1.Định nghĩa thì hiện tại đơn
      </Text>
      <Text style={styles.baseText}>
      Thì hiện tại đơn (Simple Present hoặc Present Simple) là một thì trong ngữ pháp tiếng Anh nói chung. Thì hiện tại đơn diễn tả một hành động hay sự việc mang tính chất chung chung, tổng quát lặp đi lặp lại nhiều lần hoặc một sự thật hiển nhiên hay một hành động diễn ra trong thời gian ở hiện tại.
      </Text>
      <Text style={{fontSize:24, margin:3}}>
      1.Lý thuyết
      </Text>
      <Text style={styles.baseText}>
      (+) Câu khẳng định{"\n"}
{"\n"}
– I am +N/Adj{"\n"}
{"\n"}
– You/We/They + Are{"\n"}
{"\n"}
– She/He/It + is{"\n"}
{"\n"}
Ví dụ:
{"\n"}
I am Phuong{"\n"}
They are my friends{"\n"}
She is beautifull{"\n"}
(-) Câu phủ định{"\n"}
{"\n"}
– I’m not (am not) + N/Adj{"\n"}
{"\n"}
– You/We/They + aren’t{"\n"}
{"\n"}
– She/He/It + isn’t{"\n"}
{"\n"}
Ví dụ:{"\n"}
I’m not tall{"\n"}
We aren’t your parents{"\n"}
He isn’t handsome{"\n"}
(?) Câu hỏi{"\n"}
{"\n"}
– Am I + N/Adj{"\n"}
{"\n"}
Yes, I am{"\n"}
No, I’m not{"\n"}
– Are You/We/They…?{"\n"}
{"\n"}
Yes, I am/They/We are{"\n"}
No, I’m not/They/We aren’t{"\n"}
– Is She/He/It…?{"\n"}
{"\n"}
Yes, She/He/It is{"\n"}
No, She/He/It isn’t{"\n"}
Ví dụ{"\n"}
{"\n"}
Am i a fool?/ No,I’m not{"\n"}
Are you a student? / Yes,I’m{"\n"}
Is She your mother?/ Yes,She is{"\n"}
      </Text>
    </View>
    </ScrollView>
  );
}
export default Learning;

const styles = StyleSheet.create({
  
  baseText: {
    fontFamily: "Cochin",
    marginLeft: 20,
    fontSize: 18,
    
  },

});
=======
import React, {useEffect} from "react";
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { useWindowDimensions,ScrollView } from 'react-native';
import RenderHtml from 'react-native-render-html';

import { useSelector, useDispatch } from 'react-redux';
import { getLessonDetail } from '../../redux/actions';

function Learning({ route, navigation }) {
 
  const { width } = useWindowDimensions();
  const { dataLessonShowNow, lessonDetaiLLyThuyet } = useSelector(state => state.mainReducer);
  const dispatch = useDispatch();

  const fetchLessonDetail = (lessonId) => dispatch(getLessonDetail(lessonId));

  const [lesson, setLesson] = React.useState(null);
  
  useEffect(() => {
    let { lesson } = route.params;
    setLesson(lesson);
    fetchLessonDetail(lesson);
  }, [route.params]);

  return (
    
    <Container>
        <Header style={{backgroundColor:'#d1a0a7'}}>
            <Left>
              <Button 
              onPress={() => ( navigation.goBack())}
              transparent>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Trang học lý thuyết</Title>
            </Body>
            <Right>
              <Button
              onPress={() => ( navigation.openDrawer() )}
              transparent>
                <Icon name='menu' />
              </Button>
            </Right>
        </Header>
        
        <ScrollView>
          {
            lessonDetaiLLyThuyet.noidung_lythuyet?
            <RenderHtml
                contentWidth={width}
                source={{ html: lessonDetaiLLyThuyet.noidung_lythuyet }}
            />: null
          }
            
            {/* <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop:10 }}>
                <Text style={{flex:1,fontSize: 26, color: "#000", alignItems:'center', justifyContent:'center', textAlign:'center'}}>
                    {dataLessonShowNow.ten_lythuyet} 
                </Text> 
                <Text style={{flex:9 , fontSize: 18, marginHorizontal: '3%', color: "#000"}}>
                    {lessonDetaiLLyThuyet.noidung_lythuyet}
                </Text>
            </View> */}
        </ScrollView>
    </Container>
    
  );
}
export default Learning;
>>>>>>> d8039d6 (11/12 commit)

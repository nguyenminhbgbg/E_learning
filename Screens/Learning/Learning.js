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

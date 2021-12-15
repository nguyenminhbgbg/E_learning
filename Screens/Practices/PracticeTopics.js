import React, {useEffect} from "react";
import { View,StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body,Content, Right, Button, Icon, Title } from 'native-base';

function PracticeTopics({ route, navigation }) {

    const [exam, setExam] = React.useState(null);  
    React.useEffect(() => {
      let { exam } = route.params;
      setExam(exam)
      console.log(exam)
    }, [route.params])

    if (exam) {
      return (
        <Container>
          <View>
            <Header style={{ backgroundColor: "#d1a0a7" }}>
              <Left></Left>
              <Body>
                <Title style={{ fontSize: 23, alignItems:'center'}}>LÀM ĐỀ</Title>
              </Body>
            </Header>
            <View style={{}}>
              <Text style={styles.text}>CHI TIẾT ĐỀ THI</Text>
              <Text style={styles.text}>Mã đề: {exam.id}</Text>
              <Text style={styles.text}>Tên Đề: {exam.name}</Text>
              <Text style={styles.text}>Gồm: 9 Part Reading, 5 Part Listening</Text>
              <Text style={styles.text}>9 Part Reading: 55</Text>
              <Text style={styles.text}>5 Part Listening: 25</Text>
            </View>
            <View >
              <TouchableOpacity 
                onPress={() => navigation.navigate("LamDeChiTiet", {
                  idDe: exam.id,
                  loadTime: 5400, 
              })}
                style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Bắt đầu</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Container>
      );
  } else {
      return (<></>)
  }

    
}
export default PracticeTopics;

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
    marginLeft:'3%',
    fontSize: 20,
    color: '#000'
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignContent:'center',
    alignItems:'center',
    marginHorizontal:'10%'
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }

});

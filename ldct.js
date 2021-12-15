import {
  Container,
  Header,
  Left,
  Body,
  Content,
  Button,
  Title,
} from "native-base";
import React, { Component, useEffect } from 'react';
import { StyleSheet, View, BackHandler, Text, TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { useSelector, useDispatch } from 'react-redux';
import { clearPointAllPart, seeAllAnswer  } from '../../redux/actions';

export default function NopBaiTinhDiem({ navigation }) {

  const dispatch = useDispatch();
  const ClearPointAllPart = () => dispatch(clearPointAllPart());
  const SeeAllAnswer = () => dispatch(seeAllAnswer());

  const {pointPart1 ,pointPart2 ,pointPart3p1, pointPart3p2, pointPart4, pointPart5, pointPart6, 
    pointPart7, pointPart8, pointPart9, pointPart10, pointPart11, pointPart12, pointPart13 
   } = useSelector(state => state.mainReducer);

   useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
    return () => backHandler.remove()
  }, [pointPart1 ,pointPart2 ,pointPart3p1, pointPart3p2, pointPart4, pointPart5, pointPart6, 
    pointPart7, pointPart8, pointPart9, pointPart10, pointPart11, pointPart12, pointPart13 ])

  useEffect(() => {
    setTableHead(['Part', 'Số câu hỏi', 'Đáp án đúng'])
    setTableData([
      ['1', '5', pointPart1],
      ['2', '5', pointPart2],
      ['3-1', '5', pointPart3p1],
      ['3-2', '5', pointPart3p2],
      ['4', '7', pointPart4],
      ['5', '8', pointPart5],
      ['6', '5', pointPart6],
      ['7', '10', pointPart7],
      ['8', '5', pointPart8],
      ['9', '5', pointPart9],
      ['10', '5', pointPart10],
      ['11', '5', pointPart11],
      ['12', '5', pointPart12],
      ['13', '5', pointPart13],
    ])
  }, [])
  const [tableHead, setTableHead] = React.useState([]);
  const [tableData, setTableData] = React.useState([]);
  
  return (
    <Container>
      <Header style={{ backgroundColor: "#d1a0a7" }}>
        <Left></Left>
        <Body>
          <Title style={{ fontSize: 23, marginLeft: 20 }}>TÍNH ĐIỂM </Title>
        </Body>
      </Header>
      <Content style={{ marginTop: 5 }}>
        <View style={styles.container1}>
          <Text style={styles.text}>Chi tiết kết quả bài làm:</Text>
        </View>
        <Table style={{marginHorizontal:20, marginVertical:20, alignContent:'center'}} borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={tableHead} style={styles.head} textStyle={styles.textt}/>
          <Rows data={tableData} textStyle={styles.textt}/>
        </Table>
        <View style={styles.container1}>
          <TouchableOpacity 
            onPress={() => (SeeAllAnswer(), navigation.navigate("LamDeChiTiet"))}
            style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Xem Đáp Án</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => (ClearPointAllPart(), navigation.navigate("HomeScreen"))}
            style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Kết Thúc</Text>
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container1: {
    flexDirection: "row",
  },
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: "#fefefe",
  },
  Btn: {
    flex: 1, 
    alignItems: "center",
    marginHorizontal: 15,
    color:"#fff"
  },
  text: {
    marginLeft: 5,
    flex: 1,
    fontSize: 20,
    color: "#000",
  },
  head: { 
    height: 40, 
    backgroundColor: '#f1f8ff',

  },
  textt: { 
    margin: 6,
    textAlign:'center'

  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignContent:'center',
    alignItems:'center',
    flex:1,
    marginHorizontal:'5%'
  },
  appButtonText: {
    flex:1,
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});

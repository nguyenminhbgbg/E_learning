import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Content,
  Button,
  Title,
} from "native-base";

import { useSelector, useDispatch } from 'react-redux';
import { clearPointAllPart  } from '../../redux/actions';

export default function NopBaiTinhDiem({ navigation }) {

  const dispatch = useDispatch();
  const ClearPointAllPart = () => dispatch(clearPointAllPart());

  const {pointPart1 ,pointPart2 ,pointPart3p1, pointPart3p2, pointPart4, pointPart5, pointPart6, 
    pointPart7, pointPart8, pointPart9, pointPart10, pointPart11, pointPart12, pointPart13 
   } = useSelector(state => state.mainReducer);

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
          <Text style={styles.text}>Nộp bài tính điểm hộ t</Text>
        </View>
        <View style={{ marginLeft: 10, margin: 5 }}>
          <Text style={styles.text}>Past 1: {pointPart1}/5</Text>
          <Text style={styles.text}>Past 2: {pointPart2}/5 </Text>
          <Text style={styles.text}>Past 3p1: {pointPart3p1}/5 </Text>
          <Text style={styles.text}>Past 3p2: {pointPart3p2}/5 </Text>
          <Text style={styles.text}>Past 4: {pointPart4}/7 </Text>
          <Text style={styles.text}>Past 5: {pointPart5}/8 </Text>
          <Text style={styles.text}>Past 6: {pointPart6}/5 </Text>
          <Text style={styles.text}>Past 7: {pointPart7}/10 </Text>
          <Text style={styles.text}>Past 8: {pointPart8}/5 </Text>
          <Text style={styles.text}>Past 9: {pointPart9}/5 </Text>
          <Text style={styles.text}>Past 10: {pointPart10}/5 </Text>
          <Text style={styles.text}>Past 11: {pointPart11}/5 </Text>
          <Text style={styles.text}>Past 12: {pointPart12}/5 </Text>
          <Text style={styles.text}>Past 13: {pointPart13}/5 </Text>
        </View>

        <View style={styles.container1}>
          <Button
            rounded
            light
            style={{ width: "40%", alignItems: "center" }}
            onPress={() => (ClearPointAllPart(), navigation.navigate("HomeScreen"))}
          >
            <Text
              style={{
                color: "#efefef",
                margin: 5,
                marginLeft: "15%",
                marginRight: "15%",
              }}
            >
              Tiếp tục làm đề
            </Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#fefefe",
  },
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: "#fefefe",
  },
  Btn: {
    justifyContent: "center",
    backgroundColor: "#efefef",
    alignItems: "center",
    backgroundColor: "#fefefe",
  },
  text: {
    marginLeft: 5,
    flex: 1,
    fontSize: 20,
    color: "#000",
  },
});

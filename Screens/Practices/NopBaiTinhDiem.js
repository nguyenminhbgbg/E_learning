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
<<<<<<< HEAD
import AsyncStorage from "@react-native-community/async-storage";

export default function NopBaiTinhDiem({ navigation }) {
  const [past1, setPast1] = useState("");
  const [past2, setPast2] = useState("");
  const [past3, setPast3] = useState("");
  const [past3p2, setPast3p2] = useState("");
  const [past4, setPast4] = useState("");
  const [past5, setPast5] = useState("");
  const [past6, setPast6] = useState("");
  const [past7, setPast7] = useState("");
  const [past8, setPast8] = useState("");
  const [past9, setPast9] = useState("");
  const [past10, setPast10] = useState("");
  const [past11, setPast11] = useState("");
  const [past12, setPast12] = useState("");
  const [past13, setPast13] = useState("");
  
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    // get point past 1
    try {
      AsyncStorage.getItem("pointPast1").then((value) => {
        if (value != null) {
          setPast1(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
    // get point past 2
    try {
      AsyncStorage.getItem("pointPast2").then((value) => {
        if (value != null) {
          setPast2(value);
        }
      });
    } catch (error) {
      console.log(error);
    }

    // get point past 3p1
    try {
      AsyncStorage.getItem("pointPast3").then((value) => {
        if (value != null) {
          setPast3(value);
        }
      });
    } catch (error) {
      console.log(error);
    }

    // get point past 3p2
    try {
      AsyncStorage.getItem("pointPast3p2").then((value) => {
        if (value != null) {
          setPast3p2(value);
        }
      });
    } catch (error) {
      console.log(error);
      alert('wtf')
    }

    // get point past 4
    try {
      AsyncStorage.getItem("pointPast4").then((value) => {
        if (value != null) {
          setPast4(value);
        }
      });
    } catch (error) {
      console.log(error);
    }

    // get point past 5
    try {
      AsyncStorage.getItem("pointPast5").then((value) => {
        if (value != null) {
          setPast5(value);
        }
      });
    } catch (error) {
      console.log(error);
    }

    // get point past 6
    try {
      AsyncStorage.getItem("pointPast6").then((value) => {
        if (value != null) {
          setPast6(value);
        }
      });
    } catch (error) {
      console.log(error);
    }

    // get point past 7
    try {
      AsyncStorage.getItem("pointPast7").then((value) => {
        if (value != null) {
          setPast7(value);
        }
      });
    } catch (error) {
      console.log(error);
    }

    // get point past 8
    try {
      AsyncStorage.getItem("pointPast8").then((value) => {
        if (value != null) {
          setPast8(value);
        }
      });
    } catch (error) {
      console.log(error);
    }

    // get point past 9
    try {
      AsyncStorage.getItem("pointPast9").then((value) => {
        if (value != null) {
          setPast9(value);
        }
      });
    } catch (error) {
      console.log(error);
    }

    // get point past 10
    try {
      AsyncStorage.getItem("pointPast10").then((value) => {
        if (value != null) {
          setPast10(value);
        }
      });
    } catch (error) {
      console.log(error);
    }

    // get point past 11
    try {
      AsyncStorage.getItem("pointPast11").then((value) => {
        if (value != null) {
          setPast11(value);
        }
      });
    } catch (error) {
      console.log(error);
    }

    // get point past 12
    try {
      AsyncStorage.getItem("pointPast12").then((value) => {
        if (value != null) {
          setPast12(value);
        }
      });
    } catch (error) {
      console.log(error);
    }

    // get point past 13
    try {
      AsyncStorage.getItem("pointPast13").then((value) => {
        if (value != null) {
          setPast13(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate("PracticeExam");
      console.log('done!!')
    } catch (error) {
      console.log(error);
    }
  };
=======

import { useSelector, useDispatch } from 'react-redux';
import { clearPointAllPart  } from '../../redux/actions';

export default function NopBaiTinhDiem({ navigation }) {

  const dispatch = useDispatch();
  const ClearPointAllPart = () => dispatch(clearPointAllPart());

  const {pointPart1 ,pointPart2 ,pointPart3p1, pointPart3p2, pointPart4, pointPart5, pointPart6, 
    pointPart7, pointPart8, pointPart9, pointPart10, pointPart11, pointPart12, pointPart13 
   } = useSelector(state => state.mainReducer);
>>>>>>> d8039d6 (11/12 commit)

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
<<<<<<< HEAD
          <Text style={styles.text}>Past 1: {past1}/5</Text>
          <Text style={styles.text}>Past 2: {past2}/5 </Text>
          <Text style={styles.text}>Past 3p1: {past3}/5 </Text>
          <Text style={styles.text}>Past 3p2: {past3p2}/5 </Text>
          <Text style={styles.text}>Past 4: {past4}/7 </Text>
          <Text style={styles.text}>Past 5: {past5}/8 </Text>
          <Text style={styles.text}>Past 6: {past6}/5 </Text>
          <Text style={styles.text}>Past 7: {past7}/10 </Text>
          <Text style={styles.text}>Past 8: {past8}/5 </Text>
          <Text style={styles.text}>Past 9: {past9}/5 </Text>
          <Text style={styles.text}>Past 10: {past10}/5 </Text>
          <Text style={styles.text}>Past 11: {past11}/5 </Text>
          <Text style={styles.text}>Past 12: {past12}/5 </Text>
          <Text style={styles.text}>Past 13: {past13}/5 </Text>
=======
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
>>>>>>> d8039d6 (11/12 commit)
        </View>

        <View style={styles.container1}>
          <Button
            rounded
            light
            style={{ width: "40%", alignItems: "center" }}
<<<<<<< HEAD
            onPress={removeData}
=======
            onPress={() => (ClearPointAllPart(), navigation.navigate("HomeScreen"))}
>>>>>>> d8039d6 (11/12 commit)
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

<<<<<<< HEAD
import { Row } from "native-base";
import React, { Component } from "react";
import {
  ActivityIndicator,
  ScrollView,
  TextInput,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import FitImage from "react-native-fit-image";
import AsyncStorage from "@react-native-community/async-storage";

const Part13URL = "http://nikaws.cf/getpart13/";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      listPartDocumentArray: [],
      document: [],
      answers: [],
      isLoading: true,
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",

      pointPast13: 0,
    };
  }
  handelValue1 = (text) => {
    this.setState({ value1: text });
  };
  handelValue2 = (text) => {
    this.setState({ value2: text });
  };
  handleValue3 = (text) => {
    this.setState({ value3: text });
  };
  handleValue4 = (text) => {
    this.setState({ value4: text });
  };
  handleValue5 = (text) => {
    this.setState({ value5: text });
  };

  componentDidMount() {
    fetch(Part13URL + this.props.maDe)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.questions });
        this.setState({ listPartDocumentArray: json.listPartDocumentArray });
        this.setState({ document: json.document });
        this.setState({ answers: json.answers });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }
  componentDidUpdate() {
    this.checkAnswers();
  }
  checkAnswers = async () => {
    var result = 0;

    var x = [];
    var li = this.state.data.forEach((ques) => {
=======
import React, { useState, useEffect} from 'react';
import { Container, Card, CardItem,CheckBox} from 'native-base';
import { ScrollView,FlatList,TextInput, View, Text, StyleSheet } from 'react-native';
import FitImage from "react-native-fit-image";

import { useSelector, useDispatch } from 'react-redux';
import { savePointP13 , changeCleanP13 } from '../../../redux/actions';

const Part13 = ({ route, navigation }) =>{

  const dispatch = useDispatch();
  const SavePointP13 = (point) => dispatch(savePointP13(point));
  const ChangeCleanP13 = () => dispatch(changeCleanP13());
  useEffect(() => {
    if(cleanAnswerP13 == true){
      ChangeCleanP13();
    }
  }, [cleanAnswerP13]);

  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [value3, setValue3] = React.useState("");
  const [value4, setValue4] = React.useState("");
  const [value5, setValue5] = React.useState("");

  const handelValue1 = (text) => {
      setValue1(text)
  }
  const handelValue2 = (text) => {
      setValue2(text)
  };
  const handelValue3 = (text) => {
      setValue3(text)
  };
  const handelValue4 = (text) => {
      setValue4(text)
  };
  const handelValue5 = (text) => {
      setValue5(text)
  };

  useEffect(() => {
    if(value1!= "" || value2 !="" || value3!= "" || value4 != "" || value5 != "" ){
      checkAnswers();
    }
  }, [part13, value1, value2, value3, value4, value5 ]);

  const checkAnswers = () => {
    var result = 0;

    var x = [];
    var li = part13.questions.forEach((ques) => {
>>>>>>> d8039d6 (11/12 commit)
      x.push(ques.id);
    });
    function Key(arr, b) {
      var bx = b.filter(function (an) {
        return an.cauhoi_id == arr;
      });
      return bx;
    }

    function checkAnswer(answer, ListAns) {
      var dat = ListAns.forEach(function (Li) {
<<<<<<< HEAD
        if (answer == Li.noidung_pa) {
=======
        if (answer == Li.noidung_dapan.toUpperCase()) {
>>>>>>> d8039d6 (11/12 commit)
          result++;
        }
      });
      return dat;
    }

<<<<<<< HEAD
    checkAnswer(this.state.value1, Key(x[0], this.state.answers));
    checkAnswer(this.state.value2, Key(x[1], this.state.answers));
    checkAnswer(this.state.value3, Key(x[2], this.state.answers));
    checkAnswer(this.state.value4, Key(x[3], this.state.answers));
    checkAnswer(this.state.value5, Key(x[4], this.state.answers));

    this.state.pointPast13 = result;

    try {
      await AsyncStorage.setItem("pointPast13", this.state.pointPast13 + "");
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { data, document, listPartDocumentArray, answers, isLoading } =
      this.state;
    return (
      <ScrollView style={{ marginBottom: 20 }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View>
            {/* img title past */}
            <View>
              <FlatList
                data={listPartDocumentArray}
                keyExtractor={({ id1 }, index1) => id1}
                renderItem={({ item }) => (
                  <View style={{ marginBottom: 5, marginTop: 5 }}>
                    <FitImage
                      indicator={false} // disable loading indicator
                      indicatorColor="white" // react native colors or color codes like #919191
                      indicatorSize="integer" // (small | large) or integer
                      style={styles.fitImage}
                      source={{ uri: "http://nikaws.cf/" + item.url }}
                    />
                  </View>
                )}
              />
            </View>
          </View>
        )}
        <View style={{ flex: 1, alignItems: "center" }}>
=======
    checkAnswer(value1.toUpperCase(), Key(x[0], part13.answers));
    checkAnswer(value2.toUpperCase(), Key(x[1], part13.answers));
    checkAnswer(value3.toUpperCase(), Key(x[2], part13.answers));
    checkAnswer(value4.toUpperCase(), Key(x[3], part13.answers));
    checkAnswer(value5.toUpperCase(), Key(x[4], part13.answers));
    SavePointP13(result);
    
  };

  const {part13 , cleanAnswerP13 } = useSelector(state => state.mainReducer);

  return (
    <Container>
        <ScrollView>
          <Card>
          <FitImage
            indicator={false} // disable loading indicator
            indicatorColor="white" // react native colors or color codes like #919191
            indicatorSize="integer" // (small | large) or integer
            style={styles.fitImage}
            source={{
              uri:`https://nikaws.cf/${
                part13.listPartDocumentArray[1].url
              }`
          }}/>
          </Card>
          <View style={{ flex: 1, alignItems: "center", marginBottom: 18 }}>
>>>>>>> d8039d6 (11/12 commit)
          <Text style={{ fontSize: 20, color: "blue" }}>Điền đáp án:</Text>
          <View
            style={{
              flexDirection: "column",
            }}
          >
            <View style={{ flexDirection: "row", marginBottom: 5 }}>
              <View style={{ margin: 5 }}>
                <Text style={{ marginHorizontal: 10 }}>Câu 21</Text>
              </View>
              <TextInput
                style={styles.inPutAnsew}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
<<<<<<< HEAD
                onChangeText={this.handelValue1}
=======
                onChangeText={handelValue1}
                value={cleanAnswerP13 ? "" : null}
>>>>>>> d8039d6 (11/12 commit)
              />
            </View>
            <View style={{ flexDirection: "row", marginBottom: 5 }}>
              <View style={{ margin: 5 }}>
                <Text style={{ marginHorizontal: 10 }}>Câu 22</Text>
              </View>
              <TextInput
                style={styles.inPutAnsew}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
<<<<<<< HEAD
                onChangeText={this.handelValue2}
=======
                onChangeText={handelValue2}
                value={cleanAnswerP13 ? "" : null}
>>>>>>> d8039d6 (11/12 commit)
              />
            </View>
            <View style={{ flexDirection: "row", marginBottom: 5 }}>
              <View style={{ margin: 5 }}>
                <Text style={{ marginHorizontal: 10 }}>Câu 23</Text>
              </View>
              <TextInput
                style={styles.inPutAnsew}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
<<<<<<< HEAD
                onChangeText={this.handleValue3}
=======
                onChangeText={handelValue3}
                value={cleanAnswerP13 ? "" : null}
>>>>>>> d8039d6 (11/12 commit)
              />
            </View>
            <View style={{ flexDirection: "row", marginBottom: 5 }}>
              <View style={{ margin: 5 }}>
                <Text style={{ marginHorizontal: 10 }}>Câu 24</Text>
              </View>
              <TextInput
                style={styles.inPutAnsew}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
<<<<<<< HEAD
                onChangeText={this.handleValue4}
=======
                onChangeText={handelValue4}
                value={cleanAnswerP13 ? "" : null}
>>>>>>> d8039d6 (11/12 commit)
              />
            </View>
            <View style={{ flexDirection: "row", marginBottom: 5 }}>
              <View style={{ margin: 5 }}>
                <Text style={{ marginHorizontal: 10 }}>Câu 25</Text>
              </View>
              <TextInput
                style={styles.inPutAnsew}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
<<<<<<< HEAD
                onChangeText={this.handleValue5}
=======
                onChangeText={handelValue5}
                value={cleanAnswerP13 ? "" : null}
>>>>>>> d8039d6 (11/12 commit)
              />
            </View>
          </View>
        </View>
<<<<<<< HEAD
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 64,
    height: 64,
  },
  fitImage: {
    borderRadius: 5,
  },
  flexRow: {
    flexDirection: "row",
  },
  flexCol: {
    flexDirection: "column",
  },
  fitImageWithSize: {
    height: 50,
    width: "80%",
    marginBottom: 3,
=======
        </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
>>>>>>> d8039d6 (11/12 commit)
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  textQestion: {
    color: "#000",
    fontSize: 16,
    margin: 5,
    textAlign: "justify",
    marginLeft: 10,
  },
  inPutAnsew: {
    textAlign: "center",
    height: 40,
    minWidth: "70%",
    marginHorizontal: 3,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
  },
});
<<<<<<< HEAD
=======

export default Part13;
>>>>>>> d8039d6 (11/12 commit)

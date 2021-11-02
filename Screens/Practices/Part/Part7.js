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

const Part7URL = "http://nikaws.cf/getpart7/";
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
      value6: "",
      value7: "",
      value8: "",
      value9: "",
      value10: "",

      pointPast7: 0,
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
  handleValue6 = (text) => {
    this.setState({ value6: text });
  };
  handleValue7 = (text) => {
    this.setState({ value7: text });
  };
  handleValue8 = (text) => {
    this.setState({ value8: text });
  };
  handleValue9 = (text) => {
    this.setState({ value9: text });
  };
  handleValue10 = (text) => {
    this.setState({ value10: text });
  };
  checkAnswers = async () => {
    var result = 0;

    var x = [];
    var li = this.state.data.forEach((ques) => {
=======
import React, { useState, useEffect} from 'react';
import { Container, Card, CardItem,CheckBox} from 'native-base';
import { ScrollView,TextInput, View, Text, StyleSheet } from 'react-native';
import FitImage from "react-native-fit-image";
import { savePointP7 ,changeCleanP7 } from '../../../redux/actions';

import { useSelector, useDispatch } from 'react-redux';

const Part7 = ({ route, navigation }) =>{

  const dispatch = useDispatch();
  const SavePointP7 = (point) => dispatch(savePointP7(point));
  const ChangeCleanP7 = () => dispatch(changeCleanP7());

  useEffect(() => {
    if(cleanAnswerP7 == true){
      ChangeCleanP7();
    }
  }, [cleanAnswerP7]);

  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [value3, setValue3] = React.useState("");
  const [value4, setValue4] = React.useState("");
  const [value5, setValue5] = React.useState("");
  const [value6, setValue6] = React.useState("");
  const [value7, setValue7] = React.useState("");
  const [value8, setValue8] = React.useState("");
  const [value9, setValue9] = React.useState("");
  const [value10, setValue10] = React.useState("");

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
  const handelValue6 = (text) => {
      setValue6(text)
  };
  const handelValue7 = (text) => {
    setValue7(text)
  };
  const handelValue8 = (text) => {
    setValue8(text)
  };
  const handelValue9 = (text) => {
    setValue9(text)
  };
  const handelValue10 = (text) => {
    setValue10(text)
  };


  useEffect(() => {
    if(value1!= "" || value2 !="" || value3!= "" || value4 != "" || value5 != "" || value6 != "" || value7 != ""
    || value8 != "" || value9 != "" || value10 != "" ){
      checkAnswers();
    }
  }, [part7, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10]);

  const checkAnswers = () => {
    var result = 0;

    var x = [];
    var li = part7.questions.forEach((ques) => {
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
    checkAnswer(this.state.value6, Key(x[5], this.state.answers));
    checkAnswer(this.state.value7, Key(x[6], this.state.answers));
    checkAnswer(this.state.value8, Key(x[7], this.state.answers));
    checkAnswer(this.state.value9, Key(x[8], this.state.answers));
    checkAnswer(this.state.value10, Key(x[9], this.state.answers));

    this.state.pointPast7 = result;

    try {
      await AsyncStorage.setItem("pointPast7", this.state.pointPast7 + "");
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    fetch(Part7URL + this.props.maDe)
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
    checkAnswer(value1.toUpperCase(), Key(x[0], part7.answers));
    checkAnswer(value2.toUpperCase(), Key(x[1], part7.answers));
    checkAnswer(value3.toUpperCase(), Key(x[2], part7.answers));
    checkAnswer(value4.toUpperCase(), Key(x[3], part7.answers));
    checkAnswer(value5.toUpperCase(), Key(x[4], part7.answers));
    checkAnswer(value6.toUpperCase(), Key(x[5], part7.answers));
    checkAnswer(value7.toUpperCase(), Key(x[6], part7.answers));
    checkAnswer(value8.toUpperCase(), Key(x[7], part7.answers));
    checkAnswer(value9.toUpperCase(), Key(x[8], part7.answers));
    checkAnswer(value10.toUpperCase(), Key(x[9], part7.answers));

    SavePointP7(result);
  };

  const {part7, cleanAnswerP7 } = useSelector(state => state.mainReducer);

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
                part7.listPartDocumentArray[0].url
              }`
          }}/>
          </Card>
          <View style={{ flex: 1, alignItems: "center" }}>
>>>>>>> d8039d6 (11/12 commit)
          <Text style={{ fontSize: 20, color: "blue" }}>Điền đáp án:</Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
<<<<<<< HEAD
=======
              marginBottom:18
>>>>>>> d8039d6 (11/12 commit)
            }}
          >
            <View
              style={{
                flexDirection: "column",
                width: "50%",
              }}
            >
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 41</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
<<<<<<< HEAD
                  onChangeText={this.handelValue1}
=======
                  onChangeText={handelValue1}
                  value={cleanAnswerP7 ? "" : null}
>>>>>>> d8039d6 (11/12 commit)
                />
              </View>
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 42</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
<<<<<<< HEAD
                  onChangeText={this.handelValue2}
=======
                  onChangeText={handelValue2}
                  value={cleanAnswerP7 ? "" : null}
>>>>>>> d8039d6 (11/12 commit)
                />
              </View>
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 43</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
<<<<<<< HEAD
                  onChangeText={this.handleValue3}
=======
                  onChangeText={handelValue3}
                  value={cleanAnswerP7 ? "" : null}
>>>>>>> d8039d6 (11/12 commit)
                />
              </View>
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 44</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
<<<<<<< HEAD
                  onChangeText={this.handleValue4}
=======
                  onChangeText={handelValue4}
                  value={cleanAnswerP7 ? "" : null}
>>>>>>> d8039d6 (11/12 commit)
                />
              </View>
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 45</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
<<<<<<< HEAD
                  onChangeText={this.handleValue5}
=======
                  onChangeText={handelValue5}
                  value={cleanAnswerP7 ? "" : null}
>>>>>>> d8039d6 (11/12 commit)
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "column",
                width: "50%",
              }}
            >
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 46</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
<<<<<<< HEAD
                  onChangeText={this.handleValue6}
=======
                  onChangeText={handelValue6}
                  value={cleanAnswerP7 ? "" : null}
>>>>>>> d8039d6 (11/12 commit)
                />
              </View>
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 47</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
<<<<<<< HEAD
                  onChangeText={this.handleValue7}
=======
                  onChangeText={handelValue7}
                  value={cleanAnswerP7 ? "" : null}
>>>>>>> d8039d6 (11/12 commit)
                />
              </View>
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 47</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
<<<<<<< HEAD
                  onChangeText={this.handleValue8}
=======
                  onChangeText={handelValue8}
                  value={cleanAnswerP7 ? "" : null}
>>>>>>> d8039d6 (11/12 commit)
                />
              </View>
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 49</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
<<<<<<< HEAD
                  onChangeText={this.handleValue9}
=======
                  onChangeText={handelValue9}
                  value={cleanAnswerP7 ? "" : null}
>>>>>>> d8039d6 (11/12 commit)
                />
              </View>
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 50</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
<<<<<<< HEAD
                  onChangeText={this.handleValue10}
=======
                  onChangeText={handelValue10}
                  value={cleanAnswerP7 ? "" : null}
>>>>>>> d8039d6 (11/12 commit)
                />
              </View>
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
<<<<<<< HEAD
    maxWidth: "85%",
=======
    minWidth: "70%",
>>>>>>> d8039d6 (11/12 commit)
    marginHorizontal: 3,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
  },
});
<<<<<<< HEAD
=======

export default Part7;
>>>>>>> d8039d6 (11/12 commit)

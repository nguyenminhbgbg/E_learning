<<<<<<< HEAD
import React, { Component } from "react";
=======
import React, { useEffect } from "react";
>>>>>>> d8039d6 (11/12 commit)
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  TextInput,
  FlatList,
  StyleSheet,
  Text,
  View,
<<<<<<< HEAD
} from "react-native";

import FitImage from "react-native-fit-image";
import AsyncStorage from "@react-native-community/async-storage";

const Part1URL = "http://nikaws.cf/getpart1/";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      listPartDocumentArray: [],
      document: [],
      answers: [],
      isLoading: true,

      tmp_answer: "",
      office_answer: "",

      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",

      pointPast1: 0,
    };
  }

  handelValue1 = (text) => {
    let tmp_variable = this.state.tmp_answer[text.toUpperCase()];
    this.setState({ value1: tmp_variable });
  };
  handelValue2 = (text) => {
    let tmp_variable = this.state.tmp_answer[text.toUpperCase()];
    this.setState({ value2: tmp_variable });
  };
  handelValue3 = (text) => {
    let tmp_variable = this.state.tmp_answer[text.toUpperCase()];
    this.setState({ value3: tmp_variable });
  };
  handelValue4 = (text) => {
    let tmp_variable = this.state.tmp_answer[text.toUpperCase()];
    this.setState({ value4: tmp_variable });
  };
  handelValue5 = (text) => {
    let tmp_variable = this.state.tmp_answer[text.toUpperCase()];
    this.setState({ value5: tmp_variable });
  };

  componentDidMount() {
    fetch(Part1URL + this.props.maDe)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.questions });
        this.setState({ listPartDocumentArray: json.listPartDocumentArray });
        this.setState({ document: json.document });
        this.setState({ answers: json.answers });

        let tmp_answer = [];
        let office_answer = [];
        let tmp_char = 65;
        let tmp_index = 0;
        // String.fromCharCode(65)
        json.answers.forEach((element) => {
          tmp_answer[String.fromCharCode(tmp_char)] = element.tailieu_id;
          if (element.dapan === 1) {
            office_answer[tmp_index] = element.tailieu_id;
            ++tmp_index;
          }
          ++tmp_char;
          // console.log(element.tailieu_id);
        });
        this.setState({
          tmp_answer: tmp_answer,
          office_answer: office_answer,
        });
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
    // console.log(this.state.tmp_answer);
    // console.log(this.state.office_answer);
    // console.log("Value 0 is " + this.state.value1);
    // console.log("Value 1 is " + this.state.value2);
    // console.log("Value 2 is " + this.state.value3);
    // console.log("Value 3 is " + this.state.value4);
    // console.log("Value 4 is " + this.state.value5);
    let trueValue = 0;

    if (this.state.value1 === this.state.office_answer[0]) {
      ++trueValue;
    }
    if (this.state.value2 === this.state.office_answer[1]) {
      ++trueValue;
    }
    if (this.state.value3 === this.state.office_answer[2]) {
      ++trueValue;
    }
    if (this.state.value4 === this.state.office_answer[3]) {
      ++trueValue;
    }
    if (this.state.value5 === this.state.office_answer[4]) {
      ++trueValue;
    }
    this.state.pointPast1 = trueValue;
    try {
      await AsyncStorage.setItem("pointPast1", this.state.pointPast1 + "");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { data, document, listPartDocumentArray, answers, isLoading } =
      this.state;
    return (
      <SafeAreaView  style={{ marginBottom: 20 }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <ScrollView >
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
=======
} from "react-native";  
import FitImage from "react-native-fit-image";

import { useSelector, useDispatch } from 'react-redux';
import { savePointP1, changeCleanP1  } from '../../../redux/actions';

const Part1 = ({ navigation }) => {
  
    const {part1,listP1 , quesP1, ansP1,cleanAnswerP1 } = useSelector(state => state.mainReducer);
    const dispatch = useDispatch();
    const SavePointP1 = (point) => dispatch(savePointP1(point));
    const ChangeCleanP1 = () => dispatch(changeCleanP1());

    const [listPartDocumentArray, setListPartDocumentArray] = React.useState([]);
    const [questions, setQuestions] = React.useState([]);
    const [answers, setAnswers] = React.useState([]);

    const [office_answer, SetOffice_answer] = React.useState("");

    const [value1, setValue1] = React.useState("");
    const [value2, setValue2] = React.useState("");
    const [value3, setValue3] = React.useState("");
    const [value4, setValue4] = React.useState("");
    const [value5, setValue5] = React.useState("");

    useEffect(() => {
      setListPartDocumentArray(listP1);
      setQuestions(quesP1);
      setAnswers(ansP1);
      if(cleanAnswerP1 == true){
        ChangeCleanP1();
      }
    }, [part1, cleanAnswerP1]);

      useEffect(() => {
        let office_answer = [];
        let tmp_char = 65;

        // String.fromCharCode(65)
        answers.forEach((element) => {
          if (element.dapan === 1) {
            office_answer.push(String.fromCharCode(tmp_char));
          }
          ++tmp_char;
        });
        SetOffice_answer(office_answer);
        if(value1!= "" || value2 !="" || value3!= "" || value4 != "" || value5 != "" ){
          checkAnswers();
        }
      }, [value1,value2,value3,value4,value5]);

      const checkAnswers = () => {

        let trueValue = 0;
    
        if (value1.toUpperCase() === office_answer[0]) {
          ++trueValue;
        }
        if (value2.toUpperCase() === office_answer[1]) {
          ++trueValue;
        }
        if (value3.toUpperCase() === office_answer[2]) {
          ++trueValue;
        }
        if (value4.toUpperCase() === office_answer[3]) {
          ++trueValue;
        }
        if (value5.toUpperCase() === office_answer[4]) {
          ++trueValue;
        }
        SavePointP1(trueValue);

      };

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

    return (
      <SafeAreaView  style={{ marginBottom: 20 }}>
        <ScrollView >
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
                    style={styles.fitImage}
                    source={{ uri: "http://nikaws.cf/" + item.url }}
                  />
                </View>
              )}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            {/* List questionsP1 left */}
            <View
              style={{
                flexDirection: "column",
                maxWidth: "45%",
                minWidth: "44%",
              }}
            >
              <FlatList
                data={questions}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                  <View>
                    <Text style={styles.textQestion}>
                      {" "}
                      {item.noidung_cauhoi}
                    </Text>
                  </View>
                )}
              />
            </View>
            {/* List documentP1 right*/}
            <View
              style={{
                maxWidth: "50%",
                minWidth: "49%",
              }}
            >
              <FlatList
                data={ answers }
                keyExtractor={({ id1 }, index1) => id1}
                renderItem={({ item }) => (
                  <View style={{ flexDirection: "column" }}>
                    <View style={{ marginBottom: 5, marginTop: 5 }}>
                      <FitImage
                        indicator={false} // disable loading indicator
                        indicatorColor="white" // react native colors or color codes like #919191
                        indicatorSize="integer" // (small | large) or integer
                        style={styles.fitImage}
                        source={{ uri: "http://nikaws.cf/" + item.url }}
                      />
                    </View>
>>>>>>> d8039d6 (11/12 commit)
                  </View>
                )}
              />
            </View>
<<<<<<< HEAD
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              {/* List questions left */}
              <View
                style={{
                  flexDirection: "column",
                  maxWidth: "45%",
                  minWidth: "44%",
                }}
              >
                <FlatList
                  data={data}
                  keyExtractor={({ id }, index) => id}
                  renderItem={({ item }) => (
                    <View>
                      <Text style={styles.textQestion}>
                        {" "}
                        {item.noidung_cauhoi}
                      </Text>
                    </View>
                  )}
                />
              </View>
              {/* List document right*/}
              <View
                style={{
                  maxWidth: "50%",
                  minWidth: "49%",
                }}
              >
                <FlatList
                  data={document}
                  keyExtractor={({ id1 }, index1) => id1}
                  renderItem={({ item }) => (
                    <View style={{ flexDirection: "column" }}>
                      <View style={{ marginBottom: 5, marginTop: 5 }}>
                        <FitImage
                          indicator={false} // disable loading indicator
                          indicatorColor="white" // react native colors or color codes like #919191
                          indicatorSize="integer" // (small | large) or integer
                          style={styles.fitImage}
                          source={{ uri: "http://nikaws.cf/" + item.url }}
                        />
                      </View>
                    </View>
                  )}
                />
              </View>
            </View>

            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={{ fontSize: 20, color: "blue" }}>Điền đáp án:</Text>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <View>
                  <View style={{ margin: 5 }}>
                    <Text style={{ marginHorizontal: 10 }}>Câu 1</Text>
                  </View>
                  <TextInput
                    style={styles.inPutAnsew}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    onChangeText={this.handelValue1}
                  />
                </View>
                <View>
                  <View style={{ margin: 5 }}>
                    <Text style={{ marginHorizontal: 10 }}>Câu 2</Text>
                  </View>
                  <TextInput
                    style={styles.inPutAnsew}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    onChangeText={this.handelValue2}
                  />
                </View>
                <View>
                  <View style={{ margin: 5 }}>
                    <Text style={{ marginHorizontal: 10 }}>Câu 3</Text>
                  </View>
                  <TextInput
                    style={styles.inPutAnsew}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    onChangeText={this.handelValue3}
                  />
                </View>
                <View>
                  <View style={{ margin: 5 }}>
                    <Text style={{ marginHorizontal: 10 }}>Câu 4</Text>
                  </View>
                  <TextInput
                    style={styles.inPutAnsew}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    onChangeText={this.handelValue4}
                  />
                </View>
                <View>
                  <View style={{ margin: 5 }}>
                    <Text style={{ marginHorizontal: 10 }}>Câu 5</Text>
                  </View>
                  <TextInput
                    style={styles.inPutAnsew}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    onChangeText={this.handelValue5}
                  />
                </View>
                {/* //tạm thế  */}
              </View>
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
    );
  }
}
=======
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ fontSize: 20, color: "blue" }}>Điền đáp án:</Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 1</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  onChangeText= {handelValue1}
                  value={cleanAnswerP1 ? "" : null}
                />
              </View>
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 2</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  onChangeText={handelValue2}
                  value={cleanAnswerP1 ? "" : null}
                />
              </View>
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 3</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  onChangeText={handelValue3}
                  value={cleanAnswerP1 ? "" : null}
                />
              </View>
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 4</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  onChangeText={handelValue4}
                  value={cleanAnswerP1 ? "" : null}
                />
              </View>
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 5</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  onChangeText={handelValue5 }
                  value={cleanAnswerP1 ? "" : null}
                />
              </View>
              {/* //tạm thế  */}
            </View>
          </View>
        </ScrollView>
    </SafeAreaView>
    );
  }
  
export default Part1;
>>>>>>> d8039d6 (11/12 commit)

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
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  textQestion: {
    color: "#000",
    fontSize: 17,
    margin: 5,
    textAlign: "center",
  },
  inPutAnsew: {
    textAlign: "center",
    height: 40,
    marginHorizontal: 3,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
  },
});
<<<<<<< HEAD
=======

>>>>>>> d8039d6 (11/12 commit)

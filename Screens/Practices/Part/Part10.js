<<<<<<< HEAD
import { Row } from 'native-base';
import React, { Component } from 'react';
import { ActivityIndicator,ScrollView, Alert, TextInput, FlatList,StyleSheet, Text, View } from 'react-native';
import FitImage from 'react-native-fit-image';
import AsyncStorage from "@react-native-community/async-storage";

const Part10URL = "http://nikaws.cf/getpart10/";
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
    fetch(Part10URL + this.props.maDe)
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
=======
import React, { useEffect } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  TextInput,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Container, Card, CardItem,CheckBox} from 'native-base';
import FitImage from "react-native-fit-image";

import { useSelector, useDispatch } from 'react-redux';
import { savePointP10 , changeCleanP10 } from '../../../redux/actions';

const Part10 = ({ navigation }) => {
  
    const {part10, cleanAnswerP10 } = useSelector(state => state.mainReducer);
    const dispatch = useDispatch();
    const SavePointP10 = (point) => dispatch(savePointP10(point));
    const ChangeCleanP10 = () => dispatch(changeCleanP10());
    useEffect(() => {
      if(cleanAnswerP10 == true){
        ChangeCleanP10();
      }
    }, [cleanAnswerP10]);

    const [office_answer, SetOffice_answer] = React.useState("");

    const [value1, setValue1] = React.useState("");
    const [value2, setValue2] = React.useState("");
    const [value3, setValue3] = React.useState("");
    const [value4, setValue4] = React.useState("");
    const [value5, setValue5] = React.useState("");


      useEffect(() => {
        let office_answer = [];
        let tmp_char = 65;

        // String.fromCharCode(65)
        part10.answers.forEach((element) => {
          if (element.dapan === 1) {
            office_answer.push(String.fromCharCode(tmp_char));
          }
          ++tmp_char;
        });
        SetOffice_answer(office_answer);
        if(value1!= "" || value2 !="" || value3!= "" || value4 != "" || value5 != "" ){
          checkAnswers();
        }
      }, [value1,value2,value3,value4,value5, part10]);

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
        SavePointP10(trueValue);
        
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
          <Card>
            <FitImage
              indicator={false} // disable loading indicator
              indicatorColor="white" // react native colors or color codes like #919191
              indicatorSize="integer" // (small | large) or integer
              style={styles.fitImage}
              source={{
                uri:`https://nikaws.cf/${
                  part10.listPartDocumentArray[1].url
                }`
            }}/>
          </Card>
          
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
                data={part10.questions}
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
                data={ part10.answers }
                keyExtractor={({ id1 }, index1) => id1}
                renderItem={({ item }) => (
                  <View>
                    <Text style={styles.textQestion}>
                      {" "}
                      {item.noidung_dapan}
                    </Text>
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
                  flexDirection: "column",
                  maxWidth: "50%",
                  minWidth: "49%",
                }}
              >
                <FlatList
                  data={answers}
                  keyExtractor={({ id }, index) => id}
                  renderItem={({ item }) => (
                    <View>
                      <Text style={styles.textQestion}> {item.noidung_pa}</Text>
                    </View>
                  )}
                />
              </View>
            </View>
          </View>
        )}
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ fontSize: 20, color: "blue" }}>Điền đáp án:</Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View>
              <View style={{ margin: 5 }}>
                <Text style={{ marginHorizontal: 10 }}>Câu 6</Text>
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
                <Text style={{ marginHorizontal: 10 }}>Câu 7</Text>
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
                <Text style={{ marginHorizontal: 10 }}>Câu 8</Text>
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
                <Text style={{ marginHorizontal: 10 }}>Câu 9</Text>
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
                <Text style={{ marginHorizontal: 10 }}>Câu 10</Text>
              </View>
              <TextInput
                style={styles.inPutAnsew}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                onChangeText={this.handelValue5}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
    img: {
        width: 64,
        height: 64
    },
    fitImage: {
    borderRadius: 5,

  },
  flexRow: {
    flexDirection: 'row'
  },
  flexCol: {
    flexDirection: 'column'
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
                  <Text style={{ marginHorizontal: 10 }}>Câu 6</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  onChangeText={handelValue1}
                  value={cleanAnswerP10 ? "" : null}
                />
              </View>
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 7</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  onChangeText={handelValue2}
                  value={cleanAnswerP10 ? "" : null}
                />
              </View>
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 8</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  onChangeText={handelValue3}
                  value={cleanAnswerP10 ? "" : null}
                />
              </View>
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 9</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  onChangeText={handelValue4}
                  value={cleanAnswerP10 ? "" : null}
                />
              </View>
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 10</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  onChangeText={handelValue5 }
                  value={cleanAnswerP10 ? "" : null}
                />
              </View>
              {/* //tạm thế  */}
            </View>
          </View>
        </ScrollView>
    </SafeAreaView>
    );
  }
  
export default Part10;

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
>>>>>>> d8039d6 (11/12 commit)
  },
  fitImageWithSize: {
    height: 50,
    width: "80%",
<<<<<<< HEAD
    marginBottom:3
=======
    marginBottom: 3,
>>>>>>> d8039d6 (11/12 commit)
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  textQestion: {
<<<<<<< HEAD
    color:'#000',
    fontSize:17,
    margin:5,
    textAlign:'center'
  },
  inPutAnsew: {
    textAlign:'center',
    height: 40, 
    marginHorizontal:3,
    borderColor: 'gray', 
    borderWidth: 1 , 
    borderRadius:10, 
    alignItems:'center'}
  
})
=======
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

>>>>>>> d8039d6 (11/12 commit)

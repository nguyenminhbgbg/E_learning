import React, { useEffect, useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";  
import FitImage from "react-native-fit-image";

import { useSelector, useDispatch } from 'react-redux';
import { savePointP1, changeCleanP1  } from '../../../redux/actions';

const Part1 = ({ navigation }) => {
  
    const {part1,listP1 , quesP1, ansP1,cleanAnswerP1,checkAnswer } = useSelector(state => state.mainReducer);
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

    const txtVa1Ref = useRef();
    const txtVa2Ref = useRef();
    const txtVa3Ref = useRef();
    const txtVa4Ref = useRef();
    const txtVa5Ref = useRef();

    useEffect(() => {
      setListPartDocumentArray(listP1);
      setQuestions(quesP1);
      setAnswers(ansP1);
    }, [listP1, quesP1, ansP1]);

    useEffect(() => {
      if(cleanAnswerP1 == true){
        ChangeCleanP1();
      }
    }, [cleanAnswerP1]);

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
    }, [answers]);

    useEffect(() => {
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
      <TouchableWithoutFeedback
          style={styles.container}
          onPress={Keyboard.dismiss}
      >
      <SafeAreaView  style={{ marginBottom: 20 }}>
          <ScrollView   >
            {/* img title past */}
            <View>
              <FlatList
                data={listPartDocumentArray}
                keyExtractor = { (item, index) => index.toString() }
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
                  keyExtractor = { (item, index) => index.toString() }
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
                  keyExtractor = { (item, index) => index.toString() }
                  renderItem={({ item }) => (
                    <View style={{ flexDirection: "column" }}>
                      <View style={{ marginBottom: 5, marginTop: 5 }}>
                        <FitImage
                          indicator={false} // disable loading indicator
                          indicatorColor="white" // react native colors or color codes like #919191
                          // indicatorSize="integer" // (small | large) or integer
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
                    onChangeText= {handelValue1}
                    value={cleanAnswerP1 ? "" : null}
                    returnKeyType="next"
                    onSubmitEditing={() => txtVa2Ref.current.focus()}
                    ref={txtVa1Ref}
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
                    returnKeyType="next"
                    onSubmitEditing={() => txtVa3Ref.current.focus()}
                    ref={txtVa2Ref}
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
                    returnKeyType="next"
                    onSubmitEditing={() => txtVa4Ref.current.focus()}
                    ref={txtVa3Ref}
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
                    returnKeyType="next"
                    onSubmitEditing={() => txtVa5Ref.current.focus()}
                    ref={txtVa4Ref}
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
                    returnKeyType="go"
                    ref={txtVa5Ref}
                  />
                </View>
                {/* //tạm thế  */}
              </View>
            </View>
            {checkAnswer ? (
                <View style={{ flex: 1, alignItems: "center" }}>
                  <Text style={{ fontSize: 20, color: "blue" , marginVertical: 5}}>Đáp án</Text>
                  <FlatList
                      data={office_answer}
                      keyExtractor = { (item, index) => index.toString() }
                      horizontal
                      renderItem={({ item }) => (
                        <View style={{flexDirection:'row'}}>
                          <Text style={{ marginHorizontal: 28, flex:1 ,color: "#000", fontSize: 17, margin: 5, textAlign: "center", alignItems:'center'}}>
                            {item}
                          </Text>
                        </View>
                      )}
                    />
                </View>
                ) : null }
            
          </ScrollView>
      </SafeAreaView>
      </TouchableWithoutFeedback>
      
    );
  }
  
export default Part1;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
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


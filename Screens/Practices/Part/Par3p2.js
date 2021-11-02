import React, { useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Container, Card, CardItem,CheckBox} from 'native-base';
import FitImage from "react-native-fit-image";
import { savePointP3p2 ,changeCleanP3p2 } from '../../../redux/actions';

import { useSelector, useDispatch } from 'react-redux';
const Part3p2 = ({ navigation }) => {
  
    const {part3dot2, cleanAnswerP3p2 } = useSelector(state => state.mainReducer);
    const dispatch = useDispatch();
    const SavePointP3p2 = (point) => dispatch(savePointP3p2(point));
    const ChangeCleanP3p2 = () => dispatch(changeCleanP3p2());

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
        setListPartDocumentArray(part3dot2.listPartDocumentArray);
        setQuestions(part3dot2.questions);
        setAnswers(part3dot2.answers);

        if(cleanAnswerP3p2 == true){
          ChangeCleanP3p2();
        }
      }, [part3dot2, cleanAnswerP3p2]);

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
        SavePointP3p2(trueValue);
        
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
              style={styles.fitImage}
              source={{
                uri:`https://nikaws.cf/${
                  part3dot2.listPartDocumentArray[0].url
                }`
            }}/>
          </Card>
          
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={{ fontSize: 20, color: "blue" }}>Điền đáp án:</Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 16</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  onChangeText={handelValue1}
                  value={cleanAnswerP3p2 ? "" : null}
                />
              </View>
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 17</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  onChangeText={handelValue2}
                  value={cleanAnswerP3p2 ? "" : null}
                />
              </View>
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 18</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  onChangeText={handelValue3}
                  value={cleanAnswerP3p2 ? "" : null}
                />
              </View>
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 19</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  onChangeText={handelValue4}
                  value={cleanAnswerP3p2 ? "" : null}
                />
              </View>
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 20</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  onChangeText={handelValue5 }
                  value={cleanAnswerP3p2 ? "" : null}
                />
              </View>
              {/* //tạm thế  */}
            </View>
          </View>
        </ScrollView>
    </SafeAreaView>
    );
  }
  
export default Part3p2;

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


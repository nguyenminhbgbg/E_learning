import React, { useRef, useEffect} from 'react';
import { Container, Card} from 'native-base';
import { ScrollView,FlatList,TextInput,
  View, Text, StyleSheet,Keyboard, TouchableWithoutFeedback } from 'react-native';
import FitImage from "react-native-fit-image";

import { useSelector, useDispatch } from 'react-redux';
import { savePointP6 ,changeCleanP6 } from '../../../redux/actions';

const Part6 = ({ route, navigation }) =>{
  const dispatch = useDispatch();
  const SavePointP6 = (point) => dispatch(savePointP6(point));
  const ChangeCleanP6 = () => dispatch(changeCleanP6());

  useEffect(() => {
    if(cleanAnswerP6 == true){
      ChangeCleanP6();
    }
  }, [cleanAnswerP6]);

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
  }, [part6, value1, value2, value3, value4, value5]);

  const checkAnswers = () => {
    console.log("Value 0 is " + value1.toUpperCase());
    console.log("Value 1 is " + value2.toUpperCase());
    console.log("Value 2 is " + value3.toUpperCase());
    console.log("Value 3 is " + value4.toUpperCase());
    console.log("Value 4 is " + value5.toUpperCase());
    var result = 0;
    if ( value1.toUpperCase() == part6.answers[0].noidung_dapan.toUpperCase()) {
      result = result + 1;
    }
    if ( value2.toUpperCase() == part6.answers[1].noidung_dapan.toUpperCase() ) {
      result = result + 1;
    }
    if ( value3.toUpperCase() == part6.answers[2].noidung_dapan.toUpperCase()) {
      result = result + 1;
    }
    if ( value4.toUpperCase() == part6.answers[3].noidung_dapan.toUpperCase()) {
      result = result + 1;
    }
    if ( value5.toUpperCase() == part6.answers[4].noidung_dapan.toUpperCase() ) {
      result = result + 1;
    }
    SavePointP6(result);
  };
  const {part6, cleanAnswerP6, checkAnswer } = useSelector(state => state.mainReducer);

  return (
    <Container>
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
            <Card>
            <FitImage
              indicator={false} // disable loading indicator
              indicatorColor="white" // react native colors or color codes like #919191
              style={styles.fitImage}
              source={{
                uri:`https://nikaws.cf/${
                  part6.listPartDocumentArray[0].url
                }`
            }}/>
            </Card>
            <View
              style={{
                flexDirection: "column",
                maxWidth: "90%",
                minWidth: "90%",
              }}
            >
              <FlatList
                data={part6.questions}
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
            <View style={styles.containerInputAns}>
              <Text style={{ fontSize: 20, color: "blue" }}>Điền đáp án:</Text>
              <View
                style={{
                  flexDirection: "column",
                }}
              >
                <View style={{ flexDirection: "row", marginBottom: 5 }}>
                  <View style={{ margin: 5 }}>
                    <Text style={{ marginHorizontal: 10 }}>Câu 36</Text>
                  </View>
                  <TextInput
                    style={styles.inPutAnsew}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    onChangeText={handelValue1}
                    value={cleanAnswerP6 ? "" : null}
                    returnKeyType="next"
                    onSubmitEditing={() => txtVa2Ref.current.focus()}
                    ref={txtVa1Ref}
                  />
                </View>
                <View style={{ flexDirection: "row", marginBottom: 5 }}>
                  <View style={{ margin: 5 }}>
                    <Text style={{ marginHorizontal: 10 }}>Câu 37</Text>
                  </View>
                  <TextInput
                    style={styles.inPutAnsew}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    onChangeText={handelValue2}
                    value={cleanAnswerP6 ? "" : null}
                    returnKeyType="next"
                    onSubmitEditing={() => txtVa3Ref.current.focus()}
                    ref={txtVa2Ref}
                  />
                </View>
                <View style={{ flexDirection: "row", marginBottom: 5 }}>
                  <View style={{ margin: 5 }}>
                    <Text style={{ marginHorizontal: 10 }}>Câu 38</Text>
                  </View>
                  <TextInput
                    style={styles.inPutAnsew}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    onChangeText={handelValue3}
                    value={cleanAnswerP6 ? "" : null}
                    returnKeyType="next"
                    onSubmitEditing={() => txtVa4Ref.current.focus()}
                    ref={txtVa3Ref}
                  />
                </View>
                <View style={{ flexDirection: "row", marginBottom: 5 }}>
                  <View style={{ margin: 5 }}>
                    <Text style={{ marginHorizontal: 10 }}>Câu 39</Text>
                  </View>
                  <TextInput
                    style={styles.inPutAnsew}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    onChangeText={handelValue4}
                    value={cleanAnswerP6 ? "" : null}
                    returnKeyType="next"
                    onSubmitEditing={() => txtVa5Ref.current.focus()}
                    ref={txtVa4Ref}
                  />
                </View>
                <View style={{ flexDirection: "row", marginBottom: 5 }}>
                  <View style={{ margin: 5 }}>
                    <Text style={{ marginHorizontal: 10 }}>Câu 40</Text>
                  </View>
                  <TextInput
                    style={styles.inPutAnsew}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    onChangeText={handelValue5}
                    value={cleanAnswerP6 ? "" : null}
                    returnKeyType="go"
                    ref={txtVa5Ref}
                  />
                </View>
              </View>
            </View>
          {checkAnswer ? (
              <View style={{ flex: 1, alignItems: "center", marginBottom: '10%'}}>
                <Text style={{ fontSize: 20, color: "blue", marginVertical: 10 }}>Đáp án đúng:</Text>
                <View
                  style={{
                    flexDirection: "column",
                  }}
                >
                  <View style={styles.ViewAnswer}>
                    <View style={{ margin: 5 , flex: 2 , alignItems:'center' }}>
                      <Text style={{ marginHorizontal: 5 }}>Câu 36</Text>
                    </View>
                    <Text style={styles.answersAll}>{part6.answers[0].noidung_dapan}</Text>
                  </View>
                  <View style={styles.ViewAnswer}>
                    <View style={{ margin: 5 , flex: 2 , alignItems:'center' }}>
                      <Text style={{ marginHorizontal: 5 }}>Câu 37</Text>
                    </View>
                    <Text style={styles.answersAll}>{part6.answers[1].noidung_dapan}</Text>
                  </View>
                  <View style={styles.ViewAnswer}>
                    <View style={{ margin: 5 , flex: 2 , alignItems:'center' }}>
                      <Text style={{ marginHorizontal: 5 }}>Câu 38</Text>
                    </View>
                    <Text style={styles.answersAll}>{part6.answers[2].noidung_dapan}</Text>
                  </View>
                  <View style={styles.ViewAnswer}>
                    <View style={{ margin: 5 , flex: 2 , alignItems:'center' }}>
                      <Text style={{ marginHorizontal: 5 }}>Câu 39</Text>
                    </View>
                    <Text style={styles.answersAll}>{part6.answers[3].noidung_dapan}</Text>
                  </View>
                  <View style={styles.ViewAnswer}>
                    <View style={{ margin: 5 , flex: 2 , alignItems:'center'}}>
                      <Text style={{ marginHorizontal: 5 }}>Câu 40</Text>
                    </View>
                    <Text style={styles.answersAll}>{part6.answers[4].noidung_dapan}</Text>
                  </View>
                </View>
              </View>
                ) : null }
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: "space-around"
  },
  containerInputAns: {
    flex: 1, 
    alignItems: "center",
    left: 0,
    right: 0,
    bottom: 0,
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
  text: {
    marginLeft: 5,
    flex: 1,
    fontSize: 20,
    color: "#000",
  },
  ViewAnswer: { 
    flexDirection: "row", 
    marginBottom: 5, 
    width: '100%' , 
    flex: 1
  },
  answersAll: {
    marginHorizontal: 10,
    fontSize: 18,
    flex: 3,
    color:'#ea4c89'
  }
});

export default Part6;

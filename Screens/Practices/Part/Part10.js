import React, { useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  FlatList,
  StyleSheet,
  Text,
  View,
  Keyboard, 
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import { Container, Card, CardItem,CheckBox} from 'native-base';
import FitImage from "react-native-fit-image";
import { useAudioHelper } from '../../../helpers/audio-helper';
import Slider from '@react-native-community/slider';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import { useSelector, useDispatch } from 'react-redux';
import { savePointP10 , changeCleanP10 } from '../../../redux/actions';

const Part10 = ({ navigation }) => {
    const player = useAudioHelper({
      listSounds: [{
        type: 'network',
        path: `https://nikaws.cf/datafordb/tdoILvIITM3FRpfKGJz0Oy4mil9VmAxf7B2VAcb2.mp3`,
        name: "P9",
      }],
      timeRate: 15,
      isLogStatus: true,
    });
    const {part10, cleanAnswerP10, checkAnswer } = useSelector(state => state.mainReducer);
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
    const txtVa1Ref = React.useRef();
    const txtVa2Ref = React.useRef();
    const txtVa3Ref = React.useRef();
    const txtVa4Ref = React.useRef();
    const txtVa5Ref = React.useRef();
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
     
    }, [part10]);

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
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
              {/* img title past */}
              <Card>
                <FitImage
                  indicator={false} // disable loading indicator
                  indicatorColor="white" // react native colors or color codes like #919191
                  style={styles.fitImage}
                  source={{
                    uri:`https://nikaws.cf/${
                      part10.listPartDocumentArray[1].url
                    }`
                }}/>
              </Card>
              <View style={styles.container}>
                  <View style={styles.progressBar}>
                      {
                        player.status === 'play' ?
                            <TouchableOpacity
                                onPress={player.pause}
                                style={{marginHorizontal:20}}
                            >
                                <FontAwesomeIcon
                                    name='pause'
                                    color='white'
                                    size={25}
                                />
                            </TouchableOpacity> :
                            <TouchableOpacity
                                onPress={player.play}
                                style={{marginHorizontal:20}}
                            >
                                <FontAwesomeIcon
                                    name='play'
                                    color='white'
                                    size={25}
                                />
                            </TouchableOpacity>
                      }
                      <Text style={styles.progressBarText}>{player.currentTimeString}</Text>
                      <Slider
                          style={{width: '50%', height: 40}}
                          minimumValue={0}
                          maximumValue={player.duration}
                          value={player.currentTime}
                          minimumTrackTintColor="#FFFFFF"
                          maximumTrackTintColor="gray"
                          thumbTintColor='#FFFFFF'
                          onTouchStart={player.pause}
                          onTouchEnd={player.play}
                          disabled={true}
                          // onSlidingComplete={(seconds) => player.seekToTime(seconds)}
                      />
                      <Text style={styles.progressBarText}>{player.durationString}</Text>
                  </View>
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
                    data={part10.questions}
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
                    data={ part10.answers }
                    keyExtractor = { (item, index) => index.toString() }
                    renderItem={({ item }) => (
                      <View>
                        <Text style={styles.textQestion}>
                          {" "}
                          {item.noidung_dapan}
                        </Text>
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
                      <Text style={{ marginHorizontal: 10 }}>Câu 6</Text>
                    </View>
                    <TextInput
                      style={styles.inPutAnsew}
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                      onChangeText={handelValue1}
                      value={cleanAnswerP10 ? "" : null}
                      returnKeyType="next"
                      onSubmitEditing={() => txtVa2Ref.current.focus()}
                      ref={txtVa1Ref}
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
                      returnKeyType="next"
                      onSubmitEditing={() => txtVa3Ref.current.focus()}
                      ref={txtVa2Ref}
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
                      returnKeyType="next"
                      onSubmitEditing={() => txtVa4Ref.current.focus()}
                      ref={txtVa3Ref}
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
                      returnKeyType="next"
                      onSubmitEditing={() => txtVa5Ref.current.focus()}
                      ref={txtVa4Ref}
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
            </View>
          </TouchableWithoutFeedback>
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
  inner: {
    flex: 1,
    justifyContent: "space-around"
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
  progressBar: {
    flexDirection: 'row',
    marginVertical:15,
    marginHorizontal:15,
    alignItems: 'center'
  },
  progressBarText: {
      color: 'white',
      alignSelf: 'center',
  },
  container: {
    flex:1,
    justifyContent:'center',
    backgroundColor:'#3c444c',
    borderRadius:50
  },
});


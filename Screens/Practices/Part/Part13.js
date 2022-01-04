import React, { useEffect} from 'react';
import { Container, Card,} from 'native-base';
import { ScrollView,FlatList,TextInput, View, Text, StyleSheet, Keyboard, TouchableOpacity,
  TouchableWithoutFeedback,} from 'react-native';
import FitImage from "react-native-fit-image";
import { useAudioHelper } from '../../../helpers/audio-helper';
import Slider from '@react-native-community/slider';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux';
import { savePointP13 , changeCleanP13 } from '../../../redux/actions';

const Part13 = ({ route, navigation }) =>{
  const player = useAudioHelper({
    listSounds: [{
      type: 'network',
      path: `https://nikaws.cf/datafordb/mwMRwsHgGjSlK89d6Ig3GCKlbFfX9IbeC72Ithy0.mp3`,
      name: "P9",
    }],
    timeRate: 15,
    isLogStatus: true,
  });
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
  const txtVa1Ref = React.useRef();
  const txtVa2Ref = React.useRef();
  const txtVa3Ref = React.useRef();
  const txtVa4Ref = React.useRef();
  const txtVa5Ref = React.useRef();
  const [answerAll, setAnswerAll] = React.useState({
    val1: [],
    val2: [],
    val3: [],
    val4: [],
    val5: [],
  });

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
  useEffect(() => {
    var x = [];
    var li = part13.questions.forEach((ques) => {
      x.push(ques.id);
    });
    function Key(arr, b) {
      var bx = b.filter(function (an) {
        return an.cauhoi_id == arr;
      });
      return bx;
    }
    setAnswerAll({
      ...answerAll,
      val1: Key(x[0], part13.answers),
      val2: Key(x[1], part13.answers),
      val3: Key(x[2], part13.answers),
      val4: Key(x[3], part13.answers),
      val5: Key(x[4], part13.answers),
  });
  console.log(answerAll.val1)
  }, [part13]);
  const checkAnswers = () => {
    var result = 0;

    var x = [];
    var li = part13.questions.forEach((ques) => {
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
        if (answer == Li.noidung_dapan.toUpperCase()) {
          result++;
        }
      });
      return dat;
    }

    checkAnswer(value1.toUpperCase(), Key(x[0], part13.answers));
    checkAnswer(value2.toUpperCase(), Key(x[1], part13.answers));
    checkAnswer(value3.toUpperCase(), Key(x[2], part13.answers));
    checkAnswer(value4.toUpperCase(), Key(x[3], part13.answers));
    checkAnswer(value5.toUpperCase(), Key(x[4], part13.answers));
    SavePointP13(result);
    
  };

  const {part13 , cleanAnswerP13, checkAnswer } = useSelector(state => state.mainReducer);

  const renderItem = ({ item, index }) => {
      return (
        <View>
          <Text style={styles.textQestion}>
            {item.noidung_dapan}
          </Text>
      </View>
      )
  }
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
                    part13.listPartDocumentArray[1].url
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
              
              <View style={{ flex: 1, alignItems: "center", marginBottom: 18 }}>
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
                      onChangeText={handelValue1}
                      value={cleanAnswerP13 ? "" : null}
                      returnKeyType="next"
                      onSubmitEditing={() => txtVa2Ref.current.focus()}
                      ref={txtVa1Ref}
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
                      onChangeText={handelValue2}
                      value={cleanAnswerP13 ? "" : null}
                      returnKeyType="next"
                      onSubmitEditing={() => txtVa3Ref.current.focus()}
                      ref={txtVa2Ref}
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
                      onChangeText={handelValue3}
                      value={cleanAnswerP13 ? "" : null}
                      returnKeyType="next"
                      onSubmitEditing={() => txtVa4Ref.current.focus()}
                      ref={txtVa3Ref}
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
                      onChangeText={handelValue4}
                      value={cleanAnswerP13 ? "" : null}
                      returnKeyType="next"
                      onSubmitEditing={() => txtVa5Ref.current.focus()}
                      ref={txtVa4Ref}
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
                      onChangeText={handelValue5}
                      value={cleanAnswerP13 ? "" : null}
                      returnKeyType="go"
                      ref={txtVa5Ref}
                    />
                  </View>
                </View>
              </View>
              {checkAnswer ? (
              <View style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: "center" }}>
                  <Text style={{ fontSize: 20, color: "blue" , marginVertical: 5}}>Đáp án</Text>
                </View>
                <View style={{ flexDirection: "column", marginLeft:'8%' }}>
                    <View style={{ flexDirection: "row", marginBottom: 5 }}>
                      <View style={{ margin: 5 }}>
                        <Text style={{ marginHorizontal: 10 }}>Câu 21</Text>
                      </View>
                      <FlatList
                        data={answerAll.val1}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id.toString()}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                      />
                    </View>
                    <View style={{ flexDirection: "row", marginBottom: 5 }}>
                      <View style={{ margin: 5 }}>
                        <Text style={{ marginHorizontal: 10 }}>Câu 22</Text>
                      </View>
                      <FlatList
                        data={answerAll.val2}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id.toString()}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                      />
                    </View>
                    <View style={{ flexDirection: "row", marginBottom: 5 }}>
                      <View style={{ margin: 5 }}>
                        <Text style={{ marginHorizontal: 10 }}>Câu 23</Text>
                      </View>
                      <FlatList
                        data={answerAll.val3}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id.toString()}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                      />
                    </View>
                    <View style={{ flexDirection: "row", marginBottom: 5 }}>
                      <View style={{ margin: 5 }}>
                        <Text style={{ marginHorizontal: 10 }}>Câu 24</Text>
                      </View>
                      <FlatList
                        data={answerAll.val4}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id.toString()}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                      />
                    </View>
                    <View style={{ flexDirection: "row", marginBottom: 5 }}>
                      <View style={{ margin: 5 }}>
                        <Text style={{ marginHorizontal: 10 }}>Câu 25</Text>
                      </View>
                      <FlatList
                        data={answerAll.val5}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id.toString()}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                      />
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
    flex:1,
    justifyContent:'center',
    backgroundColor:'#3c444c',
    borderRadius:50
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
});

export default Part13;

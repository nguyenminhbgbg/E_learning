import React, { useState, useEffect} from 'react';
import { Container, Card, CardItem,CheckBox} from 'native-base';
import { ScrollView,TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import FitImage from "react-native-fit-image";

import { useSelector, useDispatch } from 'react-redux';
import { savePointP9 , changeCleanP9 } from '../../../redux/actions';
import { useAudioHelper } from '../../../helpers/audio-helper';
import Slider from '@react-native-community/slider';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Part9 = ({ route, navigation }) =>{
  const player = useAudioHelper({
    listSounds: [{
      type: 'network',
      path: `https://nikaws.cf/datafordb/y1FKc5FDZVtUycyKyJuyQwUyWVPkW0c2AQkE7Gvh.mp3`,
      name: "P9",
    }],
    timeRate: 15,
    isLogStatus: true,
  });

  const dispatch = useDispatch();
  const SavePointP9 = (point) => dispatch(savePointP9(point));
  const ChangeCleanP9 = () => dispatch(changeCleanP9());
  useEffect(() => {
    if(cleanAnswerP9 == true){
      ChangeCleanP9();
    }
  }, [cleanAnswerP9]);

  const [qes1One, setQes1One] = useState(false);
  const [qes1Two, setQes1Two] = useState(false);
  const [qes1Three, setQes1Three] = useState(false);

  const [qes2One, setQes2One] = useState(false);
  const [qes2Two, setQes2Two] = useState(false);
  const [qes2Three, setQes2Three] = useState(false);

  const [qes3One, setQes3One] = useState(false);
  const [qes3Two, setQes3Two] = useState(false);
  const [qes3Three, setQes3Three] = useState(false);

  const [qes4One, setQes4One] = useState(false);
  const [qes4Two, setQes4Two] = useState(false);
  const [qes4Three, setQes4Three] = useState(false);

  const [qes5One, setQes5One] = useState(false);
  const [qes5Two, setQes5Two] = useState(false);
  const [qes5Three, setQes5Three] = useState(false);

  const qes1OnePress = () => {
    setQes1One(true); setQes1Two(false); setQes1Three(false)
  }
  const qes1TwoPress = () => {
    setQes1One(false); setQes1Two(true); setQes1Three(false)
  }
  const qes1ThreePress = () => {
    setQes1One(false); setQes1Two(false); setQes1Three(true)
  }
  
  const qes2OnePress = () => {
    setQes2One(true); setQes2Two(false); setQes2Three(false)
  }
  const qes2TwoPress = () => {
    setQes2One(false); setQes2Two(true); setQes2Three(false)
  }
  const qes2ThreePress = () => {
    setQes2One(false); setQes2Two(false); setQes2Three(true)
  }

  const qes3OnePress = () => {
    setQes3One(true); setQes3Two(false); setQes3Three(false)
  }
  const qes3TwoPress = () => {
    setQes3One(false); setQes3Two(true); setQes3Three(false)
  }
  const qes3ThreePress = () => {
    setQes3One(false); setQes3Two(false); setQes3Three(true)
  }

  const qes4OnePress = () => {
    setQes4One(true); setQes4Two(false); setQes4Three(false)
  }
  const qes4TwoPress = () => {
    setQes4One(false); setQes4Two(true); setQes4Three(false)
  }
  const qes4ThreePress = () => {
    setQes4One(false); setQes4Two(false); setQes4Three(true)
  }

  const qes5OnePress = () => {
    setQes5One(true); setQes5Two(false); setQes5Three(false)
  }
  const qes5TwoPress = () => {
    setQes5One(false); setQes5Two(true); setQes5Three(false)
  }
  const qes5ThreePress = () => {
    setQes5One(false); setQes5Two(false); setQes5Three(true)
  }

  useEffect(() => {
    if(qes1One == true || qes2One == true || qes3One == true || qes4One == true || qes5One == true
      || qes1Two == true || qes2Two == true || qes3Two == true || qes4Two == true || qes5Two == true
      || qes1Three == true || qes2Three == true|| qes3Three == true|| qes4Three == true|| qes5Three == true ){
      checkAnswers();
    }
  }, [qes1One,qes2One,qes3One, qes4One, qes5One, qes1Two, qes2Two, qes3Two, qes4Two, qes5Two,
      qes1Three, qes2Three, qes3Three, qes4Three, qes5Three, part9]);
  const checkAnswers = async () => {
    var c = [];

    function findDataDone(a, b) {
      a.forEach((ques) => {
        b.forEach((answer) => {
          if (ques.id == answer.cauhoi_id && answer.dapan == 0) {
            c.push(0);
          }
          if (ques.id == answer.cauhoi_id && answer.dapan == 1) {
            c.push(1);
          }
        });
      });
    }

    var points = 0;

    findDataDone(part9.questions, part9.answers);

    if (qes1One == true && c[0] == 1) {
      points = points + 1;
    }
    if (qes1Two == true && c[1] == 1) {
      points = points + 1;
    }
    if (qes1Three == true && c[2] == 1) {
      points = points + 1;
    }
    if (qes2One == true && c[3] == 1) {
      points = points + 1;
    }
    if (qes2Two == true && c[4] == 1) {
      points = points + 1;
    }
    if (qes2Three == true && c[5] == 1) {
      points = points + 1;
    }
    if (qes3One == true && c[6] == 1) {
      points = points + 1;
    }
    if (qes3Two == true && c[7] == 1) {
      points = points + 1;
    }
    if (qes3Three == true && c[8] == 1) {
      points = points + 1;
    }
    if (qes4One == true && c[9] == 1) {
      points = points + 1;
    }
    if (qes4Two == true && c[10] == 1) {
      points = points + 1;
    }
    if (qes4Three == true && c[11] == 1) {
      points = points + 1;
    }
    if (qes5One == true && c[12] == 1) {
      points = points + 1;
    }
    if (qes5Two == true && c[13] == 1) {
      points = points + 1;
    }
    if (qes5Three == true && c[14] == 1) {
      points = points + 1;
    }
    SavePointP9(points);
    
  };
  const {part9,soundP9, cleanAnswerP9 } = useSelector(state => state.mainReducer);

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
                part9.listPartDocumentArray[1].url
              }`
          }}/>

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
          </Card>
          <View
              style={{
                flexDirection: "column",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Card>
                {/* cau 1 */}
                <CardItem header>
                  <Text style={styles.textTitle}>
                    1. {part9.questions[0].noidung_cauhoi}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 5,
                    }}
                  >
                    <View style={{ width: "33%", alignItems: "center" }}>
                      <FitImage
                        source={{
                          uri: "http://nikaws.cf/" + part9.answers[0].url,
                        }}
                        style={styles.fitImageWithSize}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        <CheckBox 
                          checked={cleanAnswerP9 ? false : qes1One}
                          onPress= {() => qes1OnePress()}
                          style={{marginRight:20}}
                        />
                        <Text style={styles.textAnswers}>A</Text>
                      </View>
                    </View>
                    <View style={{ width: "33%", alignItems: "center" }}>
                      <FitImage
                        source={{
                          uri: "http://nikaws.cf/" + part9.answers[1].url,
                        }}
                        style={styles.fitImageWithSize}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        
                        <CheckBox 
                          checked={cleanAnswerP9 ? false : qes1Two}
                          onPress= {() => qes1TwoPress()}
                          style={{marginRight:20}}
                        />
                        <Text style={styles.textAnswers}>B</Text>
                      </View>
                    </View>
                    <View style={{ width: "33%", alignItems: "center" }}>
                      <FitImage
                        source={{
                          uri: "http://nikaws.cf/" + part9.answers[2].url,
                        }}
                        style={styles.fitImageWithSize}
                      />

                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        <CheckBox 
                          checked={cleanAnswerP9 ? false : qes1Three}
                          onPress= {() => qes1ThreePress()}
                          style={{marginRight:20}}
                        />
                        <Text style={styles.textAnswers}>C</Text>
                      </View>
                    </View>
                  </View>
                </CardItem>

                {/* cau 2 */}
                <CardItem header>
                  <Text style={styles.textTitle}>
                    2. {part9.questions[1].noidung_cauhoi}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 5,
                    }}
                  >
                    <View style={{ width: "33%", alignItems: "center" }}>
                      <FitImage
                        source={{
                          uri: "http://nikaws.cf/" + part9.answers[0].url,
                        }}
                        style={styles.fitImageWithSize}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        <CheckBox 
                          checked={cleanAnswerP9 ? false : qes2One}
                          onPress= {() => qes2OnePress()}
                          style={{marginRight:20}}
                        />
                        <Text style={styles.textAnswers}>A</Text>
                      </View>
                    </View>
                    <View style={{ width: "33%", alignItems: "center" }}>
                      <FitImage
                        source={{
                          uri: "http://nikaws.cf/" + part9.answers[1].url,
                        }}
                        style={styles.fitImageWithSize}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                      <CheckBox 
                        checked={cleanAnswerP9 ? false : qes2Two}
                        onPress= {() => qes2TwoPress()}
                        style={{marginRight:20}}
                      />
                        <Text style={styles.textAnswers}>B</Text>
                      </View>
                    </View>
                    <View style={{ width: "33%", alignItems: "center" }}>
                      <FitImage
                        source={{
                          uri: "http://nikaws.cf/" + part9.answers[2].url,
                        }}
                        style={styles.fitImageWithSize}
                      />

                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                      <CheckBox 
                        checked={cleanAnswerP9 ? false : qes2Three}
                        onPress= {() => qes2ThreePress()}
                        style={{marginRight:20}}
                      />
                        <Text style={styles.textAnswers}>C</Text>
                      </View>
                    </View>
                  </View>
                </CardItem>
                {/* cau 3 */}

                <CardItem header>
                  <Text style={styles.textTitle}>
                    3. {part9.questions[2].noidung_cauhoi}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 5,
                    }}
                  >
                    <View style={{ width: "33%", alignItems: "center" }}>
                      <FitImage
                        source={{
                          uri: "http://nikaws.cf/" + part9.answers[3].url,
                        }}
                        style={styles.fitImageWithSize}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                      <CheckBox 
                        checked={cleanAnswerP9 ? false : qes3One}
                        onPress= {() => qes3OnePress()}
                        style={{marginRight:20}}
                      />
                      <Text style={styles.textAnswers}>A</Text>
                      </View>
                    </View>
                    <View style={{ width: "33%", alignItems: "center" }}>
                      <FitImage
                        source={{
                          uri: "http://nikaws.cf/" + part9.answers[4].url,
                        }}
                        style={styles.fitImageWithSize}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                      <CheckBox 
                        checked={cleanAnswerP9 ? false : qes3Two}
                        onPress= {() => qes3TwoPress()}
                        style={{marginRight:20}}
                      />
                        <Text style={styles.textAnswers}>B</Text>
                      </View>
                    </View>
                    <View style={{ width: "33%", alignItems: "center" }}>
                      <FitImage
                        source={{
                          uri: "http://nikaws.cf/" + part9.answers[5].url,
                        }}
                        style={styles.fitImageWithSize}
                      />

                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                      <CheckBox 
                        checked={cleanAnswerP9 ? false : qes3Three}
                        onPress= {() => qes3ThreePress()}
                        style={{marginRight:20}}
                      />
                      <Text style={styles.textAnswers}>C</Text>
                      </View>
                    </View>
                  </View>
                </CardItem>

                {/* cau 4 */}
                <CardItem header>
                  <Text style={styles.textTitle}>
                    4. {part9.questions[3].noidung_cauhoi}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 5,
                    }}
                  >
                    <View style={{ width: "33%", alignItems: "center" }}>
                      <FitImage
                        source={{
                          uri: "http://nikaws.cf/" + part9.answers[6].url,
                        }}
                        style={styles.fitImageWithSize}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                      <CheckBox 
                        checked={cleanAnswerP9 ? false : qes4One}
                        onPress= {() => qes4OnePress()}
                        style={{marginRight:20}}
                      />
                        <Text style={styles.textAnswers}>A</Text>
                      </View>
                    </View>
                    <View style={{ width: "33%", alignItems: "center" }}>
                      <FitImage
                        source={{
                          uri: "http://nikaws.cf/" + part9.answers[7].url,
                        }}
                        style={styles.fitImageWithSize}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                      <CheckBox 
                        checked={cleanAnswerP9 ? false : qes4Two}
                        onPress= {() => qes4TwoPress()}
                        style={{marginRight:20}}
                      />
                      <Text style={styles.textAnswers}>B</Text>
                      </View>
                    </View>
                    <View style={{ width: "33%", alignItems: "center" }}>
                      <FitImage
                        source={{
                          uri: "http://nikaws.cf/" + part9.answers[8].url,
                        }}
                        style={styles.fitImageWithSize}
                      />

                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                      <CheckBox 
                        checked={cleanAnswerP9 ? false : qes4Three}
                        onPress= {() => qes4ThreePress()}
                        style={{marginRight:20}}
                      />
                      <Text style={styles.textAnswers}>C</Text>
                      </View>
                    </View>
                  </View>
                </CardItem>

                {/* cau 5 */}
                <CardItem header>
                  <Text style={styles.textTitle}>
                    5. {part9.questions[4].noidung_cauhoi}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 5,
                    }}
                  >
                    <View style={{ width: "33%", alignItems: "center" }}>
                      <FitImage
                        source={{
                          uri: "http://nikaws.cf/" + part9.answers[9].url,
                        }}
                        style={styles.fitImageWithSize}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                      <CheckBox 
                        checked={cleanAnswerP9 ? false : qes5One}
                        onPress= {() => qes5OnePress()}
                        style={{marginRight:20}}
                      />
                      <Text style={styles.textAnswers}>A</Text>
                      </View>
                    </View>
                    <View style={{ width: "33%", alignItems: "center" }}>
                      <FitImage
                        source={{
                          uri: "http://nikaws.cf/" + part9.answers[10].url,
                        }}
                        style={styles.fitImageWithSize}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                      <CheckBox 
                        checked={cleanAnswerP9 ? false : qes5Two}
                        onPress= {() => qes5TwoPress()}
                        style={{marginRight:20}}
                      />
                      <Text style={styles.textAnswers}>B</Text>
                      </View>
                    </View>
                    <View style={{ width: "33%", alignItems: "center" }}>
                      <FitImage
                        source={{
                          uri: "http://nikaws.cf/" + part9.answers[11].url,
                        }}
                        style={styles.fitImageWithSize}
                      />

                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                      <CheckBox 
                        checked={cleanAnswerP9 ? false : qes5Three}
                        onPress= {() => qes5ThreePress()}
                        style={{marginRight:20}}
                      />
                        <Text style={styles.textAnswers}>C</Text>
                      </View>
                    </View>
                  </View>
                </CardItem>
              </Card>
            </View>
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
  name: {
      color: 'white',
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
  speed: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
  },
  speedItem: {
      width: 50,
  },
  actionButtons: {
      
  },
  actionButtonsOther: {
      flexDirection:'row',
      justifyContent:'center',
  },
  pauseOrPlayButton: {
      marginRight: 10,
      marginLeft: 10,
      width: 50,
  },
  actionButtonsOtherTimeDown: {
      // left: -35,
  },
  actionButtonsOtherTimeUp: {
      // width: 40,
  },
  changeAudio: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'center',
  },
  button: {
      justifyContent: 'center',
  },
  img: {
    width: 64,
    height: 64,
  },
  fitImage: {
    borderRadius: 5,
  },
  fitImageWithSize: {
    height: 89,
    width: 135,
  },
  fitImageWithSizeAll: {
    height: 280,
    width: 220,
  },
  textAnswers: {
    color: "#000",
    fontSize: 15,
  },
  textTitle: {
    color: "#000",
    fontSize: 18,
    marginLeft: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },
  textStyle: {
    flex: 1,
    padding: 5,
  },
});

export default Part9;

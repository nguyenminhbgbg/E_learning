import React, { useState, useEffect} from 'react';
import { Container, Card, CardItem,CheckBox} from 'native-base';
import { ScrollView, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import FitImage from "react-native-fit-image";
import { useAudioHelper } from '../../../helpers/audio-helper';
import Slider from '@react-native-community/slider';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux';
import { savePointP11 , changeCleanP11 } from '../../../redux/actions';

const Part11 = ({ route, navigation }) =>{
  const player = useAudioHelper({
    listSounds: [{
      type: 'network',
      path: `https://nikaws.cf/datafordb/iKbvUgcz6D2OkiEIhoMroRUCR6uZZKeoTzK4vUTO.mp3`,
      name: "P9",
    }],
    timeRate: 15,
    isLogStatus: true,
  });
  const dispatch = useDispatch();
  const SavePointP11 = (point) => dispatch(savePointP11(point));
  const ChangeCleanP11 = () => dispatch(changeCleanP11());
  const [clean, setClean] = useState(null);
  useEffect(() => {
    setClean(cleanAnswerP11);
    if(clean == true){
      ChangeCleanP11();
      setQes1One(false) , setQes1Two(false), setQes1Three(false);
      setQes2One(false) , setQes2Two(false), setQes2Three(false);
      setQes3One(false) , setQes3Two(false), setQes3Three(false);
      setQes4One(false) , setQes4Two(false), setQes4Three(false);
      setQes5One(false) , setQes5Two(false), setQes5Three(false);
    }
  });

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
      qes1Three, qes2Three, qes3Three, qes4Three, qes5Three, part11]);
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

    findDataDone(part11.questions, part11.answers);

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
    SavePointP11(points);
    
  };
  const {part11 , cleanAnswerP11, checkAnswer } = useSelector(state => state.mainReducer);

  return (
    <Container>
        <ScrollView>
          <Card>
          <FitImage
            indicator={false} // disable loading indicator
            indicatorColor="white" // react native colors or color codes like #919191
            style={styles.fitImage}
            source={{
              uri:`https://nikaws.cf/${
                part11.listPartDocumentArray[1].url
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
          {/* câu 1 */}
          <Card>
            <CardItem header>
              <Text style={styles.textQues}>11. {part11.questions[0].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={cleanAnswerP11 ? false : qes1One}
                  onPress= {() => qes1OnePress()}
                  style={{marginRight:20}}
                />
                {(part11.answers[0].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>A {part11.answers[0].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>A {part11.answers[0].noidung_dapan}</Text> }
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP11 ? false : qes1Two}
                  onPress= {() => qes1TwoPress()}
                  style={{marginRight:20}}
                />
                {(part11.answers[1].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>B {part11.answers[1].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>B {part11.answers[1].noidung_dapan}</Text> }
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP11 ? false : qes1Three}
                  onPress= {() => qes1ThreePress()}
                  style={{marginRight:20}}
                />
                {(part11.answers[2].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>C {part11.answers[2].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>C {part11.answers[2].noidung_dapan}</Text> }
              </CardItem>
              
          {/* Câu 2 */}
            <CardItem header>
              <Text style={styles.textQues}>12. {part11.questions[1].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={cleanAnswerP11 ? false : qes2One}
                  onPress= {() => qes2OnePress()}
                  style={{marginRight:20}}
                />
                {(part11.answers[3].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>A {part11.answers[3].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>A {part11.answers[3].noidung_dapan}</Text> }
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP11 ? false : qes2Two}
                  onPress= {() => qes2TwoPress()}
                  style={{marginRight:20}}
                />
                {(part11.answers[4].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>B {part11.answers[4].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>B {part11.answers[4].noidung_dapan}</Text> }
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP11 ? false : qes2Three}
                  onPress= {() => qes2ThreePress()}
                  style={{marginRight:20}}
                />
                {(part11.answers[5].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>C {part11.answers[5].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>C {part11.answers[5].noidung_dapan}</Text> }
              </CardItem>
          
          {/* Câu 3 */}
            <CardItem header>
              <Text style={styles.textQues}>13. {part11.questions[2].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={cleanAnswerP11 ? false : qes3One}
                  onPress= {() => qes3OnePress()}
                  style={{marginRight:20}}
                />
                {(part11.answers[6].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>A {part11.answers[6].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>A {part11.answers[6].noidung_dapan}</Text> }
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP11 ? false : qes3Two}
                  onPress= {() => qes3TwoPress()}
                  style={{marginRight:20}}
                />
                {(part11.answers[7].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>B {part11.answers[7].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>B {part11.answers[7].noidung_dapan}</Text> }
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP11 ? false : qes3Three}
                  onPress= {() => qes3ThreePress()}
                  style={{marginRight:20}}
                />
                {(part11.answers[8].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>C {part11.answers[8].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>C {part11.answers[8].noidung_dapan}</Text> }
              </CardItem>
        
          {/* Câu 4 */}
            <CardItem header>
              <Text style={styles.textQues}>14. {part11.questions[3].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={cleanAnswerP11 ? false : qes4One}
                  onPress= {() => qes4OnePress()}
                  style={{marginRight:20}}
                />
                {(part11.answers[9].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>A {part11.answers[9].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>A {part11.answers[9].noidung_dapan}</Text> }
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP11 ? false : qes4Two}
                  onPress= {() => qes4TwoPress()}
                  style={{marginRight:20}}
                />
                {(part11.answers[10].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>B {part11.answers[10].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>B {part11.answers[10].noidung_dapan}</Text> }
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP11 ? false : qes4Three}
                  onPress= {() => qes4ThreePress()}
                  style={{marginRight:20}}
                />
                {(part11.answers[11].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>C {part11.answers[11].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>C {part11.answers[11].noidung_dapan}</Text> }
              </CardItem>
          
          {/* Câu 5 */}
            <CardItem header>
              <Text style={styles.textQues}>15. {part11.questions[4].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={cleanAnswerP11 ? false : qes5One}
                  onPress= {() => qes5OnePress()}
                  style={{marginRight:20}}
                />
                {(part11.answers[12].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>A {part11.answers[12].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>A {part11.answers[12].noidung_dapan}</Text> }
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP11 ? false : qes5Two}
                  onPress= {() => qes5TwoPress()}
                  style={{marginRight:20}}
                />
                {(part11.answers[13].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>B {part11.answers[13].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>B {part11.answers[13].noidung_dapan}</Text> }
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP11 ? false : qes5Three}
                  onPress= {() => qes5ThreePress()}
                  style={{marginRight:20}}
                />
                {(part11.answers[14].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>C {part11.answers[14].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>C {part11.answers[14].noidung_dapan}</Text> }
              </CardItem>
          </Card>
          
        </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
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
  textAnswers: {
    color:'#000',
    fontSize: 16
  },
   textQues: {
    color:'#000',
    fontSize: 18
   }
});

export default Part11;

import React, { useState, useEffect} from 'react';
import { Container, Card, CardItem,CheckBox} from 'native-base';
import { ScrollView, Text, StyleSheet } from 'react-native';
import FitImage from "react-native-fit-image";
import { savePointP5 ,changeCleanP5 } from '../../../redux/actions';

import { useSelector, useDispatch } from 'react-redux';

const Part5 = ({ route, navigation }) =>{

  const dispatch = useDispatch();
  const SavePointP5 = (point) => dispatch(savePointP5(point));
  const ChangeCleanP5 = () => dispatch(changeCleanP5());
  const [clean, setClean] = useState(null);

  useEffect(() => {
    setClean(cleanAnswerP5);
    if(clean == true){
      ChangeCleanP5();
      setQes1One(false) , setQes1Two(false), setQes1Three(false);
      setQes2One(false) , setQes2Two(false), setQes2Three(false);
      setQes3One(false) , setQes3Two(false), setQes3Three(false);
      setQes4One(false) , setQes4Two(false), setQes4Three(false);
      setQes5One(false) , setQes5Two(false), setQes5Three(false);
      setQes6One(false) , setQes6Two(false), setQes6Three(false);
      setQes7One(false) , setQes7Two(false), setQes7Three(false);
      setQes8One(false) , setQes8Two(false), setQes8Three(false);
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

  const [qes6One, setQes6One] = useState(false);
  const [qes6Two, setQes6Two] = useState(false);
  const [qes6Three, setQes6Three] = useState(false);

  const [qes7One, setQes7One] = useState(false);
  const [qes7Two, setQes7Two] = useState(false);
  const [qes7Three, setQes7Three] = useState(false);

  const [qes8One, setQes8One] = useState(false);
  const [qes8Two, setQes8Two] = useState(false);
  const [qes8Three, setQes8Three] = useState(false);

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

  const qes6OnePress = () => {
    setQes6One(true); setQes6Two(false); setQes6Three(false)
  }
  const qes6TwoPress = () => {
    setQes6One(false); setQes6Two(true); setQes6Three(false)
  }
  const qes6ThreePress = () => {
    setQes6One(false); setQes6Two(false); setQes6Three(true)
  }

  const qes7OnePress = () => {
    setQes7One(true); setQes7Two(false); setQes7Three(false)
  }
  const qes7TwoPress = () => {
    setQes7One(false); setQes7Two(true); setQes7Three(false)
  }
  const qes7ThreePress = () => {
    setQes7One(false); setQes7Two(false); setQes7Three(true)
  }

  const qes8OnePress = () => {
    setQes8One(true); setQes8Two(false); setQes8Three(false)
  }
  const qes8TwoPress = () => {
    setQes8One(false); setQes8Two(true); setQes8Three(false)
  }
  const qes8ThreePress = () => {
    setQes8One(false); setQes8Two(false); setQes8Three(true)
  }

  useEffect(() => {
    
    if(qes1One == true || qes2One == true || qes3One == true || qes4One == true || qes5One == true || qes6One == true || qes7One == true || qes8One == true
      || qes1Two == true || qes2Two == true || qes3Two == true || qes4Two == true || qes5Two == true || qes6Two == true || qes7Two == true || qes8Two == true 
      || qes1Three == true || qes2Three == true|| qes3Three == true|| qes4Three == true|| qes5Three == true || qes6Three == true || qes7Three == true || qes8Three == true){
      checkAnswers();
    }
  }, [part5, qes1One,qes2One,qes3One, qes4One, qes5One,qes6One,qes7One,,qes8One, qes1Two, qes2Two, qes3Two, qes4Two, qes5Two,
    qes6Two, qes7Two, qes8Two, qes1Three, qes2Three, qes3Three, qes4Three, qes5Three,qes6Three, qes7Three, qes8Three]);
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

    findDataDone(part5.questions, part5.answers);

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
    if (qes6One == true && c[15] == 1) {
      points = points + 1;
    }
    if (qes6Two == true && c[16] == 1) {
      points = points + 1;
    }
    if (qes6Three == true && c[17] == 1) {
      points = points + 1;
    }
    if (qes7One == true && c[18] == 1) {
      points = points + 1;
    }
    if (qes7Two == true && c[19] == 1) {
      points = points + 1;
    }
    if (qes7Three == true && c[20] == 1) {
      points = points + 1;
    }
    if (qes8One == true && c[21] == 1) {
      points = points + 1;
    }
    if (qes8Two == true && c[22] == 1) {
      points = points + 1;
    }
    if (qes8Three == true && c[23] == 1) {
      points = points + 1;
    }
    SavePointP5(points);
    
  };
  const {part5, cleanAnswerP5, checkAnswer } = useSelector(state => state.mainReducer);

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
                part5.listPartDocumentArray[0].url
              }`
          }}/>
          </Card>
          
          {/* câu 1 */}
          <Card>
            <CardItem header>
              <Text style={styles.textQues}>28. {part5.questions[0].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={cleanAnswerP5 ? false : qes1One}
                  onPress= {() => qes1OnePress()}
                  style={{marginRight:20}}
                />
                {(part5.answers[0].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>A {part5.answers[0].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>A {part5.answers[0].noidung_dapan}</Text> }
                
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes1Two}
                  onPress= {() => qes1TwoPress()}
                  style={{marginRight:20}}
                />
                {(part5.answers[1].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>B {part5.answers[1].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>B {part5.answers[1].noidung_dapan}</Text> }
                
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes1Three}
                  onPress= {() => qes1ThreePress()}
                  style={{marginRight:20}}
                />
                {(part5.answers[2].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>C {part5.answers[2].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>C {part5.answers[2].noidung_dapan}</Text> }
              
              </CardItem>
              
          {/* Câu 2 */}
          
            <CardItem header>
              <Text style={styles.textQues}>29. {part5.questions[1].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={cleanAnswerP5 ? false : qes2One}
                  onPress= {() => qes2OnePress()}
                  style={{marginRight:20}}
                />
                {(part5.answers[3].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>A {part5.answers[3].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>A {part5.answers[3].noidung_dapan}</Text> }
                
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes2Two}
                  onPress= {() => qes2TwoPress()}
                  style={{marginRight:20}}
                />
                {(part5.answers[4].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>B {part5.answers[4].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>B {part5.answers[4].noidung_dapan}</Text> }
                
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes2Three}
                  onPress= {() => qes2ThreePress()}
                  style={{marginRight:20}}
                />
                {(part5.answers[5].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>C {part5.answers[5].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>C {part5.answers[5].noidung_dapan}</Text> }
              
              </CardItem>
          
          {/* Câu 3 */}
          
            <CardItem header>
              <Text style={styles.textQues}>30. {part5.questions[2].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={cleanAnswerP5 ? false : qes3One}
                  onPress= {() => qes3OnePress()}
                  style={{marginRight:20}}
                />
                {(part5.answers[6].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>A {part5.answers[6].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>A {part5.answers[6].noidung_dapan}</Text> }
                
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes3Two}
                  onPress= {() => qes3TwoPress()}
                  style={{marginRight:20}}
                />
                {(part5.answers[7].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>B {part5.answers[7].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>B {part5.answers[7].noidung_dapan}</Text> }
                
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes3Three}
                  onPress= {() => qes3ThreePress()}
                  style={{marginRight:20}}
                />
                {(part5.answers[8].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>C {part5.answers[8].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>C {part5.answers[8].noidung_dapan}</Text> }
              
              </CardItem>
        
          {/* Câu 31 */}
          
            <CardItem header>
              <Text style={styles.textQues}>31. {part5.questions[3].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={cleanAnswerP5 ? false : qes4One}
                  onPress= {() => qes4OnePress()}
                  style={{marginRight:20}}
                />
                {(part5.answers[9].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>A {part5.answers[9].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>A {part5.answers[9].noidung_dapan}</Text> }
                
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes4Two}
                  onPress= {() => qes4TwoPress()}
                  style={{marginRight:20}}
                />
                {(part5.answers[10].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>B {part5.answers[10].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>B {part5.answers[10].noidung_dapan}</Text> }
                
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes4Three}
                  onPress= {() => qes4ThreePress()}
                  style={{marginRight:20}}
                />
                {(part5.answers[11].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>C {part5.answers[11].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>C {part5.answers[11].noidung_dapan}</Text> }
              
              </CardItem>
          
          {/* Câu 5 */}
          
            <CardItem header>
              <Text style={styles.textQues}>32. {part5.questions[4].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={cleanAnswerP5 ? false : qes5One}
                  onPress= {() => qes5OnePress()}
                  style={{marginRight:20}}
                />
                {(part5.answers[12].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>A {part5.answers[12].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>A {part5.answers[12].noidung_dapan}</Text> }
                
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes5Two}
                  onPress= {() => qes5TwoPress()}
                  style={{marginRight:20}}
                />
                {(part5.answers[13].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>B {part5.answers[13].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>B {part5.answers[13].noidung_dapan}</Text> }
                
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes5Three}
                  onPress= {() => qes5ThreePress()}
                  style={{marginRight:20}}
                />
                {(part5.answers[14].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>C {part5.answers[14].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>C {part5.answers[14].noidung_dapan}</Text> }
              </CardItem>

              {/* Câu 6 */}
          
            <CardItem header>
              <Text style={styles.textQues}>33. {part5.questions[5].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem Body>
                <CheckBox
                  checked={cleanAnswerP5 ? false : qes6One}
                  onPress= {() => qes6OnePress()}
                  style={{marginRight:20}}
                />
                {(part5.answers[15].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>A {part5.answers[15].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>A {part5.answers[15].noidung_dapan}</Text> }
                
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes6Two}
                  onPress= {() => qes6TwoPress()}
                  style={{marginRight:20}}
                />
                 {(part5.answers[16].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>B {part5.answers[16].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>B {part5.answers[16].noidung_dapan}</Text> }
                
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes6Three}
                  onPress= {() => qes6ThreePress()}
                  style={{marginRight:20}}
                />
                {(part5.answers[17].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>C {part5.answers[17].noidung_dapan}</Text>
                ) : <Text style={styles.textAnswers}>C {part5.answers[17].noidung_dapan}</Text> }
              
              </CardItem>

              {/* Câu 7 */}
          
            <CardItem header>
              <Text style={styles.textQues}>34. {part5.questions[6].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem Body>
                <CheckBox
                  checked={cleanAnswerP5 ? false : qes7One}
                  onPress= {() => qes7OnePress()}
                  style={{marginRight:20}}
                />
                {(part5.answers[18].dapan == 1 && checkAnswer) ? (
                  <Text style={{color:'red'}}>A {part5.answers[18].noidung_dapan}</Text> 
                ) : <Text style={styles.textAnswers}>A {part5.answers[18].noidung_dapan}</Text> }
                
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes7Two}
                  onPress= {() => qes7TwoPress()}
                  style={{marginRight:20}}
                  />
                  {(part5.answers[19].dapan == 1 && checkAnswer) ? (
                    <Text style={{color:'red'}}>B {part5.answers[19].noidung_dapan}</Text>
                  ) : <Text style={styles.textAnswers}>B {part5.answers[19].noidung_dapan}</Text> }
                
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes7Three}
                  onPress= {() => qes7ThreePress()}
                  style={{marginRight:20}}
                />
                {(part5.answers[20].dapan == 1 && checkAnswer) ? (
                    <Text style={{color:'red'}}>C {part5.answers[20].noidung_dapan}</Text>
                  ) : <Text style={styles.textAnswers}>C {part5.answers[20].noidung_dapan}</Text> }
              
              </CardItem>

              {/* Câu 8 */}
          
            <CardItem header>
              <Text style={styles.textQues}>35. {part5.questions[7].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={cleanAnswerP5 ? false : qes8One}
                  onPress= {() => qes8OnePress()}
                  style={{marginRight:20}}
                />
                {(part5.answers[21].dapan == 1 && checkAnswer) ? (
                    <Text style={{color:'red'}}>A {part5.answers[21].noidung_dapan}</Text>
                  ) : <Text style={styles.textAnswers}>A {part5.answers[21].noidung_dapan}</Text> }
                
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes8Two}
                  onPress= {() => qes8TwoPress()}
                  style={{marginRight:20}}
                />
                {(part5.answers[22].dapan == 1 && checkAnswer) ? (
                    <Text style={{color:'red'}}>B {part5.answers[22].noidung_dapan}</Text>
                  ) : <Text style={styles.textAnswers}>B {part5.answers[22].noidung_dapan}</Text> }
                
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes8Three}
                  onPress= {() => qes8ThreePress()}
                  style={{marginRight:20}}
                />
                {(part5.answers[23].dapan == 1 && checkAnswer) ? (
                    <Text style={{color:'red'}}>C {part5.answers[23].noidung_dapan}</Text>
                  ) : <Text style={styles.textAnswers}>C {part5.answers[23].noidung_dapan}</Text> }
              
              </CardItem>
          </Card>
          
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

export default Part5;

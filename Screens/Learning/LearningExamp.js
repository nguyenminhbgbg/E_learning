import React, { Component ,useState, useEffect} from 'react';
import { Container, Title, Card, CardItem,CheckBox, Header,H1,H2, Left, Body, Right, Button, Icon } from 'native-base';
import { ScrollView, FlatList,TouchableOpacity, View, Text, StyleSheet } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { getLessonDetail } from '../../redux/actions';

const LearningExamp = ({ route, navigation }) =>{

  const [isShowAnswer, setIsShowAnswer] = React.useState(false);
  const [listAnswer, setListAnswer] = React.useState([]);

  const [qes1One, setQes1One] = useState(false);
  const [qes1Two, setQes1Two] = useState(false);
  const [qes1Three, setQes1Three] = useState(false);
  const [qes1Four, setQes1Four] = useState(false);

  const [qes2One, setQes2One] = useState(false);
  const [qes2Two, setQes2Two] = useState(false);
  const [qes2Three, setQes2Three] = useState(false);
  const [qes2Four, setQes2Four] = useState(false);

  const [qes3One, setQes3One] = useState(false);
  const [qes3Two, setQes3Two] = useState(false);
  const [qes3Three, setQes3Three] = useState(false);
  const [qes3Four, setQes3Four] = useState(false);

  const [qes4One, setQes4One] = useState(false);
  const [qes4Two, setQes4Two] = useState(false);
  const [qes4Three, setQes4Three] = useState(false);
  const [qes4Four, setQes4Four] = useState(false);

  const [qes5One, setQes5One] = useState(false);
  const [qes5Two, setQes5Two] = useState(false);
  const [qes5Three, setQes5Three] = useState(false);
  const [qes5Four, setQes5Four] = useState(false);

  const [qes6One, setQes6One] = useState(false);
  const [qes6Two, setQes6Two] = useState(false);
  const [qes6Three, setQes6Three] = useState(false);
  const [qes6Four, setQes6Four] = useState(false);

  const [qes7One, setQes7One] = useState(false);
  const [qes7Two, setQes7Two] = useState(false);
  const [qes7Three, setQes7Three] = useState(false);
  const [qes7Four, setQes7Four] = useState(false);

  const [qes8One, setQes8One] = useState(false);
  const [qes8Two, setQes8Two] = useState(false);
  const [qes8Three, setQes8Three] = useState(false);
  const [qes8Four, setQes8Four] = useState(false);

  const [qes9One, setQes9One] = useState(false);
  const [qes9Two, setQes9Two] = useState(false);
  const [qes9Three, setQes9Three] = useState(false);
  const [qes9Four, setQes9Four] = useState(false);

  const qes1OnePress = () => {
    setQes1One(true); setQes1Two(false); setQes1Three(false); setQes1Four(false)
  }
  const qes1TwoPress = () => {
    setQes1One(false); setQes1Two(true); setQes1Three(false); setQes1Four(false)
  }
  const qes1ThreePress = () => {
    setQes1One(false); setQes1Two(false); setQes1Three(true); setQes1Four(false)
  }
  const qes1FourPress = () => {
    setQes1One(false); setQes1Two(false); setQes1Three(false); setQes1Four(true)
  }

  const qes2OnePress = () => {
    setQes2One(true); setQes2Two(false); setQes2Three(false); setQes2Four(false)
  }
  const qes2TwoPress = () => {
    setQes2One(false); setQes2Two(true); setQes2Three(false); setQes2Four(false)
  }
  const qes2ThreePress = () => {
    setQes2One(false); setQes2Two(false); setQes2Three(true); setQes2Four(false)
  }
  const qes2FourPress = () => {
    setQes2One(false); setQes2Two(false); setQes2Three(false); setQes2Four(true)
  }

  const qes3OnePress = () => {
    setQes3One(true); setQes3Two(false); setQes3Three(false); setQes3Four(false)
  }
  const qes3TwoPress = () => {
    setQes3One(false); setQes3Two(true); setQes3Three(false); setQes3Four(false)
  }
  const qes3ThreePress = () => {
    setQes3One(false); setQes3Two(false); setQes3Three(true); setQes3Four(false)
  }
  const qes3FourPress = () => {
    setQes3One(false); setQes3Two(false); setQes3Three(false); setQes3Four(true)
  }

  const qes4OnePress = () => {
    setQes4One(true); setQes4Two(false); setQes4Three(false); setQes4Four(false)
  }
  const qes4TwoPress = () => {
    setQes4One(false); setQes4Two(true); setQes4Three(false); setQes4Four(false)
  }
  const qes4ThreePress = () => {
    setQes4One(false); setQes4Two(false); setQes4Three(true); setQes4Four(false)
  }
  const qes4FourPress = () => {
    setQes4One(false); setQes4Two(false); setQes4Three(false); setQes4Four(true)
  }

  const qes5OnePress = () => {
    setQes5One(true); setQes5Two(false); setQes5Three(false); setQes5Four(false)
  }
  const qes5TwoPress = () => {
    setQes5One(false); setQes5Two(true); setQes5Three(false); setQes5Four(false)
  }
  const qes5ThreePress = () => {
    setQes5One(false); setQes5Two(false); setQes5Three(true); setQes5Four(false)
  }
  const qes5FourPress = () => {
    setQes5One(false); setQes5Two(false); setQes5Three(false); setQes5Four(true)
  }

  const qes6OnePress = () => {
    setQes6One(true); setQes6Two(false); setQes6Three(false); setQes6Four(false)
  }
  const qes6TwoPress = () => {
    setQes6One(false); setQes6Two(true); setQes6Three(false); setQes6Four(false)
  }
  const qes6ThreePress = () => {
    setQes6One(false); setQes6Two(false); setQes6Three(true); setQes6Four(false)
  }
  const qes6FourPress = () => {
    setQes6One(false); setQes6Two(false); setQes6Three(false); setQes6Four(true)
  }

  const qes7OnePress = () => {
    setQes7One(true); setQes7Two(false); setQes7Three(false); setQes7Four(false)
  }
  const qes7TwoPress = () => {
    setQes7One(false); setQes7Two(true); setQes7Three(false); setQes7Four(false)
  }
  const qes7ThreePress = () => {
    setQes7One(false); setQes7Two(false); setQes7Three(true); setQes7Four(false)
  }
  const qes7FourPress = () => {
    setQes7One(false); setQes7Two(false); setQes7Three(false); setQes7Four(true)
  }

  const qes8OnePress = () => {
    setQes8One(true); setQes8Two(false); setQes8Three(false); setQes8Four(false)
  }
  const qes8TwoPress = () => {
    setQes8One(false); setQes8Two(true); setQes8Three(false); setQes8Four(false)
  }
  const qes8ThreePress = () => {
    setQes8One(false); setQes8Two(false); setQes8Three(true); setQes8Four(false)
  }
  const qes8FourPress = () => {
    setQes8One(false); setQes8Two(false); setQes8Three(false); setQes8Four(true)
  }

  const qes9OnePress = () => {
    setQes9One(true); setQes9Two(false); setQes9Three(false); setQes9Four(false)
  }
  const qes9TwoPress = () => {
    setQes9One(false); setQes9Two(true); setQes9Three(false); setQes9Four(false)
  }
  const qes9ThreePress = () => {
    setQes9One(false); setQes9Two(false); setQes9Three(true); setQes9Four(false)
  }
  const qes9FourPress = () => {
    setQes9One(false); setQes9Two(false); setQes9Three(false); setQes9Four(true)
  }

  const checkAnswers = () => {
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

    var d = [];
    findDataDone(lessonDetailListQuestion, lessonDetailListAnswer);

    console.log(c);

    c.forEach((answer, index, array) =>{
      if(answer == 1){
        d.push(lessonDetailListAnswer[index].noidung_dapan)
      }
    })
    setListAnswer(d);
    console.log("data Arr D"+d);
    
  };

  useEffect(() => {
    console.log("data List"+ listAnswer)
  }, [listAnswer]);

  const SetIsShowAnswer = () => {
    if(isShowAnswer){
      setIsShowAnswer(false)
    }else{
      setIsShowAnswer(true)
    }
  }
  const { lessonDetailListQuestion, lessonDetailListAnswer } = useSelector(state => state.mainReducer);
  const dispatch = useDispatch();
  const fetchLessonDetail = (lessonId) => dispatch(getLessonDetail(lessonId));
  
  return (
    <Container>
        <Header style={{backgroundColor:'#d1a0a7'}}>
              <Left>
                  <Button 
                  onPress={() => navigation.goBack()}
                  transparent>
                  <Icon name='arrow-back' />
                  </Button>
              </Left>
              <Body>
                  <Title>Bài tập rèn luyện</Title>
              </Body>
              <Right>
                  <Button
                  onPress={() => navigation.openDrawer() }
                  transparent>
                    <Icon name='menu' />
                  </Button>
              </Right>
          </Header>
        <ScrollView>
          <View>
              <Text style={{flex:1,fontSize: 22, color: "#000", alignItems:'center', justifyContent:'center', textAlign:'center'}}>
                  Hoàn thành các bài tập sau để củng cố nội dung lý thuyết đã được được học.!
              </Text> 
          </View>
          {/* câu 1 */}
          <Card>
            <CardItem header>
              <Text style={{fontSize:18}}>1. {lessonDetailListQuestion[0].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={qes1One}
                  onPress= {() => qes1OnePress()}
                  style={{marginRight:20}}
                />
                <Text>A {lessonDetailListAnswer[0].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={qes1Two}
                  onPress= {() => qes1TwoPress()}
                  style={{marginRight:20}}
                />
                <Text>B {lessonDetailListAnswer[1].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={qes1Three}
                  onPress= {() => qes1ThreePress()}
                  style={{marginRight:20}}
                />
              <Text>C {lessonDetailListAnswer[2].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={qes1Four}
                  onPress= {() => qes1FourPress()}
                  style={{marginRight:20}}
                />
              <Text>D {lessonDetailListAnswer[3].noidung_dapan}</Text>
              </CardItem>
          
          {/* Câu 2 */}
          
            <CardItem header>
              <Text style={{fontSize:18}}>2. {lessonDetailListQuestion[1].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={qes2One}
                  onPress= {() => qes2OnePress()}
                  style={{marginRight:20}}
                />
                <Text>A {lessonDetailListAnswer[4].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={qes2Two}
                  onPress= {() => qes2TwoPress()}
                  style={{marginRight:20}}
                />
                <Text>B {lessonDetailListAnswer[5].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={qes2Three}
                  onPress= {() => qes2ThreePress()}
                  style={{marginRight:20}}
                />
              <Text>C {lessonDetailListAnswer[6].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={qes2Four}
                  onPress= {() => qes2FourPress()}
                  style={{marginRight:20}}
                />
              <Text>D {lessonDetailListAnswer[7].noidung_dapan}</Text>
              </CardItem>
          
          {/* Câu 3 */}
          
            <CardItem header>
              <Text style={{fontSize:18}}>3. {lessonDetailListQuestion[2].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={qes3One}
                  onPress= {() => qes3OnePress()}
                  style={{marginRight:20}}
                />
                <Text>A {lessonDetailListAnswer[8].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={qes3Two}
                  onPress= {() => qes3TwoPress()}
                  style={{marginRight:20}}
                />
                <Text>B {lessonDetailListAnswer[9].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={qes3Three}
                  onPress= {() => qes3ThreePress()}
                  style={{marginRight:20}}
                />
              <Text>C {lessonDetailListAnswer[10].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={qes3Four}
                  onPress= {() => qes3FourPress()}
                  style={{marginRight:20}}
                />
              <Text>D {lessonDetailListAnswer[11].noidung_dapan}</Text>
              </CardItem>
          
          {/* Câu 4 */}
          
            <CardItem header>
              <Text style={{fontSize:18}}>4. {lessonDetailListQuestion[3].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={qes4One}
                  onPress= {() => qes4OnePress()}
                  style={{marginRight:20}}
                />
                <Text>A {lessonDetailListAnswer[12].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={qes4Two}
                  onPress= {() => qes4TwoPress()}
                  style={{marginRight:20}}
                />
                <Text>B {lessonDetailListAnswer[13].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={qes4Three}
                  onPress= {() => qes4ThreePress()}
                  style={{marginRight:20}}
                />
              <Text>C {lessonDetailListAnswer[14].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={qes4Four}
                  onPress= {() => qes4FourPress()}
                  style={{marginRight:20}}
                />
              <Text>D {lessonDetailListAnswer[15].noidung_dapan}</Text>
              </CardItem>
          
          {/* Câu 5 */}
          
            <CardItem header>
              <Text style={{fontSize:18}}>5. {lessonDetailListQuestion[4].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={qes5One}
                  onPress= {() => qes5OnePress()}
                  style={{marginRight:20}}
                />
                <Text>A {lessonDetailListAnswer[16].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={qes5Two}
                  onPress= {() => qes5TwoPress()}
                  style={{marginRight:20}}
                />
                <Text>B {lessonDetailListAnswer[17].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={qes5Three}
                  onPress= {() => qes5ThreePress()}
                  style={{marginRight:20}}
                />
              <Text>C {lessonDetailListAnswer[18].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={qes5Four}
                  onPress= {() => qes5FourPress()}
                  style={{marginRight:20}}
                />
              <Text>D {lessonDetailListAnswer[19].noidung_dapan}</Text>
              </CardItem>
          
          {/* Câu 6 */}
          
            <CardItem header>
              <Text style={{fontSize:18}}>6. {lessonDetailListQuestion[5].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={qes6One}
                  onPress= {() => qes6OnePress()}
                  style={{marginRight:20}}
                />
                <Text>A {lessonDetailListAnswer[20].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={qes6Two}
                  onPress= {() => qes6TwoPress()}
                  style={{marginRight:20}}
                />
                <Text>B {lessonDetailListAnswer[21].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={qes6Three}
                  onPress= {() => qes6ThreePress()}
                  style={{marginRight:20}}
                />
              <Text>C {lessonDetailListAnswer[22].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={qes6Four}
                  onPress= {() => qes6FourPress()}
                  style={{marginRight:20}}
                />
              <Text>D {lessonDetailListAnswer[23].noidung_dapan}</Text>
              </CardItem>
          
          {/* Câu 7 */}
          
            <CardItem header>
              <Text style={{fontSize:18}}>7. {lessonDetailListQuestion[6].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={qes7One}
                  onPress= {() => qes7OnePress()}
                  style={{marginRight:20}}
                />
                <Text>A {lessonDetailListAnswer[24].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={qes7Two}
                  onPress= {() => qes7TwoPress()}
                  style={{marginRight:20}}
                />
                <Text>B {lessonDetailListAnswer[25].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={qes7Three}
                  onPress= {() => qes7ThreePress()}
                  style={{marginRight:20}}
                />
              <Text>C {lessonDetailListAnswer[26].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={qes7Four}
                  onPress= {() => qes7FourPress()}
                  style={{marginRight:20}}
                />
              <Text>D {lessonDetailListAnswer[27].noidung_dapan}</Text>
              </CardItem>
          
          {/* Câu 8 */}
          
            <CardItem header>
              <Text style={{fontSize:18}}>8. {lessonDetailListQuestion[7].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={qes8One}
                  onPress= {() => qes8OnePress()}
                  style={{marginRight:20}}
                />
                <Text>A {lessonDetailListAnswer[28].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={qes8Two}
                  onPress= {() => qes8TwoPress()}
                  style={{marginRight:20}}
                />
                <Text>B {lessonDetailListAnswer[29].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={qes8Three}
                  onPress= {() => qes8ThreePress()}
                  style={{marginRight:20}}
                />
              <Text>C {lessonDetailListAnswer[30].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={qes8Four}
                  onPress= {() => qes8FourPress()}
                  style={{marginRight:20}}
                />
              <Text>D {lessonDetailListAnswer[31].noidung_dapan}</Text>
              </CardItem>
          
          {/* Câu 9 */}
          
            <CardItem header>
              <Text style={{fontSize:18}}>9. {lessonDetailListQuestion[8].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={qes9One}
                  onPress= {() => qes9OnePress()}
                  style={{marginRight:20}}
                />
                <Text>A {lessonDetailListAnswer[32].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={qes9Two}
                  onPress= {() => qes9TwoPress()}
                  style={{marginRight:20}}
                />
                <Text>B {lessonDetailListAnswer[33].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={qes9Three}
                  onPress= {() => qes9ThreePress()}
                  style={{marginRight:20}}
                />
              <Text>C {lessonDetailListAnswer[34].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={qes1Four}
                  onPress= {() => qes1FourPress()}
                  style={{marginRight:20}}
                />
              <Text>C {lessonDetailListAnswer[35].noidung_dapan}</Text>
              </CardItem>
          </Card>
          {isShowAnswer ? 
          <View style={{ flex: 1, marginTop: 8 }}>
              <H1>Danh sách đáp án:</H1>
              <Text>Câu 1: {listAnswer[0]}</Text>
              <Text>Câu 2: {listAnswer[1]}</Text>
              <Text>Câu 3: {listAnswer[3]}</Text>
              <Text>Câu 4: {listAnswer[3]}</Text>
              <Text>Câu 5: {listAnswer[4]}</Text>
              <Text>Câu 6: {listAnswer[5]}</Text>
              <Text>Câu 7: {listAnswer[6]}</Text>
              <Text>Câu 8: {listAnswer[7]}</Text>
              <Text>Câu 9: {listAnswer[8]}</Text>

              {/* <FlatList
                  data={listAnswer}
                  renderItem={renderItem}
                  keyExtractor={item => `${item}`}
                  horizontal
                  showsHorizontalScrollIndicator={false}
              /> */}
          </View>
          :<View></View>}
          {/* <View styles={{flexDirection: "row", padding: 10,
                        justifyContent: "space-between",
                        alignItems: "center" , }}>
              <Button 
                  info
                  style={{ flex:1, minWidth:'50%',alignItems:'center', justifyContent:'center'}}
                  onPress={() => ( SetIsShowAnswer(), checkAnswers() )}
                  >
                  <Text>Xem đáp án {isShowAnswer ? "👍" : "👎"}</Text>
              </Button>
          </View> */}
          <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
                onPress={() => ( SetIsShowAnswer(), checkAnswers() )}
                style={{
                    backgroundColor: "#3498db",
                    padding: 10, width: '70%', borderRadius: 20, alignItems: 'center'
                }}>
                    <Text style={{
                        textAlign: 'center', color: "#FFFFFF", fontSize: 20
                    }}>Xem đáp án {isShowAnswer ? "👍" : "👎"}</Text>
            </TouchableOpacity>
          </View>
          
          
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
});

export default LearningExamp;

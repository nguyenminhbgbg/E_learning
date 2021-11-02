<<<<<<< HEAD
import React, { Component } from "react";
import {
  ActivityIndicator,
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Card, CardItem, CheckBox } from "native-base";
import FitImage from "react-native-fit-image";
import AsyncStorage from "@react-native-community/async-storage";

const Part11URL = "http://nikaws.cf/getpart11/";

export default class Part11 extends Component {
  state = {
    data: [],
    listPartDocumentArray: [],
    document: [],
    answers: [],
    isLoading: true,

    one: false,
    two: false,
    three: false,

    qes12One: false,
    qes12two: false,
    qes12three: false,

    qes13One: false,
    qes13two: false,
    qes13three: false,

    qes14One: false,
    qes14two: false,
    qes14three: false,

    qes15One: false,
    qes15two: false,
    qes15three: false,

    pointPast11: 0,
  };
  onePress() {
    this.setState({ one: true, two: false, three: false });
  }
  twoPress() {
    this.setState({ one: false, two: true, three: false });
  }
  threePress() {
    this.setState({ one: false, two: false, three: true });
  }

  qes12OnePress() {
    this.setState({ qes12One: true, qes12two: false, qes12three: false });
  }
  qes12twoPress() {
    this.setState({ qes12One: false, qes12two: true, qes12three: false });
  }
  qes12threePress() {
    this.setState({ qes12One: false, qes12two: false, qes12three: true });
  }

  qes13OnePress() {
    this.setState({ qes13One: true, qes13two: false, qes13three: false });
  }
  qes13twoPress() {
    this.setState({ qes13One: false, qes13two: true, qes13three: false });
  }
  qes13threePress() {
    this.setState({ qes13One: false, qes13two: false, qes13three: true });
  }

  qes14OnePress() {
    this.setState({ qes14One: true, qes14two: false, qes14three: false });
  }
  qes14twoPress() {
    this.setState({ qes14One: false, qes14two: true, qes14three: false });
  }
  qes14threePress() {
    this.setState({ qes14One: false, qes14two: false, qes14three: true });
  }

  qes15OnePress() {
    this.setState({ qes15One: true, qes15two: false, qes15three: false });
  }
  qes15twoPress() {
    this.setState({ qes15One: false, qes15two: true, qes15three: false });
  }
  qes15threePress() {
    this.setState({ qes15One: false, qes15two: false, qes15three: true });
  }

  componentDidMount() {
    fetch(Part11URL + this.props.maDe)
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
    this.checkAnswers();
  }
  checkAnswers = async () => {
=======
import React, { useState, useEffect} from 'react';
import { Container, Card, CardItem,CheckBox} from 'native-base';
import { ScrollView, Text, StyleSheet } from 'react-native';
import FitImage from "react-native-fit-image";

import { useSelector, useDispatch } from 'react-redux';
import { savePointP11 , changeCleanP11 } from '../../../redux/actions';

const Part11 = ({ route, navigation }) =>{

  const dispatch = useDispatch();
  const SavePointP11 = (point) => dispatch(savePointP11(point));
  const ChangeCleanP11 = () => dispatch(changeCleanP11());
  useEffect(() => {
    if(cleanAnswerP11 == true){
      ChangeCleanP11();
    }
  }, [cleanAnswerP11]);

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
>>>>>>> d8039d6 (11/12 commit)
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
<<<<<<< HEAD
    var points = 0;

    findDataDone(this.state.data, this.state.answers);

    if (this.state.one == true && c[0] == 1) {
      points = points + 1;
    }
    if (this.state.two == true && c[1] == 1) {
      points = points + 1;
    }
    if (this.state.three == true && c[2] == 1) {
      points = points + 1;
    }
    if (this.state.qes12One == true && c[3] == 1) {
      points = points + 1;
    }
    if (this.state.qes12two == true && c[4] == 1) {
      points = points + 1;
    }
    if (this.state.qes12three == true && c[5] == 1) {
      points = points + 1;
    }
    if (this.state.qes13One == true && c[6] == 1) {
      points = points + 1;
    }
    if (this.state.qes13two == true && c[7] == 1) {
      points = points + 1;
    }
    if (this.state.qes13three == true && c[8] == 1) {
      points = points + 1;
    }
    if (this.state.qes14One == true && c[9] == 1) {
      points = points + 1;
    }
    if (this.state.qes14two == true && c[10] == 1) {
      points = points + 1;
    }
    if (this.state.qes14three == true && c[11] == 1) {
      points = points + 1;
    }
    if (this.state.qes15One == true && c[12] == 1) {
      points = points + 1;
    }
    if (this.state.qes15two == true && c[13] == 1) {
      points = points + 1;
    }
    if (this.state.qes15three == true && c[14] == 1) {
      points = points + 1;
    }

    this.state.pointPast11 = points;

    try {
      await AsyncStorage.setItem("pointPast11", this.state.pointPast11 + "");
    } catch (error) {
      console.log(error);
    }
  };
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
                  </View>
                )}
              />
            </View>
            <View
              style={{
                flexDirection: "column",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Card>
                {/* cau 11 */}
                <CardItem header>
                  <Text style={styles.textTitle}>
                    11. {data[0].noidung_cauhoi}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.one}
                    onPress={() => this.onePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    A: {answers[0].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.two}
                    onPress={() => this.twoPress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    B: {answers[1].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.three}
                    onPress={() => this.threePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    C: {answers[2].noidung_pa}
                  </Text>
                </CardItem>

                {/* cau 12 */}
                <CardItem header>
                  <Text style={styles.textTitle}>
                    12. {data[1].noidung_cauhoi}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes12One}
                    onPress={() => this.qes12OnePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    A: {answers[3].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes12two}
                    onPress={() => this.qes12twoPress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    B: {answers[4].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes12three}
                    onPress={() => this.qes12threePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    C: {answers[5].noidung_pa}
                  </Text>
                </CardItem>
                {/* cau 13 */}

                <CardItem header>
                  <Text style={styles.textTitle}>
                    13. {data[2].noidung_cauhoi}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes13One}
                    onPress={() => this.qes13OnePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    A: {answers[6].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes13two}
                    onPress={() => this.qes13twoPress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    B: {answers[7].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes13three}
                    onPress={() => this.qes13threePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    C: {answers[8].noidung_pa}
                  </Text>
                </CardItem>

                {/* cau 14 */}
                <CardItem header>
                  <Text style={styles.textTitle}>
                    14. {data[3].noidung_cauhoi}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes14One}
                    onPress={() => this.qes14OnePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    A: {answers[9].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes14two}
                    onPress={() => this.qes14twoPress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    B: {answers[10].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes14three}
                    onPress={() => this.qes14threePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    C: {answers[11].noidung_pa}
                  </Text>
                </CardItem>

                {/* cau 15 */}
                <CardItem header>
                  <Text style={styles.textTitle}>
                    15. {data[4].noidung_cauhoi}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes15One}
                    onPress={() => this.qes15OnePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    A: {answers[12].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes15two}
                    onPress={() => this.qes15twoPress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    B: {answers[13].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes15three}
                    onPress={() => this.qes15threePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    C: {answers[14].noidung_pa}
                  </Text>
                </CardItem>
              </Card>
            </View>
          </View>
        )}
      </ScrollView>
    );
  }
}
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
  textQuestion: {
    color: "#000",
    fontSize: 17,
    margin: 5,
    textAlign: "justify",
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
  textAnswers: {
    color: "#000",
    fontSize: 16,
  },
  textTitle: {
    color: "#000",
    fontSize: 18,
  },
});
=======

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
  const {part11 , cleanAnswerP11 } = useSelector(state => state.mainReducer);

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
                part11.listPartDocumentArray[1].url
              }`
          }}/>
          </Card>
          
          {/* câu 1 */}
          <Card>
            <CardItem header>
              <Text style={{fontSize:18}}>11. {part11.questions[0].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={cleanAnswerP11 ? false : qes1One}
                  onPress= {() => qes1OnePress()}
                  style={{marginRight:20}}
                />
                <Text>A {part11.answers[0].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP11 ? false : qes1Two}
                  onPress= {() => qes1TwoPress()}
                  style={{marginRight:20}}
                />
                <Text>B {part11.answers[1].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP11 ? false : qes1Three}
                  onPress= {() => qes1ThreePress()}
                  style={{marginRight:20}}
                />
              <Text>C {part11.answers[2].noidung_dapan}</Text>
              </CardItem>
              
          {/* Câu 2 */}
          
            <CardItem header>
              <Text style={{fontSize:18}}>12. {part11.questions[1].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={cleanAnswerP11 ? false : qes2One}
                  onPress= {() => qes2OnePress()}
                  style={{marginRight:20}}
                />
                <Text>A {part11.answers[3].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP11 ? false : qes2Two}
                  onPress= {() => qes2TwoPress()}
                  style={{marginRight:20}}
                />
                <Text>B {part11.answers[4].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP11 ? false : qes2Three}
                  onPress= {() => qes2ThreePress()}
                  style={{marginRight:20}}
                />
              <Text>C {part11.answers[5].noidung_dapan}</Text>
              </CardItem>
          
          {/* Câu 3 */}
          
            <CardItem header>
              <Text style={{fontSize:18}}>13. {part11.questions[2].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={cleanAnswerP11 ? false : qes3One}
                  onPress= {() => qes3OnePress()}
                  style={{marginRight:20}}
                />
                <Text>A {part11.answers[6].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP11 ? false : qes3Two}
                  onPress= {() => qes3TwoPress()}
                  style={{marginRight:20}}
                />
                <Text>B {part11.answers[7].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP11 ? false : qes3Three}
                  onPress= {() => qes3ThreePress()}
                  style={{marginRight:20}}
                />
              <Text>C {part11.answers[8].noidung_dapan}</Text>
              </CardItem>
        
          {/* Câu 4 */}
          
            <CardItem header>
              <Text style={{fontSize:18}}>14. {part11.questions[3].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={cleanAnswerP11 ? false : qes4One}
                  onPress= {() => qes4OnePress()}
                  style={{marginRight:20}}
                />
                <Text>A {part11.answers[9].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP11 ? false : qes4Two}
                  onPress= {() => qes4TwoPress()}
                  style={{marginRight:20}}
                />
                <Text>B {part11.answers[10].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP11 ? false : qes4Three}
                  onPress= {() => qes4ThreePress()}
                  style={{marginRight:20}}
                />
              <Text>C {part11.answers[11].noidung_dapan}</Text>
              </CardItem>
          
          {/* Câu 5 */}
          
            <CardItem header>
              <Text style={{fontSize:18}}>15. {part11.questions[4].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={cleanAnswerP11 ? false : qes5One}
                  onPress= {() => qes5OnePress()}
                  style={{marginRight:20}}
                />
                <Text>A {part11.answers[12].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP11 ? false : qes5Two}
                  onPress= {() => qes5TwoPress()}
                  style={{marginRight:20}}
                />
                <Text>B {part11.answers[13].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP11 ? false : qes5Three}
                  onPress= {() => qes5ThreePress()}
                  style={{marginRight:20}}
                />
              <Text>C {part11.answers[14].noidung_dapan}</Text>
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
});

export default Part11;
>>>>>>> d8039d6 (11/12 commit)

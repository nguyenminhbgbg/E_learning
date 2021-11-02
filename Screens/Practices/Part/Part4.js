<<<<<<< HEAD
import React, { Component } from "react";
import {
  ActivityIndicator,
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";
import { Button, Card, CardItem, CheckBox } from "native-base";
import FitImage from "react-native-fit-image";
import AsyncStorage from "@react-native-community/async-storage";

const Part4URL = "http://nikaws.cf/getpart4/";

export default class Part4 extends Component {
  state = {
    data: [],
    listPartDocumentArray: [],
    document: [],
    answers: [],
    isLoading: true,

    one: false,
    two: false,
    three: false,

    qes22One: false,
    qes22two: false,
    qes22three: false,

    qes23One: false,
    qes23two: false,
    qes23three: false,

    qes24One: false,
    qes24two: false,
    qes24three: false,

    qes25One: false,
    qes25two: false,
    qes25three: false,

    qes26One: false,
    qes26two: false,
    qes26three: false,

    qes27One: false,
    qes27two: false,
    qes27three: false,

    pointPast4: 0,
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

  qes22OnePress() {
    this.setState({ qes22One: true, qes22two: false, qes22three: false });
  }
  qes22twoPress() {
    this.setState({ qes22One: false, qes22two: true, qes22three: false });
  }
  qes22threePress() {
    this.setState({ qes22One: false, qes22two: false, qes22three: true });
  }

  qes23OnePress() {
    this.setState({ qes23One: true, qes23two: false, qes23three: false });
  }
  qes23twoPress() {
    this.setState({ qes23One: false, qes23two: true, qes23three: false });
  }
  qes23threePress() {
    this.setState({ qes23One: false, qes23two: false, qes23three: true });
  }

  qes24OnePress() {
    this.setState({ qes24One: true, qes24two: false, qes24three: false });
  }
  qes24twoPress() {
    this.setState({ qes24One: false, qes24two: true, qes24three: false });
  }
  qes24threePress() {
    this.setState({ qes24One: false, qes24two: false, qes24three: true });
  }

  qes25OnePress() {
    this.setState({ qes25One: true, qes25two: false, qes25three: false });
  }
  qes25twoPress() {
    this.setState({ qes25One: false, qes25two: true, qes25three: false });
  }
  qes25threePress() {
    this.setState({ qes25One: false, qes25two: false, qes25three: true });
  }

  qes26OnePress() {
    this.setState({ qes26One: true, qes26two: false, qes26three: false });
  }
  qes26twoPress() {
    this.setState({ qes26One: false, qes26two: true, qes26three: false });
  }
  qes26threePress() {
    this.setState({ qes26One: false, qes26two: false, qes26three: true });
  }

  qes27OnePress() {
    this.setState({ qes27One: true, qes27two: false, qes27three: false });
  }
  qes27twoPress() {
    this.setState({ qes27One: false, qes27two: true, qes27three: false });
  }
  qes27threePress() {
    this.setState({ qes27One: false, qes27two: false, qes27three: true });
  }

  componentDidMount() {
    fetch(Part4URL + this.props.maDe)
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
import { savePointP4 ,changeCleanP4 } from '../../../redux/actions';

const Part4 = ({ route, navigation }) =>{

  const dispatch = useDispatch();
  const SavePointP4 = (point) => dispatch(savePointP4(point));
  const ChangeCleanP4 = () => dispatch(changeCleanP4());
  useEffect(() => {
    if(cleanAnswerP4 == true){
      ChangeCleanP4();
    }
  }, [cleanAnswerP4]);

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

  useEffect(() => {
    
    if(qes1One == true || qes2One == true || qes3One == true || qes4One == true || qes5One == true || qes6One == true || qes7One == true
      || qes1Two == true || qes2Two == true || qes3Two == true || qes4Two == true || qes5Two == true || qes6Two == true || qes7Two == true
      || qes1Three == true || qes2Three == true|| qes3Three == true|| qes4Three == true|| qes5Three == true || qes6Three == true || qes7Three == true){
      checkAnswers();
    }
  }, [ part4,qes1One,qes2One,qes3One, qes4One, qes5One,qes6One,qes7One, qes1Two, qes2Two, qes3Two, qes4Two, qes5Two,
    qes6Two, qes7Two, qes1Three, qes2Three, qes3Three, qes4Three, qes5Three,qes6Three, qes7Three]);
  const checkAnswers = () => {
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
    if (this.state.qes22One == true && c[3] == 1) {
      points = points + 1;
    }
    if (this.state.qes22two == true && c[4] == 1) {
      points = points + 1;
    }
    if (this.state.qes22three == true && c[5] == 1) {
      points = points + 1;
    }
    if (this.state.qes23One == true && c[6] == 1) {
      points = points + 1;
    }
    if (this.state.qes23two == true && c[7] == 1) {
      points = points + 1;
    }
    if (this.state.qes23three == true && c[8] == 1) {
      points = points + 1;
    }
    if (this.state.qes24One == true && c[9] == 1) {
      points = points + 1;
    }
    if (this.state.qes24two == true && c[10] == 1) {
      points = points + 1;
    }
    if (this.state.qes24three == true && c[11] == 1) {
      points = points + 1;
    }
    if (this.state.qes25One == true && c[12] == 1) {
      points = points + 1;
    }
    if (this.state.qes25two == true && c[13] == 1) {
      points = points + 1;
    }
    if (this.state.qes25three == true && c[14] == 1) {
      points = points + 1;
    }
    if (this.state.qes26One == true && c[15] == 1) {
      points = points + 1;
    }
    if (this.state.qes26two == true && c[16] == 1) {
      points = points + 1;
    }
    if (this.state.qes26three == true && c[17] == 1) {
      points = points + 1;
    }
    if (this.state.qes27One == true && c[18] == 1) {
      points = points + 1;
    }
    if (this.state.qes27two == true && c[19] == 1) {
      points = points + 1;
    }
    if (this.state.qes27three == true && c[20] == 1) {
      points = points + 1;
    }
    this.state.pointPast4 = points;
    try {
      await AsyncStorage.setItem("pointPast4", this.state.pointPast4 + "");
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
                {/* cau 21 */}
                <CardItem header>
                  <Text style={styles.textTitle}>
                    21: {data[0].noidung_cauhoi}
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

                {/* cau 22 */}
                <CardItem header>
                  <Text style={styles.textTitle}>
                    22: {data[1].noidung_cauhoi}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes22One}
                    onPress={() => this.qes22OnePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    A: {answers[3].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes22two}
                    onPress={() => this.qes22twoPress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    B: {answers[4].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes22three}
                    onPress={() => this.qes22threePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    C: {answers[5].noidung_pa}
                  </Text>
                </CardItem>
                {/* cau 23 */}

                <CardItem header>
                  <Text style={styles.textTitle}>
                    23: {data[2].noidung_cauhoi}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes23One}
                    onPress={() => this.qes23OnePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    A: {answers[6].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes23two}
                    onPress={() => this.qes23twoPress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    B: {answers[7].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes23three}
                    onPress={() => this.qes23threePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    C: {answers[8].noidung_pa}
                  </Text>
                </CardItem>

                {/* cau 24 */}
                <CardItem header>
                  <Text style={styles.textTitle}>
                    24: {data[3].noidung_cauhoi}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes24One}
                    onPress={() => this.qes24OnePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    A: {answers[9].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes24two}
                    onPress={() => this.qes24twoPress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    B: {answers[10].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes24three}
                    onPress={() => this.qes24threePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    C: {answers[11].noidung_pa}
                  </Text>
                </CardItem>

                {/* cau 25 */}
                <CardItem header>
                  <Text style={styles.textTitle}>
                    25: {data[4].noidung_cauhoi}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes25One}
                    onPress={() => this.qes25OnePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    A: {answers[12].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes25two}
                    onPress={() => this.qes25twoPress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    B: {answers[13].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes25three}
                    onPress={() => this.qes25threePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    C: {answers[14].noidung_pa}
                  </Text>
                </CardItem>

                {/* cau 26 */}
                <CardItem header>
                  <Text style={styles.textTitle}>
                    26: {data[5].noidung_cauhoi}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes26One}
                    onPress={() => this.qes26OnePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    A: {answers[15].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes26two}
                    onPress={() => this.qes26twoPress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    B: {answers[16].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes26three}
                    onPress={() => this.qes26threePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    C: {answers[17].noidung_pa}
                  </Text>
                </CardItem>

                {/* cau 27 */}
                <CardItem header>
                  <Text style={styles.textTitle}>
                    27: {data[6].noidung_cauhoi}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes27One}
                    onPress={() => this.qes27OnePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    A: {answers[18].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes27two}
                    onPress={() => this.qes27twoPress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    B: {answers[19].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes27three}
                    onPress={() => this.qes27threePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    C: {answers[20].noidung_pa}
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
  fitImageWithSize: {
    height: 40,
    width: 170,
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

    findDataDone(part4.questions, part4.answers);

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
    SavePointP4(points);
    
  };
  const {part4 ,cleanAnswerP4 } = useSelector(state => state.mainReducer);

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
                part4.listPartDocumentArray[0].url
              }`
          }}/>
          </Card>
          
          {/* câu 1 */}
          <Card>
            <CardItem header>
              <Text style={{fontSize:18}}>21. {part4.questions[0].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={cleanAnswerP4 ? false : qes1One}
                  onPress= {() => qes1OnePress()}
                  style={{marginRight:20}}
                />
                <Text>A {part4.answers[0].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP4 ? false : qes1Two}
                  onPress= {() => qes1TwoPress()}
                  style={{marginRight:20}}
                />
                <Text>B {part4.answers[1].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP4 ? false : qes1Three}
                  onPress= {() => qes1ThreePress()}
                  style={{marginRight:20}}
                />
              <Text>C {part4.answers[2].noidung_dapan}</Text>
              </CardItem>
              
          {/* Câu 2 */}
          
            <CardItem header>
              <Text style={{fontSize:18}}>22. {part4.questions[1].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={cleanAnswerP4 ? false : qes2One}
                  onPress= {() => qes2OnePress()}
                  style={{marginRight:20}}
                />
                <Text>A {part4.answers[3].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP4 ? false : qes2Two}
                  onPress= {() => qes2TwoPress()}
                  style={{marginRight:20}}
                />
                <Text>B {part4.answers[4].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP4 ? false : qes2Three}
                  onPress= {() => qes2ThreePress()}
                  style={{marginRight:20}}
                />
              <Text>C {part4.answers[5].noidung_dapan}</Text>
              </CardItem>
          
          {/* Câu 3 */}
          
            <CardItem header>
              <Text style={{fontSize:18}}>23. {part4.questions[2].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={cleanAnswerP4 ? false : qes3One}
                  onPress= {() => qes3OnePress()}
                  style={{marginRight:20}}
                />
                <Text>A {part4.answers[6].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP4 ? false : qes3Two}
                  onPress= {() => qes3TwoPress()}
                  style={{marginRight:20}}
                />
                <Text>B {part4.answers[7].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP4 ? false : qes3Three}
                  onPress= {() => qes3ThreePress()}
                  style={{marginRight:20}}
                />
              <Text>C {part4.answers[8].noidung_dapan}</Text>
              </CardItem>
        
          {/* Câu 4 */}
          
            <CardItem header>
              <Text style={{fontSize:18}}>24. {part4.questions[3].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={cleanAnswerP4 ? false : qes4One}
                  onPress= {() => qes4OnePress()}
                  style={{marginRight:20}}
                />
                <Text>A {part4.answers[9].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP4 ? false : qes4Two}
                  onPress= {() => qes4TwoPress()}
                  style={{marginRight:20}}
                />
                <Text>B {part4.answers[10].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP4 ? false : qes4Three}
                  onPress= {() => qes4ThreePress()}
                  style={{marginRight:20}}
                />
              <Text>C {part4.answers[11].noidung_dapan}</Text>
              </CardItem>
          
          {/* Câu 5 */}
          
            <CardItem header>
              <Text style={{fontSize:18}}>25. {part4.questions[4].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={cleanAnswerP4 ? false : qes5One}
                  onPress= {() => qes5OnePress()}
                  style={{marginRight:20}}
                />
                <Text>A {part4.answers[12].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP4 ? false : qes5Two}
                  onPress= {() => qes5TwoPress()}
                  style={{marginRight:20}}
                />
                <Text>B {part4.answers[13].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP4 ? false : qes5Three}
                  onPress= {() => qes5ThreePress()}
                  style={{marginRight:20}}
                />
              <Text>C {part4.answers[14].noidung_dapan}</Text>
              </CardItem>

              {/* Câu 6 */}
          
            <CardItem header>
              <Text style={{fontSize:18}}>26. {part4.questions[5].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={cleanAnswerP4 ? false : qes6One}
                  onPress= {() => qes6OnePress()}
                  style={{marginRight:20}}
                />
                <Text>A {part4.answers[15].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP4 ? false : qes6Two}
                  onPress= {() => qes6TwoPress()}
                  style={{marginRight:20}}
                />
                <Text>B {part4.answers[16].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP4 ? false : qes6Three}
                  onPress= {() => qes6ThreePress()}
                  style={{marginRight:20}}
                />
              <Text>C {part4.answers[17].noidung_dapan}</Text>
              </CardItem>

              {/* Câu 7 */}
          
            <CardItem header>
              <Text style={{fontSize:18}}>27. {part4.questions[6].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={cleanAnswerP4 ? false : qes7One}
                  onPress= {() => qes7OnePress()}
                  style={{marginRight:20}}
                />
                <Text>A {part4.answers[18].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP4 ? false : qes7Two}
                  onPress= {() => qes7TwoPress()}
                  style={{marginRight:20}}
                />
                <Text>B {part4.answers[19].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP4 ? false : qes7Three}
                  onPress= {() => qes7ThreePress()}
                  style={{marginRight:20}}
                />
              <Text>C {part4.answers[20].noidung_dapan}</Text>
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

export default Part4;
>>>>>>> d8039d6 (11/12 commit)

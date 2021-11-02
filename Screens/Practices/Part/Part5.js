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

const Part5URL = "http://nikaws.cf/getpart5/";

export default class Part5 extends Component {
  state = {
    data: [],
    listPartDocumentArray: [],
    document: [],
    answers: [],
    isLoading: true,

    one: false,
    two: false,
    three: false,

    qes29One: false,
    qes29two: false,
    qes29three: false,

    qes30One: false,
    qes30two: false,
    qes30three: false,

    qes31One: false,
    qes31two: false,
    qes31three: false,

    qes32One: false,
    qes32two: false,
    qes32three: false,

    qes33One: false,
    qes33two: false,
    qes33three: false,

    qes34One: false,
    qes34two: false,
    qes34three: false,

    qes35One: false,
    qes35two: false,
    qes35three: false,

    pointPast5: 0,
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

  qes29OnePress() {
    this.setState({ qes29One: true, qes29two: false, qes29three: false });
  }
  qes29twoPress() {
    this.setState({ qes29One: false, qes29two: true, qes29three: false });
  }
  qes29threePress() {
    this.setState({ qes29One: false, qes29two: false, qes29three: true });
  }

  qes30OnePress() {
    this.setState({ qes30One: true, qes30two: false, qes30three: false });
  }
  qes30twoPress() {
    this.setState({ qes30One: false, qes30two: true, qes30three: false });
  }
  qes30threePress() {
    this.setState({ qes30One: false, qes30two: false, qes30three: true });
  }

  qes31OnePress() {
    this.setState({ qes31One: true, qes31two: false, qes31three: false });
  }
  qes31twoPress() {
    this.setState({ qes31One: false, qes31two: true, qes31three: false });
  }
  qes31threePress() {
    this.setState({ qes31One: false, qes31two: false, qes31three: true });
  }

  qes32OnePress() {
    this.setState({ qes32One: true, qes32two: false, qes32three: false });
  }
  qes32twoPress() {
    this.setState({ qes32One: false, qes32two: true, qes32three: false });
  }
  qes32threePress() {
    this.setState({ qes32One: false, qes32two: false, qes32three: true });
  }

  qes33OnePress() {
    this.setState({ qes33One: true, qes33two: false, qes33three: false });
  }
  qes33twoPress() {
    this.setState({ qes33One: false, qes33two: true, qes33three: false });
  }
  qes33threePress() {
    this.setState({ qes33One: false, qes33two: false, qes33three: true });
  }

  qes34OnePress() {
    this.setState({ qes34One: true, qes34two: false, qes34three: false });
  }
  qes34twoPress() {
    this.setState({ qes34One: false, qes34two: true, qes34three: false });
  }
  qes34threePress() {
    this.setState({ qes34One: false, qes34two: false, qes34three: true });
  }

  qes35OnePress() {
    this.setState({ qes35One: true, qes35two: false, qes35three: false });
  }
  qes35twoPress() {
    this.setState({ qes35One: false, qes35two: true, qes35three: false });
  }
  qes35threePress() {
    this.setState({ qes35One: false, qes35two: false, qes35three: true });
  }

  componentDidMount() {
    fetch(Part5URL + this.props.maDe)
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
import { savePointP5 ,changeCleanP5 } from '../../../redux/actions';

import { useSelector, useDispatch } from 'react-redux';

const Part5 = ({ route, navigation }) =>{

  const dispatch = useDispatch();
  const SavePointP5 = (point) => dispatch(savePointP5(point));
  const ChangeCleanP5 = () => dispatch(changeCleanP5());
  useEffect(() => {
    if(cleanAnswerP5 == true){
      ChangeCleanP5();
    }
  }, [cleanAnswerP5]);

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
    if (this.state.qes29One == true && c[3] == 1) {
      points = points + 1;
    }
    if (this.state.qes29two == true && c[4] == 1) {
      points = points + 1;
    }
    if (this.state.qes29three == true && c[5] == 1) {
      points = points + 1;
    }
    if (this.state.qes30One == true && c[6] == 1) {
      points = points + 1;
    }
    if (this.state.qes30two == true && c[7] == 1) {
      points = points + 1;
    }
    if (this.state.qes30three == true && c[8] == 1) {
      points = points + 1;
    }
    if (this.state.qes31One == true && c[9] == 1) {
      points = points + 1;
    }
    if (this.state.qes31two == true && c[10] == 1) {
      points = points + 1;
    }
    if (this.state.qes31three == true && c[11] == 1) {
      points = points + 1;
    }
    if (this.state.qes32One == true && c[12] == 1) {
      points = points + 1;
    }
    if (this.state.qes32two == true && c[13] == 1) {
      points = points + 1;
    }
    if (this.state.qes32three == true && c[14] == 1) {
      points = points + 1;
    }
    if (this.state.qes33One == true && c[15] == 1) {
      points = points + 1;
    }
    if (this.state.qes33two == true && c[16] == 1) {
      points = points + 1;
    }
    if (this.state.qes33three == true && c[17] == 1) {
      points = points + 1;
    }
    if (this.state.qes34One == true && c[18] == 1) {
      points = points + 1;
    }
    if (this.state.qes34two == true && c[19] == 1) {
      points = points + 1;
    }
    if (this.state.qes34three == true && c[20] == 1) {
      points = points + 1;
    }
    if (this.state.qes35One == true && c[21] == 1) {
      points = points + 1;
    }
    if (this.state.qes35two == true && c[22] == 1) {
      points = points + 1;
    }
    if (this.state.qes35three == true && c[23] == 1) {
      points = points + 1;
    }

    this.state.pointPast5 = points;

    try {
      await AsyncStorage.setItem("pointPast5", this.state.pointPast5 + "");
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
                {/* cau 28 */}
                <CardItem header>
                  <Text style={styles.textTitle}>{data[0].noidung_cauhoi}</Text>
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

                {/* cau 29 */}
                <CardItem header>
                  <Text style={styles.textTitle}>{data[1].noidung_cauhoi}</Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes29One}
                    onPress={() => this.qes29OnePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    A: {answers[3].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes29two}
                    onPress={() => this.qes29twoPress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    B: {answers[4].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes29three}
                    onPress={() => this.qes29threePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    C: {answers[5].noidung_pa}
                  </Text>
                </CardItem>
                {/* cau 30 */}

                <CardItem header>
                  <Text style={styles.textTitle}>{data[2].noidung_cauhoi}</Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes30One}
                    onPress={() => this.qes30OnePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    A: {answers[6].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes30two}
                    onPress={() => this.qes30twoPress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    B: {answers[7].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes30three}
                    onPress={() => this.qes30threePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    C: {answers[8].noidung_pa}
                  </Text>
                </CardItem>

                {/* cau 31 */}
                <CardItem header>
                  <Text style={styles.textTitle}>{data[3].noidung_cauhoi}</Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes31One}
                    onPress={() => this.qes31OnePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    A: {answers[9].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes31two}
                    onPress={() => this.qes31twoPress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    B: {answers[10].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes31three}
                    onPress={() => this.qes31threePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    C: {answers[11].noidung_pa}
                  </Text>
                </CardItem>

                {/* cau 32 */}
                <CardItem header>
                  <Text style={styles.textTitle}>{data[4].noidung_cauhoi}</Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes32One}
                    onPress={() => this.qes32OnePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    A: {answers[12].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes32two}
                    onPress={() => this.qes32twoPress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    B: {answers[13].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes32three}
                    onPress={() => this.qes32threePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    C: {answers[14].noidung_pa}
                  </Text>
                </CardItem>

                {/* cau 33 */}
                <CardItem header>
                  <Text style={styles.textTitle}>{data[5].noidung_cauhoi}</Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes33One}
                    onPress={() => this.qes33OnePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    A: {answers[15].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes33two}
                    onPress={() => this.qes33twoPress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    B: {answers[16].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes33three}
                    onPress={() => this.qes33threePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    C: {answers[17].noidung_pa}
                  </Text>
                </CardItem>

                {/* cau 34 */}
                <CardItem header>
                  <Text style={styles.textTitle}>{data[6].noidung_cauhoi}</Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes34One}
                    onPress={() => this.qes34OnePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    A: {answers[18].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes34two}
                    onPress={() => this.qes34twoPress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    B: {answers[19].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes34three}
                    onPress={() => this.qes34threePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    C: {answers[20].noidung_pa}
                  </Text>
                </CardItem>

                {/* cau 35 */}
                <CardItem header>
                  <Text style={styles.textTitle}>{data[7].noidung_cauhoi}</Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes35One}
                    onPress={() => this.qes35OnePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    A: {answers[21].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes35two}
                    onPress={() => this.qes35twoPress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    B: {answers[22].noidung_pa}
                  </Text>
                </CardItem>
                <CardItem Body>
                  <CheckBox
                    checked={this.state.qes35three}
                    onPress={() => this.qes35threePress()}
                    style={{ marginRight: 20 }}
                  />
                  <Text style={styles.textAnswers}>
                    C: {answers[23].noidung_pa}
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
  const {part5, cleanAnswerP5 } = useSelector(state => state.mainReducer);

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
                part5.listPartDocumentArray[0].url
              }`
          }}/>
          </Card>
          
          {/* câu 1 */}
          <Card>
            <CardItem header>
              <Text style={{fontSize:18}}>28. {part5.questions[0].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={cleanAnswerP5 ? false : qes1One}
                  onPress= {() => qes1OnePress()}
                  style={{marginRight:20}}
                />
                <Text>A {part5.answers[0].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes1Two}
                  onPress= {() => qes1TwoPress()}
                  style={{marginRight:20}}
                />
                <Text>B {part5.answers[1].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes1Three}
                  onPress= {() => qes1ThreePress()}
                  style={{marginRight:20}}
                />
              <Text>C {part5.answers[2].noidung_dapan}</Text>
              </CardItem>
              
          {/* Câu 2 */}
          
            <CardItem header>
              <Text style={{fontSize:18}}>29. {part5.questions[1].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={cleanAnswerP5 ? false : qes2One}
                  onPress= {() => qes2OnePress()}
                  style={{marginRight:20}}
                />
                <Text>A {part5.answers[3].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes2Two}
                  onPress= {() => qes2TwoPress()}
                  style={{marginRight:20}}
                />
                <Text>B {part5.answers[4].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes2Three}
                  onPress= {() => qes2ThreePress()}
                  style={{marginRight:20}}
                />
              <Text>C {part5.answers[5].noidung_dapan}</Text>
              </CardItem>
          
          {/* Câu 3 */}
          
            <CardItem header>
              <Text style={{fontSize:18}}>30. {part5.questions[2].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={cleanAnswerP5 ? false : qes3One}
                  onPress= {() => qes3OnePress()}
                  style={{marginRight:20}}
                />
                <Text>A {part5.answers[6].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes3Two}
                  onPress= {() => qes3TwoPress()}
                  style={{marginRight:20}}
                />
                <Text>B {part5.answers[7].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes3Three}
                  onPress= {() => qes3ThreePress()}
                  style={{marginRight:20}}
                />
              <Text>C {part5.answers[8].noidung_dapan}</Text>
              </CardItem>
        
          {/* Câu 31 */}
          
            <CardItem header>
              <Text style={{fontSize:18}}>31. {part5.questions[3].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={cleanAnswerP5 ? false : qes4One}
                  onPress= {() => qes4OnePress()}
                  style={{marginRight:20}}
                />
                <Text>A {part5.answers[9].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes4Two}
                  onPress= {() => qes4TwoPress()}
                  style={{marginRight:20}}
                />
                <Text>B {part5.answers[10].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes4Three}
                  onPress= {() => qes4ThreePress()}
                  style={{marginRight:20}}
                />
              <Text>C {part5.answers[11].noidung_dapan}</Text>
              </CardItem>
          
          {/* Câu 5 */}
          
            <CardItem header>
              <Text style={{fontSize:18}}>32. {part5.questions[4].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={cleanAnswerP5 ? false : qes5One}
                  onPress= {() => qes5OnePress()}
                  style={{marginRight:20}}
                />
                <Text>A {part5.answers[12].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes5Two}
                  onPress= {() => qes5TwoPress()}
                  style={{marginRight:20}}
                />
                <Text>B {part5.answers[13].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes5Three}
                  onPress= {() => qes5ThreePress()}
                  style={{marginRight:20}}
                />
              <Text>C {part5.answers[14].noidung_dapan}</Text>
              </CardItem>

              {/* Câu 6 */}
          
            <CardItem header>
              <Text style={{fontSize:18}}>33. {part5.questions[5].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={cleanAnswerP5 ? false : qes6One}
                  onPress= {() => qes6OnePress()}
                  style={{marginRight:20}}
                />
                <Text>A {part5.answers[15].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes6Two}
                  onPress= {() => qes6TwoPress()}
                  style={{marginRight:20}}
                />
                <Text>B {part5.answers[16].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes6Three}
                  onPress= {() => qes6ThreePress()}
                  style={{marginRight:20}}
                />
              <Text>C {part5.answers[17].noidung_dapan}</Text>
              </CardItem>

              {/* Câu 7 */}
          
            <CardItem header>
              <Text style={{fontSize:18}}>34. {part5.questions[6].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={cleanAnswerP5 ? false : qes7One}
                  onPress= {() => qes7OnePress()}
                  style={{marginRight:20}}
                />
                <Text>A {part5.answers[18].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes7Two}
                  onPress= {() => qes7TwoPress()}
                  style={{marginRight:20}}
                />
                <Text>B {part5.answers[19].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes7Three}
                  onPress= {() => qes7ThreePress()}
                  style={{marginRight:20}}
                />
              <Text>C {part5.answers[20].noidung_dapan}</Text>
              </CardItem>

              {/* Câu 8 */}
          
            <CardItem header>
              <Text style={{fontSize:18}}>35. {part5.questions[7].noidung_cauhoi}</Text>
            </CardItem>
              <CardItem style={{}}>
                <CheckBox
                  checked={cleanAnswerP5 ? false : qes8One}
                  onPress= {() => qes8OnePress()}
                  style={{marginRight:20}}
                />
                <Text>A {part5.answers[21].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes8Two}
                  onPress= {() => qes8TwoPress()}
                  style={{marginRight:20}}
                />
                <Text>B {part5.answers[22].noidung_dapan}</Text>
              </CardItem>
              <CardItem Body>
                <CheckBox 
                  checked={cleanAnswerP5 ? false : qes8Three}
                  onPress= {() => qes8ThreePress()}
                  style={{marginRight:20}}
                />
              <Text>C {part5.answers[23].noidung_dapan}</Text>
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

export default Part5;
>>>>>>> d8039d6 (11/12 commit)

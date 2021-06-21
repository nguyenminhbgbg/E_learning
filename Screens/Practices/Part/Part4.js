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

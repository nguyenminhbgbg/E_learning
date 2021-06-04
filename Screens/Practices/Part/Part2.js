import React, { Component } from "react";
import {
  ActivityIndicator,
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button, Card, CardItem, CheckBox } from "native-base";
import FitImage from "react-native-fit-image";

const Part2URL = "http://nikaws.cf/getpart2/";

export default class Part2 extends Component {
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
    fetch(Part2URL + this.props.maDe)
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
    alert("Đáp án đúng: " + points);
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

                {/* cau 12 */}
                <CardItem header>
                  <Text style={styles.textTitle}>{data[1].noidung_cauhoi}</Text>
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
                  <Text style={styles.textTitle}>{data[2].noidung_cauhoi}</Text>
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
                  <Text style={styles.textTitle}>{data[3].noidung_cauhoi}</Text>
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
                  <Text style={styles.textTitle}>{data[4].noidung_cauhoi}</Text>
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

            <Button
              rounded
              light
              style={{ width: "40%", alignItems: "center" }}
              onPress={this.checkAnswers}
            >
              <Text
                style={{
                  color: "#efefef",
                  margin: 5,
                  marginLeft: "15%",
                  marginRight: "15%",
                }}
              >
                Tính điểm
              </Text>
            </Button>
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

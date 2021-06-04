import React, { Component } from 'react';
import { ActivityIndicator,ScrollView, FlatList,StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardItem,CheckBox } from 'native-base';
import FitImage from 'react-native-fit-image';

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
        height: 64
    },
    fitImage: {
    borderRadius: 5,
  },
  fitImageWithSize: {
    height: 40,
    width: 170,
  },
  textAnswers: {
    color:'#000',
    fontSize:16
  },
  textTitle: {
    color:'#000',
    fontSize:18
  }
})
import React, { Component } from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Card, CardItem, CheckBox } from "native-base";
import FitImage from "react-native-fit-image";
import Sound from "react-native-sound";
import AsyncStorage from "@react-native-community/async-storage";

let sound1, sound2;

const playSound = (item, index) => {
  if (index == 0) {
    sound1 = new Sound(item.url, (error, _sound) => {
      if (error) {
        alert("error" + error.message);
        return;
      }
      sound1.play(() => {
        sound1.release();
      });
    });
  } else if (index == 1) {
    sound2 = new Sound(item.url, "", (error, _sound) => {
      if (error) {
        alert("error" + error.message);
        return;
      }
      sound2.play(() => {
        sound2.release();
      });
    });
  }
};

const stopSound = (_item, index) => {
  if (index == 0 && sound1) {
    sound1.stop(() => {
      console.log("Stop");
    });
  } else if (index == 1 && sound2) {
    sound2.stop(() => {
      console.log("Stop");
    });
  }
};
const ItemView = (item, index) => {
  return (
    <View style={styles.feature} key={index}>
      <Text style={styles.textStyle}>{item.title}</Text>
      <TouchableOpacity onPress={() => playSound(item, index)}>
        <Text style={styles.buttonPlay}>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => stopSound(item, index)}>
        <Text style={styles.buttonStop}>Stop</Text>
      </TouchableOpacity>
    </View>
  );
};
const audioList = [
  {
    title: "Bây giờ anh",
    isRequire: true,
    url: require("./bb.mp3"),
  },
  {
    title: "Play mp3 sound from remote URL",
    url: "https://nikaws.cf/datafordb/CaWAccXCf10EeHi5e2kpFKvR1NGU3KlGUDepqNxT.mp3",
  },
];

const Part9URL = "http://nikaws.cf/getpart9/";

export default class Part9 extends Component {
  state = {
    data: [],
    listPartDocumentArray: [],
    document: [],
    answers: [],
    isLoading: true,

    qes1One: false,
    qes1two: false,
    qes1three: false,

    qes2One: false,
    qes2two: false,
    qes2three: false,

    qes3One: false,
    qes3two: false,
    qes3three: false,

    qes4One: false,
    qes4two: false,
    qes4three: false,

    qes5One: false,
    qes5two: false,
    qes5three: false,

    pointPast9: 0,
  };
  qes1OnePress() {
    this.setState({ qes1One: true, qes1two: false, qes1three: false });
  }
  qes1twoPress() {
    this.setState({ qes1One: false, qes1two: true, qes1three: false });
  }
  qes1threePress() {
    this.setState({ qes1One: false, qes1two: false, qes1three: true });
  }

  qes2OnePress() {
    this.setState({ qes2One: true, qes2two: false, qes2three: false });
  }
  qes2twoPress() {
    this.setState({ qes2One: false, qes2two: true, qes2three: false });
  }
  qes2threePress() {
    this.setState({ qes2One: false, qes2two: false, qes2three: true });
  }

  qes3OnePress() {
    this.setState({ qes3One: true, qes3two: false, qes3three: false });
  }
  qes3twoPress() {
    this.setState({ qes3One: false, qes3two: true, qes3three: false });
  }
  qes3threePress() {
    this.setState({ qes3One: false, qes3two: false, qes3three: true });
  }

  qes4OnePress() {
    this.setState({ qes4One: true, qes4two: false, qes4three: false });
  }
  qes4twoPress() {
    this.setState({ qes4One: false, qes4two: true, qes4three: false });
  }
  qes4threePress() {
    this.setState({ qes4One: false, qes4two: false, qes4three: true });
  }

  qes5OnePress() {
    this.setState({ qes5One: true, qes5two: false, qes5three: false });
  }
  qes5twoPress() {
    this.setState({ qes5One: false, qes5two: true, qes5three: false });
  }
  qes5threePress() {
    this.setState({ qes5One: false, qes5two: false, qes5three: true });
  }

  componentDidMount() {
    fetch(Part9URL + this.props.maDe)
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

    if (this.state.qes1One == true && c[0] == 1) {
      points = points + 1;
    }
    if (this.state.qes1two == true && c[1] == 1) {
      points = points + 1;
    }
    if (this.state.qes1three == true && c[2] == 1) {
      points = points + 1;
    }
    if (this.state.qes2One == true && c[3] == 1) {
      points = points + 1;
    }
    if (this.state.qes2two == true && c[4] == 1) {
      points = points + 1;
    }
    if (this.state.qes2three == true && c[5] == 1) {
      points = points + 1;
    }
    if (this.state.qes3One == true && c[6] == 1) {
      points = points + 1;
    }
    if (this.state.qes3two == true && c[7] == 1) {
      points = points + 1;
    }
    if (this.state.qes3three == true && c[8] == 1) {
      points = points + 1;
    }
    if (this.state.qes4One == true && c[9] == 1) {
      points = points + 1;
    }
    if (this.state.qes4two == true && c[10] == 1) {
      points = points + 1;
    }
    if (this.state.qes4three == true && c[11] == 1) {
      points = points + 1;
    }
    if (this.state.qes5One == true && c[12] == 1) {
      points = points + 1;
    }
    if (this.state.qes5two == true && c[13] == 1) {
      points = points + 1;
    }
    if (this.state.qes5three == true && c[14] == 1) {
      points = points + 1;
    }

    this.state.pointPast9 = points;

    try {
      await AsyncStorage.setItem("pointPast9", this.state.pointPast9 + "");
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

            <SafeAreaView style={{ flex: 1 }}>
              <View style={styles.container}>
                <ScrollView style={{ flex: 1 }}>
                  {audioList.map(ItemView)}
                </ScrollView>
              </View>
            </SafeAreaView>
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
                    1. {data[0].noidung_cauhoi}
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
                          uri: "http://nikaws.cf/" + document[0].url,
                        }}
                        style={styles.fitImageWithSize}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        <CheckBox
                          checked={this.state.qes1One}
                          onPress={() => this.qes1OnePress()}
                          style={{ marginRight: 20 }}
                        />
                        <Text style={styles.textAnswers}>A</Text>
                      </View>
                    </View>
                    <View style={{ width: "33%", alignItems: "center" }}>
                      <FitImage
                        source={{
                          uri: "http://nikaws.cf/" + document[1].url,
                        }}
                        style={styles.fitImageWithSize}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        <CheckBox
                          checked={this.state.qes1two}
                          onPress={() => this.qes1twoPress()}
                          style={{ marginRight: 20 }}
                        />
                        <Text style={styles.textAnswers}>B</Text>
                      </View>
                    </View>
                    <View style={{ width: "33%", alignItems: "center" }}>
                      <FitImage
                        source={{
                          uri: "http://nikaws.cf/" + document[2].url,
                        }}
                        style={styles.fitImageWithSize}
                      />

                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        <CheckBox
                          checked={this.state.qes1three}
                          onPress={() => this.qes1threePress()}
                          style={{ marginRight: 20 }}
                        />
                        <Text style={styles.textAnswers}>C</Text>
                      </View>
                    </View>
                  </View>
                </CardItem>

                {/* cau 2 */}
                <CardItem header>
                  <Text style={styles.textTitle}>
                    2. {data[1].noidung_cauhoi}
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
                          uri: "http://nikaws.cf/" + document[0].url,
                        }}
                        style={styles.fitImageWithSize}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        <CheckBox
                          checked={this.state.qes2One}
                          onPress={() => this.qes2OnePress()}
                          style={{ marginRight: 20 }}
                        />
                        <Text style={styles.textAnswers}>A</Text>
                      </View>
                    </View>
                    <View style={{ width: "33%", alignItems: "center" }}>
                      <FitImage
                        source={{
                          uri: "http://nikaws.cf/" + document[1].url,
                        }}
                        style={styles.fitImageWithSize}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        <CheckBox
                          checked={this.state.qes2two}
                          onPress={() => this.qes2twoPress()}
                          style={{ marginRight: 20 }}
                        />
                        <Text style={styles.textAnswers}>B</Text>
                      </View>
                    </View>
                    <View style={{ width: "33%", alignItems: "center" }}>
                      <FitImage
                        source={{
                          uri: "http://nikaws.cf/" + document[2].url,
                        }}
                        style={styles.fitImageWithSize}
                      />

                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        <CheckBox
                          checked={this.state.qes2three}
                          onPress={() => this.qes2threePress()}
                          style={{ marginRight: 20 }}
                        />
                        <Text style={styles.textAnswers}>C</Text>
                      </View>
                    </View>
                  </View>
                </CardItem>
                {/* cau 3 */}

                <CardItem header>
                  <Text style={styles.textTitle}>
                    3. {data[2].noidung_cauhoi}
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
                          uri: "http://nikaws.cf/" + document[3].url,
                        }}
                        style={styles.fitImageWithSize}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        <CheckBox
                          checked={this.state.qes3One}
                          onPress={() => this.qes3OnePress()}
                          style={{ marginRight: 20 }}
                        />
                        <Text style={styles.textAnswers}>A</Text>
                      </View>
                    </View>
                    <View style={{ width: "33%", alignItems: "center" }}>
                      <FitImage
                        source={{
                          uri: "http://nikaws.cf/" + document[4].url,
                        }}
                        style={styles.fitImageWithSize}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        <CheckBox
                          checked={this.state.qes3two}
                          onPress={() => this.qes3twoPress()}
                          style={{ marginRight: 20 }}
                        />
                        <Text style={styles.textAnswers}>B</Text>
                      </View>
                    </View>
                    <View style={{ width: "33%", alignItems: "center" }}>
                      <FitImage
                        source={{
                          uri: "http://nikaws.cf/" + document[5].url,
                        }}
                        style={styles.fitImageWithSize}
                      />

                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        <CheckBox
                          checked={this.state.qes3three}
                          onPress={() => this.qes3threePress()}
                          style={{ marginRight: 20 }}
                        />
                        <Text style={styles.textAnswers}>C</Text>
                      </View>
                    </View>
                  </View>
                </CardItem>

                {/* cau 4 */}
                <CardItem header>
                  <Text style={styles.textTitle}>
                    4. {data[3].noidung_cauhoi}
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
                          uri: "http://nikaws.cf/" + document[6].url,
                        }}
                        style={styles.fitImageWithSize}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        <CheckBox
                          checked={this.state.qes4One}
                          onPress={() => this.qes4OnePress()}
                          style={{ marginRight: 20 }}
                        />
                        <Text style={styles.textAnswers}>A</Text>
                      </View>
                    </View>
                    <View style={{ width: "33%", alignItems: "center" }}>
                      <FitImage
                        source={{
                          uri: "http://nikaws.cf/" + document[7].url,
                        }}
                        style={styles.fitImageWithSize}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        <CheckBox
                          checked={this.state.qes4two}
                          onPress={() => this.qes4twoPress()}
                          style={{ marginRight: 20 }}
                        />
                        <Text style={styles.textAnswers}>B</Text>
                      </View>
                    </View>
                    <View style={{ width: "33%", alignItems: "center" }}>
                      <FitImage
                        source={{
                          uri: "http://nikaws.cf/" + document[8].url,
                        }}
                        style={styles.fitImageWithSize}
                      />

                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        <CheckBox
                          checked={this.state.qes4three}
                          onPress={() => this.qes4threePress()}
                          style={{ marginRight: 20 }}
                        />
                        <Text style={styles.textAnswers}>C</Text>
                      </View>
                    </View>
                  </View>
                </CardItem>

                {/* cau 5 */}
                <CardItem header>
                  <Text style={styles.textTitle}>
                    5. {data[4].noidung_cauhoi}
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
                          uri: "http://nikaws.cf/" + document[9].url,
                        }}
                        style={styles.fitImageWithSize}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        <CheckBox
                          checked={this.state.qes5One}
                          onPress={() => this.qes5OnePress()}
                          style={{ marginRight: 20 }}
                        />
                        <Text style={styles.textAnswers}>A</Text>
                      </View>
                    </View>
                    <View style={{ width: "33%", alignItems: "center" }}>
                      <FitImage
                        source={{
                          uri: "http://nikaws.cf/" + document[10].url,
                        }}
                        style={styles.fitImageWithSize}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        <CheckBox
                          checked={this.state.qes5two}
                          onPress={() => this.qes5twoPress()}
                          style={{ marginRight: 20 }}
                        />
                        <Text style={styles.textAnswers}>B</Text>
                      </View>
                    </View>
                    <View style={{ width: "33%", alignItems: "center" }}>
                      <FitImage
                        source={{
                          uri: "http://nikaws.cf/" + document[11].url,
                        }}
                        style={styles.fitImageWithSize}
                      />

                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        <CheckBox
                          checked={this.state.qes5three}
                          onPress={() => this.qes5threePress()}
                          style={{ marginRight: 20 }}
                        />
                        <Text style={styles.textAnswers}>C</Text>
                      </View>
                    </View>
                  </View>
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
  buttonPlay: {
    fontSize: 16,
    color: "white",
    backgroundColor: "rgba(00,80,00,1)",
    borderWidth: 1,
    borderColor: "rgba(80,80,80,0.5)",
    overflow: "hidden",
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  buttonStop: {
    fontSize: 16,
    color: "white",
    backgroundColor: "rgba(80,00,00,1)",
    borderWidth: 1,
    borderColor: "rgba(80,80,80,0.5)",
    overflow: "hidden",
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  feature: {
    flexDirection: "row",
    padding: 5,
    marginTop: 7,
    alignSelf: "stretch",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "rgb(180,180,180)",
  },
});

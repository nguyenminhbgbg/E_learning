import { Row } from "native-base";
import React, { Component } from "react";
import {
  ActivityIndicator,
  ScrollView,
  TextInput,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import FitImage from "react-native-fit-image";
import AsyncStorage from "@react-native-community/async-storage";

const Part7URL = "http://nikaws.cf/getpart7/";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      listPartDocumentArray: [],
      document: [],
      answers: [],
      isLoading: true,
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: "",
      value8: "",
      value9: "",
      value10: "",

      pointPast7: 0,
    };
  }
  handelValue1 = (text) => {
    this.setState({ value1: text });
  };
  handelValue2 = (text) => {
    this.setState({ value2: text });
  };
  handleValue3 = (text) => {
    this.setState({ value3: text });
  };
  handleValue4 = (text) => {
    this.setState({ value4: text });
  };
  handleValue5 = (text) => {
    this.setState({ value5: text });
  };
  handleValue6 = (text) => {
    this.setState({ value6: text });
  };
  handleValue7 = (text) => {
    this.setState({ value7: text });
  };
  handleValue8 = (text) => {
    this.setState({ value8: text });
  };
  handleValue9 = (text) => {
    this.setState({ value9: text });
  };
  handleValue10 = (text) => {
    this.setState({ value10: text });
  };
  checkAnswers = async () => {
    var result = 0;

    var x = [];
    var li = this.state.data.forEach((ques) => {
      x.push(ques.id);
    });
    function Key(arr, b) {
      var bx = b.filter(function (an) {
        return an.cauhoi_id == arr;
      });
      return bx;
    }

    function checkAnswer(answer, ListAns) {
      var dat = ListAns.forEach(function (Li) {
        if (answer == Li.noidung_pa) {
          result++;
        }
      });
      return dat;
    }

    checkAnswer(this.state.value1, Key(x[0], this.state.answers));
    checkAnswer(this.state.value2, Key(x[1], this.state.answers));
    checkAnswer(this.state.value3, Key(x[2], this.state.answers));
    checkAnswer(this.state.value4, Key(x[3], this.state.answers));
    checkAnswer(this.state.value5, Key(x[4], this.state.answers));
    checkAnswer(this.state.value6, Key(x[5], this.state.answers));
    checkAnswer(this.state.value7, Key(x[6], this.state.answers));
    checkAnswer(this.state.value8, Key(x[7], this.state.answers));
    checkAnswer(this.state.value9, Key(x[8], this.state.answers));
    checkAnswer(this.state.value10, Key(x[9], this.state.answers));

    this.state.pointPast7 = result;

    try {
      await AsyncStorage.setItem("pointPast7", this.state.pointPast7 + "");
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    fetch(Part7URL + this.props.maDe)
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
          </View>
        )}
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ fontSize: 20, color: "blue" }}>Điền đáp án:</Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "column",
                width: "50%",
              }}
            >
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 41</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  onChangeText={this.handelValue1}
                />
              </View>
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 42</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  onChangeText={this.handelValue2}
                />
              </View>
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 43</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  onChangeText={this.handleValue3}
                />
              </View>
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 44</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  onChangeText={this.handleValue4}
                />
              </View>
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 45</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  onChangeText={this.handleValue5}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "column",
                width: "50%",
              }}
            >
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 46</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  onChangeText={this.handleValue6}
                />
              </View>
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 47</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  onChangeText={this.handleValue7}
                />
              </View>
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 47</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  onChangeText={this.handleValue8}
                />
              </View>
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 49</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  onChangeText={this.handleValue9}
                />
              </View>
              <View>
                <View style={{ margin: 5 }}>
                  <Text style={{ marginHorizontal: 10 }}>Câu 50</Text>
                </View>
                <TextInput
                  style={styles.inPutAnsew}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  onChangeText={this.handleValue10}
                />
              </View>
            </View>
          </View>
        </View>
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
  textQestion: {
    color: "#000",
    fontSize: 16,
    margin: 5,
    textAlign: "justify",
    marginLeft: 10,
  },
  inPutAnsew: {
    textAlign: "center",
    height: 40,
    maxWidth: "85%",
    marginHorizontal: 3,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
  },
});

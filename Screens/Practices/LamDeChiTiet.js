<<<<<<< HEAD
import React, { Component } from 'react';
=======

import React, { useEffect } from 'react';
>>>>>>> d8039d6 (11/12 commit)
import { ActivityIndicator, Text, View } from "react-native";
import { Container, Header,Subtitle, Tab, Tabs, ScrollableTab, Left, Right, Icon, Button, Body ,Title } from 'native-base';
import CountDown from 'react-native-countdown-component';

<<<<<<< HEAD
import Part1 from './Part/Part1';
import Part2 from './Part/Part2';
import Part3 from './Part/Part3';
import Par3p2 from './Part/Par3p2';
import Part4 from './Part/Part4';
import Part5 from './Part/Part5';
import Part6 from './Part/Part6';
import Part7 from './Part/Part7';
import Part8 from './Part/Part8';
import Part9 from './Part/Part9';
import Part10 from './Part/Part10';
import Part11 from './Part/Part11';
import Part12 from './Part/Part12';
import Part13 from './Part/Part13';

export default class LamDeChiTiet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }
  OnCheckAnswer = () => {
    this.setState({ isLoading: false });
    this.props.navigation.navigate("NopBaiTinhDiem");
  };

  componentDidMount() {
    if (this.state.isLoading == true) {
      setTimeout(() => {
        this.setState({ isLoading: this.props.loading });
      }, 500);
    }
  }
  render() {
    const { isLoading } = this.state;
    const { idDe } = this.props.route.params;
    const { loading } = this.props.route.params;
=======
import { useSelector, useDispatch } from 'react-redux';
import { getAllDeThi } from '../../redux/actions';

import Part1 from "./Part/Part1";
import Part2 from "./Part/Part2";
import Part3 from "./Part/Part3";
import Par3p2 from "./Part/Par3p2";
import Part4 from "./Part/Part4";
import Part5 from "./Part/Part5";
import Part6 from "./Part/Part6";
import Part7 from "./Part/Part7";
import Part8 from "./Part/Part8";
import Part9 from "./Part/Part9";
import Part10 from "./Part/Part10";
import Part11 from "./Part/Part11";
import Part12 from "./Part/Part12";
import Part13 from "./Part/Part13";

const LamDeChiTiet = ({ route, navigation }) => {
  
  const { timeLoad } = useSelector(state => state.mainReducer);
  const dispatch = useDispatch();
  const fetchAllParts = (idDeThi) => dispatch(getAllDeThi(idDeThi));

  const [isLoading, SetIsLoading] = React.useState(false);
  const [idDe, SetIdDe] = React.useState(null);

  const OnCheckAnswer = () => {
    SetIsLoading(false);
    navigation.navigate("NopBaiTinhDiem");
  };
  useEffect(() => {
    let { idDe } = route.params;
      SetIdDe(idDe)
    fetchAllParts(idDe);
    
  }, [route.params]);

>>>>>>> d8039d6 (11/12 commit)
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                name="menu"
<<<<<<< HEAD
                onPress={() => this.props.navigation.openDrawer()}
=======
                onPress={() => navigation.openDrawer()}
>>>>>>> d8039d6 (11/12 commit)
              />
            </Button>
          </Left>
          <Body>
            <Title>LÀM ĐỀ</Title>
<<<<<<< HEAD
            <Subtitle>Mã đề:{idDe}</Subtitle>
=======
            <Subtitle>Mã đề: {idDe}</Subtitle>
>>>>>>> d8039d6 (11/12 commit)
          </Body>

          <Right>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <CountDown
                size={13}
<<<<<<< HEAD
                until={1000}
                onFinish={() =>
                  alert("Finished") &&
                  this.props.navigation.navigate("NopBaiTinhDiem")
=======
                until={timeLoad}
                onFinish={() => {
                  alert("Finished") ,
                  navigation.navigate("NopBaiTinhDiem")
                  }
>>>>>>> d8039d6 (11/12 commit)
                }
                digitStyle={{
                  backgroundColor: "#FFF",
                  borderWidth: 2,
                  borderColor: "#fdddf3",
                }}
<<<<<<< HEAD
                digitTxtStyle={{ color: "#fdddf3" }}
=======
                digitTxtStyle={{ color: "#000" }}
>>>>>>> d8039d6 (11/12 commit)
                timeLabelStyle={{ color: "red", fontWeight: "bold" }}
                separatorStyle={{ color: "#fdddf3" }}
                timeToShow={["H", "M", "S"]}
                timeLabels={{ m: null, s: null }}
                showSeparator
              />
<<<<<<< HEAD

              <Button
                primary
                onPress={this.OnCheckAnswer}
=======
              <Button
                primary
                onPress={() => OnCheckAnswer() }
>>>>>>> d8039d6 (11/12 commit)
              >
                <Text style={{ fontSize: 16, color: "#fff" }}>NỘP BÀI</Text>
              </Button>
            </View>
          </Right>
        </Header>
        {isLoading ? (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <ActivityIndicator size="large" color="#0000ff" />
            <Text>loading data!!!</Text>
          </View>
        ) : (
          <Tabs renderTabBar={() => <ScrollableTab />}>
            <Tab heading="Part 1">
<<<<<<< HEAD
              <Part1 maDe={idDe} />
            </Tab>

            <Tab heading="Part 2">
              <Part2 maDe={idDe} />
            </Tab>

            <Tab heading="Part 3">
              <Part3 maDe={idDe} />
            </Tab>

            <Tab heading="Part 3-2">
              <Par3p2 maDe={idDe} />
            </Tab>

            <Tab heading="Part 4">
              <Part4 maDe={idDe} />
            </Tab>
            <Tab heading="Part 5">
              <Part5 maDe={idDe} />
            </Tab>

            <Tab heading="Part 6">
              <Part6 maDe={idDe} />
            </Tab>

            <Tab heading="Part 7">
              <Part7 maDe={idDe} />
            </Tab>

            <Tab heading="Part 8">
              <Part8 maDe={idDe} />
            </Tab>

            <Tab heading="Part 9">
              <Part9 maDe={idDe} />
            </Tab>

            <Tab heading="Part 10">
              <Part10 maDe={idDe} />
            </Tab>

            <Tab heading="Part 11">
              <Part11 maDe={idDe} />
            </Tab>

            <Tab heading="Part 12">
              <Part12 maDe={idDe} />
            </Tab>

            <Tab heading="Part 13">
=======
              <Part1 />
            </Tab>

            <Tab heading="Part 2">
              <Part2 />
            </Tab> 

            <Tab heading="Part 3">
              <Part3 />
            </Tab>

            <Tab heading="Part 3-2">
              <Par3p2 />
            </Tab>

            <Tab heading="Part 4">
              <Part4 />
            </Tab>
            <Tab heading="Part 5">
              <Part5 />
            </Tab>

            <Tab heading="Part 6">
              <Part6 />
            </Tab>

            <Tab heading="Part 7">
              <Part7 />
            </Tab>

            <Tab heading="Part 8">
              <Part8 />
            </Tab>

            <Tab heading="Part 1 - Listen">
              <Part9  />
            </Tab>

            <Tab heading="Part 2 - Listen">
              <Part10  />
            </Tab>

            <Tab heading="Part 3 - Listen">
              <Part11 />
            </Tab>

            <Tab heading="Part 4 - Listen">
              <Part12 maDe={idDe} />
            </Tab>

            <Tab heading="Part 5 - Listen">
>>>>>>> d8039d6 (11/12 commit)
              <Part13 maDe={idDe} />
            </Tab>
          </Tabs>
        )}
      </Container>
    );
  }
<<<<<<< HEAD
}
=======

export default LamDeChiTiet;
>>>>>>> d8039d6 (11/12 commit)

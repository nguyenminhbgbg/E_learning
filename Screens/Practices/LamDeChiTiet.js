
import React, { useEffect } from 'react';
import { ActivityIndicator, Text, View, Alert } from "react-native";
import { Container, Header,Subtitle, Tab, Tabs, ScrollableTab, Left, Right, Icon, Button, Body ,Title } from 'native-base';
import CountDown from 'react-native-countdown-component';

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
  const { loadTime } = route.params;
  const { checkAnswer } = useSelector(state => state.mainReducer);
  const dispatch = useDispatch();
  const fetchAllParts = (idDeThi) => dispatch(getAllDeThi(idDeThi));
  const [isLoading, SetIsLoading] = React.useState(false);

  useEffect(() => {
    console.log('check data: ' + checkAnswer)
  }, [checkAnswer]);

  const [idDe, SetIdDe] = React.useState(null);
  // const [loadTime , setLoadTime ] = React.useState();

  const OnCheckAnswer = () => {
    SetIsLoading(false);
    Alert.alert(
      "Thông báo",
      'Bạn có chắc chắn muốn nộp bài thi?',
      [
          {
          text: 'Xác nhận',
          onPress: () =>
            navigation.navigate("NopBaiTinhDiem"),
          },

          {
          text: 'Hủy',
          onPress: () => console.log('Hủy nộp bài'),
          },
      ],
      { cancelable: false,
        onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ), }
      );
    
  };
  useEffect(() => {
    let { idDe } = route.params;
      SetIdDe(idDe);
      if(idDe){
        fetchAllParts(idDe);
      }
  }, [route.params]);

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                name="menu"
                onPress={() => navigation.openDrawer()}
              />
            </Button>
          </Left>
          <Body>
            <Title>LÀM ĐỀ</Title>
            <Subtitle>Mã đề: {idDe}</Subtitle>
          </Body>
          
          <Right>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              { !checkAnswer ? (
                <CountDown
                size={13}
                until={ loadTime }
                onFinish={() => {
                  alert("Finished") ,
                  navigation.navigate("NopBaiTinhDiem")
                  }
                }
                digitStyle={{
                  backgroundColor: "#FFF",
                  borderWidth: 2,
                  borderColor: "#fdddf3",
                }}
                digitTxtStyle={{ color: "#000" }}
                timeLabelStyle={{ color: "red", fontWeight: "bold" }}
                separatorStyle={{ color: "#fdddf3" }}
                timeToShow={["H", "M", "S"]}
                timeLabels={{ m: null, s: null }}
                showSeparator
              />
              ) : null}
              
              <Button
                primary
                onPress={() => OnCheckAnswer() }
              >
                {
                  checkAnswer ? (
                    <Text style={{ fontSize: 16, color: "#fff" }}>KẾT THÚC</Text>
                  ) : <Text style={{ fontSize: 16, color: "#fff" }}>NỘP BÀI</Text>
                }
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
            <Tab page heading="Part 1">
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
              <Part12 />
            </Tab>

            <Tab heading="Part 5 - Listen">
              <Part13 />
            </Tab>
          </Tabs>
        )}
      </Container>
    );
  }

export default LamDeChiTiet;
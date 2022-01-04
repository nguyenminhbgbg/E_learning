import React, {useEffect} from "react";
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { View, Text, StyleSheet, Image } from 'react-native'
function Learning({ route, navigation }) {

  return (
    <Container>
        <Header style={{backgroundColor:'#d1a0a7'}}>
            <Left>
              <Button 
              onPress={() => ( navigation.goBack())}
              transparent>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title style={styles.textTitle}>Thông tin</Title>
            </Body>
            <Right>
              <Button
              onPress={() => ( navigation.openDrawer() )}
              transparent>
                <Icon name='menu' />
              </Button>
            </Right>
        </Header>
        <View style={styles.viewTitle}>
            <Image
                style={styles.viewSubTitle1}
                source={require('../images/unicorn.png')}
            />
            <View 
                style={styles.viewSubTitle2}>
                <Text style={styles.title}>E LEARNING</Text>
                <Text>Phiên bản thử nghiệm 0.0</Text>
            </View>
        </View>
        <View style={styles.viewContent}>
            <Text style={styles.textCon}>
                E Learning là ứng dụng dành cho người dùng có nhu cầu ôn luyện thi tiếng anh A2/B1. Trung tâm tiếng Anh thu nhỏ
                trong điện thoại, máy tính của bạn. Ôn luyện thi tiếng Anh dễ dàng hơn
                với hệ thống riêng và lộ trình được thiết kế tối ưu cho mỗi cá nhân.
            </Text>
        </View>
    </Container>
    
  );
}
export default Learning;
const styles = StyleSheet.create({
    textTitle: {
        color: "#fff",
        fontSize:22,
        fontFamily: "Roboto-Bold"
    },
    viewTitle: {
        flex:1,
        paddingLeft: 20,
        flexDirection: 'row',
        marginVertical: 20,
        height: 1,
        borderBottomColor: '#e6e6fa',
        borderBottomWidth: 1,
        maxHeight: 70
    },
    viewSubTitle1: {
        flex: 1,
        width: 50,
         height: 50
    },
    viewSubTitle2: {
        flex: 5,
        marginHorizontal: 10
    },
    title: {
        color: "#009387",
        fontSize: 22,
        fontWeight: "bold",
      },
    viewContent: {
        flex: 1,
        marginHorizontal: 10,
        
    },
    textCon: {
        fontSize: 18,
        textAlign:'justify'
    }
  });

import React,{ useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  Image,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
  Keyboard
} from "react-native";
import * as Animatable from 'react-native-animatable';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";
import Feather from "react-native-vector-icons/Feather";
import { useTheme } from 'react-native-paper';

import { AuthContext } from '../../components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useSelector, useDispatch } from 'react-redux';
import { loginAction } from '../../redux/actions';

const SignInScreen = ({ navigation }) => {
  
  const { userToken, userInf,mesLogin } = useSelector(state => state.mainReducer);
  const dispatch = useDispatch();

  const LoginAction = (email, pass) => dispatch(loginAction(email, pass));

  const txtPassWordRef = useRef();

  const [data, setData] = React.useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const { colors } = useTheme();
  const { signIn } = React.useContext(AuthContext);

  useEffect(() => {
    UserToken();
  }, [userToken,data.email, data.password]);

  function LoginActionDone() {
    if(data.email && data.password){
      LoginAction(data.email, data.password)
      setTimeout( async () => {
        signIn()
      }, 1000);
    }
  }

  const UserToken = async () =>{
    try {
      await AsyncStorage.setItem("userToken", userToken );
      await AsyncStorage.setItem("user_info", JSON.stringify(userInf) );
      console.log("login userToken async :" + userToken)
      console.log("login user_info async :" + JSON.stringify(userInf) )
    } catch (error) {
      console.log(error);
    }
  }
  
  const textInputChange = (val) => {
    const re = /\S+@\S+\.\S+/;
    if( val.trim().length >= 6 && re.test(val) ) {
        setData({
            ...data,
            email: val,
            check_textInputChange: true,
            isValidUser: true
        });
      } else {
        setData({
            ...data,
            email: val,
            check_textInputChange: false,
            isValidUser: false
        });
      }
  }
  const handlerPasswordChange = (val) => {
    if( val.trim().length >= 6 ) {
        setData({
            ...data,
            password: val,
            isValidPassword: true
        });
    } else {
        setData({
            ...data,
            password: val,
            isValidPassword: false
        });
    }
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    })
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle="light-content"/>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <TouchableWithoutFeedback style={[styles.footer, {
            backgroundColor: colors.background
        }]} onPress={Keyboard.dismiss}>
          <Animatable.View 
              animation="fadeInUpBig"
              style={[styles.footer, {
                  backgroundColor: colors.background
              }]}
            >
              <Text style={styles.text_footer}>Email</Text>
              <View style={styles.action}>
                <FontAwesome name="user-o" color="#05375a" size={20} />
                <TextInput
                  placeholder="Your Email"
                  onChangeText={(val) => textInputChange(val)}
                  style={styles.textInput}
                  autoCapitalize="none"
                  returnKeyType="next"
                  autoCorrect={false}
                  onSubmitEditing={() => txtPassWordRef.current.focus()}
                />
                {data.check_textInputChange ?
                  <Animatable.View
                      animation="bounceIn"
                  >
                      <Feather 
                          name="check-circle"
                          color="green"
                          size={20}
                      />
                  </Animatable.View>
                  : null}
              </View>
              { data.isValidUser ? null : 
                  <Animatable.View animation="fadeInLeft" duration={500}>
                  <Text style={styles.errorMsg}>Tài khoản có độ dài tối thiểu 6 kí tự và dạng email.</Text>
                  </Animatable.View>
                  }
              <Text style={[styles.text_footer, {
                marginTop: 30
              }]}>Password</Text>
              <View style={styles.action}>
                <FontAwesome name="lock" color="#05375a" size={20} />
                <TextInput
                  placeholder="Your Password"
                  onChangeText={(val) => handlerPasswordChange(val)}
                  secureTextEntry={data.secureTextEntry ? true : false}
                  style={styles.textInput}
                  autoCapitalize="none"
                  ref={txtPassWordRef}
                />
                <TouchableOpacity
                  onPress={updateSecureTextEntry}
                >
                  {data.secureTextEntry ?
                    <Feather name="eye-off" color="gray" size={20} />
                    :
                    <Feather name="eye" color="gray" size={20} />}
                </TouchableOpacity>
              </View>
              { data.isValidPassword ? null : 
                  <Animatable.View animation="fadeInLeft" duration={500}>
                  <Text style={styles.errorMsg}>Mật khẩu tối thiểu 6 kí tự.</Text>
                  </Animatable.View>
                  }
              { mesLogin ? <Animatable.View animation="fadeInLeft" duration={500}>
                  <Text style={styles.errorMsg}>{mesLogin}</Text>
                  </Animatable.View> : null
                  }

              <View style={styles.button}>
                <TouchableOpacity
                  style={styles.signIn}
                  onPress={() => { LoginActionDone() }}
                >
                  <LinearGradient
                    colors={["#08d4c4", "#01ab9d"]}
                    style={styles.signIn}
                  >
                    <Text style={styles.textSign} >Đăng nhập</Text>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Đăng kí tài khoản</Text>
                </TouchableOpacity>
              </View>
              <Animatable.View style={styles.signInW}>

                <TouchableOpacity
                onPress={() => Alert.alert(
                  "Thông báo",
                  'Tính năng đang được phát triển thêm',
                  [
                      {
                      text: 'Xác nhận',
                      }
                  ],
                )}
                  style={[styles.signInWith, {
                    borderColor: '#009387',
                    borderWidth: 1,
                    marginTop: 15,
                    flexDirection: 'row',
                    flex: 1,
                    marginLeft: 5,
                    marginRight: 5
                  }]}
                >
                  <FontAwesome name="facebook-square" color="#385592" size={28} style={{ marginRight: 5, marginLeft: 5 }} />
                  <Text style={[styles.textSign, {
                    color: '#385592'
                  }]}>FACEBOOK</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => Alert.alert(
                  "Thông báo",
                  'Tính năng đang được phát triển thêm',
                  [
                      {
                      text: 'Xác nhận',
                      }
                  ],
                )}
                  style={[styles.signInWith, {
                    borderColor: '#009387',
                    borderWidth: 1,
                    marginTop: 15,
                    flex: 1,
                    flexDirection: 'row',
                    marginLeft: 5,
                    marginRight: 5
                  }]}
                >
                  <Image source={require('./google.png')}
                      style={{width:28,height:24 , marginRight:5, marginLeft: 5}}            
                  />
                  <Text style={[styles.textSign, {
                    color: '#666664'
                  }]}>GOOGLE</Text>
                </TouchableOpacity>
              </Animatable.View>
            </Animatable.View>
        </TouchableWithoutFeedback>
      


    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  signInW: {
    flex: 1, flexDirection: 'row', justifyContent: "space-around",
    marginTop: 50,
  },
  signInWith: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

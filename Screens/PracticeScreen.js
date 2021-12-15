import React, {useEffect} from "react";
import { View, Text,Image,StyleSheet,TouchableOpacity,ScrollView, ImageBackground, FlatList } from 'react-native';
import ListToppic from './Practices/ListToppic';
import * as Animatable from 'react-native-animatable';
import { useSelector, useDispatch } from 'react-redux';
import { getListAllDeThi } from '../redux/actions';
function ExploreScreen({ navigation }) {
    const { AllExam } = useSelector(state => state.mainReducer);
    const dispatch = useDispatch();
    const GetAllExam = () => dispatch(getListAllDeThi());

    useEffect(() => {
      GetAllExam();
    }, []);

    const renderItem = ({ item }) => {
      return(
          <TouchableOpacity
              onPress={() => navigation.navigate("PracticeTopics", {
                exam: item
            })}
              style={{
                  flexDirection:"row",
                  backgroundColor:"#fdddf3",
                  padding:20,
                  marginHorizontal:20,
                  borderRadius:20,
                  alignItems:"center",
                  marginTop:10
              }}
          >
                  <Image
                      source={require('../images/unicorn1.png')}
                      style={{width:40,height:40}}
                  />

                  <View>
                      <Text style={{
                          alignContent:'center',
                          color:"#345c74",
                          fontFamily:"Bold",
                          fontSize:13,
                          paddingHorizontal:20,
                          width:170
                      }}>Đề {item.id}: {item.name}</Text>
                      
                  </View>
                  <Text style={{
                      color:"#345c74",
                      fontFamily:"Medium",
                      fontSize:13,
                      paddingLeft:10,
                      paddingRight:10
                  }}>
                      Bắt đầu!!
                  </Text>
          </TouchableOpacity>
      )
    }

    return (
        <ImageBackground
          source={require('../images/background4.jpg')}
          style={{width:"100%", height:"100%"}}
          >
          <View
              style={{
                height:200,
                width:"100%",
                //paddingTop:40,
                alignItems:'center',
              }}>
              <Text style={{
                  paddingVertical:10,
                  fontSize:35,
                  //paddingTop:40,
                  fontFamily:"Bold",
                  color:"#FFF"
              }}>
              ĐỀ THI ÔN LUYỆN
              </Text>
              <Text style={{
                  fontSize:20,
                  color:"#FFF"
              }}>
              ĐH CNTT&TT
              </Text>
              <Image
                source={require('../images/unicorn1.png')}
                style={{height:50,width:50}}
            />
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
                >
                <View style={{
                    backgroundColor:'#FFf',
                    borderTopLeftRadius:60,
                    borderTopRightRadius:60,
                    }}>
                
                <View>
                <FlatList
                    data={AllExam}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                />
                </View>
            </View>                
          </Animatable.View>
          
        </ImageBackground>
    );
  
}
export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: Platform.OS === 'ios' ? 3 : 5,
      backgroundColor: '#fff',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      paddingHorizontal: 10,
      paddingVertical: 20
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  },
  textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 20
  },
  color_textPrivate: {
      color: 'grey'
  }
});

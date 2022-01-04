import React, {useEffect} from "react";
import { Button, View, Text,Image,FlatList,TouchableOpacity,ScrollView, ImageBackground } from 'react-native';
import {Modalize} from 'react-native-modalize'

import { useSelector, useDispatch } from 'react-redux';
import { getAllLesson, dataLessonShow } from '../redux/actions';

function LearningScreen({ navigation }) {

    const { AllLesson } = useSelector(state => state.mainReducer);
    const dispatch = useDispatch();
  
    const GetDataLessonShow = lesson => dispatch(dataLessonShow(lesson));

    const GetAllLesson = () => dispatch(getAllLesson());

    useEffect(() => {
        GetAllLesson();
      }, []);

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() =>( GetDataLessonShow(item) , navigation.navigate("LearningDetail"
                , {
                    screen: 'Learning',
                    params: { lesson: item },
                  }
                  ) ) }
                    style={{
                        flexDirection:"row",
                        backgroundColor: "#fdddf3",
                        padding:15,
                        marginHorizontal:5,
                        borderRadius:20,
                        alignItems:"center",
                        marginTop:5
                    }}>
                        <Image
                        source={require('../images/unicorn.png')}
                        style={{width:40,height:40}}
                        />
                        <View>
                            <Text style={{
                                color:"#345c74",
                                fontFamily:"Bold",
                                fontSize:13,
                                paddingHorizontal:20,
                                width:250
                            }}>{item.ten_lythuyet}</Text>
                            <Text style={{
                                color:"#f58084",
                                fontFamily:"Medium",
                                fontSize:15,
                                paddingHorizontal:20
                            }}>
                                {item.ten_loai}
                            </Text>
                        </View>
                        <Image
                        source={require('../images/pl.png')}
                        style={{width:20,height:20}}
                        />
                </TouchableOpacity>
            )
    }

    return (
        <ImageBackground
        source={require('../images/background1.jpg')}
        style={{width:"100%", height:"105%"}}
        >
    
        {/* Header + Title */}
        <View style={{
            width:"100%",
            alignItems:"flex-end",
            paddingHorizontal:20
        }}>
            
        </View>
        <Text style={{
            paddingHorizontal:20,
            fontSize:35,
            paddingTop:40,
            fontFamily:"Bold",
            color:"#FFF"
        }}>
            LET START!!!
        </Text>
        <Text style={{
            color:"#ffffff",
            fontFamily:"Bold",
            fontSize:20,
            paddingHorizontal:20,
            marginTop:5,
            marginBottom:5
        }}>Danh sách bài học:</Text> 
        {/* End Title */}
        {/* List Bài học */}
        <FlatList
            style={{marginBottom:'10%', borderBottomStartRadius:'20%'}}
            data={AllLesson}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
        />
        </ImageBackground>
    );
}
export default LearningScreen;

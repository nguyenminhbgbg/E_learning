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

    const listData = [
        
        { _id:1 , backgroundColor: "#fdddf3", name: 'Thì của động từ(Verb tens)', navi: 'Số bài: 23'},
        { _id:2 , backgroundColor: "#fef8e3", name: 'Động từ đặc biệt(Modal verbs)', navi: 'Số bài: 11'},
        { _id:3 , backgroundColor: "#fcf2ff" , name: 'Câu điều kiện(Conditionals)', navi: 'Số bài: 6'},
        { _id:4 , backgroundColor: "#fff0ee", name: 'Dạng bị động(Passive)', navi: 'Số bài: 5'},
        
        { _id:5 , backgroundColor: "#fdddf3", name: 'Lời nói tương thuật(Reported speech)', navi: 'Số bài: 2'},
        { _id:6 , backgroundColor: "#fef8e3", name: 'Câu hỏi(Questions)', navi: 'Số bài: 4'},
        { _id:7 , backgroundColor: "#fcf2ff" , name: 'Động từ -ING & động từ nguyên mẫu', navi: 'Số bài: 4'},
        { _id:8 , backgroundColor: "#fff0ee", name: 'Danh từ(Nouns) & Đại từ(Pronouns)', navi: 'Số bài: 9'},
        
        { _id:9 , backgroundColor: "#fdddf3", name: 'Mệnh đề quan hệ(Relative Clauses)', navi: 'Số bài: 9'},
        { _id:10 , backgroundColor: "#fef8e3", name: 'Tính từ(Adj) & trạng từ(Adv)', navi: 'Số bài: 10'},
        { _id:11 , backgroundColor: "#fcf2ff" , name: 'Trật Tự Từ(Word Order)', navi: 'Số bài: 8'},
        { _id:12 , backgroundColor: "#fff0ee", name: 'Giới Từ(Prepositions)', navi: 'Số bài: 16'},
        
      ];

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

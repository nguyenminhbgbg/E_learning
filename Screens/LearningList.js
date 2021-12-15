import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ImageBackground} from 'react-native'
import { Modalize } from 'react-native-modalize'
import CourseList from './CourseList'

// function LearningList({  }) {
export default class LearningList extends React.Component{
  render(){
  return (
    <ImageBackground
        source={require('../images/background2.jpg')}
        style={{width:"100%",height:"100%"}}
        >
        <View style={{
            flexDirection:"row",
            width:"100%",
            paddingHorizontal:20
        }}>
            <TouchableOpacity
                onPress={()=>this.props.navigation.navigate("Study")}
                style={{
                    paddingHorizontal:10,
                    paddingVertical:13,
                    borderRadius:10,
                    marginTop:30,
                    //backgroundColor:"#708090"
                }}
            >
                <Image
                    source={require('../images/a1.png')}
                    style={{width:25,height:20}}
                />
            </TouchableOpacity>
            
        </View>
        <Text style={{
            color:"#FFF",
            fontSize:35,
            fontFamily:"Bold",
            width:270,
            alignSelf:"center",
            textAlign:"center",
            marginTop:34
            
            }}>
            Thì của động từ (Verb tens)
        </Text>
        <Text style={{
                        color:"#FFF",
                        fontFamily:"Medium",
                        fontSize:25,
                        alignSelf:"center",
                        textAlign:"center",
                        paddingHorizontal:20
                    }}>
                        Số bài: 19 lessons
                    </Text>

        <Modalize
            handleStyle={{
                marginTop:30,
                backgroundColor:"#e9e9e9",
                width:80
            }}
            modalStyle={{
                backgroundColor:"#fffaf0",
                borderTopLeftRadius:60,
                borderTopRightRadius:60
            }}
            alwaysOpen={500}
            scrollViewProps={{showsVerticalScrollIndicator:false}}
        >
            <View style={{marginTop:40}}>
                <CourseList
                    onPress={()=>this.props.navigation.navigate("SupportScreen")}
                    img={require('../images/unicorn.png')}
                    title="Present Continuous(I am doing)"
                    bg="#fdddf3"
                />
                <CourseList
                    onPress={()=>this.props.navigation.navigate("SupportScreen")}
                    img={require('../images/unicorn.png')}
                    title="Present Continuous(I am doing)"
                    bg="#fdddf3"
                />
                <CourseList
                    onPress={()=>this.props.navigation.navigate("SupportScreen")}
                    img={require('../images/unicorn.png')}
                    title="Present Continuous(I am doing)"
                    bg="#fdddf3"
                />
                <CourseList
                    onPress={()=>this.props.navigation.navigate("SupportScreen")}
                    img={require('../images/unicorn.png')}
                    title="Present Continuous(I am doing)"
                    bg="#fdddf3"
                />
                <CourseList
                    onPress={()=>this.props.navigation.navigate("SupportScreen")}
                    img={require('../images/unicorn.png')}
                    title="Present Continuous(I am doing)"
                    bg="#fdddf3"
                />
                <CourseList
                    onPress={()=>this.props.navigation.navigate("SupportScreen")}
                    img={require('../images/unicorn.png')}
                    title="Present Continuous(I am doing)"
                    bg="#fdddf3"
                />
                <CourseList
                    onPress={()=>this.props.navigation.navigate("SupportScreen")}
                    img={require('../images/unicorn.png')}
                    title="Present Continuous(I am doing)"
                    bg="#fdddf3"
                />
                <CourseList
                    onPress={()=>this.props.navigation.navigate("SupportScreen")}
                    img={require('../images/unicorn.png')}
                    title="Present Continuous(I am doing)"
                    bg="#fdddf3"
                />
                <CourseList
                    onPress={()=>this.props.navigation.navigate("SupportScreen")}
                    img={require('../images/unicorn.png')}
                    title="Present Continuous(I am doing)"
                    bg="#fdddf3"
                />
                <CourseList
                    onPress={()=>this.props.navigation.navigate("SupportScreen")}
                    img={require('../images/unicorn.png')}
                    title="Present Continuous(I am doing)"
                    bg="#fdddf3"
                />
                <CourseList
                    onPress={()=>this.props.navigation.navigate("SupportScreen")}
                    img={require('../images/unicorn.png')}
                    title="Present Continuous(I am doing)"
                    bg="#fdddf3"
                />

            </View>
        </Modalize>
    </ImageBackground>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});

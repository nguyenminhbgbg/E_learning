import * as React from 'react';
import { Button, View, Text,Image,TextInput,TouchableOpacity,ScrollView, ImageBackground } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <ImageBackground
            source={require('../images/Home.png')}
            style={{width:"100%",height:"105%"}}
           >
               <ScrollView>
                   <View style={{
                       width:"100%",
                       alignItems:"flex-end",
                       paddingHorizontal:20
                   }}>
                   </View>
                   <Text style={{
                       paddingHorizontal:20,
                       fontSize:35,
                       paddingTop:60,
                       fontFamily:"Bold",
                       color:"#FFF"
                   }}>
                       Welcome Elearning
                   </Text>

                   <View style={{
                       flexDirection:"row",
                       backgroundColor:"#FFF2F2",
                       marginTop:25,
                       marginHorizontal:20,
                       borderRadius:30,
                       paddingVertical:30,
                       paddingLeft:30
                   }}>
                       <View>
                           <Text style={{
                               color:"#345c74",
                               fontSize:22,
                               fontFamily:"Bold",
                               width:250,
                               paddingRight:100 
                           }}>
                               Start learning new Staff
                           </Text>
                           <TouchableOpacity
                                onPress={() => navigation.navigate('StudyEnglish')}
                                style={{
                                    flexDirection:"row",
                                    backgroundColor:"#f58084",
                                    alignItems:"center",
                                    marginTop:20,
                                    width:150,
                                    paddingVertical:10,
                                    borderRadius:14,
                                    paddingHorizontal:10
                                }}
                           >
                                    <Text style={{
                                        color:"#FFF",
                                        fontFamily:"Bold",
                                        fontSize:12
                                    }}>Categories</Text>  
                                    <Image
                                        source={require('../images/a3.png')}
                                        style={{marginLeft:20,width:8,height:8}}
                                    />
                           </TouchableOpacity>
                       </View>
                       <Image
                            source={require('../images/undraw.png')}
                            style={{marginLeft:-80,marginTop:35}}
                       />

                   </View>
               </ScrollView>
           </ImageBackground>
  );
}
export default HomeScreen;

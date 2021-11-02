import React from 'react';
import { View, Text,ImageBackground,TouchableOpacity, Button, StyleSheet } from 'react-native';
<<<<<<< HEAD
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

=======
>>>>>>> d8039d6 (11/12 commit)
function SettingScreen({ navigation }) {
  return (
    <ImageBackground
    source={require('../images/background4.jpg')}
    style={{width:"100%", height:"100%"}}>
      <TouchableOpacity style={styles.container}>
        <View>
            <Text style={{color:'#fff' , fontSize:30}}>SIGN OUT</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
}
export default SettingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});

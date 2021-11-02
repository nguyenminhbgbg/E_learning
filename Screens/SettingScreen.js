import React from 'react';
import { View, Text,ImageBackground,TouchableOpacity, Button, StyleSheet } from 'react-native';
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

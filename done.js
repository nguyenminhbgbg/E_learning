/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import Slider from '@react-native-community/slider';
 import React from 'react';
 import {
     StyleSheet,
     Text,
     TouchableOpacity,
     View,
 } from 'react-native';
 import SoundPlayer from 'react-native-sound';
 import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
 import { useAudioHelper } from '../../../helpers/audio-helper';

 const Part9 = ()=> {
    
     const player = useAudioHelper({
         listSounds: [
             { type: 'app-bundle', path: 'rose.mp3', name: 'ROSE', basePath: SoundPlayer.MAIN_BUNDLE },
             ],
         timeRate: 15,
         isLogStatus: true,
     });
 
     return (
         <View style={styles.container}>
             <Text style={styles.name}>Name: {player.currentAudioName}</Text>
             {/* action */}
             
             <View style={styles.progressBar}>
             {
                     player.status === 'play' ?
                         <TouchableOpacity
                             onPress={player.pause}
                             style={styles.pause}
                         >
                             <FontAwesomeIcon
                                 name='pause'
                                 color='white'
                                 size={24}
                             />
                         </TouchableOpacity> :
                         <TouchableOpacity
                             onPress={player.play}
                             style={styles.pause}
                         >
                             <FontAwesomeIcon
                                 name='play'
                                 color='white'
                                 size={24}
                             />
                         </TouchableOpacity>
                 }
                 <Text style={styles.progressBarText}>{player.currentTimeString}</Text>
                 <Slider
                     style={{width: '50%', height: 40}}
                     minimumValue={0}
                     maximumValue={player.duration}
                     value={player.currentTime}
                     minimumTrackTintColor="#FFFFFF"
                     maximumTrackTintColor="gray"
                     thumbTintColor='#FFFFFF'
                     onTouchStart={player.pause}
                     onTouchEnd={player.play}
                     onSlidingComplete={(seconds) => player.seekToTime(seconds)}
                 />
                 <Text style={styles.progressBarText}>{player.durationString}</Text>
             </View>
            
         </View>
     );
 };
 
 const styles = StyleSheet.create({
     container: {
         flex:1,
         justifyContent:'center',
         backgroundColor:'black',

     },
     pause: {
        marginHorizontal:20,
        alignItems:'center',
        justifyContent:'center'},
     name: {
         color: 'white',
     },
     progressBar: {
         flexDirection: 'row',
         marginVertical:15,
         marginHorizontal:15,
     },
     progressBarText: {
         color: 'white',
         alignSelf: 'center',
     },
     
 });
 
 export default Part9;
 
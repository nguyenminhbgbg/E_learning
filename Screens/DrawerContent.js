import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem,

} from '@react-navigation/drawer'
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { color } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from '../components/context';
import { useSelector, useDispatch } from 'react-redux';
import { logOutAction } from '../redux/actions';

export function DrawerContent(props){
    const dispatch = useDispatch();
    const LogOutAction = () => dispatch(logOutAction());

    const [userInfo, setUserInfo] = React.useState(null);

    useEffect(() => {
        getDataUserInfo();
      }, [userInfo]);

    const getDataUserInfo = () =>{
        try {
          AsyncStorage.getItem("user_info").then((value) => {
                value != null ? setUserInfo(JSON.parse(value)) : null
          });
        } catch (error) {
          console.log(error);
        }
    }

    const [isDarkTheme,setIsDarkTheme] = React.useState(false);

    const { signOut } = React.useContext(AuthContext);

    const toggleTheme =() =>{
        setIsDarkTheme(!isDarkTheme);
    }
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row', marginTop:15 }}>
                            <Avatar.Image
                                source={{
                                    uri:'https://scontent.fhph1-3.fna.fbcdn.net/v/t1.6435-9/206846333_369060647971241_4676614664002070620_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=j3719pbq2I8AX9vDQ1k&_nc_ht=scontent.fhph1-3.fna&oh=d9c80500bb238acf04157aaa12baf8d5&oe=616BA97A'
                                }}
                                size={55}
                            />
                            { userInfo != null ?(
                                <View style={{marginLeft:15 , flexDirection:'column'}}>
                                    <Title style={styles.title}>{userInfo.name}</Title>
                                    <Caption style={styles.caption}>{userInfo.email}</Caption>
                                </View>
                                ):
                                null
                            }
                        </View>
                         {/* <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View> */}
                    </View>
                    <Drawer.Section style={styles.drawerContent}>
                        <DrawerItem
                        icon={({color, size}) =>(
                            <Icon name="home-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Home"
                        onPress ={() =>{props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                        icon={({color, size}) =>(
                            <Icon name="bookmark-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Study English"
                        onPress ={() =>{props.navigation.navigate('StudyEnglish')}}
                        />
                        <DrawerItem
                        icon={({color, size}) =>(
                            <Icon name="heart-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Practice Exam"
                        onPress ={() =>{props.navigation.navigate('PracticeExam')}}
                        />
                        
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}

                        />
                </Drawer.Section>
                {/* <Drawer.Section title="Preferences">
                    <TouchableRipple onPress ={() =>{toggleTheme()}}>
                        <View style={styles.preference}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents = "none">
                                <Switch value ={isDarkTheme}/>
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section> */}
                </View>
                
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                icon={({color, size}) =>(
                    <Icon name="exit-to-app"
                        color={color}
                        size={size}
                    />
                )}
                    label="Sign Out"
                    onPress ={() =>{signOut(), LogOutAction()}}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });

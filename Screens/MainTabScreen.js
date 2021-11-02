import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import LearningScreen from './LearningScreen';
import PracticeScreen from './PracticeScreen';
import SettingScreen from './SettingScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
<<<<<<< HEAD
=======
      barStyle={{ backgroundColor: '#d1a0a7' }}
>>>>>>> d8039d6 (11/12 commit)
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
<<<<<<< HEAD
          tabBarLabel: 'Home',
          tabBarColor: '#d1a0a7',
=======
          tabBarLabel: 'Trang Chủ',
>>>>>>> d8039d6 (11/12 commit)
          tabBarIcon: ({ color }) => (
            <Icon name="ios-apps" color={color} size={18} />
          ),
        }}
      />
      <Tab.Screen
        name="StudyEnglish"
        component={DetailsStackScreen}
        options={{
<<<<<<< HEAD
          tabBarLabel: 'Study English',
          tabBarColor: '#d1a0a7',
=======
          tabBarLabel: 'Lý Thuyết',
>>>>>>> d8039d6 (11/12 commit)
          tabBarIcon: ({ color }) => (
            <Icon name="ios-book" color={color} size={18} />
          ),
        }}
      />
      <Tab.Screen
        name="PracticeExam"
        component={ProfileStackScreen}
        options={{
<<<<<<< HEAD
          tabBarLabel: 'Practice Exam',
          tabBarColor: '#d1a0a7',
=======
          tabBarLabel: 'Luyển Đề',
>>>>>>> d8039d6 (11/12 commit)
          tabBarIcon: ({ color }) => (
            <Icon name="ios-heart-sharp" color={color} size={18} />
          ),
        }}
      />
<<<<<<< HEAD
      <Tab.Screen
=======
      {/* <Tab.Screen
>>>>>>> d8039d6 (11/12 commit)
        name="Settings"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarColor: '#d1a0a7',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-infinite" color={color} size={18} />
          ),
        }}
<<<<<<< HEAD
      />
=======
      /> */}
>>>>>>> d8039d6 (11/12 commit)
    </Tab.Navigator>
);

export default MainTabScreen;

<<<<<<< HEAD
const ExploreStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#d1a0a7',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Settings" component={SettingScreen} options={{
        title:'Settings',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#d1a0a7" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</HomeStack.Navigator>
);
=======
// const ExploreStackScreen = ({navigation}) => (
// <HomeStack.Navigator screenOptions={{
//         headerStyle: {
//         backgroundColor: '#d1a0a7',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//         fontWeight: 'bold'
//         }
//     }}>
//         <HomeStack.Screen name="Settings" component={SettingScreen} options={{
//         title:'Settings',
//         headerLeft: () => (
//             <Icon.Button name="ios-menu" size={25} backgroundColor="#d1a0a7" onPress={() => navigation.openDrawer()}></Icon.Button>
//         )
//         }} />
// </HomeStack.Navigator>
// );
>>>>>>> d8039d6 (11/12 commit)
const ProfileStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#d1a0a7',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Practice" component={PracticeScreen} options={{
        title:'Practice Exam',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#d1a0a7" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</HomeStack.Navigator>
);
const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#d1a0a7',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Home',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#d1a0a7" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
<DetailsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#d1a0a7',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Study" component={LearningScreen} options={{
          title:'Learning',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#d1a0a7" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</DetailsStack.Navigator>
);
  
import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import Learning from './Learning/Learning';
import LearningExample from './Learning/LearningExamp';


const LearningStack = createStackNavigator();

const TabNa = createMaterialBottomTabNavigator();

const LearningDetail = () => (
    <TabNa.Navigator
<<<<<<< HEAD
      initialRouteName="Learning"
      activeColor="#fff"
    >
      <TabNa.Screen
        name="Learning"
        component={LearningStackScreen}
=======
      initialRouteName="LearningDetail"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#d1a0a7' }}
    >
      <TabNa.Screen
        name="Learning"
        component={Learning}
>>>>>>> d8039d6 (11/12 commit)
        options={{
          tabBarLabel: 'Learning Theory',
          tabBarColor: '#d1a0a7',
          activeColor: '#000000',
          color:'#ccc',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-heart-sharp" color={color} size={18} />
          ),
        }}
      />
      <TabNa.Screen
        name="LearningExample"
<<<<<<< HEAD
        component={LearningExampleStackScreen}
=======
        component={LearningExample}
>>>>>>> d8039d6 (11/12 commit)
        options={{
          tabBarLabel: 'Example',
          tabBarColor: '#d1a0a7',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-book" color={color} size={18} />
          ),
        }}
      />
      
    </TabNa.Navigator>
  );

const LearningStackScreen = ({navigation}) => (
<LearningStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#d1a0a7',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <LearningStack.Screen name="LearningHome" component={Learning} options={{
        title:'Learning Theory',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#d1a0a7" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</LearningStack.Navigator>
);

const LearningExampleStackScreen = ({navigation}) => (
<LearningStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#d1a0a7',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <LearningStack.Screen name="LearningExample" component={LearningExample} options={{
          title:'Learning Example',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#d1a0a7" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</LearningStack.Navigator>
);
  
export default LearningDetail;

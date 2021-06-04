import React, { Component } from 'react';
import { Platform,ScrollView,Image,View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Container, Header, Body, CheckBox,
  Title, Card, CardItem, Left, Right, Icon, Content
} from 'native-base'

export default class LearningExamp extends Component {
  state = { 
    one: false,
    two: false,
    three: false,
   }
  onePress(){
    this.setState({one:true, two:false, three:false})
  }
  twoPress(){
    this.setState({one:false, two:true, three:false})
  }
  threePress(){
    this.setState({one:false, two:false, three:true})
  }
  render() {
    
    return (
      <ScrollView>
        <Card>
        <CardItem header>
          <Text style={{fontSize:18}}>1.Ai là người đã tạo ra đầu máy hơi nước đầu tiên:</Text>
        </CardItem>
          <CardItem style={{}}>
            <CheckBox checked={this.state.one}
              onPress={()=> this.onePress()}
              style={{marginRight:20}}
            />
            <Text>A</Text>
          </CardItem>
          <CardItem Body>
            <CheckBox checked={this.state.two}
              onPress={()=> this.twoPress()}
              style={{marginRight:20}}
            />
            <Text>B</Text>
          </CardItem>
          <CardItem Body>
            <CheckBox checked={this.state.three}
              onPress={()=> this.threePress()}
              style={{marginRight:20}}
            />
          <Text>C</Text>
          </CardItem>
          </Card>

          {/* 2 */}
          <Card>
        <CardItem header>
          <Text style={{fontSize:18}}>2.Ai là người đã tạo ra đầu máy hơi nước đầu tiên:</Text>
        </CardItem>
          <CardItem style={{}}>
            <CheckBox checked={this.state.one}
              onPress={()=> this.onePress()}
              style={{marginRight:20}}
            />
            <Text>A</Text>
          </CardItem>
          <CardItem Body>
            <CheckBox checked={this.state.two}
              onPress={()=> this.twoPress()}
              style={{marginRight:20}}
            />
            <Text>B</Text>
          </CardItem>
          <CardItem Body>
            <CheckBox checked={this.state.three}
              onPress={()=> this.threePress()}
              style={{marginRight:20}}
            />
          <Text>C</Text>
          </CardItem>
          </Card>
          <Card>
        <CardItem header>
          <Text style={{fontSize:18}}>3.Ai là người đã tạo ra đầu máy hơi nước đầu tiên:</Text>
        </CardItem>
          <CardItem style={{}}>
            <CheckBox checked={this.state.one}
              onPress={()=> this.onePress()}
              style={{marginRight:20}}
            />
            <Text>A</Text>
          </CardItem>
          <CardItem Body>
            <CheckBox checked={this.state.two}
              onPress={()=> this.twoPress()}
              style={{marginRight:20}}
            />
            <Text>B</Text>
          </CardItem>
          <CardItem Body>
            <CheckBox checked={this.state.three}
              onPress={()=> this.threePress()}
              style={{marginRight:20}}
            />
          <Text>C</Text>
          </CardItem>
          </Card>
          <Card>
        <CardItem header>
          <Text style={{fontSize:18}}>4.Ai là người đã tạo ra đầu máy hơi nước đầu tiên:</Text>
        </CardItem>
          <CardItem style={{}}>
            <CheckBox checked={this.state.one}
              onPress={()=> this.onePress()}
              style={{marginRight:20}}
            />
            <Text>A</Text>
          </CardItem>
          <CardItem Body>
            <CheckBox checked={this.state.two}
              onPress={()=> this.twoPress()}
              style={{marginRight:20}}
            />
            <Text>B</Text>
          </CardItem>
          <CardItem Body>
            <CheckBox checked={this.state.three}
              onPress={()=> this.threePress()}
              style={{marginRight:20}}
            />
          <Text>C</Text>
          </CardItem>
          </Card>
          <Card>
        <CardItem header>
          <Text style={{fontSize:18}}>5.Ai là người đã tạo ra đầu máy hơi nước đầu tiên:</Text>
        </CardItem>
          <CardItem style={{}}>
            <CheckBox checked={this.state.one}
              onPress={()=> this.onePress()}
              style={{marginRight:20}}
            />
            <Text>A</Text>
          </CardItem>
          <CardItem Body>
            <CheckBox checked={this.state.two}
              onPress={()=> this.twoPress()}
              style={{marginRight:20}}
            />
            <Text>B</Text>
          </CardItem>
          <CardItem Body>
            <CheckBox checked={this.state.three}
              onPress={()=> this.threePress()}
              style={{marginRight:20}}
            />
          <Text>C</Text>
          </CardItem>
          </Card>
        
      </ScrollView>
      
    );
  }
}
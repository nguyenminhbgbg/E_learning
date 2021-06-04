import { Row } from 'native-base';
import React, { Component } from 'react';
import { ActivityIndicator,ScrollView,Image, TextInput, FlatList,StyleSheet, Text, View } from 'react-native';
import FitImage from 'react-native-fit-image';


const Part13URL = "http://nikaws.cf/getpart13/";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      listPartDocumentArray: [],
      document: [],
      answers: [],
      isLoading: true,
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
    };
  }
  handelValue1 = (text) => {
      this.setState({ value1: text })
   }
   handelValue2 = (text) => {
      this.setState({ value2: text })
   }
   handleValue3 = (text) => {
      this.setState({ value3: text })
   }
   handleValue4 = (text) => {
      this.setState({ value4: text })
   }
   handleValue5 = (text) => {
      this.setState({ value5: text })
   }

  componentDidMount() {
    fetch(Part13URL + this.props.maDe)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.questions });
        this.setState({ listPartDocumentArray: json.listPartDocumentArray });
        this.setState({ document: json.document });
        this.setState({ answers: json.answers })
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data,document,listPartDocumentArray,answers, isLoading } = this.state;
    return (
      <ScrollView style={{marginBottom:20}}>
        {isLoading ? <ActivityIndicator/> : (
          <View >
          {/* img title past */}
            <View>
              <FlatList
                  data={listPartDocumentArray}
                  keyExtractor={({ id1 }, index1) => id1}
                  renderItem={({ item }) => (
                    <View style={{marginBottom:5, marginTop: 5}}>
                      <FitImage 
                        indicator={false} // disable loading indicator
                        indicatorColor="white" // react native colors or color codes like #919191
                        indicatorSize="integer" // (small | large) or integer
                        style={styles.fitImage}
                        source={{uri: 'http://nikaws.cf/' + item.url}}
                      />
                    </View>
                  )}
                  />
            </View>
          </View>
          )}
        <View style={{flex:1 , alignItems:'center'}}>
            <Text style={{fontSize:20, color:'blue'}}>
            Điền đáp án:
            </Text>
             <View style={{
                       flexDirection:"column",
                   }}>
                   <View style={{flexDirection:'row' , marginBottom:5}}>
                      <View style={{ margin:5}} >
                          <Text style={{marginHorizontal:10}}>Câu 21</Text>
                      </View>
                     <TextInput style = {styles.inPutAnsew}
                        underlineColorAndroid = "transparent"
                        autoCapitalize = "none"
                        onChangeText = {this.handelValue1}/>
                   </View>
                   <View style={{flexDirection:'row' , marginBottom:5}}>
                      <View style={{ margin:5}} >
                          <Text style={{marginHorizontal:10}}>Câu 22</Text>
                      </View>
                        <TextInput style = {styles.inPutAnsew}
                        underlineColorAndroid = "transparent"
                        autoCapitalize = "none"
                        onChangeText = {this.handelValue2}/>
                   </View>
                   <View style={{flexDirection:'row' , marginBottom:5}}>
                      <View style={{ margin:5}} >
                          <Text style={{marginHorizontal:10}}>Câu 23</Text>
                      </View>
                     <TextInput style = {styles.inPutAnsew}
                        underlineColorAndroid = "transparent"
                        autoCapitalize = "none"
                        onChangeText = {this.handelValue3}/>
                   </View>
                   <View style={{flexDirection:'row' , marginBottom:5}}>
                      <View style={{ margin:5}} >
                          <Text style={{marginHorizontal:10}}>Câu 24</Text>
                      </View>
                     <TextInput style = {styles.inPutAnsew}
                        underlineColorAndroid = "transparent"
                        autoCapitalize = "none"
                        onChangeText = {this.handelValue4}/>
                   </View>
                   <View style={{flexDirection:'row', marginBottom:5}}>
                      <View style={{ margin:5}} >
                          <Text style={{marginHorizontal:10}}>Câu 25</Text>
                      </View>
                     <TextInput style = {styles.inPutAnsew}
                        underlineColorAndroid = "transparent"
                        autoCapitalize = "none"
                        onChangeText = {this.handelValue5}/>
                   </View>
              </View>
        
        </View>

       
      </ScrollView>
      
    );
  }
};

const styles = StyleSheet.create({
    img: {
        width: 64,
        height: 64
    },
    fitImage: {
    borderRadius: 5,

  },
  flexRow: {
    flexDirection: 'row'
  },
  flexCol: {
    flexDirection: 'column'
  },
  fitImageWithSize: {
    height: 50,
    width: "80%",
    marginBottom:3
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  textQestion: {
    color:'#000',
    fontSize:16,
    margin:5,
    textAlign:'justify',
    marginLeft:10
  },
  inPutAnsew: {
    textAlign:'center', 
    height: 40,
    minWidth:'70%', 
    marginHorizontal:3, 
    borderColor: 'gray', 
    borderWidth: 1 , 
    borderRadius:10, 
    alignItems:'center'
  }
})
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  YellowBox
} from 'react-native';
import firebase from 'react-native-firebase';
import { Dropdown } from 'react-native-material-dropdown';
import { Actions, Router, Scene } from "react-native-router-flux";

var dataDict ={ heightD:'', weightD:'', hairD:'', skinD:'', eyeD:'', eventD:''} ;
export default class homePage extends Component {

  constructor(props) {
    super(props);
    YellowBox.ignoreWarnings([
      'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
    ]);
    this.state ={ 
    canada: '',
    heightProp:'',
    weightProp:'',
    hairProp:'',
    skinProp:'',
    eyeProp:'',
    eventProp:'',
    
    show: false,
    
    };

  }
  handleLogin = () => {
    if ((this.state.heightProp != '')&&(this.state.weightProp != '')&&(this.state.hairProp != '')&&(this.state.eyeProp != '')&&(this.state.skinProp != '')&&(this.state.eventProp != '')){
      
      dataDict.heightD = this.state.heightProp;
      dataDict.weightD = this.state.weightProp;
      dataDict.hairD = this.state.hairProp;
      dataDict.skinD = this.state.skinProp;
      dataDict.eyeD = this.state.eyeProp;
      dataDict.eventD = this.state.eventProp;
      // Alert.alert(dataDict);
      Actions.ResultPage({canada: dataDict });
    }
    else{
      Alert.alert("Select all value");
    }
  }

FlatListItemSeparator = () => {
  return (
    //Item Separator
    <View style={{height: 0.5, width: '100%', backgroundColor: '#C8C8C8'}}/>
  );
};

  render(){
    let HEIGHTdata = [{
      value: '59 Inch',
    }, {
      value: '61 Inch',
    }, {
      value: '62 Inch',
    },{
      value: '64 Inch',
    }, {
      value: '66 Inch',
    }, {
      value: '68 Inch',
    }, {
      value: '70 Inch',
    }, {
      value: '72 Inch',
    }];
    let WEIGHTdata = [{
      value: '121 Pound',
    }, {
      value: '132 Pound',
    }, {
      value: '143 Pound',
    },{
      value: '154 Pound',
    }, {
      value: '165 Pound',
    }, {
      value: '176 Pound',
    }, {
      value: '187 Pound',
    }, {
      value: '198 Pound',
    }];

    let HAIRdata = [{
      value: 'BLACK',
    }, {
      value: 'BLONDE',
    }, {
      value: 'BROWN',
    },{
      value: 'GREY',
    }, {
      value: 'RED',
    }];
    let EYEdata = [{
      value: 'AMBER',
    }, {
      value: 'BLUE',
    }, {
      value: 'BROWN',
    },{
      value: 'GREY',
    }, {
      value: 'GREEN',
    },{
      value: 'HAZAL',
    }, {
      value: 'RED AND VIOLET',
    }];
  
    let SKINdata = [{
      value: 'BLACK',
    }, {
      value: 'BROWN',
    }, {
      value: 'DARK BROWN',
    },{
      value: 'FAIR',
    }, {
      value: 'LIGHT',
    },{
      value: 'MEDIUM',
    }, {
      value: 'OLIVE',
    }];
    let data = [{
      value: 'ANY EVENT',
    }, {
      value: 'BIRTHDAY PARTY',
    }, {
      value: 'WEDDING PARTY',
    }];






    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
         <View style={styles.allView}>
        
          <View style={{width:'70%', marginTop:30}}>
            <Dropdown label='HEIGHT' data={HEIGHTdata} onChangeText={(heightProp) => this.setState({heightProp})}/>
          </View>
          <View style={{width:'70%'}}>
            <Dropdown label='WEIGHT' data={WEIGHTdata} onChangeText={(weightProp) => this.setState({weightProp})}/>
          </View>
          <View style={{width:'70%'}}>
            <Dropdown label='HAIR COLOR' data={HAIRdata} onChangeText={(hairProp) => this.setState({hairProp})}/>
          </View>
          <View style={{width:'70%'}}>
            <Dropdown label='EYE COLOR' data={EYEdata} onChangeText={(eyeProp) => this.setState({eyeProp})}/>
          </View>
          <View style={{width:'70%'}}>
            <Dropdown label='SKIN COLOR' data={SKINdata} onChangeText={(skinProp) => this.setState({skinProp})}/>
          </View>
          <View style={{width:'70%'}}>
            <Dropdown label='EVENT' data={data} onChangeText={(eventProp) => this.setState({eventProp})}/>
          </View>
           
           <TouchableOpacity style={styles.buttonTouch0} onPress={this.handleLogin}>
            <Text style={{color:'white', fontSize:20}}>N E X T</Text>
          </TouchableOpacity>
          <Text>{this.state.errorMessage}</Text>
         </View>
        </SafeAreaView>
      </Fragment>
    );
  }
  
}

const styles = StyleSheet.create({
  textView:{
    width: '70%',
    height:40,
    paddingLeft:10,
    paddingRight:10,
    borderBottomWidth:1,
    marginTop:20,

  },
  allView:{
    alignItems:'center',
    justifyContent:'center',
  },
    buttonTouch0:{
      marginTop:50,
      marginBottom:10,
        width: '70%',
        height: 50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'black',
      },
   
});


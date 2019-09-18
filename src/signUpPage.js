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
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  AsyncStorage
 
} from 'react-native';
import firebase from 'react-native-firebase';

import { Actions, Router, Scene } from "react-native-router-flux";




export default class signUpPage extends Component {

  constructor(props) {
    super(props);
    this.state ={ email: '', password: '', errorMessage: null };
  }
  saveData(){  
    let name = "Michal";  
    AsyncStorage.setItem('user',name);  
  }  
  handleLogin = () => {
    console.log('hrere');
   
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(
      
      Actions.HomePage()
      ).catch(error => this.setState({ errorMessage: error.message }))
   
  }
  onUsernameChange(srt) {
    let s = this.state;
    s.email = srt;
    this.setState(s);   
 }
 _storeData = async (name) => {
  try {
    await AsyncStorage.setItem('isLogin', name);
  } catch (error) {
    // Error saving data
  }
};
 onPasswordChange(srt) {
  let s = this.state;
  s.password = srt;
  this.setState(s);   
}
  render(){
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
         <View style={styles.allView}>
           <TextInput style={styles.textView} placeholder='Name'/>
        
           <TextInput style={styles.textView} placeholder='Email'  onChangeText={(email)=>this.onUsernameChange(email)} />
           <TextInput style={styles.textView} placeholder='Password'  onChangeText={(password)=>this.onPasswordChange(password)}/>
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
        width: '70%',
        height: 50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'black',
      },
});


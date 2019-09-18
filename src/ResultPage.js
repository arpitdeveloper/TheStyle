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
  Image,
  YellowBox
} from 'react-native';
// import firebase, {firestore} from 'react-native-firebase';
import * as firebase from "firebase";
import { Actions, Router, Scene } from "react-native-router-flux";
import 'firebase/storage';
firebase.initializeApp({
  apiKey: "yourkeyhere",
  authDomain: "projName-d0c3e.firebaseapp.com",
  databaseURL: "https://projName-d0c3e.firebaseio.com",
  storageBucket: "projName-d0c3e.appspot.com"
});

export default class homePage extends Component {

  constructor(props) {
    super(props);
    YellowBox.ignoreWarnings([
      'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
    ]);
    this.state ={ 
    canada: '',
    imgsrc: '',
    imageName:'',
    };
    // let HEIGHTdata = [{
    //   value: '59 Inch',
    // }, {
    //   value: '61 Inch',
    // }, {
    //   value: '62 Inch',
    // },{
    //   value: '64 Inch',
    // }, {
    //   value: '66 Inch',
    // }, {
    //   value: '68 Inch',
    // }, {
    //   value: '70 Inch',
    // }, {
    //   value: '72 Inch',
    // }];
  }
  handleLogin = () => {
   Actions.HomePage()
  }
  componentWillMount() {
    this.setState({ imgsrc: 'url '})
    if (this.props.canada.heightD == '59 Inch'){
   
      let strRef = firebase.storage().refFromURL('gs://thestyle-fe148.appspot.com/').child('01.jpeg').getDownloadURL().then(url => {
        this.setState({ imgsrc: url })
       })
    }else if (this.props.canada.heightD == '61 Inch'){
      let strRef = firebase.storage().refFromURL('gs://thestyle-fe148.appspot.com/').child('02.jpg').getDownloadURL().then(url => {
        this.setState({ imgsrc: url })
       })
    }else if (this.props.canada.heightD == '62 Inch'){
      let strRef = firebase.storage().refFromURL('gs://thestyle-fe148.appspot.com/').child('03.jpg').getDownloadURL().then(url => {
        this.setState({ imgsrc: url })
       })
    }else if (this.props.canada.heightD == '64 Inch'){
      let strRef = firebase.storage().refFromURL('gs://thestyle-fe148.appspot.com/').child('04.jpg').getDownloadURL().then(url => {
        this.setState({ imgsrc: url })
       })
    }else if (this.props.canada.heightD == '66 Inch'){
      let strRef = firebase.storage().refFromURL('gs://thestyle-fe148.appspot.com/').child('05.jpeg').getDownloadURL().then(url => {
        this.setState({ imgsrc: url })
       })
    }else if (this.props.canada.heightD == '68 Inch'){
      let strRef = firebase.storage().refFromURL('gs://thestyle-fe148.appspot.com/').child('06.jpeg').getDownloadURL().then(url => {
        this.setState({ imgsrc: url })
       })
    }
    else if (this.props.canada.heightD == '70 Inch'){
      let strRef = firebase.storage().refFromURL('gs://thestyle-fe148.appspot.com/').child('07.jpg').getDownloadURL().then(url => {
        this.setState({ imgsrc: url })
       })
    }
    else if (this.props.canada.heightD == '72 Inch'){
      let strRef = firebase.storage().refFromURL('gs://thestyle-fe148.appspot.com/').child('08.jpg').getDownloadURL().then(url => {
        this.setState({ imgsrc: url })
       })
    }

    
    
    
      
  }
FlatListItemSeparator = () => {
  return (
    //Item Separator
    <View style={{height: 0.5, width: '100%', backgroundColor: '#C8C8C8'}}/>
  );
};

  render(){
   
    this.componentDidMount
   
    // const ref = firebase.storage().ref('path/to/01.jpg');
    // const url1 = ref.getDownloadUrl();
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
         <View style={styles.allView}>
         <View style={styles.imageView}>
           <Image style={{ width:'100%', height:'100%', resizeMode:'contain'}} source={{uri: this.state.imgsrc}}/>
          </View>
         
           <TouchableOpacity style={styles.buttonTouch0} onPress={this.handleLogin}>
            <Text style={{color:'white', fontSize:20}}>B A C K</Text>
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
    imageView:{
      alignItems:'center',
      justifyContent:'center',
      marginTop:50,
      width:'80%',
      height:'70%'
    },

     
});


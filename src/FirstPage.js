/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';

import { Actions, Router, Scene } from "react-native-router-flux";

const FirstPage = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <View style={styles.imageView}>
      <Image
          style={{width: '100%', height: '80%'}}
          source={require('./image/xyz.png')}
        />
     
       </View>
       <View style={styles.nextView}>
        <TouchableOpacity style={styles.buttonTouch0} onPress={() => Actions.signUpPage()}>
          <Text style={{color:'white', fontSize:20}}>N E X T</Text>
        </TouchableOpacity>
       </View>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  imageView:{
    alignItems:'center',
    justifyContent:'center',
    height:'70%',
  },
  nextView:{
    height:'30%',
    alignItems:'center',
    justifyContent:'center',
  },
  buttonTouch0:{
    width: '70%',
    height: 50,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'black',
  },
});

export default FirstPage;

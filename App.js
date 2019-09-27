/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';
import FirstPage from './src/FirstPage';
import signUpPage from './src/signUpPage';
import HomePage from './src/HomePage';
import ResultPage from './src/ResultPage';


import { Actions, Router, Scene } from "react-native-router-flux";

export default class App extends Component{
  constructor(props) {
    super(props);
    
    this.state ={isLogin: false };
  }
  componentWillMount(){
    let val = AsyncStorage.getItem('user');
    this.setState({isLogin: val})
  }
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('TASKS');
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  }
  render(){
    return (

      <Router>
          <Scene key="app" hideNavBar>
            <Scene key="FirstPage" component={FirstPage} initial={this.state.isLogin}/>
            <Scene key="HomePage" component={HomePage} initial={this.state.isLogin}/>
            <Scene key="signUpPage" component={signUpPage}/>
            <Scene key="ResultPage" component={ResultPage}/>

          </Scene>
        </Router>
    );
  }
  
}
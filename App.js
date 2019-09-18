/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import FirstPage from './src/FirstPage';
import signUpPage from './src/signUpPage';
import HomePage from './src/HomePage';
import ResultPage from './src/ResultPage';


import { Actions, Router, Scene } from "react-native-router-flux";
const App = () => {
  return (
    <Router>
        <Scene key="app" hideNavBar>
          <Scene key="FirstPage" component={FirstPage}/>
          <Scene key="HomePage" component={HomePage} />
          <Scene key="signUpPage" component={signUpPage}/>
          <Scene key="ResultPage" component={ResultPage}/>

        </Scene>
      </Router>
  );
};

export default App;
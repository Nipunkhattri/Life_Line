import React from 'react'
import { View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import First from './components/First';
import Second from './components/Second';
import Intro from './components/Intro';
import CreateAccount from './components/CreateAccount';
import LandingPage from './components/LandingPage';
import DonorCat from './components/HomePage.js/DonorCat';
import HomePage from './components/HomePage.js/HomePage';
import Otp from './components/Otp';
import { Provider, useSelector } from 'react-redux';
import store from './store';
import 'localstorage-polyfill'; 
import MainStack from './Navigation/MainStack';
import AuthStack from './Navigation/AuthStack';
import Routes from './Navigation/Routes';
const App = () => {
  return (
    <>
    <Provider store={store}>
      <Routes/>
    </Provider>
    </>
  )
}

export default App

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
const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Landing' >
          <Stack.Screen name='Landing' options={{ headerShown: false }}  component={LandingPage}/>
          <Stack.Screen name='First' options={{ headerShown: false }}  component={First}/>
          <Stack.Screen name='Second'options={{ headerShown: false }}   component={Second}/>
          <Stack.Screen name='Intro' options={{ headerShown: false }}  component={Intro}/>
          <Stack.Screen name='create'options={{ headerShown: false }}   component={CreateAccount}/>
          <Stack.Screen name='otp'options={{ headerShown: false }}   component={Otp}/>
          <Stack.Screen name='Home'options={{ headerShown: false }}   component={HomePage}/>
          <Stack.Screen name='DonorCat'  component={DonorCat} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App

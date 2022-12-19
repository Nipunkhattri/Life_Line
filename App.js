import React from 'react'
import { View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import First from './components/First';
import Second from './components/Second';
import Intro from './components/Intro';
import CreateAccount from './components/CreateAccount';
import LandingPage from './components/LandingPage';
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
    {/* <Intro/> */}
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Landing'>
          <Stack.Screen name='Landing' component={LandingPage}/>
          <Stack.Screen name='First' component={First}/>
          <Stack.Screen name='Second' component={Second}/>
          <Stack.Screen name='Intro' component={Intro}/>
          <Stack.Screen name='create' component={CreateAccount}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App

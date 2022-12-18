import React from 'react'
import { View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import First from './components/First';
import Second from './components/Second';
import Signin from './components/Signin';
import Intro from './Screens/Intro';
import CreateAccount from './Screens/CreateAccount';
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
    <CreateAccount/>
    {/* <Intro/> */}
    </>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='First'>
    //       <Stack.Screen name='First' component={First}/>
    //       <Stack.Screen name='Second' component={Second}/>
    //       <Stack.Screen name='Signin' component={Signin}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
  )
}

export default App

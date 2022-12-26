import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import First from "../components/First";
import Second from "../components/Second";
import LandingPage from "../components/LandingPage";
import Otp from "../components/Otp";
import MainStack from "./MainStack";
import AuthStack from "./AuthStack";
import { useSelector } from "react-redux";
import Home from "../components/HomePage.js/HomePage";
import SignUp from "../components/CreateAccount";
import DonorCat from "../components/HomePage.js/DonorCat";
import login from "../components/Intro";
// import  SignUp  from "../components/CreateAccount";

const Stack = createNativeStackNavigator();

export default function Routes() {
  const userdata = useSelector((state) => state.currentUserreducer);
// const userdata = 123;
  console.log("hii");
  console.log(userdata);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          options={{ headerShown: false }}
          component={LandingPage}
        />
        <Stack.Screen
          name="First"
          options={{ headerShown: false }}
          component={First}
        />
        <Stack.Screen
          name="Second"
          options={{ headerShown: false }}
          component={Second}
        />
        <Stack.Screen
          name="otp"
          options={{ headerShown: false }}
          component={Otp}
        />
            <Stack.Screen
              name="Home"
              options={{ headerShown: false }}
              component={Home}
            />
            <Stack.Screen name="DonorCat"
             component={DonorCat}
             options={{ headerShown: false }} />
          <Stack.Screen
              name="SignUp"
              options={{ headerShown: false }}
              component={SignUp}
            />
            <Stack.Screen
              name="login"
              options={{ headerShown: false }}
              component={login}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

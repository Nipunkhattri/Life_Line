import React from 'react'
// import React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from "../../assets/heart";
import User from "../../assets/User";
import Bell from "../../assets/Bell";

// import Slider2 from "./Slider2";
import Home from "../../assets/Home";
// import Slider from "./Slider";
// import Location from "../../assets/Location";
// import { style } from "deprecated-react-native-prop-types/DeprecatedTextPropTypes";
function Footer() {
  const navigation=useNavigation()
  return (
    <View style={home2.footer}>
    <TouchableOpacity>
      <View style={home2.FooterIcon}>
        <Home />
      </View>
    </TouchableOpacity>
    <TouchableOpacity      onPress={() => {
          console.log("hello");
          navigation.navigate("DonorCat")
        }}>
      <View
        style={home2.FooterIcon}
   
      >
        <Home />
      </View>
    </TouchableOpacity>
    <TouchableOpacity>
      <View
        style={home2.FooterIcon}
        onPress={() => {
          console.log("bell");
        }}
      >
        <Bell />
      </View>
    </TouchableOpacity>
    <TouchableOpacity>
      <View
        style={home2.FooterIcon}
        onPress={() => {
          console.log("user");
        }}
      >
        <User />
      </View>
    </TouchableOpacity>
  </View>
  )
}

export default Footer
const home2=StyleSheet.create({
  footer: {
    flex: 0.1,
    // backgroundColor: "red",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    flex: 0.4,
    justifyContent: "space-evenly",
    width: "100%",
    height: 50,
    paddingVertical: 10,
    flexDirection: "row",
  },
  FooterIcon: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    width: 35,
    height: 35,
    borderRadius: 8,
  },
})
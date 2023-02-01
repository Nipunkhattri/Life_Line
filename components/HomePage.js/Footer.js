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
import { color } from 'react-native-reanimated';
// import Health from "../../assets/Vector";
// import Slider from "./Slider";
// import Location from "../../assets/Location";
// import { style } from "deprecated-react-native-prop-types/DeprecatedTextPropTypes";
function Footer() {
  const navigation=useNavigation();
  const navirequest = (e)=>{
    e.preventDefault();
    navigation.navigate("request");
  }
  const Applogout = (e)=>{
    e.preventDefault();
    navigation.navigate("Logout");
  }
  return (
    <View style={home2.footer}>
    <TouchableOpacity>
      <View style={[home2.FooterIcon,home2.active]}>
        <Home />
      </View>
    </TouchableOpacity>
    <TouchableOpacity      onPress={() => {
          console.log("hello");
          // navigation.navigate("DonorCat")
        }}>
      <View
        style={home2.FooterIcon}
      >
        <Image style={home2.img} source={require("../../assets/Vector.png")}/>
      </View>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={navirequest}>
      <View
        style={home2.FooterIcon}
      >
       <Image style={home2.img} source={require("../../assets/req.png")}/>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={Applogout}>
      
      <View
        style={home2.FooterIcon}
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
    borderColor:"none",
    borderWidth:0,
    borderStyle:"none"
    // backgroundColor: "red",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    flex: 0.4,
    borderWidth:1,
    borderColor:"gray",
    borderTopEndRadius:12,
    borderTopLeftRadius:12,
    backgroundColor:"white",
    justifyContent: "space-evenly",
    width: "100%",
    height: 50,
    paddingVertical: 10,
    flexDirection: "row",
  },
  FooterIcon: {
    flex: 0.9,
    // marginTop:6,
    justifyContent: "center",
    alignItems: "center",
    width: 35,
    height: 35,
    borderRadius: 8,
    // backgroundColor:"red"
  },
  img:{
    height:25,
    width:25,
    // backgroundColor:"white"
  }
})
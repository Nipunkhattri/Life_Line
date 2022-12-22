import React from 'react'
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
import Icon from "../../assets/heart";
import Location from "../../assets/Location";
function Slider2() {
  return (
   <>
   <View style={{ flex: 1, backgroundColor: "white" }}>
                 <View style={home1.hospitalBox} >
                <View style={home1.logo} >
                  <Image source={require('../../assets/logo1.png')}/>
                                  </View>
                <View style={home1.details}>
                  <Text style={home1.HospitalName}>Fortis Hospital New Delhi,India
                 </Text>
                  <Icon  style={home1.Fav}/>
                    <Location style={home1.Location}/>
                  <Text style={home1.HospitalAddress}>
                    Fortis Cancer Institute,Defence Colony</Text>
                  <Text style={home1.HospitalReview}> 5.0      (1212 reviews)</Text>
                </View>
              </View>
   </View>
              
   </>
  )
}

export default Slider2

const home1=StyleSheet.create({
  HospitalReview: {
    transform: [{ translateX: 80 }],
  },
  HospitalAddress: {
    color: "#A8ABB3",
    fontSize: 14,
    width: 200,
    transform: [{ translateX: 24 }, { translateY: -24 }],
  },
  Location: {
    // display:''
    marginTop: -20,
    marginLeft: -5,
    transform: [{ scale: 0.9 }],
  },
  Fav: {
    transform: [{ translateX: 200 }, { translateY: -50 }, { scale: 0.6 }],
  },
  HospitalName: {
    color: "#7d7d7d",
    fontSize: 20,
    width: 150,
    height: 50,
    // flex:0.5,
    flexDirection: "row",
  },
  hospitalBox: {
    // flex:0.5,
    flexDirection: "row",
    backgroundColor: "white",
    marginTop: 10,
    marginLeft: 30,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,

    width: "85%",
    height: 160,
  },
  details: {
    flex: 1,
    // backgroundColor:'purple',
    padding: 10,
    // flexWrap:'wrap',
    // flexDirection:'row'
  },
  logo: {
    flex: 0.4,
    // backgroundColor:'pink',
    // justifyContent:'center',
    paddingTop: 20,
    alignItems: "center",
  },
})
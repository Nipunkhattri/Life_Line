import {
    View,
    Text,
    KeyboardAvoidingView,
    StyleSheet,
    SafeAreaView,
    Image,
    Button,
    TouchableOpacity,
    ScrollView,
    FlatList,
    TextInput
  } from "react-native";
import React from 'react'
import Footer from "./HomePage.js/Footer";
import RequestList from "./RequestList";
const Request = () => {
  return (
    <View style={hospital.droidSafeArea}>
        <View style={hospital.heading}><Text style={hospital.arrow}>{`<`}</Text>
        <Text style={hospital.name}>People accepted</Text></View>
        <View style={hospital.main}>
              <RequestList/>
              <RequestList/>
              <RequestList/>
              <RequestList/>
              </View>
      <Footer/>
    </View>
  )
}



const hospital=StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        // backgroundColor: npLBlue,
        // padding:10,
        paddingTop: Platform.OS === "android" ? 25 : 0,
      },
      heading:{
        flex:0.1,
        height:20,
        marginTop:10,
        justifyContent:"space-evenly",
        alignItems:'center',
        flexDirection:"row",
        backgroundColor:'white',
        width:"100%",
      },
      arrow:{
        marginLeft:-50,
        fontSize:18,
        fontWeight:'300',
        transform:[{scaleY:3},{scaleX:2}]
      },
      name:{
        marginLeft:-40,
        fontSize:28,
        fontWeight:"600",
        color:'2aa05d',

      },
      main:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
      }
})
export default Request
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
    TextInput,
    Pressable
  } from "react-native";
import React,{useState} from 'react'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import Footer from "./HomePage.js/Footer";
import RequestList from "./RequestList";
import RequestListAccept from "./RequestListAccept";
const Request = () => {
  const [page,setpage]=useState('true');
  const Bloodfind = ()=>{
    setpage('true');
    console.log(page);
}
const Organfind = ()=>{
    setpage('false');
    console.log(page);
}
const title = "feed";
const newtitle = "Request";

  return (
    <View style={hospital.droidSafeArea}>
        <View style={hospital.heading}><Text style={hospital.arrow}>{`<`}</Text>
        <Text style={hospital.name}>People accepted</Text></View>
        {
          page=='true'?(
            <>
            <View style={hospital.btndiv}>
            <Pressable  style={{
               elevation: 8,
               width: responsiveWidth(36),
               height: responsiveHeight(5.9),
               backgroundColor: "white",
               color:"black",
               // borderRadius: 100,
               borderBottomLeftRadius:20,
               borderTopLeftRadius:20,
              //  marginTop:20,

               marginLeft:70,
               // marginTop: 3,
               // alignSelf:''
               paddingVertical: 13,
               // paddingHorizontal: 12,
            }} onPress={Organfind}>
      <Text style={hospital.donorButtonText}>{title}</Text>
    </Pressable>
    <Pressable  style={{
             elevation: 8,
             width: responsiveWidth(36),
             height: responsiveHeight(5.9),
             position:"absolute",
             left:responsiveWidth(30),
             backgroundColor: "#2AA05D",
             borderRadius: 100,
            //  marginTop:20,
             // marginTop: 3,
             marginLeft:60,
             // alignSelf:''
             paddingVertical: 13,
             // paddingHorizontal: 12,
            }} onPress={Organfind}>
      <Text style={hospital.donorButtonText}>{newtitle}</Text>
    </Pressable>
            </View>
            <View style={hospital.main}>
              <RequestList/>
              <RequestList/>
              <RequestList/>
              <RequestList/>
        </View>
        </>
          ):
          (
            <>
            <View style={hospital.btndiv}>
            <Pressable  style={{
               elevation: 8,
               width: responsiveWidth(36),
               height: responsiveHeight(5.9),
               backgroundColor: "#2AA05D",
               color:"black",
               // borderRadius: 100,
               borderBottomLeftRadius:20,
               borderTopLeftRadius:20,
              //  marginTop:20,
               marginLeft:70,
               // marginTop: 3,
               // alignSelf:''
               paddingVertical: 13,
               // paddingHorizontal: 12,
            }} onPress={Bloodfind}>
      <Text style={hospital.donorButtonText}>{title}</Text>
    </Pressable>
    <Pressable  style={{
             elevation: 8,
             width: responsiveWidth(36),
             height: responsiveHeight(5.9),
             position:"absolute",
             left:responsiveWidth(30),
             backgroundColor: "white",
             borderRadius: 100,
             marginLeft:60,
            //  marginTop:20,
             // marginTop: 3,
             // alignSelf:''
             paddingVertical: 13,
             // paddingHorizontal: 12,
            }} onPress={Bloodfind}>
      <Text style={hospital.donorButtonText}>{newtitle}</Text>
    </Pressable>
            </View>
            <View style={hospital.main}>
              <RequestListAccept/>
              <RequestListAccept/>
              <RequestListAccept/>
              <RequestListAccept/>
        </View>
        </>
          )
        }
      <Footer/>
    </View>
  )
}



const hospital=StyleSheet.create({
  btndiv:{
    display:"flex",
    flexDirection:"row",
    // borderWidth:2
    backgroundColor:"white",
    marginBottom:10,
  },
  donorButtonText: {
    fontSize: responsiveFontSize(2),
    color: "black",
    fontWeight: "400",
    alignSelf: "center",
    // marginBottom:10,
    // textTransform: "uppercase",
  },
  droidSafeArea: {
    flex: 1,
    backgroundColor:"white",
        // backgroundColor: npLBlue,
        // padding:10,
        paddingTop: Platform.OS === "android" ? 25 : 0,
      },
      heading:{
        flex:0.1,
        height:responsiveHeight(2),
        marginTop:10,
        justifyContent:"space-evenly",
        alignItems:'center',
        flexDirection:"row",
        backgroundColor:'white',
        width:responsiveWidth(100)
      },
      arrow:{
        marginLeft:-50,
        fontSize:responsiveFontSize(2),
        fontWeight:'300',
        transform:[{scaleY:3},{scaleX:2}]
      },
      name:{
        marginLeft:responsiveWidth(-6),
        fontSize:responsiveFontSize(3),
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
import React from "react";
import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
  TouchableHighlight,
  Image,TouchableOpacity,
  Alert
} from "react-native";
import CheckBox from 'expo-checkbox';
import { NavigationActions, useNavigation } from '@react-navigation/native'
import { login } from "../Redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
// import { Checkbox } from "react-native-paper";
function Intro({navigation}) {
  const Signin=({onPress,title})=>(
    <TouchableHighlight onPress={onPress} style={style.appButtonContainer}>
    <Text style={style.appButtonText}>{title}</Text>
  </TouchableHighlight> )
   const [isSelected, setSelection] = useState(false);
   const dispatch = useDispatch();
   const [loginuser, setUser] = useState({
    email: "",
    password: "",
  });
  // const {name,email,password,phNum} = user;
  const updatestate = (data) => setUser(()=>({...loginuser,...data}))

  const data = useSelector(state=>state.currentUserreducer);
  console.log(data);
  const handlelogin = ()=>{
    // console.log(loginuser);
    console.log(data);
    dispatch(login((loginuser)));
  }
  console.log(data);
  if(data!=null){
    Alert.alert(
      "Login",
      "Login successfully",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
    navigation.navigate("Home");
  }
  else{
    navigation.navigate("login")
  }

  return (
    <>
      <KeyboardAvoidingView
       behavior={Platform.OS == "ios" ? "padding" : "height"}
       keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
       enabled={Platform.OS === "ios" ? true : false}
        style={{ flex: 1,backgroundColor:"#FFFFFF", padding: Platform.OS === "android" ? 30 : 0 ,overflow:"scroll",paddingTop:70}}
      >
        <View style={style.heading}>
          <Text style={style.heading}>Welcome!</Text>
          <Text style={style.subheading}>
            Sign in by entering the information below
          </Text>
        </View>
        <View style={style.form}>
          <Text style={style.label}>Email</Text>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center",backgroundColor:"#F9F9FF" }}>
            <TextInput
              style={style.input}
              placeholder="✉️    Enter your email"
              onChangeText={(email) =>updatestate({email})}
              // right={<TextInput.Icon name='eye'/>}
            />
          </View>
          <Text style={style.label}>Password</Text>
          <View
            style={{ flex: 1, flexDirection: "row", alignItems: "center"}}
          >
            <TextInput
              style={style.input}
              placeholder="🔐   Enter your Password"
              onChangeText={(password) =>updatestate({password})}
              // right={<TextInput.Icon name='eye'/>}
            />

          </View>
          
        </View>
        <View style={style.sec}>

            <Text style={style.txt}>Forget Password?</Text>
          </View>
            <Signin title="Sigi in" size="sm"  backgroundColor="#007bff"  onPress={handlelogin}/>
      
            <Text style={{alignSelf:'center',marginTop:20,color:'#7d7d7d'}}>OR</Text>
        <View style={style.socialmedia}>
          <Image style={style.size} source={require("../assets/google.png")}/>
          <Image source={require("../assets/linkedin.jpeg")}/>
          <Image source={require("../assets/facebook.jpeg")}/>
        <View style={style.sigin}>

        <Text style={{color:'#7d7d7d',fontSize:14}} onPress={()=>{navigation.navigate("SignUp")}}>Don't have a account ... Register</Text>
        </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

export default Intro;

const style = StyleSheet.create({
  size:{
      height:30,
      width:30
  },
  txt:{
    marginTop:52
  },
  checkbox:{
    height:10,
    width:10,
    // borderWidth:4,
  },
  sec:{
    // borderWidth:3,
    display:"flex",
    // justifyContent
    flexDirection:"row",
    // marginTop:40
    alignItems:"flex-end",
    marginLeft:240,
    marginBottom:10
  },
  containall: {
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  heading: {
    flex: 0.5,
    color: "#2aa05d",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor:'tomato',
    // paddingTop:20,
    fontSize: 40,
    fontWeight: "800",
  },
  subheading: {
    flex: 0.2,
    fontWeight: "600",
    fontSize: 16,

    paddingTop: 10,
    color: "#a8abb3",
  },
  form: {
    flex: 1,
    // padding:5,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    // flexWrap:'wrap',
    // flexDirection:'colo'
    // paddingTop:-50
  },
  label: {
    fontWeight: "400",
    fontSize: 20,
    color: "#a8abb3",
    paddingBottom:40,
    paddingTop:40
  },
  input: {
    backgroundColor: "#f9f9ff",
    width: 345,
    paddingLeft: 15
    ,
    // marginLeft:-50,
    height: 45,
    borderRadius: 100,
  },
  checkbox:{
    flex:0.2,
    // backgroundColor:'red',
    justifyContent:'space-between',
    flexDirection:'row',
    marginTop:60
  }
  ,
  button:{
    flex:1,
    backgroundColor:"#2aa05d",
    width:280,
    height:48,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:106,
  },
  socialmedia:{
    flex:1,
    flexDirection:'row',
    alignSelf:'center',
    justifyContent:'space-between',
    marginTop:20,
    width:150,
    flexWrap:'wrap'
  },sigin:{
    width:250,
    marginTop:30,
    marginLeft:-20,
  },
  appButtonContainer: {
    elevation: 8,
    width:250,
    backgroundColor: "#2AA05D",
    borderRadius: 20,
    alignSelf:'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
});


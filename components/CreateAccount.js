// import { value } from "deprecated-react-native-prop-types/DeprecatedTextInputPropTypes";
import React, { useEffect } from "react";
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
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { showError } from '../utilits/helperFunction';
import validator from '../utilits/validation';
import { useDispatch,useSelector } from "react-redux";
import { NavigationActions } from '@react-navigation/native'
import { signup } from "../Redux/actions/auth"
import { showMessage } from 'react-native-flash-message';
// import CheckBox from "@react-native-community/checkbox";
function CreateAccount({navigation}) {
  const Signin = ({ onPress, title }) => (
    <TouchableHighlight onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableHighlight>
  );
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phNum:""
  });
  const {name,email,password,phNum} = user;
  const updatestate = (data) => setUser(()=>({...user,...data}))

  const data = useSelector(state=>state.currentUserreducer);
  console.log(data);
  const handleSignup = ()=>{
    if(name=='' || email=='' || password=='' || phNum==''){
      Alert.alert(
        "Complete the form",
        "Fill given details",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
      return ;
    }
    if(phNum.length<10){
      Alert.alert(
        "Invalid Number",
        "Please check",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
      return ;
    }
    console.log(user);
      dispatch(signup((user)));
      Alert.alert(
        "Register",
        "Registered successfully",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    }
    if(data!=null){
      Alert.alert(
        "Register",
        "Registered successfully",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
      navigation.navigate("login");
    }
    else{
      navigation.navigate("SignUp");
    }
    const validate = (text) => {
      console.log(text);
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (reg.test(text) === false) {
        console.log("Email is Not Correct");
        return false;
      }
      else {
        console.log("Email is Correct");
        return true;
      }
    }
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
        enabled={Platform.OS === "ios" ? true : false}
        style={{
          flex: 1,
          backgroundColor:"#FFFFFF",
          padding: Platform.OS === "android" ? 30 : 0,
          overflow: "scroll",
          paddingTop: 70,
        }}
      >
        <ScrollView style={styles.scroll}>
        <View style={styles.heading}>
          <Text style={styles.heading}>Create new account</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>Full name</Text>
          {/* <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}> */}
          <TextInput
            style={styles.input}
            // value={fullname} 
            placeholder="Enter your full name"
            onChangeText={(name) =>updatestate({name})}
            // right={<TextInput.Icon name='eye'/>}
          />
          {/* </View> */}
          <Text style={styles.label}>Password</Text>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={styles.input}
              secureTextEntry={true} 
              // value={user.password}
              placeholder="🔐   Enter your Password"
              onChangeText={(password) =>updatestate({password})}
              // right={<TextInput.Icon name='eye'/>}
            />
          </View>

          <Text style={styles.label}>Email</Text>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={styles.input}
              placeholder="🔐   Enter your Email"
              // onChangeText={(text) => this.validate(text)}
              onChangeText={(email) =>{
                  updatestate({email})
              }}
              // right={<TextInput.Icon name='eye'/>}
            />
          </View>
          <Text style={styles.label}>Mobile number</Text>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={styles.input}
              placeholder="🔐   Enter your mobile number"
              onChangeText={(phNum) =>updatestate({phNum})}
              // right={<TextInput.Icon name='eye'/>}
            />
          </View>
        </View>
        <Signin
          title="Register"
          size="sm"
          backgroundColor="#007bff"
          onPress={
            handleSignup
          }
        />

        <Text style={{ alignSelf: "center", marginTop: 20, color: "#7d7d7d" }}>
          OR
        </Text>
        <View style={styles.socialmedia}>
          <Image style={styles.size} source={require("../assets/google.png")} />
          <Image source={require("../assets/linkedin.jpeg")} />
          <Image source={require("../assets/facebook.jpeg")} />
          <View style={styles.sigin}>
            <Text style={{ color: "#7d7d7d", fontSize:responsiveFontSize(1.9)}} onPress={()=>{navigation.navigate("login")}}>
              Already have an account .Sigin in
            </Text>
          </View>
        </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

export default CreateAccount;

const styles = StyleSheet.create({
  scroll:{
    marginHorizontal: 1,
  }, 
   size:{
    height:30,
    width:30
  },
  heading: {
    // flex: 0.4,
    marginBottom: 20,
    color: "#2aa05d",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor:'tomato',
    // paddingTop:20,
    // backgroundColor:'blue',
    fontSize: responsiveFontSize(3.6),
    fontWeight: "800",
  },
  subheading: {
    flex: 0.2,
    fontWeight: "600",
    fontSize: responsiveFontSize(1.6),

    // paddingTop: 10,
    color: "#a8abb3",
  },
  form: {
    // flex: 1,
    padding: 5,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    // backgroundColor:"tomato"
    // flexWrap:'wrap',
    // flexDirection:'colo'
    // paddingTop:-50
  },
  label: {
    // backgroundColor:'pink',
    marginBottom: responsiveWidth(3),
    fontWeight: "400",
    fontSize:responsiveFontSize(1.9),
    color: "#a8abb3",
  },
  input: {
    backgroundColor: "#f9f9ff",
    width:responsiveWidth(80),
    paddingLeft: 15,
    // paddingBottom:15,
    // marginLeft:-50,
    marginBottom: 20,
    height: 45,
    borderRadius: 100,
  },
  checkbox: {
    flex: 0.2,
    // backgroundColor:'red',
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 60,
  },
  button: {
    flex: 1,
    backgroundColor: "#2aa05d",
    width: responsiveWidth(60),
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 106,
  },
  socialmedia: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    marginTop: 20,
    width: responsiveWidth(30),
    flexWrap: "wrap",
  },
  sigin: {
    width: responsiveWidth(60),
    marginTop: 30,
    marginLeft: -50,
  },
  appButtonContainer: {
    elevation: 8,
    width: responsiveWidth(50),
    backgroundColor: "#2AA05D",
    borderRadius: 20,
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: responsiveFontSize(1.9),
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

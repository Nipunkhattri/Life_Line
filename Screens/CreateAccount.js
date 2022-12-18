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
  Image,
  TouchableOpacity,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
function CreateAccount() {
  const Signin = ({ onPress, title }) => (
    <TouchableHighlight onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableHighlight>
  );
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
        enabled={Platform.OS === "ios" ? true : false}
        style={{
          flex: 1,
          padding: Platform.OS === "android" ? 30 : 0,
          overflow: "scroll",
          paddingTop: 70,
        }}
      >
        <View style={styles.heading}>
          <Text style={styles.heading}>Create new account</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>Full name</Text>
          {/* <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}> */}
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            // right={<TextInput.Icon name='eye'/>}
          />
          {/* </View> */}
          <Text style={styles.label}>Password</Text>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={styles.input}
              placeholder="🔐   Enter your Password"
              // right={<TextInput.Icon name='eye'/>}
            />
          </View>

          <Text style={styles.label}>Email</Text>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={styles.input}
              placeholder="🔐   Enter your Email"
              // right={<TextInput.Icon name='eye'/>}
            />
          </View>
          <Text style={styles.label}>Mobile number</Text>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={styles.input}
              placeholder="🔐   Enter your mobile number"
              // right={<TextInput.Icon name='eye'/>}
            />
          </View>
        </View>
        <Signin
          title="Sigi in"
          size="sm"
          backgroundColor="#007bff"
          onPress={() => {
            console.log("signin");
          }}
        />

        <Text style={{ alignSelf: "center", marginTop: 20, color: "#7d7d7d" }}>
          OR
        </Text>
        <View style={styles.socialmedia}>
          <Image source={require("../assets/facebook.jpeg")} />
          <Image source={require("../assets/linkedin.jpeg")} />
          <Image source={require("../assets/facebook.jpeg")} />
          <View style={styles.sigin}>
            <Text style={{ color: "#7d7d7d", fontSize: 14 }}>
              Already have an account .Sigin in
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

export default CreateAccount;

const styles = StyleSheet.create({
  heading: {
    // flex: 0.4,
    marginBottom: 20,
    color: "#2aa05d",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor:'tomato',
    // paddingTop:20,
    // backgroundColor:'blue',
    fontSize: 32,
    fontWeight: "800",
  },
  subheading: {
    flex: 0.2,
    fontWeight: "600",
    fontSize: 16,

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
    marginBottom: 5,
    fontWeight: "400",
    fontSize: 15,
    color: "#a8abb3",
  },
  input: {
    backgroundColor: "#f9f9ff",
    width: 315,
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
    width: 280,
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
    width: 150,
    flexWrap: "wrap",
  },
  sigin: {
    width: 250,
    marginTop: 30,
    marginLeft: -20,
  },
  appButtonContainer: {
    elevation: 8,
    width: 250,
    backgroundColor: "#2AA05D",
    borderRadius: 20,
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

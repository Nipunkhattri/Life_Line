import React from "react";
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
import User from "../../assets/User";
import Bell from "../../assets/Bell";
import Slider2 from "./Slider2";
import Home from "../../assets/Home";
import Slider from "./Slider";
import Location from "../../assets/Location";
import { style } from "deprecated-react-native-prop-types/DeprecatedTextPropTypes";
import Footer from "./Footer";
const DonorButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={home.donorButtonContainer}>
    <Text style={home.donorButtonText}>{title}</Text>
  </TouchableOpacity>
);

function HomePage() {
  return (
    <>
      <SafeAreaView style={home.droidSafeArea}>
        <KeyboardAvoidingView style={home.page}>
          {/*----------------------------------TOP BAR START---------------------------------------- */}
          <View style={home.topbar}>
            <Text style={home.profileName}>
              <Image
                source={require("../../assets/google.png")}
                style={home.ProfileImage}
              />{" "}
              Ushan Gupta
            </Text>
            <DonorButton
              title="Become a donor"
              size="sm"
              backgroundColor="#007bff"
              onPress={() => {
                navigation.navigate("Second");
              }}
            />
          </View>
          {/* ------------------------------TOP BAR END------------------------------------------ */}
          <View style={home.body}>
            {/* <Text>Top bar</Text>
             */}
            <View style={{ flex: 0.5 }}>
              <Slider />
            </View>
            <View style={home.HospitalList}>
              <Text style={home.heading}>List of nearest hospitals</Text>
              <Text
                style={{
                  color: "#7d7d7d",
                  marginLeft: "70%",
                  marginTop: "-3%",
                  fontSize: 14,
                }}
              >
                {" "}
                See all
              </Text>
              <Slider2/>
            </View>
          </View>
          {/* --------------------------BODY ENDS HERE----------------------------------- */}
          <Footer/>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}

export default HomePage;
const home = StyleSheet.create({
  ProfileImage: {
    width: 40,
    height: 40,
    // paddingRight:40,
  },
  donorButtonContainer: {
    elevation: 8,
    width: 180,
    height: 50,
    backgroundColor: "#2AA05D",
    borderRadius: 100,
    marginTop: 15,
    // alignSelf:''
    paddingVertical: 13,
    // paddingHorizontal: 12,
  },
  donorButtonText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "400",
    alignSelf: "center",
    // marginBottom:10,
    // textTransform: "uppercase",
  },
  profileName: {
    marginLeft: 10,
    flex: 1,
  },
  topbar: {
    // flex: 0.15,
    flexDirection: "row",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 10,
    justifyContent: "space-between",
    // backgroundColor:'red'
  },
  body: {
    flex: 1,
    backgroundColor: "white",
  },
  HospitalList: {
    flex: 1,
    backgroundColor: "white",
  },
  heading: {
    flex: 0.1,
    paddingLeft: 40,
    color: "#2AA05D",
    fontSize: 20,
    fontWeight: "600",
  },


  page: {
    flex: 1,
    marginTop: 5,
    // backgroundColor: "pink",
  },
  droidSafeArea: {
    flex: 1,
    // backgroundColor: npLBlue,
    // padding:10,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },

});

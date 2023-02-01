import React, { useState } from "react";
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
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import Icon from "../../assets/heart";
import User from "../../assets/User";
import Bell from "../../assets/Bell";
import Slider2 from "./Slider2";
import Home from "../../assets/Home";
import Slider from "./Slider";
import filter from 'lodash.filter';
import Location from "../../assets/Location";
import { style } from "deprecated-react-native-prop-types/DeprecatedTextPropTypes";
import Footer from "./Footer";
import TopBar from "./TopBar";
// import { TextInput } from "react-native-paper";
import { styles } from "react-native-image-slider-banner/src/style";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
const DonorButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={home.donorButtonContainer}>
    <Text style={home.donorButtonText}>{title}</Text>
  </TouchableOpacity>
);
const data =[
  {
    id:1,
    name:"Fortius Hospital",
    uri: require("../../assets/logo1.png"),
    Location:"Fortius cancer Institute Defence Colony",
    Rating:"5.0",
    Reviews:"1455 reviews"
  },
  {
    id:2,
    name:"Indraprastha Apollo Hospital",      
    uri: require("../../assets/image10.png"),
    Location:"Indraprastha Apollo Hospital, Mathura Rd, Delhi 110076",
    Rating:"5.0",
    Reviews:"1455 reviews"
  },
  {
    id:3,
    name:"Max Hospital Delhi, India",
    uri: require("../../assets/Blk.png"),
    Location:"1 2, Press Enclave Marg, Saket Institutional Area",
    Rating:"5.0",
    Reviews:"1455 reviews"
  },
  {
    id:3,
    name:"Sir Ganga Ram Hospital, Delhi",
    uri: require("../../assets/ganga.png"),
    Location:"Sir Ganga Ram Hospital Marg, Old Rajinder Nagar, Delhi",
    Rating:"5.0",
    Reviews:"1455 reviews"
  },
  {
    id:3,
    name:"Blk Super Speciality Hospital, Delhi",
    uri: require("../../assets/max.png"),
    Location:"Pusa Rd, Radha Soami Satsang, Rajendra Place, New Delhi",
    Rating:"5.0",
    Reviews:"1455 reviews"
  },
]
function HomePage() {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState(data);
  const [masterDataSource, setMasterDataSource] = useState(data)
  
  const navigation = useNavigation()


  const navigatepage = (e) =>{
    e.preventDefault();
    navigation.navigate("Hospage");
  }

  const imagelogout =(e)=>{
    e.preventDefault();
    console.log("hii");
    navigation.navigate("Logout");
  }

  const item = ({item}) =>{
    return(
              <View style={{ flex: 1, backgroundColor: "white" ,marginBottom:5}}>
          <View style={home1.hospitalBox} >
      <View style={home1.logo}>
        <Image style={{
          marginTop:20
        }} source={item.uri}/>
                        </View>
      <View style={home1.details}>
        <Text style={home1.HospitalName} onPress={navigatepage}>{item.name}
        </Text>
        <Icon  style={home1.Fav}/>
          <Location style={home1.Location}/>
        <Text style={home1.HospitalAddress}>
          {item.Location}</Text>
        <Text style={home1.HospitalReview}> {item.Rating}      ({item.Reviews})</Text>
      </View>
    </View>
   </View>
    )
  }


  const searchName = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.name
          ? item.name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
  const user = useSelector(state=>state.currentUserreducer);
  console.log(user);
  return (
    <>
      <SafeAreaView style={home.droidSafeArea}>
        <KeyboardAvoidingView style={home.page}>
          {/*----------------------------------TOP BAR START---------------------------------------- */}
          <View style={home.topbar}>
            <Text style={home.profileName} onPress={imagelogout}>
              <Image
                source={require("../../assets/image1.png")}
                style={home.ProfileImage}
              />{" "}
              {user.result.name}
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
            {/* <Text>Top bar</Text> */}
            <ScrollView style={home.scrollView}>
            <TextInput
            placeholder="Search Organ You Want?"
            style={home.textInputStyle}
            value={search}
            onChangeText={(text)=>{
              searchName(text);
            }}/>
            <Image style={home.icon} source={require("../../assets/search_icon.png")}/>
            <View style={{ flex: 0.1,marginBottom:15,marginTop:15}}>
              <Slider />
            </View>
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
              <View style={home.HospitalList}>
            <FlatList
            data={filteredDataSource}
            renderItem={item}
            keyExtractor={(item,index)=>index.toString()}/>
            </View>
            </ScrollView>
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
  icon:{
    height:responsiveHeight(3),
    width:responsiveWidth(3),
// borderWidth:2,
color:"gray",
position:"absolute",
top:20,
left:37
  },
  ProfileImage: {
    width:responsiveWidth(8),
    height: responsiveHeight(4),
    // paddingRight:40,
  },
  textInputStyle: {
    // height: 40,
    width: responsiveWidth(87),
height: 45,
    borderWidth: 1,
    paddingLeft: 28,
    marginTop:10,
    marginLeft: 30,
    borderRadius:22,
    borderTopEndRadius:22,
    borderTopStartRadius:22,
    // borderBottomWidth:0,
    borderColor: 'white',
    backgroundColor: '#F9F9FF',
  },
  donorButtonContainer: {
    elevation: 8,
    width: responsiveWidth(40),
    height: responsiveHeight(5.4),
    backgroundColor: "#2AA05D",
    borderRadius: 100,
    marginTop: responsiveWidth(4),
    // alignSelf:''
    paddingVertical: 13,
    // paddingHorizontal: 12,
  },  
  scrollView: {
    // backgroundColor: 'pink',
    marginHorizontal: 1,
  },
  donorButtonText: {
    fontSize: responsiveFontSize(1.7),
    color: "#fff",
    fontWeight: "400",
    alignSelf: "center",
    // marginBottom:10,
    // textTransform: "uppercase",
  },
  profileName: {
    marginLeft: 10,
    flex: 1,
    // backgroundColor:"red"
  },
  topbar: {
    flex: 0.09,
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
    fontSize:responsiveFontSize(2),
    fontWeight: "600",
  },


  page: {
    flex: 1,
    marginTop: 5,
    // backgroundColor: "pink",
  },
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },

});
const home1=StyleSheet.create({
  HospitalReview: {
    // transform: [{ translateX: 80 }],
    // marginBottom:14
  },

  HospitalAddress: {
    color: "#A8ABB3",
    fontSize: responsiveFontSize(1.7),
    width: responsiveWidth(50),
    transform: [{ translateX: responsiveWidth(5) }, { translateY: -25 }],
  },
  Location: {
    // display:''
    marginTop: -20,
    marginLeft: -5,
    transform: [{ scale: 0.9 }],
  },
  Fav: {
    transform: [{ translateX:  responsiveWidth(45)}, { translateY: -37 }, { scale: 0.6 }],
  },
  HospitalName: {
    color: "#7d7d7d",
    fontSize: responsiveFontSize(2.3),
    width: responsiveWidth(50),
    height: responsiveWidth(11),
    // flex:0.5,
    flexDirection: "row",
  },
  hospitalBox: {
    // flex:0.5,
    flexDirection: "row",
    backgroundColor: "white",
    marginTop: 10,
    marginLeft: 27,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,

    width: responsiveWidth(87),
    height: responsiveHeight(18),
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
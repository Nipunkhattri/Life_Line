// import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes'
import React from 'react'
import { View ,Text,StyleSheet,Image,ScrollView,TouchableOpacity} from 'react-native'
import { shadow } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
const DonorButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={style.donorButtonContainer}>
    <Text style={style.donorButtonText}>{title}</Text>
  </TouchableOpacity>
);
const HospitalPage = ({navigation}) => {
  return (
    <View style={style.main}>
      {/* <Text style={style.txt}>Hospital Profile</Text> */}
      <ScrollView style={style.scrollView}>
      <Image style={style.tinyLogo} source={require('../assets/hospital.png')}/>
      <View style={style.divimg}>
      <Image style={style.tinyLogo1} source={require('../assets/image10.png')}/>
        </View>
      <Text style={style.txt1}>Apollo Hospital</Text>
      <View style={style.divall}>
      <View style={style.div1}>
        <View style={style.div2}>
        <Text  style={style.txt2}>Phone number</Text>
        <Text style={style.txt3}>+91 8267056217</Text>
        </View>
        <View style={style.div2}>
        <Text style={style.txt2}>E-mail Id</Text>
        <Text style={style.txt3}>mailapollohospitals@apollohospitals.com</Text>
        </View>
        <View style={style.div2}>
        <Text style={style.txt2}>Website</Text>
        <Text style={style.txt3}>www.apollohositals.com</Text>
        </View>
        <View style={style.div2}>
        <Text style={style.txt2}>Location</Text>
        <Text style={style.txt3}>Indraprastha Apollo Hospital, Mathura Rd, Delhi 110076</Text>
        {/* </View> */}
        <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop:20
  }}
/>

      </View>
      </View>
      <View style={style.div1}>
        <View style={style.div2}>
        <Text  style={style.txt2}>Category Type 1</Text>
        <Text style={style.txt3}>Blood Donation</Text>
        </View>
        <View style={style.div2}>
        <Text style={style.txt2}>Sub Category Type 1</Text>
        <Text style={style.txt3}>B+, B-, A+, A-, AB+, AB-, O+, O-</Text>
        </View>
        <View style={style.div2}>
        <Text style={style.txt2}>Category Type 2</Text>
        <Text style={style.txt3}>Organ Donation</Text>
        </View>
        <View style={style.div2}>
        <Text style={style.txt2}>Sub Category Type 2</Text>
        <Text style={style.txt3}>Heart, Lung, Kidney, Liver, Pancreas, Eye Tissue, Bone, Skin, Tendons, Heart, Intestine</Text>
        </View>
      </View>
      </View>
      <DonorButton
              title="Next"
              size="sm"
              backgroundColor="#007bff"
              onPress={() => {
                navigation.navigate("orgreq");
              }}
            />
      </ScrollView>
    </View>
  )
}
const style = StyleSheet.create({
    main:{
        display:"flex",
        flex:1,
        // backgroundColor:"red"
        // alignItems:"center"
        // padding:15,
        marginLeft:responsiveWidth(4)
    },
    donorButtonContainer: {
      elevation: 8,
      width: responsiveWidth(40),
    height: responsiveHeight(5.7),
      backgroundColor: "#2AA05D",
      borderRadius: 100,
      // marginTop: 3,
      marginBottom:10,
      marginLeft:responsiveWidth(53),
      // alignSelf:''
      paddingVertical: 13,
      // paddingHorizontal: 12,
    }, 
    donorButtonText: {
      fontSize: responsiveFontSize(2),
      color: "#fff",
      fontWeight: "400",
      alignSelf: "center",
      // marginBottom:10,
      // textTransform: "uppercase",
    },
    scrollView: {
      // backgroundColor: 'pink',
      marginHorizontal: 1,
    },
    txt:{
      fontSize: responsiveFontSize(2),
        color:"green",
        textAlign:"center",
        marginTop:60,
        // fontWeight:700
    },
    tinyLogo:{
        width: responsiveWidth(92),
        height: responsiveHeight(25),
        borderWidth:3,
        flex:0.25,
        borderRadius:23,
        marginTop: responsiveWidth(15),
    },
    divimg:{
      width: responsiveWidth(33),
      height: responsiveHeight(13.4),
        position:"absolute",
        borderWidth:0.4,
        elevation: 20,
        shadowColor: '#52006A',
        borderRadius:22,
      backgroundColor:"white",
      top:responsiveWidth(50),
        left:responsiveWidth(5)
    },
    divall:{
      flex:1,
      // backgroundColor:"green"
    },
    tinyLogo1:{
      borderRadius:12,
      width: responsiveWidth(20),
      height: responsiveHeight(8.4),
      marginTop:20,
      marginLeft:30,
      display:"flex",
      justifyContent:"center"
    },
    txt1:{
      fontSize:responsiveFontSize(3.5),
      width: responsiveWidth(70),
      color:"green",
      textAlign:"center",
      marginTop:responsiveWidth(13),
      marginLeft:responsiveWidth(-8)
    },
    div1:{
      // borderWidth:3,
      height:responsiveHeight(47),
      width:responsiveWidth(90),
      // paddingTop:25,
    },
    div2:{
      // backgroundColor:"black",
      margin:10,
      paddingTop:10
    },
    txt2:{
      fontSize:responsiveFontSize(2.2),
      fontWeight:"500"
    },
    txt3:{
      color:"gray",
      fontSize:responsiveFontSize(1.9),
    }
})
export default HospitalPage

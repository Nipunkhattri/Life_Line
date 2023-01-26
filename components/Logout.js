import React from 'react'
import {
View,
Text,
StyleSheet
} from "react-native";
import {
responsiveHeight,
responsiveWidth,
responsiveFontSize,
TouchableOpacity
} from "react-native-responsive-dimensions";
// const DonorButton = ({ onPress, title }) => (
// <TouchableOpacity onPress={onPress} style={style.donorButtonContainer}>
//     <Text style={style.donorButtonText}>{title}</Text>
// </TouchableOpacity> 
// );
const Logout = () => {
    const handlelogout = () =>{
        dispatch({type:"LOGOUT"})
        // navigation.navigate("login")
        dispatch(setcurrentUser(null))
      }
  return (
    <View>
       <Text>Logout</Text>
    </View>
  )
}
export default Logout

const style = StyleSheet.create({
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
})


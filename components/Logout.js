import React from 'react'
import {
View,
Text,
StyleSheet,
TouchableOpacity
} from "react-native";
import {useSelector,useDispatch} from 'react-redux';
import {
responsiveHeight,
responsiveWidth,
responsiveFontSize,
} from "react-native-responsive-dimensions";
import { setcurrentUser } from '../Redux/actions/currentreducer';
const DonorButton = ({ onPress, title }) => (
<TouchableOpacity onPress={onPress} style={style.donorButtonContainer}>
    <Text style={style.donorButtonText}>{title}</Text>
</TouchableOpacity> 
);
const Logout = ({navigation}) => {
  const dispatch = useDispatch();
  const handlelogout = () =>{
      dispatch({type:"LOGOUT"})
      navigation.navigate("login")
      dispatch(setcurrentUser(null))
    }
  return (
    <View style={style.div}>
      {/* <Text>HELOO</Text> */}
       <DonorButton
        title="Logout"
        size="sm"
        backgroundColor="#007bff"
        onPress={
          handlelogout
          }
          />
    </View>
  )
}
export default Logout

const style = StyleSheet.create({
  div:{
    flex:1,
    // backgroundColor:"red"
  },
    donorButtonContainer: {
        elevation: 8,
        width: responsiveWidth(40),
      height: responsiveHeight(5.7),
        backgroundColor: "#2AA05D",
        borderRadius: 100,
        // marginTop: 3,
        marginTop:responsiveWidth(13),
        marginLeft:responsiveWidth(13),
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


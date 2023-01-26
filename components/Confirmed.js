import React from 'react'
import { View ,Text,StyleSheet,Image,ScrollView,TouchableOpacity,TextInput,Pressable} from 'react-native'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
const Confirmed = () => {
  return (
    <View style={styles.main}>
    <Image style={styles.image} source={require('../assets/cuate.png')}/>
    <Text style={styles.text}>
    Thanks! .. Recieved Blood and saved life
        </Text>
    </View>
  )
}
const styles = StyleSheet.create({
    main:{
        display:"flex",
        flex:1,
        // justifyContent:"center",
        // backgroundColor:"red"
        // alignItems:"center"
        // padding:15,
        marginLeft:15,
        // backgroundColor:"black"
    },
    image:{
        height:responsiveHeight(50),
        marginTop:150,
        // backgroundColor:"green",
        width:responsiveWidth(97)
    },
    text:{
        fontSize:responsiveFontSize(3),
        flexWrap:"wrap",
        lineHeight:43,
        width:responsiveWidth(80),
        weight:600,
        height:344,
        // flex:0.18,
        color: "#555B63",
        marginTop:responsiveWidth(5),
        marginLeft:30,
        textAlign:"center"
    },
})
export default Confirmed

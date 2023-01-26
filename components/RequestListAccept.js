import { View, Text ,Image, StyleSheet ,Button,TouchableHighlight} from 'react-native'
import React from 'react'
import { height } from 'deprecated-react-native-prop-types/DeprecatedImagePropType'
import { useNavigation } from '@react-navigation/native'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
const RequestList = () => {
    const navigation=useNavigation()
  return (
    <View style={requestlist.item}>
        <Image style={requestlist.logo} source={require('../assets/image-product-2.jpg')}/>
        <View style={{marginLeft:16}}>
            <Text style={requestlist.name}>Amit Kumar</Text>
            <Text style={requestlist.distance}>0.9km</Text>
        </View>
        <TouchableHighlight onPress={()=>{navigation.navigate("page")}}>
        <View style={requestlist.button}><Text style={{color:"white"}}>Accept</Text></View>
        </TouchableHighlight>
    </View>
  )
}

const requestlist=StyleSheet.create({
    item:{
        // flex:0.1,
        padding:5,
        marginLeft:20,
        flexDirection:"row",
        // backgroundColor:"green",
        width:responsiveWidth(75),
        height:responsiveHeight(8),
    },
    logo:{
        borderRadius:100,
        width:responsiveWidth(11),
        // height:40,
        height:responsiveHeight(5),
    },
    button:{
        backgroundColor:"#263238",
        marginTop:responsiveWidth(1),
        height:responsiveHeight(4),
        width:responsiveWidth(25),
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:responsiveWidth(5),
    },
    name:{
        color:"#A8ABB3",
        fontSize:responsiveFontSize(2.4),
        fontWeight:"400",
        lineHeight:30,

    },
    distance:{
        color:"#FBBC05",
        fontSize:responsiveFontSize(1.8),
        fontWeight:"400",
        lineHeight:24,
    }
})


export default RequestList
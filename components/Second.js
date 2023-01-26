import React from 'react'
import { Text,View,StyleSheet,Button ,Image,borderWidth,Pressable, TouchableOpacity} from 'react-native'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
const SkipButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.skipButtonContainer}>
      <Text style={styles.skipButtonText}>{title}</Text>
    </TouchableOpacity>
  );

const Second = ({navigation}) => {
  return (
    <>
      <View style={styles.main}>
        <Image style={styles.tinyLogo} source={require('../rafiki.png')}/>
        <Text style={styles.text}>You can also become a donor</Text>
        <Text style={styles.stext}>
        Through this app you can also become a donor to help some needed persons
        </Text>
        <View style={styles.circlecontain}>
            <View style={styles.CircleShape1} />
            <View style={styles.CircleShape2} />
        </View>
        <AppButton title="Next" size="sm" backgroundColor="#007bff" onPress={()=>{navigation.navigate("login")}}/>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    circlecontain:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'grey',
        // height: 600
        flex:0.1,  
        width:30
    },
    CircleShape1: {
        width: 10,
        height: 10,
        borderRadius: 15 / 2,
        backgroundColor: '#D9D9D9',
        marginBottom:20
      },
    CircleShape2: {
        width: 10,
        height: 10,
        borderRadius: 15 / 2,
        backgroundColor: '#2AA05D',
        marginBottom:20
      },
    main:{
        width:"100%",
        height:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flex:1
    },
    tinyLogo: {
      width:responsiveWidth(80),
        height: 300,
        borderWidth:3,
        flex:0.4
    },
    text:{
      fontSize:responsiveFontSize(3.3),
        flexWrap:"wrap",
        lineHeight:43,
        width:responsiveWidth(80),
        weight:600,
        height:144,
        flex:0.16,
        color: "#555B63",
        marginTop:30,
        textAlign:"center"
    },
    stext:{
      fontSize:responsiveFontSize(2.4),
        color:"#A8ABB3",
        flexWrap:"wrap",
        width:327,
        flex:0.13,
        // borderWidth:5,
        textAlign:"center"
    },
    appButtonContainer: {
        elevation: 8,
        width:responsiveWidth(50),
        backgroundColor: "#2AA05D",
        borderRadius: 20,
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
      skipButtonContainer:{
        width:250,
        // borderWidth:1,
        marginTop:10,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
      },
      skipButtonText: {
        fontSize: 18,
        
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }  
})
export default Second

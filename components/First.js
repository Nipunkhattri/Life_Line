import React from 'react';
import { Text,View,StyleSheet,Button ,Image,borderWidth,Pressable, TouchableOpacity,PixelRatio,Dimensions} from 'react-native'
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
  
  const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  } = Dimensions.get('window');
  
  // based on iphone 5s's scale
  const scale = SCREEN_WIDTH / 320;
  
  export function normalize(size) {
    const newSize = size * scale 
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
  }
  //  fontSize: normalize(24)
  

const First = ({navigation}) => {
  return (
    <>
        <View style={styles.main}>
        <Image style={styles.tinyLogo} source={require('../amico.png')}/>
        <Text style={styles.text}>Find the desired organ in the nearest 
        hospitals</Text>
        <Text style={styles.stext}>
        By providing the required information you are good to go to search organs to save yours and others life.
        </Text>
        <View style={styles.circlecontain}>
            <View style={styles.CircleShape1} />
            <View style={styles.CircleShape2} />
        </View>
        <AppButton title="Next" size="sm" backgroundColor="#007bff" onPress={()=>{navigation.navigate("Second")}}/>
        <SkipButton title="Skip" size="sm" backgroundColor="#007bff" onPress={()=>{navigation.navigate("login")}}/>
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
        backgroundColor: '#2AA05D',
        marginBottom:20
      },
    CircleShape2: {
        width: 10,
        height: 10,
        borderRadius: 15 / 2,
        backgroundColor: '#D9D9D9',
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
        width: responsiveWidth(90),
        height: responsiveHeight(10),
        borderWidth:3,
        flex:0.4
    },
    text:{
        fontSize:responsiveFontSize(3.3),
        flexWrap:"wrap",
        lineHeight:43,
        width:responsiveWidth(90),
        // backgroundColor:"green",
        weight:600,
        height:144,
        flex:0.17,
        color: "#555B63",
        marginTop:30,
        textAlign:"center",
        // aspectRatio:6/3
    },
    stext:{
        fontSize:responsiveFontSize(2.4),
        color:"#A8ABB3",
        flexWrap:"wrap",
        width:327,
        flex:0.16,
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

export default First

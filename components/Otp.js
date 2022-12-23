import React from 'react'
import { View ,TouchableHighlight,Text,StyleSheet} from 'react-native'
import { Button } from 'react-native-paper'

const Otp = ({navigation}) => {
    const OTP=({onPress,title})=>(
        <TouchableHighlight onPress={onPress} style={style.appButtonContainer}>
        <Text style={style.appButtonText}>{title}</Text>
      </TouchableHighlight> )
  return (
    <View style={style.container}> 
            <View style={style.heading}>
          <Text style={style.heading}>Welcome!</Text>
          <Text style={style.subheading}>
            Sign in by entering the information below
          </Text>
        </View>
        <OTP title="Home" size="sm"  backgroundColor="#007bff" marginTop="16"  onPress={()=>{navigation.navigate("Home")}}/>
    </View>
  )
}
const style = StyleSheet.create({
    heading: {
        flex: 0.5,
        color: "#2aa05d",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor:'tomato',
        // paddingTop:20,
        fontSize: 40,
        fontWeight: "800",
      },
      subheading: {
        flex: 0.2,
        fontWeight: "600",
        fontSize: 16,
    
        paddingTop: 10,
        color: "#a8abb3",
      },
    container:{
        display:"flex",
        flex:1,
        justifyContent:"center"
    },
    appButtonContainer: {
        elevation: 8,
        width:250,
        backgroundColor: "#2AA05D",
        borderRadius: 20,
        alignSelf:'center',
        paddingVertical: 10,
        paddingHorizontal: 12,
      },
    
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
})

export default Otp

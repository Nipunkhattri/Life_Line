import { View, Text ,Image, StyleSheet ,Button,TouchableHighlight} from 'react-native'
import React from 'react'
import { height } from 'deprecated-react-native-prop-types/DeprecatedImagePropType'
import { useNavigation } from '@react-navigation/native'

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
        <View style={requestlist.button}><Text style={{color:"white"}}>Confirm</Text></View>
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
        backgroundColor:"white",
        width:342,
        height:71,
    },

    logo:{
        borderRadius:100,
        width:40,
        height:40,
    },
    button:{
        backgroundColor:"#2AA05D",
        marginTop:10,
        height:33,
        width:108,
        borderRadius:8,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:41,
    },
    name:{
        color:"#A8ABB3",
        fontSize:20,
        fontWeight:"400",
        lineHeight:30,

    },
    distance:{
        color:"#FBBC05",
        fontSize:16,
        fontWeight:"400",
        lineHeight:24,
    }
})


export default RequestList
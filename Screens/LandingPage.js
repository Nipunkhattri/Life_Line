import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
function LandingPage() {
  return (
    <>
    <View style={styles.container}>
        <Text style={styles.text}>Life Line</Text>
        </View></>
  )
}

export default LandingPage

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:50,
        fontWeight:"600"
    }
})
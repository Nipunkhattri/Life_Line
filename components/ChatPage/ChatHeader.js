import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Svg } from 'react-native-svg'
import Arrow from '../../assets/ChatPAge/Arrow'
import Call from '../../assets/ChatPAge/Call'
import { style } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes'

const ChatHeader = () => {
  return (
    <View style={chatHeader.header}>
        <Arrow />
        <Text style={{color:"gray",fontSize:20}}>Amit Kumar</Text>
        <Call/>
    </View>
  )
}

export default ChatHeader

const chatHeader=StyleSheet.create({
    header:{
        // flex:0.2,
        flexDirection:"row",
        backgroundColor:'white',
        justifyContent:"space-between",
        padding:25,
    }
})
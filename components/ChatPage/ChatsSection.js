import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ChatText from './ChatText'
const ChatsSection = () => {
  return (
        <ChatText/>
  )
}

export default ChatsSection

const chatsSection=StyleSheet.create({
    main:{
        backgroundColor:'white',
        width:"100%",
        height:"100%",
        overflow:"scroll"
    }
})
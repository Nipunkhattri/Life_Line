import { View, Text ,StyleSheet,SafeAreaView} from 'react-native'
import React from 'react'
import Footer from "../HomePage.js/Footer"
import ChatHeader from './ChatHeader'
import ChatsSection from "./ChatsSection"
import ChatFooter from './ChatFooter'
import ChatText from './ChatText'
const ChatPage = () => {
  return (
    <SafeAreaView style={chatPage.droidSafeArea}>
      <View style={{height:"94%"}}>  

        <ChatHeader/>
        <ChatText/>
        <ChatFooter />
      </View>
      <Footer/>

    </SafeAreaView>
  )
}

export default ChatPage

const chatPage= StyleSheet.create({

    footer:{
        position:"absolute",
        // bottom:0
    },
      droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
})
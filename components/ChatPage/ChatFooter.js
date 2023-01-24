import { View, Text, StyleSheet, TouchableHighlight,TextInput ,KeyboardAvoidingView} from "react-native";
import React, { useState } from "react";
// import { onChange } from "deprecated-react-native-prop-types/DeprecatedTextInputPropTypes";
import Send from "../../assets/ChatPAge/Send";
const ChatFooter = () => {
    const [text,setText]=useState("")
    const onChange=(e)=>{
        setText(e.target.value)
    }
  return (
    <KeyboardAvoidingView style={chatFooter.footer}>
        <View style={chatFooter.emoji}><Text>🙂</Text></View>
      <TextInput style={chatFooter.input}
      value={text}onChange={onChange}></TextInput>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        style={chatFooter.sendbutton}
        onPress={() => {
            setText("")
        }}
      >
        <Send style={{marginTop:8}}/>
      </TouchableHighlight>
    </KeyboardAvoidingView>
  );
};

export default ChatFooter;

const chatFooter = StyleSheet.create({
    emoji:{
        width:40,
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#f9f9ff",
        height:"100%",  
    },
  footer: {
    // flex:0.1,
    height:"8%",
    backgroundColor: "white",
    flexDirection: "row",
    paddingLeft:20,
    paddingBottom:10

    // justifyContent:"space-evenly"
    // height:"100%"
  },
  sendbutton: {
    backgroundColor: "green",
    width: 50,
    marginLeft:5,
    borderRadius:30,
    // borderTopRightRadius
    height: "100%",
  },
  input:{
    backgroundColor:"#f9f9ff",
    width:"60%",
    height:"100%",
    borderBottomRightRadius:20,
    borderTopLeftRadius:0,
    borderTopRightRadius:20,
    padding:10
  }
});

import { View, Text,StyleSheet,Image,TextInput,Pressable} from 'react-native'
import React from 'react'
import RequestList from './RequestList'
import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
const RequestPage = ({navigation}) => {
    const title = 'Cancel' ;
    const newtitle = 'Received' ;
  return (
    <View style={page.droidSafeArea}>
        <View style={page.maps}><Image style={page.img}  source={require("../assets/map2.png")}/></View>
        <View style={page.profileTab}>
            <RequestList/>
        </View>
        <View style={page.Track}>
            <View style={{flexDirection:"row",marginLeft:35,marginBottom:10}}>
            <View style={{justifyContent:"center",alignItems:"center"}}>
            <View style={page.circle}></View>
            <View style={page.line}></View>
            </View>
            <View  style={{marginLeft:15}}>
            <Text style={page.heading}>Request Accepted</Text><Text style={page.subheading}>Schedule-22 June,2:30 pm</Text>
            </View>
            </View>
            <View style={{flexDirection:"row",marginLeft:35,marginBottom:10}}>
            <View style={{justifyContent:"center",alignItems:"center"}}>
            <View style={page.circleEmp}></View>
            <View style={page.line}></View>
            </View>
            <View  style={{marginLeft:15}}>
            <Text style={page.heading}>Donor is on the way</Text><Text style={page.subheading}>Estimated arriving time 20:00 min</Text>
            </View>
            </View>
            <View style={{flexDirection:"row",marginLeft:35,marginBottom:10}}>
            <View style={{justifyContent:"center",alignItems:"center"}}>
            <View style={page.circle1}></View>
            <View style={page.line}></View>
            </View>
            <View  style={{marginLeft:15}}>
            <Text style={page.heading1}>Donor has reached the destination</Text><Text style={page.subheading}></Text>
            </View>
            </View>
            <View style={{flexDirection:"row",marginLeft:35,marginBottom:10}}>
            <View style={{justifyContent:"center",alignItems:"center"}}>
            <View style={page.circle1}></View>
            <View style={page.line}></View>
            </View>
            <View  style={{marginLeft:15}}>
            <Text style={page.heading1}>Share your feedback</Text><Text style={page.subheading}></Text>
            </View>
            </View>
            <View style={{ height:responsiveHeight(7),width:responsiveWidth(90),marginTop:responsiveWidth(5),marginLeft:responsiveWidth(5),backgroundColor:"#F9F9FF",fontSize:responsiveFontSize(6)}}>
                    <TextInput
                        style={style.input1}
                        placeholder="Write a Note"
                        onChangeText={(Note) =>pdata({Note})}
                        // right={<TextInput.Icon name='eye'/>}
                        />
            </View>
            <View style={style.btndiv}>
              <Pressable onPress={(e)=>{
                navigation.navigate("people")
              }}  style={{
               elevation: 8,
               width: responsiveWidth(44),
               height: responsiveHeight(6.4),
               backgroundColor: "#2AA05D",
               color:"black",
               // borderRadius: 100,
               borderBottomLeftRadius:20,
               borderTopLeftRadius:20,
               marginTop:20,
               marginLeft:responsiveWidth(7),
               // marginTop: 3,
               // alignSelf:''
               paddingVertical: 13,
               // paddingHorizontal: 12,
            }}>
      <Text style={
        {
          fontSize: responsiveFontSize(2.4),
        color: "white",
        fontWeight: "400",
        marginLeft:53
        }
      }>{title}</Text>
    </Pressable>
    <Pressable onPress={(e)=>{
                navigation.navigate("confirm")
              }}   style={{
             elevation: 8,
             width: responsiveWidth(40),
             height: responsiveHeight(6.5),
             position:"absolute",
             left:responsiveWidth(47),
             backgroundColor: "#2AA05D",
            //  borderRadius: 100,
            borderBottomRightRadius:20,
               borderTopRightRadius:20,
             marginTop:20,
             marginLeft: 20,
             // alignSelf:''
             paddingVertical: 13, 
             // paddingHorizontal: 12,
            }} >
      <Text style={
        {
        fontSize: responsiveFontSize(2.4),
        color: "white",
        fontWeight: "400",
        marginLeft:responsiveWidth(9)
        // alignSelf: "center",
        // marginBottom:10,
        // textTransform: "uppercase",
        }
      }>{newtitle}</Text>
    </Pressable>
              </View>
        </View>
    </View>
  )
}


const page= StyleSheet.create({
    input1: {
        backgroundColor: "#F9F9FF",
        // width: responsiveWidth(38),
        paddingLeft: 15,
        // marginLeft:-50
        fontSize:16,
        marginTop:30,
        height: responsiveHeight(8),
        // borderRadius: 100,
      },
      Track:{
        // backgroundColor:"green",
        height:responsiveHeight(70),
        width:responsiveWidth(100)
      },
    droidSafeArea: {
        flex: 1,
        backgroundColor:"white",
        // padding:10,
        paddingTop: Platform.OS === "android" ? 25 : 0,
      },
      maps:{
        width:responsiveWidth(100),
        height:responsiveHeight(33),
        // backgroundColor:"red",
        fontSize:responsiveFontSize(7)
      },
      img:{
        width:responsiveWidth(100),
        height:responsiveHeight(40),
        // backgroundColor:"red",
        fontSize:responsiveFontSize(7)
      },
      profileTab:{
        transform:[{translateY:responsiveWidth(-4)}],
        width:responsiveWidth(75)
      },
      circle:{
        backgroundColor:"#2aa05d",
        width:responsiveWidth(4),
        height:responsiveHeight(2),
        borderRadius:100,
      },
      circle1:{
        backgroundColor:"#D9D9D9",
        width:responsiveWidth(4),
        height:responsiveHeight(2),
        borderRadius:100,
      },
      circleEmp:{
        // backgroundColor:"#2aa05d",
        borderColor:"#2aa05d",
        borderWidth:1,
        width:responsiveWidth(4),
        height:responsiveHeight(2),
        borderRadius:100,
      },
      line:{
        backgroundColor:'#2aa05d',
        // marginTop:2,
        height:responsiveHeight(6.7),
        width:responsiveWidth(0.5),
      },
      heading:{
        fontSize:responsiveFontSize(2.5),
        fontWeight:"500",
        lineHeight:30,
      },
      heading1:{
        fontSize:responsiveFontSize(2.5),
        fontWeight:"500",
        color:"#D9D9D9",
        lineHeight:30,
      },
      subheading:{
        fontSize:responsiveFontSize(1.9),
        fontWeight:"400",
        color:"#ababb3",
      }
    })
    export default RequestPage
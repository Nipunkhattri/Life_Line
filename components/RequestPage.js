import { View, Text,StyleSheet,Image,TextInput,Pressable} from 'react-native'
import React from 'react'
import RequestList from './RequestList'
import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes'

const RequestPage = () => {
    const title = 'Cancel' ;
    const newtitle = 'Received' ;
  return (
    <View style={page.droidSafeArea}>
        <View style={page.maps}><Image source={require("../assets/map2.png")}/></View>
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
            <View style={{ height:86,width:400,margin:20,backgroundColor:"#F9F9FF",fontSize:16}}>
                    <TextInput
                        style={style.input1}
                        placeholder="Write a Note"
                        onChangeText={(Note) =>pdata({Note})}
                        // right={<TextInput.Icon name='eye'/>}
                        />
            </View>
            <View style={style.btndiv}>
              <Pressable  style={{
               elevation: 8,
               width: 190,
               height: 62,
               backgroundColor: "#2AA05D",
               color:"black",
               // borderRadius: 100,
               borderBottomLeftRadius:20,
               borderTopLeftRadius:20,
               marginTop:20,
               marginLeft:20,
               // marginTop: 3,
               // alignSelf:''
               paddingVertical: 13,
               // paddingHorizontal: 12,
            }}>
      <Text style={
        {
            fontSize: 22,
        color: "white",
        fontWeight: "400",
        marginLeft:53
        // alignSelf: "center",
        // marginBottom:10,
        // textTransform: "uppercase",
        }
      }>{title}</Text>
    </Pressable>
    <Pressable  style={{
             elevation: 8,
             width: 200,
             height: 62,
             position:"absolute",
             left:192,
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
            fontSize: 22,
        color: "white",
        fontWeight: "400",
        marginLeft:53
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
        width: 385,
        paddingLeft: 15,
        // marginLeft:-50
        fontSize:16,
        marginTop:30,
        height: 86,
        // borderRadius: 100,
      },
    droidSafeArea: {
        flex: 1,
        backgroundColor:"white",
        // padding:10,
        paddingTop: Platform.OS === "android" ? 25 : 0,
      },
      maps:{
        width:"100%",
        height:"30%",
        // backgroundColor:"red",
      },
      profileTab:{
        transform:[{translateY:-30}]
      },
      circle:{
        backgroundColor:"#2aa05d",
        width:20,
        height:20,
        borderRadius:100,
      },
      circle1:{
        backgroundColor:"#D9D9D9",
        width:20,
        height:20,
        borderRadius:100,
      },
      circleEmp:{
        // backgroundColor:"#2aa05d",
        borderColor:"#2aa05d",
        borderWidth:1,
        width:20,
        height:20,
        borderRadius:100,
      },
      line:{
        backgroundColor:'#2aa05d',
        marginTop:2,
        height:56,
        width:2,
      },
      heading:{
        fontSize:20,
        fontWeight:"500",
        lineHeight:30,
      },
      heading1:{
        fontSize:20,
        fontWeight:"500",
        color:"#D9D9D9",
        lineHeight:30,
      },
      subheading:{
        fontSize:16,
        fontWeight:"400",
        color:"#ababb3",
      }
    })
    export default RequestPage
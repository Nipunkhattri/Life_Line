// import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes'
import React, { useState } from 'react'
import { View ,Text,StyleSheet,Image,ScrollView,TouchableOpacity,TextInput,Pressable} from 'react-native'
import { useDispatch } from 'react-redux';
import { findorgans } from "../Redux/actions/auth";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import * as DocumentPicker from "expo-document-picker";
import FilePicker from "react-native-document-picker"
const BloodButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={style.bloodButtonContainer}>
      <Text style={style.bloodButtonText}>{title}</Text>
    </TouchableOpacity>
);
const SubmitButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={style.submitButtonContainer}>
      <Text style={style.submitButtonText}>{title}</Text>
    </TouchableOpacity>
);
const FileButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={style.FileButtonContainer}>
    <Text style={style.FileButtonText}>{title}</Text>
  </TouchableOpacity>
);
const BloodBankButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={style.bankButtonContainer}>
      <Text style={style.submitButtonText}>{title}</Text>
    </TouchableOpacity>
);
const HospitalOrganReq = ({navigation}) => {
  const [pres,setPres]=useState(null)
    const [page,setpage]=useState('true');
    const dispatch = useDispatch
    const [find,setfind]= useState({
        email:"",
        type:"",
        organ:""
    })
    const title = 'Organ' ;
    const newtitle = 'blood' ;
    const pdata = (data)=>setfind(()=>({...find,...data}))
    console.log(find);
    const Bloodfind = ()=>{
        setpage('true');
        console.log(page);
    }
    const Organfind = ()=>{
        setpage('false');
        console.log(page);
    }
    const Bloodfindorgan = async()=>{
      try {
        const res = await fetch("https://lifelineserver.azurewebsites.net/organRequest/", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
            "token":token
          },
          body:JSON.stringify(
            find
          )
        });
        console.log(res);
        navigation.navigate("organdetailssend")
        // const data = await res.json();
      } catch (error) {
        console.log(error);
      }
    }
    const Bloodbankfind = ()=>{
        // console.log(find);
        // dispatch(findorgans((find)));
    }
  return (
    <View style={style.main}>
        <ScrollView style={style.ScrollView}>
        <Text style={style.txt}>Apollo Hospital</Text>
        <Image style={style.tinyLogo} source={require('../assets/hospital.png')}/>
          {
              page=='true'?(
                  <>
            <View style={style.btndiv}>
            <Pressable  style={{
               elevation: 8,
               width: responsiveWidth(36),
               height: responsiveHeight(5.7),
               backgroundColor: "white",
               color:"black",
               // borderRadius: 100,
               borderBottomLeftRadius:20,
               borderTopLeftRadius:20,
               marginTop:20,
               // marginTop: 3,
               // alignSelf:''
               paddingVertical: 13,
               // paddingHorizontal: 12,
            }} onPress={Organfind}>
      <Text style={style.donorButtonText}>{title}</Text>
    </Pressable>
    <Pressable  style={{
             elevation: 8,
             width: responsiveWidth(36),
               height: responsiveHeight(5.9),
             position:"absolute",
             left:responsiveWidth(30),
             backgroundColor: "#2AA05D",
             borderRadius: 100,
             marginTop:20,
             // marginTop: 3,
             // alignSelf:''
             paddingVertical: 13,
             // paddingHorizontal: 12,
            }} onPress={Organfind}>
      <Text style={style.donorButtonText}>{newtitle}</Text>
    </Pressable>
            </View>
                <View style={style.form}>
                <Text style={style.label}>Email</Text>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>

                    <TextInput
                        style={style.input}
                        placeholder="Email of Hospital"
                        onChangeText={(email) =>pdata({email})}
                        // right={<TextInput.Icon name='eye'/>}
                        />
                        </View>
                <Text style={style.label}>Blood Grp?</Text>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                    <TextInput
                        style={style.input}
                        placeholder="Enter your Blood Grp"
                        onChangeText={(type) =>pdata({type})}
                        // right={<TextInput.Icon name='eye'/>}
                        />
                        </View>
                <Text style={style.label}>What you need blood/Organ?</Text>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>

                    <TextInput
                        style={style.input}
                        placeholder="What need..?"
                        onChangeText={(organ) =>pdata({organ})}
                        // right={<TextInput.Icon name='eye'/>}
                        />
                        </View>
                </View>
                <BloodBankButton
              title="Mail to blood bank"
              size="sm"
              backgroundColor="#007bff"
              onPress={
                  Bloodbankfind
                }
                />
                </>
            ):
            (
              <>
              <View style={style.btndiv}>
              <Pressable  style={{
               elevation: 8,
               width: responsiveWidth(36),
               height: responsiveHeight(5.9),
               backgroundColor: "#2AA05D",
               color:"black",
               // borderRadius: 100,
               borderBottomLeftRadius:20,
               borderTopLeftRadius:20,
               marginTop:20,
               // marginTop: 3,
               // alignSelf:''
               paddingVertical: 13,
               // paddingHorizontal: 12,
            }} onPress={Organfind}>
      <Text style={style.donorButtonText}>{title}</Text>
    </Pressable>
    <Pressable  style={{
             elevation: 8,
             width: responsiveWidth(36),
               height: responsiveHeight(5.9),
             position:"absolute",
             left:  responsiveWidth(30),
             backgroundColor: "white",
             borderRadius: 100,
             marginTop:20,
             // marginTop: 3,
             // alignSelf:''
             paddingVertical: 13, 
             // paddingHorizontal: 12,
            }} onPress={Bloodfind}>
      <Text style={style.donorButtonText}>{newtitle}</Text>
    </Pressable>
              </View>
                <View style={style.form2}>
                <Text style={style.label}>Email</Text>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>

                    <TextInput
                        style={style.input}
                        placeholder="Email of hospital"
                        onChangeText={(email) =>pdata({email})}
                        // right={<TextInput.Icon name='eye'/>}
                        />
                        </View>
                <Text style={style.label}>What Organ?</Text>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>

                    <TextInput
                        style={style.input}
                        placeholder="Enter Organ Name"
                        onChangeText={(type) =>updatestate({type})}
                        // right={<TextInput.Icon name='eye'/>}
                        />
                        </View>
                <Text style={style.label}>What do you need blood/Organ</Text>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                    <TextInput
                        style={style.input}
                        placeholder="What you need?"
                        onChangeText={(organ) =>updatestate({organ})}
                        // right={<TextInput.Icon name='eye'/>}
                        />
                        </View>
            
                </View>
              </>
            )
    }
{/* ----------------------------------------File upload button------------------------------------ */}

<FileButton title="Upload priscription"
onPress={async ()=>{
  try{
    const response=await DocumentPicker.getDocumentAsync(
      {
        type:'image/*'
      }
    )
    setPres(response)
    console.log(pres.uri)
    console.log("Done");
  }catch(err){
    console.log(err);
  }
}}/>
{pres!=null?
  <View style={{width:120,height:120}}><Text style={style.label}>{pres.name}</Text>
  <Image style={{width:100,height:100}}source={{uri:pres.uri}}/></View>:null
}
{/* ----------------------------------------------------------------------------------------------------------- */}
        <SubmitButton
              title="Send To Hospital"
              size="sm"
              backgroundColor="#007bff"
              onPress={()=>{
                navigation.navigate("organdetailssend")
              }}
                />
                </ScrollView> 
    </View>
  )
}
const style = StyleSheet.create({
    main:{
        display:"flex",
        flex:1,
        // backgroundColor:"red"
        // alignItems:"center"
        // padding:15,
        marginLeft:15
    },
    display:{
        display:"none"
    },
    txt:{
        fontSize:responsiveFontSize(3.5),
        color:"green",
        textAlign:"center",
        marginTop:responsiveWidth(10),
        // fontWeight:700
    },
    tinyLogo:{
        width:responsiveWidth(90),
        height: responsiveHeight(23),
        borderWidth:3,
        flex:0.85,
        borderRadius:23,
        marginTop:20,
    },
    // donorButtonContainer: {
    //     elevation: 8,
    //     width: responsiveWidth(20),
    //     height: responsiveHeight(23),
    //     // backgroundColor: "white",
    //     color:"black",
    //     // borderRadius: 100,
    //     borderBottomLeftRadius:20,
    //     borderTopLeftRadius:20,
    //     marginTop:20,
    //     // marginTop: 3,
    //     // alignSelf:''
    //     paddingVertical: 13,
    //     // paddingHorizontal: 12,
    //   }, 
      bankButtonContainer:{
        elevation: 8,
        width: responsiveWidth(90),
        height: responsiveHeight(6),
        // position:"absolute",
        left:3,
        backgroundColor: "#2AA05D",
        borderRadius: 100,
        marginTop:responsiveWidth(4),
        // marginTop: 3,
        // marginBottom:10,
        // alignSelf:''
        paddingVertical: 13,
        // paddingHorizontal: 12,
      },
    bloodButtonContainer: {
        elevation: 8,
        width: responsiveWidth(90),
        height:  responsiveHeight(6),
        position:"absolute",
        left:132,
        backgroundColor: "#2AA05D",
        borderRadius: 100,
        marginTop:20,
        // marginTop: 3,
        // alignSelf:''
        paddingVertical: 13,
        // paddingHorizontal: 12,
      }, 
    submitButtonContainer: {
        elevation: 8,
        width: responsiveWidth(90),
        height:  responsiveHeight(6),
        // position:"absolute",
        left:3,
        backgroundColor: "#2AA05D",
        borderRadius: 100,
        marginTop:responsiveWidth(5),
        // marginTop: 3,
        marginBottom:10,
        // alignSelf:''
        paddingVertical: 13,
        // paddingHorizontal: 12,
      }, 
      FileButtonContainer: {
        elevation: 8,
        width: responsiveWidth(90),
        height:  responsiveHeight(6),
        // position:"absolute",
        left:3,
        backgroundColor: "#263238",
        borderRadius: 100,
        marginTop:responsiveWidth(5),
        // marginTop: 3,
        marginBottom:10,
        // alignSelf:''
        paddingVertical: 13,
        // paddingHorizontal: 12,
      }, 
      donorButtonText: {
        fontSize: responsiveFontSize(2.3),
        color: "black",
        fontWeight: "400",
        alignSelf: "center",
        // marginBottom:10,
        // textTransform: "uppercase",
      },
      bloodButtonText: {
        fontSize:  responsiveFontSize(2.3),
        color: "#fff",
        fontWeight: "400",
        alignSelf: "center",
        // marginBottom:10,
        // textTransform: "uppercase",
      },
      submitButtonText: {
        fontSize:  responsiveFontSize(1.9),
        color: "#fff",
        fontWeight: "400",
        alignSelf: "center",
        // marginBottom:10,
        // textTransform: "uppercase",
      },
      FileButtonText: {
        fontSize:  responsiveFontSize(1.9),
        color: "#fff",
        fontWeight: "400",
        alignSelf: "center",
        // marginBottom:10,
        // textTransform: "uppercase",
      },
      btndiv:{
        display:"flex",
        flexDirection:"row",
        // borderWidth:2
      },
      form: {
        // flex: 1,
        padding:5,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        // flexWrap:'wrap',
        // flexDirection:'colo'
        // paddingTop:-50
      },
      label: {
        fontWeight: "400",
        fontSize:  responsiveFontSize(2.2),
        color: "#a8abb3",
        paddingBottom:10,
        paddingTop:40,
        marginLeft:10
      },
      input: {
        backgroundColor: "#f9f9ff",
        width: responsiveWidth(90),
        paddingLeft: 15
        ,
        // marginLeft:-50,
        height: 45,
        borderRadius: 100,
      },
      form2:{
            // flex: 1,
            padding:5,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            // flexWrap:'wrap',
            // flexDirection:'colo
            position:"relative",
            top:2,
            // display:"none"
      }
})

export default HospitalOrganReq

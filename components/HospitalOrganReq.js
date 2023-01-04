// import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes'
import React, { useState } from 'react'
import { View ,Text,StyleSheet,Image,ScrollView,TouchableOpacity,TextInput,Pressable} from 'react-native'
import { useDispatch } from 'react-redux';
import { findorgans } from "../Redux/actions/auth";
// import { TextInput } from 'react-native-paper';
// const DonorButton = ({ onPress, title }) => (
//     <TouchableOpacity onPress={onPress} style={style.donorButtonContainer}>
//       <Text style={style.donorButtonText}>{title}</Text>
//     </TouchableOpacity>
// );
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
const BloodBankButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={style.bankButtonContainer}>
      <Text style={style.submitButtonText}>{title}</Text>
    </TouchableOpacity>
);
const HospitalOrganReq = () => {
    const [page,setpage]=useState('true');
    const dispatch = useDispatch
    const [find,setfind]= useState({
        name:"",
        email:"",
        phone:"",
        age:"",
        gender:"",
        obname:""
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
    const Bloodfindorgan = ()=>{
        console.log(find);
        // dispatch(findorgans((find)));
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
          {console.log(page)}
          {
              page=='true'?(
                  <>
            <View style={style.btndiv}>
            <Pressable  style={{
               elevation: 8,
               width: 160,
               height: 50,
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
             width: 170,
             height: 52,
             position:"absolute",
             left:132,
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
                <Text style={style.label}>Name</Text>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>

                    <TextInput
                        style={style.input}
                        placeholder="Enter your Name"
                        onChangeText={(name) =>pdata({name})}
                        // right={<TextInput.Icon name='eye'/>}
                        />
                        </View>
                <Text style={style.label}>Email</Text>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>

                    <TextInput
                        style={style.input}
                        placeholder="Enter your Email"
                        onChangeText={(email) =>pdata({email})}
                        // right={<TextInput.Icon name='eye'/>}
                        />
                        </View>
                <Text style={style.label}>Phone no.</Text>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>

                    <TextInput
                        style={style.input}
                        placeholder="Enter your Phone number"
                        onChangeText={(phone) =>pdata({phone})}
                        // right={<TextInput.Icon name='eye'/>}
                        />
                        </View>
                <Text style={style.label}>Age</Text>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>

                    <TextInput
                        style={style.input}
                        placeholder="Enter your Age"
                        onChangeText={(age) =>pdata({age})}
                        // right={<TextInput.Icon name='eye'/>}
                        />
                        </View>
                <Text style={style.label}>Gender</Text>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                    <TextInput
                        style={style.input}
                        placeholder="Enter your Gender"
                        onChangeText={(gender) =>pdata({gender})}
                        // right={<TextInput.Icon name='eye'/>}
                        />
                        </View>
                <Text style={style.label}>Blood Required</Text>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>

                    <TextInput
                        style={style.input}
                        placeholder="Enter Blood grp required"
                        onChangeText={(obname) =>pdata({obname})}
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
               width: 160,
               height: 50,
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
             width: 170,
             height: 52,
             position:"absolute",
             left:132,
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
                    <Text style={style.label}>Name</Text>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>

                    <TextInput
                        style={style.input}
                        placeholder="Enter your Name"
                        onChangeText={(name) =>pdata({name})}
                        // right={<TextInput.Icon name='eye'/>}
                        />
                        </View>
                <Text style={style.label}>Email</Text>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>

                    <TextInput
                        style={style.input}
                        placeholder="Enter your Email"
                        onChangeText={(email) =>pdata({email})}
                        // right={<TextInput.Icon name='eye'/>}
                        />
                        </View>
                <Text style={style.label}>Phone no.</Text>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>

                    <TextInput
                        style={style.input}
                        placeholder="Enter your Phone number"
                        onChangeText={(phone) =>pdata({phone})}
                        // right={<TextInput.Icon name='eye'/>}
                        />
                        </View>
                <Text style={style.label}>Age</Text>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>

                    <TextInput
                        style={style.input}
                        placeholder="Enter your Age"
                        onChangeText={(email) =>updatestate({email})}
                        // right={<TextInput.Icon name='eye'/>}
                        />
                        </View>
                <Text style={style.label}>Gender</Text>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>

                    <TextInput
                        style={style.input}
                        placeholder="Enter your Gender"
                        onChangeText={(email) =>updatestate({email})}
                        // right={<TextInput.Icon name='eye'/>}
                        />
                        </View>
                <Text style={style.label}>Organ Required</Text>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>

                    <TextInput
                        style={style.input}
                        placeholder="Enter Organ required"
                        onChangeText={(email) =>updatestate({email})}
                        // right={<TextInput.Icon name='eye'/>}
                        />
                        </View>
            
                </View>
              </>
            )
    }
        <SubmitButton
              title="Send To Hospital"
              size="sm"
              backgroundColor="#007bff"
              onPress={
                  Bloodfindorgan
                }
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
        fontSize:30,
        color:"green",
        textAlign:"center",
        marginTop:60,
        // fontWeight:700
    },
    tinyLogo:{
        width:400,
        height: 200,
        borderWidth:3,
        flex:0.85,
        borderRadius:23,
        marginTop:20,
    },
    donorButtonContainer: {
        elevation: 8,
        width: 160,
        height: 50,
        // backgroundColor: "white",
        color:"black",
        // borderRadius: 100,
        borderBottomLeftRadius:20,
        borderTopLeftRadius:20,
        marginTop:20,
        // marginTop: 3,
        // alignSelf:''
        paddingVertical: 13,
        // paddingHorizontal: 12,
      }, 
      bankButtonContainer:{
        elevation: 8,
        width: 390,
        height: 52,
        // position:"absolute",
        left:3,
        backgroundColor: "#2AA05D",
        borderRadius: 100,
        marginTop:20,
        // marginTop: 3,
        // marginBottom:10,
        // alignSelf:''
        paddingVertical: 13,
        // paddingHorizontal: 12,
      },
    bloodButtonContainer: {
        elevation: 8,
        width: 170,
        height: 52,
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
        width: 390,
        height: 52,
        // position:"absolute",
        left:3,
        backgroundColor: "#2AA05D",
        borderRadius: 100,
        marginTop:30,
        // marginTop: 3,
        marginBottom:10,
        // alignSelf:''
        paddingVertical: 13,
        // paddingHorizontal: 12,
      }, 
      donorButtonText: {
        fontSize: 15,
        color: "black",
        fontWeight: "400",
        alignSelf: "center",
        // marginBottom:10,
        // textTransform: "uppercase",
      },
      bloodButtonText: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "400",
        alignSelf: "center",
        // marginBottom:10,
        // textTransform: "uppercase",
      },
      submitButtonText: {
        fontSize: 15,
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
        fontSize: 20,
        color: "#a8abb3",
        paddingBottom:10,
        paddingTop:40,
        marginLeft:10
      },
      input: {
        backgroundColor: "#f9f9ff",
        width: 385,
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

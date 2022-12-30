// import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes'
import React, { useState } from 'react'
import { View ,Text,StyleSheet,Image,ScrollView,TouchableOpacity,TextInput,Pressable,Button} from 'react-native'
import { useDispatch } from 'react-redux';
import { findorgans } from "../Redux/actions/auth";
// import DatePicker from '@react-native-community/datetimepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
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
const RequestOb = ({navigation}) => {
  // const navigation = useNavigation();
    const [page,setpage]=useState('true');
    const dispatch = useDispatch
    const [find,setfind]= useState({
        name:"",
        Address:"",
        date:"",
        time:"",
        obname:"",
        Note:"",
    })
    const title = 'Organ' ;
    const newtitle = 'blood' ;
    const datetitle = 'Date'
    const timetitle = 'Time'
    const [datePicker, setDatePicker] = useState(false);
  const [timePicker, setTimePicker] = useState(false);
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date(Date.now()));
    console.log(date);
    console.log(time);
    function showDatePicker() {
        setDatePicker(true);
      };
      function showTimePicker() {
        setTimePicker(true);
      };
      function onDateSelected(event, value) {
        setDate(value);
        setDatePicker(false);
      };
      function onTimeSelected(event, value) {
        setTime(value);
        setTimePicker(false);
      };
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
    const Bloodreqorgan = ()=>{
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
        <Text style={style.txt}>Request</Text>
          {console.log(page)}
          {
              page=='true'?(
                  <>
            <View style={style.btndiv}>
            <Pressable  style={{
               elevation: 8,
               width: 190,
               height: 60,
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
      <Text style={
        {
            fontSize: 22,
            color: "#A8ABB3",
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
             width: 170,
             height: 62,
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
      <Text style={{
         fontSize: 22,
         color: "white",
         fontWeight: "400",
         marginLeft:53
         // alignSelf: "center",
         // marginBottom:10,
         // textTransform: "uppercase",
      }}>{newtitle}</Text>
    </Pressable>
    <TouchableOpacity style={{
      // backgroundColor:"green"
    }} onPress={()=>{navigation.navigate("people")}} >
        <Image style={{
          marginLeft:170,
          marginTop:30
        }} source={require("../assets/Noti.png")}/>
        </TouchableOpacity>
            </View>
                <View style={style.form}>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>

                    <TextInput
                        style={style.input2}
                        placeholder="Enter Hospital Name"
                        onChangeText={(name) =>pdata({name})}
                        // right={<TextInput.Icon name='eye'/>}
                        />
                        </View>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>

                    <TextInput
                        style={style.input}
                        placeholder="Address of the hospital"
                        onChangeText={(Address) =>pdata({Address})}
                        // right={<TextInput.Icon name='eye'/>}
                        />
                        </View>
                        <View style={{display:"flex",flexDirection:"row"}}>
        <View style={style.iall}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
<TextInput
    style={style.input4}
    placeholder="Enter Date"
    onChangeText={(date) =>pdata({date})}
    // right={<TextInput.Icon name='eye'/>}
    />
    </View>
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>

                    <TextInput
                        style={style.input7}
                        placeholder="Enter Time"
                        onChangeText={(time) =>pdata({time})}
                        // right={<TextInput.Icon name='eye'/>}
                        />
                        </View>
        </View>
        </View>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>

                    <TextInput
                        style={style.input}
                        placeholder="Blood Group"
                        onChangeText={(obname) =>pdata({obname})}
                        // right={<TextInput.Icon name='eye'/>}
                        />
                        </View>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                    <TextInput
                        style={style.input1}
                        placeholder="Write a Note"
                        onChangeText={(Note) =>pdata({Note})}
                        // right={<TextInput.Icon name='eye'/>}
                        />
                        </View>
                        
                </View>
                
                </>
            ):
            (
              <>
              <View style={style.btndiv}>
              <Pressable  style={{
               elevation: 8,
               width: 160,
               height: 62,
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
             width: 160,
             height: 62,
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
      <Text style={
        {
            fontSize: 22,
        color: "#A8ABB3",
        fontWeight: "400",
        marginLeft:53
        // alignSelf: "center",
        // marginBottom:10,
        // textTransform: "uppercase",
        }
      }>{newtitle}</Text>
    </Pressable>
    <Image style={{
                    marginLeft:200,
                    marginTop:30
                  }} source={require("../assets/Noti.png")}/>
              </View>
              <View style={style.form}>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>

                    <TextInput
                        style={style.input2}
                        placeholder="Enter Hospital Name"
                        onChangeText={(name) =>pdata({name})}
                        // right={<TextInput.Icon name='eye'/>}
                        />
                        </View>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>

                    <TextInput
                        style={style.input}
                        placeholder="Address of the hospital"
                        onChangeText={(Address) =>pdata({Address})}
                        // right={<TextInput.Icon name='eye'/>}
                        />
                        </View>
                        <View style={{display:"flex",flexDirection:"row"}}>
        <View style={style.iall}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
<TextInput
    style={style.input4}
    placeholder="Enter Date"
    onChangeText={(date) =>pdata({date})}
    // right={<TextInput.Icon name='eye'/>}
    />
    </View>
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>

                    <TextInput
                        style={style.input7}
                        placeholder="Enter Time"
                        onChangeText={(time) =>pdata({time})}
                        // right={<TextInput.Icon name='eye'/>}
                        />
                        </View>
        </View>
        </View>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>

                    <TextInput
                        style={style.input}
                        placeholder="Organ Required"
                        onChangeText={(obname) =>pdata({obname})}
                        // right={<TextInput.Icon name='eye'/>}
                        />
                        </View>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                    <TextInput
                        style={style.input1}
                        placeholder="Write a Note"
                        onChangeText={(Note) =>pdata({Note})}
                        // right={<TextInput.Icon name='eye'/>}
                        />
                        </View>
                        
                </View>
              </>
            )
    }
        <SubmitButton
              title="Submit"
              size="sm"
              backgroundColor="#007bff"
              onPress={
                  Bloodreqorgan
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
        backgroundColor:"white",
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
      // Style for iOS ONLY...
  datePicker: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 260,
    display: 'flex',
  },
      text: {
        textAlign: 'left',
        width: 230,
        fontSize: 16,
        color : "#000"
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
      btn:{
        color:"#F9F9FF"
      },
      iall:{
        display:"flex",
        flexDirection:"row"
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
        fontSize: 22,
        color: "#A8ABB3",
        fontWeight: "400",
        marginLeft:53
        // alignSelf: "center",
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
        // padding:,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        // flexWrap:'wrap',
        // flexDirection:'colo'
        // paddingTop:-50
        margin:10
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
        backgroundColor: "#F9F9FF",
        width: 385,
        paddingLeft: 15
        ,
        // marginLeft:-50
        fontSize:16,
        marginTop:30,
        height: 55,
        // borderRadius: 100,
      },
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
      input2: {
        backgroundColor: "#F9F9FF",
        width: 385,
        paddingLeft: 15
        ,
        // marginLeft:-50
        fontSize:16,
        marginTop:30,
        height: 55,
        // borderRadius: 100,
      },
      input4: {
        backgroundColor: "#F9F9FF",
        width: 185,
        paddingLeft: 15
        ,
        // marginLeft:-50
        fontSize:16,
        marginTop:30,
        height: 49,
        // borderRadius: 100,
      },
      input7: {
        backgroundColor: "#F9F9FF",
        width: 185,
        paddingLeft: 15
        ,
        marginLeft:200,
        fontSize:16,
        marginTop:27,
        height: 49,
        // borderRadius: 100,
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

export default RequestOb

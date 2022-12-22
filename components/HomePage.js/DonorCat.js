import { Text, View ,StyleSheet} from 'react-native'
import React, { Component } from 'react'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
 

const Box=()=>{
  return (
<View style={donor.Box}>
  <Text style={donor.BoxText}>Do you have diebaties ?</Text>
</View>
  )
}
function DonorCat() {
  
  return (
    <View style={donor.droidSafeArea}>
           <Text style={donor.heading}>Before becoming a donor fill these following deatails</Text>
            <Box/>
        </View>
  )
}

export default DonorCat


const donor=StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    // backgroundColor: npLBlue,
    padding:25,
    backgroundColor:'white',
    // paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  heading:{
    color:'#ababb3',
    lineHeight:30,
    fontSize:20,
    fontWeight:'500',
  },
  Box:{
    borderWidth:1,
    borderStyle:'solid',
    borderColor:'#a8abb3',
    padding:9,
    borderRadius:20
  },
  BoxText:{
    color:'#7d7d7d'
  }

})
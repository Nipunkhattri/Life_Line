import React, { useEffect ,useState} from 'react'
import { View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'
function LandingPage({navigation}) {
  const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
  // const reload = () =>{
    setTimeout(() => {
      navigation.navigate("First");
    }, 3000);
  // }
  return (
    <>
    <View style={styles.container} >
        <Image source={require("../assets/pname.png")}/>
        {/* <AppButton title="Next" size="sm" backgroundColor="#007bff" onPress={()=>{navigation.navigate("First")}}/> */}
    </View>
    </>
  )
}

export default LandingPage

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:50,
        fontWeight:"600"
    }
})
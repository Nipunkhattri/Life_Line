import React, { useEffect ,useState} from 'react'
import { View,Text,StyleSheet,TouchableOpacity} from 'react-native'
function LandingPage({navigation}) {
  const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
  // const reload = () =>{
  //   setInterval(() => {
  //       navigation.navigate('First');
  //   }, 3000);
  // }
  return (
    <>
    <View style={styles.container} >
        <Text style={styles.text}>Life Line</Text>
        <AppButton title="Next" size="sm" backgroundColor="#007bff" onPress={()=>{navigation.navigate("First")}}/>
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
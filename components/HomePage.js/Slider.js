
import React from 'react'
import { Text ,View,StyleSheet,Platform,StatusBar} from 'react-native'
import CustomImageCarousalSquare from '../CustomImageCarousalSquare'
function App() {
  const data=[{
    image:require('../../assets/image-product-1.jpg')
  },{
    image:require('../../assets/image-product-2.jpg')
  },
  {
    image:require('../../assets/image-product-3.jpg')
  },
  {
    image:require('../../assets/image-product-4.jpg')
  }
]
  return (
    <>
    <View style={style.container}>
<CustomImageCarousalSquare data={data}/>
    </View>
    </>
  )
}

export default App
const style=StyleSheet.create({
container:{
  flex:0.1,
  marginBottom:13,
  backgroundColor:'white',
  // paddingTop:Platform.OS==='android'? StatusBar.currentHeight:0,
}
})
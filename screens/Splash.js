import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'

const Splash = ({navigation}) => {
   useEffect(()=>{
    setTimeout(()=>{
        navigation?.replace("Login")
    },1000)

   },[])
    
  return (
    <View style={styles.main}>
        <View style={styles.txtView}>
            <Text style={styles.txt}>
                Firebase
            </Text>

        </View>
      
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:"skyblue",
        justifyContent:"center",
        alignItems:"center"
    },
    txtView:{
        width:"60%",
        height:200,
        backgroundColor:"red",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:100,
        shadowColor:"yellow",
        elevation:100,
    },
    txt:{
        fontSize:50,
        color:"white"
    }
})
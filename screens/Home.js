import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.main}>
        <View>
            <Text style={styles.font}>
                Wellcome to Home Screen
            </Text>
        </View>
       
     
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    },
    font:{
        fontSize:30, 
    }
})
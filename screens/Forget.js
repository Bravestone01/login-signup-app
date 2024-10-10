import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Forget = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewtext}>
        <View style={styles.textstyle}>
          <Text style={styles.text}>Forget your Password ?</Text>
        </View>
      </View>

      <View style={styles.inputView}>
        <View style={styles.inputstyle}>
          <TextInput placeholder={"Enter Your Email"} 
          style={styles.inputfield}/>
        </View>
        <Button title={"Submit"} />
      </View>
    </View>
  );
};

export default Forget;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6A5ACD",
    alignItems: "center",
  },
  viewtext: {
    width: "90%",
    height: 200,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  textstyle: {
    width: "90%",
    backgroundColor: "black",
    height: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "700",
  },
  inputView: {
    flex: 1,
    paddingTop:160,
    alignItems:"center",
    width:"90%",
    gap:20,
  },
  inputstyle:{
    backgroundColor:"gray",
    width:"90%",
    height:50,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10,
    borderWidth:2,
    borderColor:"skyblue",
  },
  inputfield:{
    fontSize:18,
    width:"90%",
    height:50,
    color:"white"
}

});

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import React,{useState} from "react";
import { auth } from "../firebse.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import Entypo from '@expo/vector-icons/Entypo';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] =useState(false)
  const [isVisible, setIsVisible] =useState(false)

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, Password);
      // Login successful, navigate to the next screen (e.g., Home)
      Alert.alert("Success", "Logged in successfully!");
      setEmail("");
      setPassword("");
       navigation.navigate("Home"); 
    } catch (error) {
      // If login fails, show an alert
      Alert.alert("Error", "You need to sign up first.");
      
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginwrapper}>
        <View style={styles.login}>
          <Text style={styles.logintxt}>Login Here</Text>
        </View>
      </View>
      <View style={styles.inputwrapper}>
        <View style={styles.inputview}>
          <TextInput placeholder={"Enter your Email"} style={styles.input} 
          value={email}
          onChangeText={setEmail}/>
        </View>
        <View style={styles.inputview}>
          <TextInput
            placeholder={"Enter your Password"}
            style={styles.input}
            secureTextEntry={!isPasswordVisible? true:false}
          value={Password}
          onChangeText={setPassword}
          />
          <TouchableOpacity onPress={()=>{setIsPasswordVisible(!isPasswordVisible),setIsVisible(!isVisible)}}>
          <Entypo name={!isVisible? 'eye':"eye-with-line"} size={24} color="#747474" />
          </TouchableOpacity>
        </View>

        <View style={styles.forgetpassword}>
          <TouchableOpacity onPress={()=>navigation?.navigate("Forget")}>
            <Text style={styles.forgettext}>Forget Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
          <Text style={styles.btntext}>Log in</Text>
        </TouchableOpacity>

        <View style={styles.createAccount}>
          <Text style={styles.accountText}>I don't have a account?</Text>
          <TouchableOpacity onPress={() => navigation?.navigate("Singup")}>
            <Text style={styles.accountBtn}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008080",
    alignItems: "center",
  },
  loginwrapper: {
    width: "90%",
    height: 200,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  login: {
    backgroundColor: "blue",
    width: "90%",
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
  },
  logintxt: {
    fontSize: 30,
    fontWeight: "800",
    color: "white",
  },
  inputwrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    gap: 20,
  },
  inputview: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "skyblue",
    alignItems:'center',
    backgroundColor: "#FFDAB9",
    padding: 8,
    flexDirection:'row'
  },
  input: {
    width:'85%',
    fontSize: 20,
    color: "black",
  },
  btn: {
    backgroundColor: "#696969",
    width: "90%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  btntext: {
    color: "white",
    fontSize: 30,
    fontWeight: "800",
  },
  forgetpassword: {
    alignItems: "flex-end",
    width: "90%",
  },
  forgettext: {
    color: "#00BFFF",
    fontWeight: "600",
  },
  createAccount: {
    flexDirection: "row",
    gap: 15,
    paddingTop: 50,
  },
  accountText: {
    fontSize: 15,
    color: "white",
    fontWeight: "600",
  },
  accountBtn: {
    color: "#32CD32",
    fontSize: 15,
    fontWeight: "700",
  },
});

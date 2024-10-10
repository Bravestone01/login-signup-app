import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ActivityIndicator,
} from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { auth } from "../firebse.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Cpassword, setCpassword] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isCPasswordVisible, setIsCPasswordVisible] = useState(false)
  const [isVisible, setIsVisible] =useState(false)
  const [isConfVisible, setIsConfVisible] =useState(false)

  const handleSignUp = async () => {
    if (Password !== Cpassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }

    setLoading(true); // Start loading

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        Password
      );
      // Registration successful
      Alert.alert("Success", "User registered successfully!");

      // Reset input fields
      setName("");
      setEmail("");
      setPassword("");
      setCpassword("");

      // Navigate to Login screen
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false); // Stop loading regardless of success or failure
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.loginwrapper}>
          <View style={styles.login}>
            <Text style={styles.logintxt}>Sign Up</Text>
          </View>
        </View>
        <View style={styles.inputwrapper}>
          <View style={styles.inputview}>
            <TextInput
              placeholder={"Enter your Full Name"}
              style={styles.input}
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.inputview}>
            <TextInput
              placeholder={"Enter your Email"}
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.inputview}>
            <TextInput
              placeholder={"Enter your Password"}
              style={styles.passwordinput}
              secureTextEntry={!isPasswordVisible? true:false}
              value={Password}
              onChangeText={setPassword}
            />
            <TouchableOpacity  onPress={()=>{setIsPasswordVisible(!isPasswordVisible),setIsVisible(!isVisible)}}>
              <Entypo name={!isVisible? 'eye':"eye-with-line"}
                size={24}
                color="#747474"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputview}>
            <TextInput
              placeholder={"Confirm your Password"}
              style={styles.passwordinput}
              secureTextEntry={!isCPasswordVisible? true:false}
              value={Cpassword}
              onChangeText={setCpassword}
            />
              <TouchableOpacity  onPress={()=>{setIsCPasswordVisible(!isCPasswordVisible),
                setIsConfVisible(!isConfVisible)}}>
              <Entypo name={!isConfVisible? 'eye':"eye-with-line"}
                size={24}
                color="#747474"
              />
            </TouchableOpacity>
          
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={handleSignUp}
            disabled={loading}
          >
            <Text style={styles.btntext}>
              {loading ? "Signing Up..." : "Sign Up"}
            </Text>
          </TouchableOpacity>
          {loading && <ActivityIndicator size="large" color="#0000ff" />}
          <View style={styles.createAccount}>
            <Text style={styles.accountText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation?.navigate("Login")}>
              <Text style={styles.accountBtn}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008080",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  loginwrapper: {
    width: "90%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    backgroundColor: "red",
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
    width: "90%",
    alignItems: "center",
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
    flexDirection:'row',
  },
  input: {
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
  passwordinput:{
    width:'88%',
    fontSize: 20,
    color: "black",
  }
});

// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDxEY8JuZWiEDQPH7nHipJu789gdm0Z74s",
  authDomain: "fir-a1508.firebaseapp.com",
  projectId: "fir-a1508",
  storageBucket: "fir-a1508.appspot.com",
  messagingSenderId: "856731379976",
  appId: "1:856731379976:web:a2a8ff18df6a7db19ba4bd"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage for persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { app, auth };

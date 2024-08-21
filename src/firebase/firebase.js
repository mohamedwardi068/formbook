
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB5Pd7Wx8jlSv_HqZLnO3kdPqx0fAqDCKI",
  authDomain: "formbo-a727c.firebaseapp.com",
  projectId: "formbo-a727c",
  storageBucket: "formbo-a727c.appspot.com",
  messagingSenderId: "296165582791",
  appId: "1:296165582791:web:cc4b7e65944802bf665be2",
  measurementId: "G-682M0XXH4N"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function Loginn(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      return user;
    } catch (error) {
      console.error('Login Error:', error.message);
      throw error;
    }
  }
  
  async function signUp(name, email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      return user;
    } catch (error) {
      console.error('Signup Error:', error.message);
      throw error;
    }
  }
  
  export { Loginn, signUp };
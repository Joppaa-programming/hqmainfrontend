import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, FieldValue, setDoc, addDoc } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa3WWzP0l0Y2gRmYZGyk3C1NTpk0wbu5k",
  authDomain: "hqmanchester-f0b69.firebaseapp.com",
  projectId: "hqmanchester-f0b69",
  storageBucket: "hqmanchester-f0b69.appspot.com",
  messagingSenderId: "1071321121492",
  appId: "1:1071321121492:web:2916cba53af93c0b78f141",
  measurementId: "G-BTLKLHMKYR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log("Initializing Firebase");
const db = getFirestore(app);

export default async function addData(data) {
  let result = null;
  let error = null;
  console.log("Adding data", data)
  try {

    const cll = collection(db, '/subcribed');
     //const newUserRef = doc(cll);
   result = await addDoc(cll, data);
   // result =   await setDoc(newUserRef, data);
    console.log(result);

  } catch (e) {
    error = e;
    console.log(e);
  }
  return { result, error };


};
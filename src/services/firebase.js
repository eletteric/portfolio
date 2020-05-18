import firebase from'firebase/app';  
import 'firebase/firestore';  
import 'firebase/storage';  
import 'firebase/auth';  
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyArQHufEckoggC3GtjwpMNkWUu_r0q3k-4",
    authDomain: "portfolio-e9f3c.firebaseapp.com",
    databaseURL: "https://portfolio-e9f3c.firebaseio.com",
    projectId: "portfolio-e9f3c",
    storageBucket: "portfolio-e9f3c.appspot.com",
    messagingSenderId: "824492301419",
    appId: "1:824492301419:web:f93469f45b058ef28a252e",
    measurementId: "G-LFBK0KX6QT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 // firebase.analytics();

  export const auth= firebase.auth();
  export const db = firebase.firestore();
  export const storage = firebase.storage();

  export default firebase
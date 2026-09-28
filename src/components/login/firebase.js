import firebase from'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDgkJ44rORTRoeP0Wnuf03zeqS4-HKkpsg",
    authDomain: "csad-project-452d2.firebaseapp.com",
    projectId: "csad-project-452d2",
    storageBucket: "csad-project-452d2.appspot.com",
    messagingSenderId: "860485155981",
    appId: "1:860485155981:web:e2b1f1a02f8cfe4caf76c4"
  };
const app = firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()
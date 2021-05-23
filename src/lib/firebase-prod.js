import Firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyDrWoTjlbiFG2euDuvc3EspeEUaHuyhNpE",
  authDomain: "newproject-64cb5.firebaseapp.com",
  projectId: "newproject-64cb5",
  storageBucket: "newproject-64cb5.appspot.com",
  messagingSenderId: "316752184917",
  appId: "1:316752184917:web:7e8b87a8c93e6ec067b6dc",
  measurementId: "G-X08RE46SC2",
}

const firebase = Firebase.initializeApp(config)
export const db = Firebase.firestore()
const auth = Firebase.auth()
// We need to get provider to get googleAuthWorking
const provider = new Firebase.auth.GoogleAuthProvider()

export { firebase, auth, provider }

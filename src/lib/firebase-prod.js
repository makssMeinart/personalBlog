import Firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyC6uW6de__qIj4Yr2b_zU4ns4XogWYxmMI",
  authDomain: "personal-blog-d395f.firebaseapp.com",
  projectId: "personal-blog-d395f",
  storageBucket: "personal-blog-d395f.appspot.com",
  messagingSenderId: "596314158476",
  appId: "1:596314158476:web:8aa867dcfda2edf3a892a9",
}

const firebase = Firebase.initializeApp(config)
export const db = Firebase.firestore()
const auth = Firebase.auth()
// We need to get provider to get googleAuthWorking
const provider = new Firebase.auth.GoogleAuthProvider()

export { firebase, auth, provider }

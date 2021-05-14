import { useContext } from "react"
import Signin from "../components/signin"
import { FirebaseContext } from "../context/firebase"


export function SigninContainer() {
 const Context = useContext(FirebaseContext)
 const {auth, provider} = Context

//  Signin with google
 const signIn = async () => {
   try {
      const credentials = await auth.signInWithPopup(provider)
      console.log(auth) 
   }
   catch(err) {
     console.error(err)
   }
 }

  return (
    <Signin>
      <Signin.Inner>
        <Signin.Title>Auth With Google</Signin.Title>
        <Signin.Button onClick={signIn} >Sign In</Signin.Button>
      </Signin.Inner>
    </Signin>
  )
}

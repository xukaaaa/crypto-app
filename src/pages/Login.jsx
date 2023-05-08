import {
   GithubAuthProvider,
   GoogleAuthProvider,
   signInWithPopup,
} from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

function Login() {
   const navigate = useNavigate()
   const googleProvider = new GoogleAuthProvider()
   const githubProvider = new GithubAuthProvider()

   const handleLoginGoogle = () => {
      signInWithPopup(auth, googleProvider)
         .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.accessToken
            // The signed-in user info.
            const user = result.user
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            console.log(result)
            navigate('/')
         })
         .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code
            const errorMessage = error.message
            // The email of the user's account used.
            const email = error.customData.email
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error)
            // ...
         })
   }

   const handleLoginGithub = async () => {
      try {
         const result = await signInWithPopup(auth, githubProvider)
         console.log(result)
      } catch (error) {
         console.log({ error })
      }
   }

   return (
      <>
         <button onClick={handleLoginGoogle}>Login with google</button>
         <button onClick={handleLoginGithub}>Login with github</button>
      </>
   )
}

export default Login

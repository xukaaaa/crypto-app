import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth } from '../../firebase'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../redux/authSlice'
import Cookies from 'js-cookie'

function GoogleAuthButton() {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const handleLoginGoogle = async () => {
      const googleProvider = new GoogleAuthProvider()
      try {
         const { user } = await signInWithPopup(auth, googleProvider)
         const { displayName, email, photoURL, uid } = user
         Cookies.set(
            'user',
            JSON.stringify({ displayName, email, photoURL, uid })
         )
         dispatch(login(JSON.stringify({ displayName, email, photoURL, uid })))
         setTimeout(() => {
            navigate(-1)
         }, 1000)
      } catch (error) {
         throw error
      }
   }

   return <button onClick={handleLoginGoogle}>Continue with Google</button>
}

export default GoogleAuthButton

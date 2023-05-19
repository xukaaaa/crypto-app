import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth } from '../../firebase'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../redux/authSlice'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
// import { Google } from '../../assets/img/Login_Register'

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
            JSON.stringify({ displayName, email, photoURL, uid }),
            { secure: true }
         )
         dispatch(login({ displayName, email, photoURL, uid }))
         toast.success('Login successfully!')
         setTimeout(() => {
            navigate(-1)
         }, 1000)
      } catch (error) {
         toast.error('Login failed!')
         throw error
      }
   }

   return <button onClick={handleLoginGoogle}><img src='src\assets\img\Login_Register\Google.svg' /></button>
}

export default GoogleAuthButton

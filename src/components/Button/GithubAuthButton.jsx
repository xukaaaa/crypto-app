import { GithubAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth } from '../../firebase'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../redux/authSlice'

function GithubAuthButton() {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const handleLoginGithub = async () => {
      const githubProvider = new GithubAuthProvider()
      try {
         const { user } = await signInWithPopup(auth, githubProvider)
         const { displayName, email, photoURL, uid } = user
         Cookies.set(
            'user',
            JSON.stringify({ displayName, email, photoURL, uid }),
            { secure: true }
         )
         dispatch(login({ displayName, email, photoURL, uid }))
         setTimeout(() => {
            navigate(-1)
         }, 1000)
      } catch (error) {
         throw error
      }
   }

   return <button onClick={handleLoginGithub}>Continue with Github</button>
}

export default GithubAuthButton

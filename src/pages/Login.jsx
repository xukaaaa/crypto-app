import React from 'react'
import GithubAuthButton from '../components/Button/GithubAuthButton'
import GoogleAuthButton from '../components/Button/GoogleAuthButton'

function Login() {
   return (
      <>
         <GoogleAuthButton />
         <GithubAuthButton />
      </>
   )
}

export default Login

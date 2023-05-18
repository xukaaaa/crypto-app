import React from 'react'
import GithubAuthButton from '../components/Button/GithubAuthButton'
import GoogleAuthButton from '../components/Button/GoogleAuthButton'

function Login() {
   return (
      <div className="min-h-[calc(100vh-140px-396px)]">
         <GoogleAuthButton />
         <GithubAuthButton />
      </div>
   )
}

export default Login

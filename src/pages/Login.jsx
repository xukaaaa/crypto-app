import React, { useState } from 'react'
import GithubAuthButton from '../components/Button/GithubAuthButton'
import GoogleAuthButton from '../components/Button/GoogleAuthButton'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { auth } from '../firebase'
import { toast } from 'react-toastify'

function Login() {
   const [userName, setUserName] = useState('');
   const [password, setPassword] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const navigate = useNavigate();
   const handleLogin = (e) => {
      setIsLoading(true);
      e.preventDefault();
      signInWithEmailAndPassword(auth, userName, password)
         .then(() => {
            toast.success('Login success!');
            setTimeout(() => {
               navigate('/')
            }, 1000);
         })
         .catch(e => {
            console.log(e.code);
            switch (e.code) {
               case "auth/user-not-found":
                  toast.error("Wrong email!");
                  break;
               case "auth/invalid-email":
                  toast.error("Invalid email!");
                  break;
               case "auth/wrong-password":
                  toast.error("Wrong password!");
                  break;
               case "auth/too-many-requests":
                  toast.error("Too many attemp! Try again later.");
                  break;
               default:
                  toast.error('Login failed!');
            }
            setIsLoading(false);
         })

   }
   return (
      <>
         <div className="relative left-[667px] mt-[245px] w-[104px] h-[48px] font-inter font-normal text-[40px] leading-[48px] text-white">Login</div>
         <div className=" relative left-[370px] top-[25px] mb-[168px] flex relative w-[700px] h-[704px] bg-[#1E1B3E] rounded-[20px]" >
            <div className="absolute left-[90px] top-[82px] font-inter font-normal text-[20px] leading-[24px] text-white">Username</div>
            <form onSubmit={handleLogin}>
               <input
                  required={true}
                  className="left-[76px] top-[116px] box-border absolute w-[547px] h-[42px] border-[2px] border-solid border-[#30215A] rounded-[10px]"
                  type='text'
                  value={userName}
                  onChange={(even) => {
                     setUserName(even.target.value);
                  }}
               ></input>
               <div className="absolute left-[90px] top-[189px] font-inter font-normal text-[20px] leading-[24px] text-white">Password</div>
               <input
                  required={true}
                  type='Password' className="left-[76px] top-[231px] box-border absolute w-[547px] h-[42px] border-[2px] border-solid border-[#30215A] rounded-[10px]"
                  value={password}
                  onChange={(even) => {
                     setPassword(even.target.value);
                  }}
               ></input>

               <button
                  disabled={isLoading}
                  type='submit'
                  className="absolute w-[252px] h-[65px] bg-[#6638E5] rounded-[30px] font-itim font-normal text-[28px] leading-[34px] left-[244px] top-[316px]"
               >Login</button>
            </form>
            <Link
               className="absolute w-[230px] h-[27px] font-inter font-normal text-[22px] leading-[27px] text-white 
                           left-[235px] top-[416px] hover:text-hoverPrimary"
               to={'/forgotpwd'}
            >FORGOT PASSWORD?</Link>
            <div
               className="absolute w-[122px] h-[19px] font-inter font-normal text-[16px] leading-[19px] text-white left-[289px] top-[494px]"

            >OR LOGIN WITH</div>
            <p className='absolute left-[283px] top-[528px]'><GithubAuthButton /></p>
            <p className='absolute left-[361px] top-[528px]'><GoogleAuthButton /></p>
            <p className="absolute font-family-Inter font-normal text-base leading-[19px] text-white left-[226px] top-[648px]">Don't have an account?</p>
            <Link
               className="absolute font-family-Inter font-normal text-base leading-[19px] text-[#6638E5] left-[410px] top-[648px] hover:text-hoverPrimary"
               to={'/register'}
            >SIGN UP</Link>
         </div>
      </>
   )
}

export default Login

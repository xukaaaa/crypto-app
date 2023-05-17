import React, { useState } from 'react'
import GoogleAuthButton from '../components/Button/GoogleAuthButton'
import GithubAuthButton from '../components/Button/GithubAuthButton'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

function Register() {
   const [userName, setUserName] = useState('');
   const [password, setPassword] = useState('');
   const [rePassword, setRePassword] = useState('');
   const [status, setStatus] = useState('');
   const validate = () => {
      let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
      if (!password.match(passw)) {
         alert('Password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter.');
         return false;
      }
      if (password !== rePassword) { 
         alert('Password not match.');
         return false;
      }
      return true
   }
   const register = (e) => {
      e.preventDefault();
      if (validate()) {
         createUserWithEmailAndPassword(auth,userName,password)
         .then((res)=>{
            console.log(res.user);
         })
         .catch(err => console.log(err))
      }
   }
   return (
      <>
         <div
            className="relative left-[667px] mt-[245px] w-[104px] h-[48px] font-inter font-normal text-[40px] leading-[48px] text-white"
         >Register</div>
         <div className=" relative left-[370px] top-[25px] mb-[168px] flex relative w-[700px] h-[851px] bg-[#1E1B3E] rounded-[20px]" >
            <div className="absolute left-[90px] top-[82px] font-inter font-normal text-[20px] leading-[24px] text-white">Username</div>
            <form onSubmit={register}>
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
               <div
                  className="absolute left-[90px] top-[304px] font-inter font-normal text-[20px] leading-[24px] text-white"
               >Confirm Password</div>
               <input
                  required={true}
                  type='Password' className="left-[76px] top-[346px] box-border absolute w-[547px] h-[42px] border-[2px] border-solid border-[#30215A] rounded-[10px]"
                  value={rePassword}
                  onChange={(even) => {
                     setRePassword(even.target.value);
                  }}
               ></input>
               <button
                  className="absolute w-[252px] h-[65px] bg-[#6638E5] rounded-[30px] font-itim font-normal text-[28px] leading-[34px] left-[225px] bottom-[324px]"
                  type='submit'

               >REGISTER</button>
            </form>
            <div
               className="absolute font-inter font-normal text-[22px] leading-[27px] text-white 
                           left-[235px] top-[416px] hover:text-hoverPrimary"
            >{status}</div>
            <div
               className="absolute font-inter font-normal text-[16px] leading-[19px] text-white left-[289px] bottom-[191px]"

            >OR SIGN IN WITH</div>
            <p className='absolute left-[283px] bottom-[126px]'><GithubAuthButton /></p>
            <p className='absolute left-[361px] bottom-[126px]'><GoogleAuthButton /></p>
            <p
               className="absolute font-family-Inter font-normal text-base leading-[19px] text-white left-[226px] bottom-[37px]"
            >Already have an account?</p>
            <Link
               className="absolute font-family-Inter font-normal text-base leading-[19px] text-[#6638E5] left-[410px] bottom-[37px] hover:text-hoverPrimary"
               to={'/Login'}
            >LOGIN</Link>
         </div>
      </>
   )
}

export default Register

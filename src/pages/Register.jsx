import React, { useState } from 'react'
import GoogleAuthButton from '../components/Button/GoogleAuthButton'
import GithubAuthButton from '../components/Button/GithubAuthButton'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { login, logout } from '../redux/authSlice'
import { toast } from 'react-toastify'

function Register() {
   const [userName, setUserName] = useState('');
   const [password, setPassword] = useState('');
   const [rePassword, setRePassword] = useState('');
   const [status, setStatus] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const validate = () => {
      let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
      // if (!password.match(passw)) {
      //    toast.error('Password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter.');
      //    return false;
      // }
      if (password !== rePassword) {
         toast.error('Password and comfirm password not match.');
         return false;
      }
      return true
   }
   const register = (e) => {
      // setIsLoading(true);
      e.preventDefault();
      if (validate()) {
         createUserWithEmailAndPassword(auth, userName, password)
            .then((res) => {
               console.log(res.user);
               const { email, photoURL, uid } = res.user
               const displayName = email;
               Cookies.set(
                  'user',
                  JSON.stringify({ displayName, email, photoURL, uid }),
                  { secure: true }
               )
               dispatch(login({ displayName, email, photoURL, uid }));
               toast.success('Register success!');
               setTimeout(() => {
                  navigate('/')
               }, 1000);
            })
            .catch(e => {
               console.log(e.code);
               switch (e.code) {
                  case "auth/weak-password":
                     toast.error("The password must be 6 characters long or more.");
                     break;
                  case "auth/invalid-email":
                     toast.error("Invalid email!");
                     break;
                  case "auth/email-already-in-use":
                     toast.error("The email address is already in use by another account.");
                     break;
                  case "auth/too-many-requests":
                     toast.error("Too many attemp! Try again later.");
                     break;
                  default:
                     toast.error('Register failed!');
               }
               // setIsLoading(false);
            })
      }
   }
   return (
      <>
         <div
            className="relative left-[667px] mt-[245px] w-[104px] h-[48px] font-inter font-normal text-[40px] leading-[48px] text-white"
         >Register</div>
         <div className=" relative left-[370px] top-[25px] mb-[168px] flex relative w-[700px] h-[851px] bg-[#1E1B3E] rounded-[20px]" >
            <div className="absolute left-[90px] top-[82px] font-inter font-normal text-[20px] leading-[24px] text-white">Email</div>
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
                  disabled={isLoading}

               >REGISTER</button>
            </form>

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

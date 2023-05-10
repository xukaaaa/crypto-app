import Tippy from '@tippyjs/react/headless'
import { motion, useSpring } from 'framer-motion'
import Cookies from 'js-cookie'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../../firebase'
import { logout } from '../../../redux/authSlice'

function UserPopover({ currentUser }) {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const springConfig = { damping: 20, stiffness: 150 }
   const opacity = useSpring(0, springConfig)
   const handleLogout = async () => {
      await auth.signOut()
      Cookies.remove('user')
      dispatch(logout())
      navigate('/')
   }

   const render = (attrs) => (
      <motion.div
         style={{ opacity }}
         className="w-[272px] rounded-lg bg-white p-3 pb-2 shadow-headerSearch"
      >
         <div className="flex h-[76px] items-center">
            <div className="flex items-center justify-center">
               <img
                  src={currentUser.photoURL}
                  alt="avatar"
                  className="h-16 w-16 rounded-full"
               />
            </div>
            <div className="ml-2">
               <p className="font-bold">Hi, {currentUser.displayName}</p>
               <p className="text-xs text-[#58667e]">{currentUser.email}</p>
            </div>
         </div>

         <div className="mt-2 border-t pb-1 pt-2">
            <Link
               to="/favorite"
               className="flex h-[40px] items-center rounded-lg p-2 hover:bg-[#ebeff2]"
            >
               Favorites
            </Link>
            <button
               onClick={handleLogout}
               className="flex h-[40px] w-full items-center rounded-lg p-2 hover:bg-[#ebeff2]"
            >
               Logout
            </button>
         </div>
      </motion.div>
   )

   return (
      // Interactive tippy element may not be accessible via keyboardnavigation.Ensure the tippy element is directly after the reference(or triggerTarget) element in the DOM source order. Using a wrapper<div> or <span> element around it can solve this.
      <div>
         <Tippy
            interactive
            placement="bottom-end"
            onMount={() => opacity.set(1)}
            onHide={() => opacity.set(0)}
            delay={[0, 1000]}
            render={render}
         >
            <img
               src={currentUser.photoURL}
               alt="avatar"
               className="h-7 w-7 cursor-pointer rounded-full ml-2"
            />
         </Tippy>
      </div>
   )
}

export default UserPopover

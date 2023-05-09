import Tippy from '@tippyjs/react/headless'
import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../../firebase'
import { useDispatch } from 'react-redux'
import { logout } from '../../../redux/authSlice'
import Cookies from 'js-cookie'

function UserPopover({ currentUser }) {
   const dispatch = useDispatch()
   const handleLogout = async () => {
      await auth.signOut()
      Cookies.remove('user')
      dispatch(logout())
   }

   const render = (attrs) => (
      <div className="w-[272px] rounded-lg bg-white p-3 pb-2 shadow-headerSearch">
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
      </div>
   )

   return (
      // Interactive tippy element may not be accessible via keyboardnavigation.Ensure the tippy element is directly after the reference(or triggerTarget) element in the DOM source order. Using a wrapper<div> or <span> element around it can solve this.
      <div>
         <Tippy
            interactive
            placement="bottom-end"
            delay={[0, 700]}
            render={render}
         >
            <img
               src={currentUser.photoURL}
               alt="avatar"
               className="h-7 w-7 cursor-pointer rounded-full"
            />
         </Tippy>
      </div>
   )
}

export default UserPopover

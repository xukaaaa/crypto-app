import { Popover, Transition } from '@headlessui/react'
import Cookies from 'js-cookie'
import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../../firebase'
import { logout } from '../../../redux/authSlice'
import { toast } from 'react-toastify'

function UserPopover({ currentUser }) {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const handleLogout = async () => {
      await auth.signOut()
      Cookies.remove('user')
      dispatch(logout())
      toast.info('Logout!')
      navigate('/')
   }

   return (
      <Popover className={'relative'}>
         <Popover.Button title="Account">
            <img
               src={currentUser.photoURL}
               alt="avatar"
               className="h-[60px] w-[60px] cursor-pointer rounded-full ml-2"
            />
         </Popover.Button>

         <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
         >
            <Popover.Panel className={'absolute top-[70px] right-0 z-50'}>
               <div className="w-[272px] rounded-lg bg-popover p-3 pb-2 shadow-popover">
                  <div className="flex h-[76px] items-center">
                     <div className="ml-2">
                        <p className="font-bold">
                           Hi, {currentUser.displayName}
                        </p>
                        <p className="text-xs text-[#58667e] mt-2">
                           {currentUser.email}
                        </p>
                     </div>
                  </div>

                  <div className="mt-2 border-t border-opacity-50 border-[#ffffff] pb-1 pt-2">
                     <Link
                        to="/favorite"
                        className="flex h-[40px] items-center rounded-lg p-2 hover:bg-hoverPrimary"
                     >
                        Favorites
                     </Link>
                     <button
                        onClick={handleLogout}
                        className="flex h-[40px] w-full items-center rounded-lg p-2 hover:bg-hoverPrimary"
                     >
                        Logout
                     </button>
                  </div>
               </div>
            </Popover.Panel>
         </Transition>
      </Popover>
   )
}

export default UserPopover

import React from 'react'
import { Link } from 'react-router-dom'
import SearchPopover from './Search/SearchPopover'
import UserPopover from './User/UserPopover'
import { useSelector } from 'react-redux'
import { logo } from '../../assets/img/Header'

function Header() {
   const currentUser = useSelector((state) => state.auth.currentUser)

   return (
      <div className="shadow-md w-pc mx-auto">
         <div className="mx-auto flex h-[140px] items-center justify-between p-[35px]">
            <Link
               to="/"
               className="flex items-center  border-r border-solid border-[#FFFFFF] border-opacity-50"
            >
               <img src={logo} alt="logo" className="h-[70px]" />
               <p className="ml-8 text-[40px] mr-14">Crypto</p>
            </Link>

            <div className="flex-1 flex uppercase gap-[55px] ml-[55px] h-full items-center text-2xl">
               <Link className="hover:text-hoverPrimary" to={'/'}>
                  Home
               </Link>
               <Link className="hover:text-hoverPrimary" to={'/favorite'}>
                  Favorite
               </Link>
               <Link className="hover:text-hoverPrimary">Support</Link>
            </div>

            {currentUser ? (
               <UserPopover currentUser={currentUser} />
            ) : (
               <div className="flex gap-[18px] uppercase items-center ">
                  <Link
                     to={'/login'}
                     className="hover:text-hoverPrimary text-[32px]"
                  >
                     Login
                  </Link>
                  <Link
                     to={'/register'}
                     className="hover:bg-opacity-70 w-[183px] h-[58px] bg-buttonPrimary rounded-[60px] flex items-center justify-center text-[28px]"
                  >
                     Register
                  </Link>
               </div>
            )}
         </div>
      </div>
   )
}

export default Header

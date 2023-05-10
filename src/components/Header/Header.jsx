import React from 'react'
import { Link } from 'react-router-dom'
import { favoriteImg, logo } from '../../assets/img/Header'
import SearchPopover from './Search/SearchPopover'
import UserPopover from './User/UserPopover'
import { useSelector } from 'react-redux'

function Header() {
   const currentUser = useSelector((state) => state.auth.currentUser)

   return (
      <div className="shadow-md">
         <div className="mx-auto flex h-[73px] w-[1300px] items-center justify-between px-4 py-2">
            <Link to="/" className="">
               <img src={logo} alt="logo" className="h-[39px]" />
            </Link>

            <div className="flex h-9 items-center text-xs">
               <Link
                  to={'/favorite'}
                  className="flex h-full w-24 items-center justify-between rounded px-3 font-light hover:bg-[#f8fafd]"
               >
                  <img src={favoriteImg} alt="favorite" className="w-5 h-5" />
                  Favorite
               </Link>

               {currentUser ? (
                  <UserPopover currentUser={currentUser} />
               ) : (
                  <>
                     <Link
                        to={'/login'}
                        className="flex items-center justify-center mx-[6px] h-8 rounded border border-solid border-primary px-4 text-primary"
                     >
                        Login
                     </Link>
                     <Link
                        to={'/register'}
                        className="flex items-center justify-center h-8 rounded bg-primary px-4 text-white "
                     >
                        Sign up
                     </Link>
                  </>
               )}

               <SearchPopover />
            </div>
         </div>
      </div>
   )
}

export default Header

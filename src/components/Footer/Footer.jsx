import React from 'react'
import { logo } from '../../assets/img/Header'

function Footer() {
   return (
      <div className=" shadow-footer bg-footer">
         <div className="w-pc mx-auto p-[35px]  h-[396px]">
            <div className="flex items-center uppercase text-[40px]">
               <img
                  src={logo}
                  alt="logo"
                  className="mr-8 w-[70px] h-[70px] i"
               />
               Crypto
            </div>

            <div className="flex gap-[156px] mt-[45px]">
               <div className="w-1/3">
                  <p className="pb-4 border-b border-opacity-50 border-[#ffffff] uppercase">
                     More about us
                  </p>
                  <p className="mt-4 text-xl">
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s...
                  </p>
               </div>

               <div className="w-1/3">
                  <p className="pb-4 border-b border-opacity-50 border-[#ffffff] uppercase">
                     keep connected
                  </p>
                  <div className="flex flex-col gap-y-4 mt-4 uppercase text-xl">
                     <p>facebook</p>
                     <p>linked</p>
                     <p>telegram</p>
                     <p>gmail</p>
                  </div>
               </div>

               <div className="w-1/3">
                  <p className="pb-4 border-b border-opacity-50 border-[#ffffff] uppercase">
                     contact information
                  </p>
                  <div className="mt-4">
                     <p>Trieu Khuc St, Hanoi city...</p>
                     <p className="mt-3">0999.999.999</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Footer

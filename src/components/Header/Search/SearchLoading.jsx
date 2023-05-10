import React from 'react'

function SearchLoading() {
   return (
      <>
         <p className="mb-2 flex items-stretch pl-2 text-xs text-[#808a9d]">
            Cryptoassets
         </p>
         {Array(3)
            .fill('')
            .map((item, index) => (
               <div
                  key={index}
                  className="flex h-10 w-full animate-pulse items-center justify-between rounded-lg p-[10px]"
               >
                  <div className="flex items-center">
                     <div className="mr-2 h-5 w-5 rounded-full bg-slate-200" />
                     <span className="mr-[6px] h-4 w-52 rounded-xl bg-slate-200"></span>
                  </div>
                  <span className="h-4 w-8 rounded-xl bg-slate-200"></span>
               </div>
            ))}
      </>
   )
}

export default SearchLoading

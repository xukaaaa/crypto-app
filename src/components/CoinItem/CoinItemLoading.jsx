import React from 'react'

function CoinItemLoading() {
   return (
      <div>
         {Array(100)
            .fill()
            .map((_, index) => (
               <div key={index} className="animate-pulse px-6">
                  <div className="w-full flex items-center mx-auto h-[84px]">
                     <div className="w-1/12 flex justify-center">
                        <div className="w-8 rounded-2xl  h-6 bg-slate-100"></div>
                     </div>

                     <div className="w-3/12 flex">
                        <div className="w-36 h-6 mr-4 bg-slate-100 rounded-xl"></div>
                     </div>

                     <div className="w-1/12 flex justify-end">
                        <div className="w-20 h-6 bg-slate-100 rounded-xl"></div>
                     </div>

                     <div className="w-3/12 flex justify-around">
                        <p className="w-12 h-6 bg-slate-100 rounded-xl"></p>
                        <p className="w-12 h-6 bg-slate-100 rounded-xl"></p>
                        <p className="w-12 h-6 bg-slate-100 rounded-xl"></p>
                     </div>

                     <div className="w-2/12 flex justify-end">
                        <div className="w-24 h-6 bg-slate-100 rounded-xl"></div>
                     </div>
                     <div className="w-2/12 flex justify-end">
                        <div className="w-24 h-6 bg-slate-100 rounded-xl"></div>
                     </div>
                  </div>
               </div>
            ))}
      </div>
   )
}

export default CoinItemLoading

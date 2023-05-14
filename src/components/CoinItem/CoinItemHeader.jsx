import React, { forwardRef } from 'react'

function CoinItemHeader(props, ref) {
   return (
      <div ref={ref} className="px-6 bg-primary">
         <div className="w-full flex items-center py-4  border-b border-solid border-[#ffffff80]">
            <span className="w-1/12 flex justify-center">#</span>
            <div className="w-3/12">Coin</div>
            <div className="w-1/12 text-right">Price</div>
            <div className="w-3/12 flex">
               <p className={`w-1/3 flex justify-center`}>1h</p>
               <p className={`w-1/3 flex justify-center`}>24h</p>
               <p className={`w-1/3 flex justify-center `}>7d</p>
            </div>

            <div className="w-2/12 text-right">24h Volume</div>
            <div className="w-2/12 text-right">Market Cap</div>
         </div>
      </div>
   )
}

export default forwardRef(CoinItemHeader)

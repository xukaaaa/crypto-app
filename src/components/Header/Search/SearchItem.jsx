import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { defaultCoinIcon } from '../../../assets/img/CoinItem'

function SearchItem({
   coinImg,
   coinName,
   coinSymbol,
   coinRank,
   onClick,
   coinId,
}) {
   const coinIconRef = useRef()
   return (
      <Link
         onClick={onClick}
         to={`/coin/${coinId}`}
         className="flex h-10 w-full items-center justify-between rounded-lg p-[10px] hover:bg-hoverPrimary"
         title={coinName}
      >
         <div className="flex items-center">
            <img
               src={coinImg}
               alt="coin-img"
               onError={() =>
                  coinIconRef.current.setAttribute('src', defaultCoinIcon)
               }
               ref={coinIconRef}
               className="mr-2 h-5 w-5"
            />
            <p className="mr-[6px] text-sm font-semibold truncate flex items-center max-w-[250px] ">
               {coinName}
            </p>
            <span className="text-xs text-[#58667e]">{coinSymbol}</span>
         </div>

         <span className="text-xs font-medium text-[#808a9d]">#{coinRank}</span>
      </Link>
   )
}

export default SearchItem

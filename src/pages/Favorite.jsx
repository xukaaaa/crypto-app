import React from 'react'
import { useSelector } from 'react-redux'
import CoinItemFavorite from '../components/CoinItem/CoinItemFavorite'
import CoinIteamHeader from '../components/CoinItem/CoinItemHeader'

function Favorite() {
   const favoriteList = useSelector((state) => state.favorite.favoriteList)

   return (
      <div className="min-h-[calc(100vh-140px-396px)]">
         <p className="pl-12 py-[54px] text-[32px]">Favorite Coin</p>

         <div>
            <CoinIteamHeader />
            <div className="mb-32">
               {favoriteList.map((coin) => (
                  <CoinItemFavorite key={coin} coinId={coin} />
               ))}
            </div>
         </div>
      </div>
   )
}

export default Favorite
import { useQuery } from '@tanstack/react-query'
import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import coinApi from '../../api/coinApi'
import { defaultCoinIcon } from '../../assets/img/CoinItem'
import FavoriteButton from '../Button/FavoriteButton'
import RemoveFavoriteButton from '../Button/RemoveFavoriteButton'

function CoinItemFavorite({ coinId }) {
   const isFavorited = useSelector((state) =>
      state.favorite.favoriteList?.some((item) => item === coinId)
   )

   const { data } = useQuery(
      ['coinDetail', coinId],
      () => coinApi.getCoinDetail(coinId),
      {
         refetchOnWindowFocus: false,
      }
   )
   const coinDetail = data?.data?.coin
   const coinIconRef = useRef()

   const formatPrice = (price) => {
      return price?.toLocaleString('en-US', {
         maximumFractionDigits: price < 1 ? 6 : 2,
      })
   }

   const formatCurrency = (currency) => {
      return Math.floor(currency).toLocaleString()
   }

   return (
      <div
         className="px-6 bg-primary hover:bg-hoverPrimary rounded-lg"
         title={coinDetail?.name}
      >
         <Link
            to={`/coin/${coinDetail?.id}`}
            className="w-full flex items-center mx-auto h-[84px] border-b border-solid border-[#ffffff4d] "
         >
            <div className="w-1/12 text-[22px] flex items-center pr-4 h-full">
               {isFavorited ? (
                  <RemoveFavoriteButton coinId={coinDetail?.id} />
               ) : (
                  <FavoriteButton coinId={coinDetail?.id} />
               )}

               <span className="flex-1 flex justify-center">
                  {coinDetail?.rank}
               </span>
            </div>

            <div className="w-3/12 flex items-center">
               <div className="w-6 h-6 mr-4 flex-shrink-0">
                  <img
                     onError={() =>
                        coinIconRef.current.setAttribute('src', defaultCoinIcon)
                     }
                     ref={coinIconRef}
                     src={coinDetail?.icon}
                     alt="coin-icon"
                     className="w-full h-full rounded-full"
                  />
               </div>
               <div className="text-[22px] h-[84px] flex items-center">
                  <div>
                     {coinDetail?.name}
                     <span className="text-[16px] ml-4 opacity-70">
                        {coinDetail?.symbol}
                     </span>
                  </div>
               </div>
            </div>

            <div className="w-1/12 text-right">
               {'$' + formatPrice(coinDetail?.price)}
            </div>

            <div className="w-3/12 flex">
               <p
                  className={`w-1/3 flex justify-center ${
                     coinDetail?.priceChange1h < 0
                        ? 'text-[#ff0000]'
                        : 'text-[#00ff29]'
                  }`}
               >
                  {(coinDetail?.priceChange1h || 0) + '%'}
               </p>
               <p
                  className={`w-1/3 flex justify-center ${
                     coinDetail?.priceChange24h < 0
                        ? 'text-[#ff0000]'
                        : 'text-[#00ff29]'
                  }`}
               >
                  {(coinDetail?.priceChange24h || 0) + '%'}
               </p>
               <p
                  className={`w-1/3 flex justify-center ${
                     coinDetail?.priceChange7d < 0
                        ? 'text-[#ff0000]'
                        : 'text-[#00ff29]'
                  }`}
               >
                  {(coinDetail?.priceChange7d || 0) + '%'}
               </p>
            </div>

            <div className="w-2/12 text-right">
               {'$' + formatCurrency(coinDetail?.volume)}
            </div>

            <div className="w-2/12 text-right">
               {'$' + formatCurrency(coinDetail?.marketCap)}
            </div>
         </Link>
      </div>
   )
}

export default CoinItemFavorite
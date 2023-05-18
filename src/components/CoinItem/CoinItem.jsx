import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { defaultCoinIcon } from '../../assets/img/CoinItem'
import FavoriteButton from '../Button/FavoriteButton'
import RemoveFavoriteButton from '../Button/RemoveFavoriteButton'

function CoinItem({
   id,
   rank,
   icon,
   name,
   symbol,
   price,
   priceChange1h,
   priceChange24h,
   priceChange7d,
   volume,
   marketcap,
}) {
   const isFavorited = useSelector((state) =>
      state.favorite.favoriteList?.some((item) => item === id)
   )
   const dispatch = useDispatch()

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
         title={name}
      >
         <Link
            to={`/coin/${id}`}
            className="w-full flex items-center mx-auto h-[84px] border-b border-solid border-[#ffffff4d] "
         >
            <div className="w-1/12 text-[22px] flex items-center pr-4 h-full">
               {isFavorited ? (
                  <RemoveFavoriteButton coinId={id} />
               ) : (
                  <FavoriteButton coinId={id} />
               )}
               {/* <img
                  src={favoriteImg}
                  alt=""
                  onClick={(e) => {
                     e.preventDefault()
                     console.log('click favorite')
                     toast.success('Add to favorite success')
                  }}
               /> */}
               <span className="flex-1 flex justify-center">{rank}</span>
            </div>

            <div className="w-3/12 flex items-center">
               <div className="w-6 h-6 mr-4 flex-shrink-0">
                  <img
                     onError={() =>
                        coinIconRef.current.setAttribute('src', defaultCoinIcon)
                     }
                     ref={coinIconRef}
                     src={icon}
                     alt="coin-icon"
                     className="w-full h-full rounded-full"
                  />
               </div>
               <div className="text-[22px] h-[84px] flex items-center">
                  <div>
                     {name}
                     <span className="text-[16px] ml-4 opacity-70">
                        {symbol}
                     </span>
                  </div>
               </div>
            </div>

            <div className="w-1/12 text-right">{'$' + formatPrice(price)}</div>

            <div className="w-3/12 flex">
               <p
                  className={`w-1/3 flex justify-center ${
                     priceChange1h < 0 ? 'text-[#ff0000]' : 'text-[#00ff29]'
                  }`}
               >
                  {(priceChange1h || 0) + '%'}
               </p>
               <p
                  className={`w-1/3 flex justify-center ${
                     priceChange24h < 0 ? 'text-[#ff0000]' : 'text-[#00ff29]'
                  }`}
               >
                  {(priceChange24h || 0) + '%'}
               </p>
               <p
                  className={`w-1/3 flex justify-center ${
                     priceChange7d < 0 ? 'text-[#ff0000]' : 'text-[#00ff29]'
                  }`}
               >
                  {(priceChange7d || 0) + '%'}
               </p>
            </div>

            <div className="w-2/12 text-right">
               {'$' + formatCurrency(volume)}
            </div>

            <div className="w-2/12 text-right">
               {'$' + formatCurrency(marketcap)}
            </div>
         </Link>
      </div>
   )
}

export default CoinItem

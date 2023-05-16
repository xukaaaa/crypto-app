import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { favoriteImg } from '../../assets/img/Header'
import { toast } from 'react-toastify'
import { shallowEqual, useSelector } from 'react-redux'

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
      state.favorite.favoriteList.some((item) => item === id)
   )

   console.log(isFavorited)
   const [tempIcon, setTempIcon] = useState(icon)
   const imgRef = useRef()
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
            <div className="w-1/12 text-[22px] flex items-center pr-4">
               {isFavorited ? <p>like</p> : <p>dislike</p>}
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
                     onError={(e) =>
                        setTempIcon(
                           'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80'
                        )
                     }
                     ref={imgRef}
                     src={tempIcon}
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

import { useQueries } from '@tanstack/react-query'
import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import coinApi from '../api/coinApi'
import CoinItem from '../components/CoinItem/CoinItem'
import CoinItemHeader from '../components/CoinItem/CoinItemHeader'
import CoinItemLoading from '../components/CoinItem/CoinItemLoading'
import SearchPopover from '../components/Header/Search/SearchPopover'

function Homepage() {
   const PERPAGE = 100
   const [page, setPage] = useState(1)
   const headerRef = React.useRef()
   const [
      {
         data: marketData,
         isFetching: marketFetching,
         isLoading: marketLoading,
      },
      { data: coinCountData },
      { data: globalData },
   ] = useQueries({
      queries: [
         {
            queryKey: ['market', page],
            queryFn: () => coinApi.getMarket(page),
            config: {
               keepPreviousData: false,
               cacheTime: 0,
               refetchInterval: 1 * 60 * 1000,
            },
         },
         {
            queryKey: ['coinCount'],
            queryFn: coinApi.getCoinCount,
         },
         {
            queryKey: ['global'],
            queryFn: coinApi.getGlobal,
            config: {
               cacheTime: 0,
            },
         },
      ],
   })

   return (
      <div className="bg-primary text-primary">
         <div className="h-[180px] flex px-6 justify-between items-center">
            <div>
               <p className="text-[32px] mb-3">
                  Cryptocurrency Prices by Market Cap
               </p>
               {globalData && (
                  <p className="text-[22px]">
                     The global crypto market cap is $
                     {globalData?.data.globalData.marketCap.toLocaleString(
                        'en-US'
                     )}
                     , a{' '}
                     <span
                        className={`${
                           globalData.data.globalData.marketCapChange < 0
                              ? 'text-red-400'
                              : 'text-green-400'
                        }`}
                     >
                        {`${globalData?.data.globalData.marketCapChange}% `}
                     </span>
                     {globalData?.data.globalData.marketCapChange < 0
                        ? 'decrease'
                        : 'increase'}{' '}
                     over the last day.
                  </p>
               )}
            </div>
            <SearchPopover />
         </div>

         <CoinItemHeader ref={headerRef} />
         {marketData?.data?.coins?.map((coin) => (
            <CoinItem
               key={coin.id}
               id={coin.id}
               rank={coin.rank}
               icon={coin.icon}
               name={coin.name}
               symbol={coin.symbol}
               price={coin.price}
               priceChange1h={coin.priceChange1h}
               priceChange24h={coin.priceChange1d}
               priceChange7d={coin.priceChange1w}
               volume={coin.volume}
               marketcap={coin.marketCap}
            />
         ))}

         {marketLoading && marketFetching && <CoinItemLoading />}

         <ReactPaginate
            pageCount={Math.ceil(coinCountData?.data?.count / PERPAGE)}
            previousClassName=" h-10 flex items-center justify-center mr-4"
            nextClassName=" h-10 flex items-center justify-center ml-4"
            forcePage={Number(page - 1)}
            onPageChange={(e) => {
               setPage(e.selected + 1)
               headerRef.current.scrollIntoView({
                  behavior: 'smooth',
                  block: 'end',
               })
            }}
            className="flex justify-end mr-6 my-10"
            pageClassName="mx-1"
            pageLinkClassName="w-10 h-10 flex items-center justify-center rounded-full hover:bg-hoverPrimary "
            activeClassName="w-10 h-10 flex items-center justify-center bg-hoverPrimary rounded-full"
            breakClassName="w-10 h-10 flex items-center justify-center"
            breakLabel="..."
         />
      </div>
   )
}

export default Homepage

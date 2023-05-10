import { useQueries } from '@tanstack/react-query'
import Tippy from '@tippyjs/react/headless'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import 'tippy.js/dist/tippy.css'
import coinApi from '../../../api/coinApi'
import { searchIcon, trendingIcon } from '../../../assets/img/Header'
import Search from './Search'
import SearchItem from './SearchItem'
import SearchLoading from './SearchLoading'

function SearchPopover() {
   const [coin, setCoin] = useState('')
   const [isPopoverShow, setIsPopoverShow] = useState(false)
   const inputRef = useRef()

   const [
      { data: trendingList, isLoading: trendingLoading, error: trendingError },
      {
         data: searchResult,
         isLoading: searchLoading,
         isFetching: searchFetching,
         error: searchError,
      },
   ] = useQueries({
      queries: [
         {
            queryKey: ['trending'],
            queryFn: async () => await coinApi.getTrendingCoins(),
            enabled: isPopoverShow,
            refetchOnWindowFocus: false,
         },
         {
            queryKey: ['search', coin.trim()],
            queryFn: async () => await coinApi.searchCoin(coin),
            enabled: !!coin,
            refetchOnWindowFocus: false,
         },
      ],
   })

   const render = (attrs) => (
      <div
         className="w-[400px] rounded-lg bg-white shadow-headerSearch"
         tabIndex="-1"
         {...attrs}
      >
         <div className="flex h-[50px] p-4">
            <img src={searchIcon} alt="search-icon" className="mr-1" />
            <input
               ref={inputRef}
               value={coin}
               className="flex-1"
               type="text"
               placeholder="Search coin, contract address"
               onChange={(e) => setCoin(e.target.value)}
            />
         </div>

         <div className="py-2">
            {searchLoading && searchFetching && (
               <div className="px-2">
                  <SearchLoading />
               </div>
            )}

            {searchResult && (
               <div className="px-2">
                  <p className="mb-2 flex items-stretch pl-2 text-xs text-[#808a9d]">
                     Cryptoassets
                  </p>
                  {searchResult?.data[0].data.length === 0 && (
                     <p className="mb-2 px-2 text-xl">No results found</p>
                  )}
                  {searchResult?.data[0].data.map((coin) => (
                     <SearchItem
                        key={coin.id}
                        coinImg={coin.icon}
                        coinName={coin.name}
                        coinSymbol={coin.symbol}
                        coinRank={coin.rank}
                        coinId={coin.id}
                        onClick={() => setIsPopoverShow(false)}
                     />
                  ))}
               </div>
            )}

            <div className="px-2">
               <p className="mb-2 flex items-stretch pl-2 text-xs text-[#808a9d]">
                  Trending
                  <img
                     src={trendingIcon}
                     alt="trending-icon"
                     className="ml-1"
                  />
               </p>
               {trendingList?.data?.map((coin) => (
                  <SearchItem
                     key={coin.i}
                     coinImg={coin.ic}
                     coinName={coin.n}
                     coinSymbol={coin.s}
                     coinRank={coin.r}
                     coinId={coin.i}
                     onClick={() => setIsPopoverShow(false)}
                  />
               ))}
            </div>

            {searchResult?.data[0].data.length > 0 && (
               <div className="px-2" onClick={() => setIsPopoverShow(false)}>
                  <Link
                     to={`/search/${coin}`}
                     className="flex h-10 items-center rounded-lg pl-2 text-sm text-[#808a9d] hover:bg-[#f8fafd]"
                  >
                     See all results for '{coin}'
                  </Link>
               </div>
            )}
         </div>
      </div>
   )

   useEffect(() => {
      if (inputRef.current) {
         inputRef.current.focus()
      }
   }, [isPopoverShow])

   return (
      <Tippy
         visible={isPopoverShow}
         interactive={true}
         placement="bottom-end"
         onClickOutside={() => setIsPopoverShow(false)}
         onHidden={() => setCoin('')}
         offset={[0, -40]}
         render={render}
      >
         <Search onClick={() => setIsPopoverShow(true)} />
      </Tippy>
   )
}

export default SearchPopover

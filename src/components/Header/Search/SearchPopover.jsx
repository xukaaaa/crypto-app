import React, { memo, useEffect, useRef, useState } from 'react'
import Tippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'
import Search from './Search'
import { searchIcon, trendingIcon } from '../../../assets/img/Header'
import coinApi from '../../../api/coinApi'
import { useQueries, useQuery } from '@tanstack/react-query'
import SearchItem from './SearchItem'
import SearchLoading from './SearchLoading'
import { Link } from 'react-router-dom'

function SearchPopover() {
    const [coin, setCoin] = useState('')
    const [isPopoverShow, setIsPopoverShow] = useState(false)
    const inputRef = useRef()

    const [
        { data: trendingList, isLoading: trendingLoading, error: trendingError },
        { data: searchResult, isLoading: searchLoading, isFetching: searchFetching, error: searchError },
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

    console.log(searchLoading)

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
            render={(attrs) => (
                <div className="bg-white w-[400px] shadow-headerSearch rounded-lg" tabIndex="-1" {...attrs}>
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
                                <p className="pl-2 flex mb-2 text-[#808a9d] text-xs items-stretch">Cryptoassets</p>
                                {searchResult?.data[0].data.length === 0 && (
                                    <p className="px-2 mb-2 text-xl">No results found</p>
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
                            <p className="pl-2 flex mb-2 text-[#808a9d] text-xs items-stretch">
                                Trending
                                <img src={trendingIcon} alt="trending-icon" className="ml-1" />
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
                                    className="pl-2 flex h-10 text-[#808a9d] text-sm items-center rounded-lg hover:bg-[#f8fafd]"
                                >
                                    See all results for '{coin}'
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        >
            <Search onClick={() => setIsPopoverShow(true)} />
        </Tippy>
    )
}

export default SearchPopover

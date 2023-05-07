import React from 'react'
import Tippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'
import Search from './Search'
import { searchIcon } from '../../assets/img/Header'
import coinApi from '../../api/coinApi'
import { useQuery } from '@tanstack/react-query'

function SearchPopover() {
    const { data, isLoading, error, isFetching } = useQuery({
        queryKey: ['trendingCoins'],
        queryFn: coinApi.getTrendingCoins,
        cacheTime: 1000 * 60 * 5,
    })

    console.log({ data, isLoading, error, isFetching })

    return (
        <Tippy
            trigger="click"
            interactive={true}
            render={(attrs) => (
                <div className="bg-white w-[400px] shadow-lg" tabIndex="-1" {...attrs}>
                    <div className="flex">
                        <img src={searchIcon} alt="" />
                        <input className="flex-1" type="text" placeholder="Search coin, contract address" />
                    </div>

                    <div>
                        <p>Trending </p>
                    </div>
                </div>
            )}
        >
            <Search />
        </Tippy>
    )
}

export default SearchPopover

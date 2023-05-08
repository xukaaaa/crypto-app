import React from 'react'
import { Link } from 'react-router-dom'

function SearchItem({ coinImg, coinName, coinSymbol, coinRank, onClick, coinId }) {
    return (
        <Link
            onClick={onClick}
            to={`/coin/${coinId}`}
            className="flex h-10 w-full items-center justify-between rounded-lg p-[10px] hover:bg-[#f8fafd]"
        >
            <div className="flex items-center">
                <img src={coinImg} alt="coin-img" className="mr-2 h-5 w-5" />
                <span className="mr-[6px] text-sm font-semibold">{coinName}</span>
                <span className="text-xs text-[#58667e]">{coinSymbol}</span>
            </div>
            <span className="text-xs font-medium text-[#808a9d]">#{coinRank}</span>
        </Link>
    )
}

export default SearchItem

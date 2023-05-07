import React from 'react'
import { Link } from 'react-router-dom'

function SearchItem({ coinImg, coinName, coinSymbol, coinRank, onClick, coinId }) {
    return (
        <Link
            onClick={onClick}
            to={`/coin/${coinId}`}
            className="flex items-center justify-between w-full h-10 p-[10px] rounded-lg hover:bg-[#f8fafd]"
        >
            <div className="flex items-center">
                <img src={coinImg} alt="coin-img" className="h-5 w-5 mr-2" />
                <span className="font-semibold text-sm mr-[6px]">{coinName}</span>
                <span className="text-xs text-[#58667e]">{coinSymbol}</span>
            </div>
            <span className="text-[#808a9d] text-xs font-medium">#{coinRank}</span>
        </Link>
    )
}

export default SearchItem

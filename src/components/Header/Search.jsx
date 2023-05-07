import React, { forwardRef } from 'react'
import { searchIcon } from '../../assets/img/Header'

function Search(props, ref) {
    return (
        <div
            ref={ref}
            className="ml-2 w-[260px] rounded-lg bg-[#eff2f5] text-[#a6b0c3] p-2 h-[39px] flex items-center justify-start cursor-pointer"
        >
            <img src={searchIcon} alt="search-icon" />
            <span className="ml-2">Search</span>
        </div>
    )
}

export default forwardRef(Search)

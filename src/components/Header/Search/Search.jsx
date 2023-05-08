import React, { forwardRef } from 'react'
import { searchIcon } from '../../../assets/img/Header'

function Search(props, ref) {
    return (
        <div
            onClick={props.onClick}
            ref={ref}
            className="ml-2 flex h-[39px] w-[260px] cursor-pointer items-center justify-start rounded-lg bg-[#eff2f5] p-2 text-[#a6b0c3]"
        >
            <img src={searchIcon} alt="search-icon" />
            <span className="ml-2">Search</span>
        </div>
    )
}

export default forwardRef(Search)

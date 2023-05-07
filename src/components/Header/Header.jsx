import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { favoriteImg, logo, searchIcon } from '../../assets/img/Header'
import SearchPopover from './SearchPopover'

function Header() {
    return (
        <div className="">
            <div className="w-[1300px] py-2 px-4 h-[73px] mx-auto flex items-center justify-between">
                <Link to="/" className="">
                    <img src={logo} alt="logo" className="h-[39px]" />
                </Link>

                <div className="flex h-9 items-center text-xs">
                    <Link
                        to={'/favorite'}
                        className="flex w-24 px-3 items-center justify-between rounded hover:bg-[#f8fafd] h-full font-light "
                    >
                        <img src={favoriteImg} alt="favorite" />
                        Favorite
                    </Link>
                    <button className="mx-[6px] px-4 border rounded h-8 border-primary text-primary border-solid">
                        Login
                    </button>
                    <button className="h-8 px-4 rounded bg-primary text-white ">Sign up</button>

                    <SearchPopover />
                </div>
            </div>
        </div>
    )
}

export default Header

import Tippy from '@tippyjs/react/headless'
import React from 'react'
import { Link } from 'react-router-dom'

function UserPopover() {
    const render = (attrs) => (
        <div className="w-[272px] rounded-lg bg-white p-3 pb-2 shadow-headerSearch">
            <div className="flex h-[76px] items-center">
                <div className="flex items-center justify-center">
                    <img
                        src="https://s3.coinmarketcap.com/static/img/portraits/61359449293ccc2c4bcf07c7.png"
                        alt=""
                        className="h-16 w-16 rounded-full"
                    />
                </div>
                <div className="ml-2">
                    <p className="font-bold">Hi, Thuy Anh</p>
                    <p className="text-xs text-[#58667e]">emthuyxinh10@gmail.com</p>
                </div>
            </div>

            <div className="mt-2 border-t pb-1 pt-2">
                <Link to="/favorite" className="flex h-[40px] items-center rounded-lg p-2 hover:bg-[#ebeff2]">
                    Favorites
                </Link>
                <button className="flex h-[40px] w-full items-center rounded-lg p-2 hover:bg-[#ebeff2]">Logout</button>
            </div>
        </div>
    )

    return (
        <Tippy interactive placement="bottom-end" delay={[0, 700]} render={render}>
            <img
                src="https://s3.coinmarketcap.com/static/img/portraits/61359449293ccc2c4bcf07c7.png"
                alt="avatar"
                className="h-7 w-7 cursor-pointer"
            />
        </Tippy>
    )
}

export default UserPopover

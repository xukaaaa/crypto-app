import Tippy from '@tippyjs/react/headless'
import React from 'react'
import { Link } from 'react-router-dom'

function UserPopover() {
    return (
        <Tippy
            interactive
            placement="bottom-end"
            delay={[0, 700]}
            render={(attrs) => (
                <div className="bg-white shadow-headerSearch rounded-lg p-3 pb-2 w-[272px]">
                    <div className="flex items-center h-[76px]">
                        <div className="flex items-center justify-center">
                            <img
                                src="https://s3.coinmarketcap.com/static/img/portraits/61359449293ccc2c4bcf07c7.png"
                                alt=""
                                className="w-16 h-16 rounded-full"
                            />
                        </div>
                        <div className="ml-2">
                            <p className="font-bold">Hi, Thuy Anh</p>
                            <p className="text-xs text-[#58667e]">emthuyxinh10@gmail.com</p>
                        </div>
                    </div>

                    <div className="pt-2 pb-1 border-t mt-2">
                        <Link to="/favorite" className="flex items-center h-[40px] p-2 hover:bg-[#ebeff2] rounded-lg">
                            Favorites
                        </Link>
                        <button className="flex items-center h-[40px] p-2 hover:bg-[#ebeff2] rounded-lg w-full">
                            Logout
                        </button>
                    </div>
                </div>
            )}
        >
            <img
                src="https://s3.coinmarketcap.com/static/img/portraits/61359449293ccc2c4bcf07c7.png"
                alt="avatar"
                className="w-7 h-7 cursor-pointer"
            />
        </Tippy>
    )
}

export default UserPopover

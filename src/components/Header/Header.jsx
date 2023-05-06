import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <ul className="flex">
            <li>
                <NavLink to={'/'}>Homepage</NavLink>
            </li>
            <li>
                <NavLink to={'/coin/3'}>CoinDetails</NavLink>
            </li>
            <li>
                <NavLink to={'/favorite'}>Favorite</NavLink>
            </li>
            <li>
                <NavLink to={'/search/1'}>Search</NavLink>
            </li>
            <li>
                <NavLink to={'/login'}>Login</NavLink>
            </li>
            <li>
                <NavLink to={'/register'}>Register</NavLink>
            </li>
        </ul>
    )
}

export default Header

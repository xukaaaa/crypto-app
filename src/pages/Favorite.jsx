import React from 'react'
import { useSelector } from 'react-redux'

function Favorite() {
   const favoriteList = useSelector((state) => state.favorite.favoriteList)
   console.log(favoriteList)
   return <div>Favorite</div>
}

export default Favorite

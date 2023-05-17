import React from 'react'
import { useSelector } from 'react-redux'

function Favorite() {
   const favoriteList = useSelector((state) => state.favorite.favoriteList)
   console.log(favoriteList)
   return <div className="min-h-[calc(100vh-140px-396px)]">Favorite</div>
}

export default Favorite

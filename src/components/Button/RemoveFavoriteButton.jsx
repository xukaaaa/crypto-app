import React from 'react'
import { favoriteIconActive } from '../../assets/img/CoinItem'
import { useDispatch, useSelector } from 'react-redux'
import { removeFavorite } from '../../redux/favoriteSlice'
import { toast } from 'react-toastify'

function RemoveFavoriteButton({ coinId }) {
   const favoriteList = useSelector((state) => state.favorite.favoriteList)

   const dispatch = useDispatch()
   console.log('render lai button remove')

   const handleRemoveFavoriteCoin = (e) => {
      e.preventDefault()
      dispatch(removeFavorite(coinId))
      toast.success('Remove from favorite success')
   }

   return (
      <button
         className="h-full flex items-center"
         onClick={handleRemoveFavoriteCoin}
      >
         <img className="w-6 h-6" src={favoriteIconActive} alt="" />
      </button>
   )
}

export default RemoveFavoriteButton

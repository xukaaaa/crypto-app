import React from 'react'
import { favoriteIcon } from '../../assets/img/CoinItem'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite } from '../../redux/favoriteSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { getDatabase, ref, set } from 'firebase/database'
import { auth } from '../../firebase'

function FavoriteButton({ coinId }) {
   const favoriteList = useSelector((state) => state.favorite.favoriteList)
   const currentUser = useSelector((state) => state.auth.currentUser)

   const dispatch = useDispatch()
   const navigate = useNavigate()

   const writeDatabase = () => {
      const db = getDatabase()
      const userId = auth.currentUser.uid
      const newFavoriteList = [...favoriteList, coinId]
      set(ref(db, `users/${userId}/favoriteList`), newFavoriteList)
   }

   const handleFavoriteCoin = (e) => {
      e.preventDefault()

      if (currentUser) {
         dispatch(addFavorite(coinId))
         writeDatabase()
         toast.success('Add to favorite success')
      } else {
         navigate('/login')
      }
   }

   return (
      <button className="h-full flex items-center" onClick={handleFavoriteCoin}>
         <img className="h-6 w-6" src={favoriteIcon} alt="" />
      </button>
   )
}

export default FavoriteButton

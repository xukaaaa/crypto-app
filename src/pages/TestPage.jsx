import {
   GithubAuthProvider,
   GoogleAuthProvider,
   signInWithPopup,
} from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'
import { getDatabase, onValue, ref, set } from 'firebase/database'

function TestPage() {
   const handleAddFavoriteCoin = async () => {
      const db = getDatabase()
      const userId = auth.currentUser.uid
      const usersRef = ref(db, 'users/' + userId)
      set(ref(db, 'users/' + userId), {
         favoriteList: [1, 2, 3],
      })
      onValue(usersRef, (snapshot) => {
         const data = snapshot.val()
      })
   }

   return (
      <div className="flex flex-col">
         <button onClick={handleAddFavoriteCoin}>Thêm vào yêu thích</button>
      </div>
   )
}

export default TestPage

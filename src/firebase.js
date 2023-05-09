// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: 'AIzaSyCUQFvc9-Ar3aK0fuFzGYEOx0ZgehNkack',
   authDomain: 'crypto-app-34336.firebaseapp.com',
   projectId: 'crypto-app-34336',
   storageBucket: 'crypto-app-34336.appspot.com',
   messagingSenderId: '861529641359',
   appId: '1:861529641359:web:3e7104be83e5c42d067bfa',
   databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth()

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app)

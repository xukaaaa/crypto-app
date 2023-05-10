import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import CoinDetails from './pages/CoinDetails'
import Favorite from './pages/Favorite'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'
import Search from './pages/Search'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './redux/authSlice'
import { useEffect } from 'react'
import { auth } from './firebase'
import TestPage from './pages/TestPage'
import Cookies from 'js-cookie'
import NotFound from './pages/NotFound'

function Layout({ children }) {
   return (
      <>
         <Header />
         {children}
         <Footer />
      </>
   )
}

function App() {
   const queryClient = new QueryClient()
   const dispatch = useDispatch()
   const currentUser = useSelector((state) => state.auth.currentUser)

   useEffect(() => {
      const unsubcribe = auth.onAuthStateChanged((user) => {
         if (user) {
            const { displayName, email, photoURL, uid } = user
            dispatch(login({ displayName, email, photoURL, uid }))
            Cookies.set(
               'user',
               JSON.stringify({ displayName, email, photoURL, uid }),
               { secure: true }
            )
         } else {
            dispatch(logout())
            Cookies.remove('user')
         }
      })

      return unsubcribe
   }, [])

   function AuthRequired({ children }) {
      return currentUser ? children : <Navigate to="/login" />
   }

   return (
      <QueryClientProvider client={queryClient}>
         <Layout>
            <Routes>
               <Route path="/" element={<Homepage />} />
               <Route path="/coin/*" element={<CoinDetails />} />
               <Route
                  path="/favorite"
                  element={
                     <AuthRequired>
                        <Favorite />
                     </AuthRequired>
                  }
               />
               <Route path="/search/:queryParam" element={<Search />} />
               <Route path="/login" element={<Login />} />
               <Route path="/register" element={<Register />} />
               <Route path="/*" element={<NotFound />} />
            </Routes>
         </Layout>
         <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
   )
}

export default App

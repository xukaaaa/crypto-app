import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import CoinDetails from './pages/CoinDetails'
import Favorite from './pages/Favorite'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'
import Search from './pages/Search'

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
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Homepage />
                        </Layout>
                    }
                />
                <Route
                    path="/coin/*"
                    element={
                        <Layout>
                            <CoinDetails />
                        </Layout>
                    }
                />
                <Route
                    path="/favorite"
                    element={
                        <Layout>
                            <Favorite />
                        </Layout>
                    }
                />
                <Route
                    path="/search/:queryParam"
                    element={
                        <Layout>
                            <Search />
                        </Layout>
                    }
                />
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="/register"
                    element={<Register />}
                />
            </Routes>
        </div>
    )
}

export default App

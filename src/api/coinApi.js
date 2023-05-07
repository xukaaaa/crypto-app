import axiosInstance from './axiosInstance'

const coinApi = {
    getTrendingCoins: () => {
        const config = {
            baseURL: 'https://api.coin-stats.com/',
        }
        const url = 'v4/coins/trending'
        return axiosInstance.get(url, config)
    },

    getGlobalMarket: (page) => {
        const url = `v1/coins?skip=${(page - 1) * 100}&limit=100&currency=USD`
        return axiosInstance.get(url)
    },

    getCoinDetail: (coinId) => {
        const url = `v1/coins/${coinId}?currency=USD`
        return axiosInstance.get(url)
    },

    getCoinHistory: (periods, coinId) => {
        const url = `v1/charts?period=${periods}&coinId=${coinId}`
        return axiosInstance.get(url)
    },

    searchCoin: (query) => {
        const config = {
            baseURL: 'https://api.coin-stats.com/',
        }
        const url = `v1/search?query=${query}`
        return axiosInstance.get(url, config)
    },
}

export default coinApi

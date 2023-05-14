import axios from 'axios'

const axiosInstance = axios.create({
   baseURL: 'https://api.coinstats.app/public/',
   timeout: 5000,
})

export default axiosInstance

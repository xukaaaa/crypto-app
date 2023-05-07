import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://api.coinstats.app/public/',
    timeout: 5000,
})

axios.interceptors.request.use(
    (response) => {
        return response.data
    },
    (error) => {
        throw error
    }
)

export default axiosInstance

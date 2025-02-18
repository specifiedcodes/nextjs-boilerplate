import axios from 'axios'

// Create an Axios instance with default settings
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com',
  timeout: 10000,
})

// Optional: Add a request interceptor to attach tokens or other headers
api.interceptors.request.use(
  (config) => {
    // Example: attach a token from localStorage if available
    // const token = localStorage.getItem('token')
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    return config
  },
  (error) => Promise.reject(error)
)

// Optional: Add a response interceptor for centralized error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally if needed
    return Promise.reject(error)
  }
)

export default api
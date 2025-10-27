import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

// Example token getter/setter (replace with your auth logic)
let accessToken = 'INITIAL_ACCESS_TOKEN'

const getAccessToken = () => accessToken
const setAccessToken = (token: string) => {
    accessToken = token
}

// Create Axios instance
const api: AxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
})

// Request interceptor: attach token
api.interceptors.request.use((config) => {
    const token = getAccessToken()
    if (token) {
        ;(config.headers as Record<string, string>)['Authorization'] = `Bearer ${token}`
    }
    return config
})

// Response interceptor: handle 401 and retry once
api.interceptors.response.use(
    (response: AxiosResponse) => response, // pass-through for success
    async (error: AxiosError) => {
        const config = error.config as AxiosRequestConfig & {
            _retry?: boolean
        }

        if (error.response?.status === 401 && config && !config._retry) {
            config._retry = true

            // Optional: refresh token logic here
            // Example: const newToken = await refreshToken();
            // setAccessToken(newToken);

            // Retry the original request
            return api(config)
        }

        // Propagate other errors
        return Promise.reject(error)
    }
)

export default api

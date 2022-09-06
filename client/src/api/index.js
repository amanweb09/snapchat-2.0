import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5100',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': process.env.REACT_APP_API_URL || 'http://localhost:5100'
    }
})

export const signup = async (data) => api.post('/api/signup', data)
export const refresh = async () => api.get('/api/refresh')
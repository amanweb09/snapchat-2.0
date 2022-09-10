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

/* authentication */
export const signup = async (data) => api.post('/api/signup', data)
export const refresh = async () => api.get('/api/refresh')
export const login = async (data) => api.post('/api/login', data)
export const logout = async () => api.post('/api/logout')


/* users */
export const getAllUsers = async () => api.get('/api/users/all')


/* snaps */
export const sendSnap = async (data) => api.post('/api/snap/create', data)
export const getAllSnaps = async () => api.get('/api/snap/get/all')
export const changeSnapStatus = async (data) => api.post('/api/snap/status', data)
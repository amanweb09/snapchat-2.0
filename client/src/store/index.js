import { configureStore } from '@reduxjs/toolkit'
import auth from './auth-slice'
import user from './user-slice'
import snap from './snap-slice'

export const store = configureStore({
    reducer: {
        auth,
        user,
        snap
    }
})
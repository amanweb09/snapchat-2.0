import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuth: false,
    user: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
       setIsAuth: (state, action) => {
            // state.isAuth = action.payload.isAuth,
            // state.user = action.payload.user
            state.isAuth = action.payload.isAuth
            state.user = action.payload.user
       }
    }
})

export const { setIsAuth } = userSlice.actions
export default userSlice.reducer
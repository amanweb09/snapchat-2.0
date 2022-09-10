import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: {
        firstName: '',
        lastName: ''
    },
    bitmoji: '',
    birthday: '',
    username: '',
    email: '',
    password: ''
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setInfo: (state, action) => {
            state[action.payload.field] = action.payload.value
        },
        setName: (state, action) => {
            state.name.firstName = action.payload.firstName
            state.name.lastName = action.payload.lastName
        },
    }
})

export const { setInfo, setName } = authSlice.actions
export default authSlice.reducer
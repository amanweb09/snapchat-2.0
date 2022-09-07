import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    snap: null,
    recepients: []
}

export const snapSlice = createSlice({
    name: "snap",
    initialState,
    reducers: {
        setSnap: (state, action) => {
            state.snap = action.payload.snap
        },
        setRecepients: (state, action) => {
            state.recepients.unshift(action.payload)
        },
        clearRecepients: (state, action) => {
            state.recepients = []
        }
    }
})

export const { setSnap, setRecepients, clearRecepients } = snapSlice.actions
export default snapSlice.reducer
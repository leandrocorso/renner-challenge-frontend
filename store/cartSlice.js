import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        updateCart: (state, {payload}) => {
            return payload
        }
    }
})

export const { updateCart } = cartSlice.actions

export const selectCart = state => state.cart

export default cartSlice.reducer
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import cartReducer from './cartSlice'
import productsReducer from './productsSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
})

export const useAppDispatch = () => useDispatch()

export default store
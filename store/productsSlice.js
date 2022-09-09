import { createSlice } from '@reduxjs/toolkit'
import { getProduct, getProducts } from '../pages/api'

const initialState = {
    isLoading: false,
    current: {
        isLoading: false
    },
    data: []
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        loadAll: state => {
            state.isLoading = true
        },
        allLoaded: (state, {payload}) => {
            state.isLoading = false,
            state.data = payload
        },
        loadCurrent: state => {
            state.current.isLoading = true
        },
        currentLoaded: (state, {payload}) => {
            state.current = { isLoading: false, ...payload }
        }
    }
})

export const { loadAll, allLoaded, loadCurrent, currentLoaded } = productsSlice.actions

export const loadProducts = () => {
    return async dispatch => {
        dispatch(loadAll())
        const products = await getProducts()
        dispatch(allLoaded(products))
    }
}

export const loadProduct = id => {
    return async dispatch => {
        loadCurrent()
        const product = await getProduct(id)
        dispatch(currentLoaded(product))
    }
}

export const selectProducts = state => state.products

export default productsSlice.reducer
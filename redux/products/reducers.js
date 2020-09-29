import * as types from './types'

const initialState = {
    products: [],
    error: null,
    loading: false,
    fetched: false
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS:
            return { ...state, error: null, loading: true }

        case types.GET_PRODUCTS_FAILED:
            return { ...state, fetched: true, error: action.payload, loading: false }

        case types.GET_PRODUCTS_SUCESSFUL:
            return { ...state, fetched: true, error: null, loading: false, products: action.payload }

        default:
            return {...state}
    }
}

export default productsReducer
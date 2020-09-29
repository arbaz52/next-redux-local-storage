import * as types from './types'
import axios from 'axios'

export const actionGetProducts = () => {
    return {
        type: types.GET_PRODUCTS
    }
}

export const actionGetProductsFailed = (err) => {
    return {
        type: types.GET_PRODUCTS_FAILED,
        payload: err
    }
}

export const actionGetProductsSuccessful = (products) => {
    return {
        type: types.GET_PRODUCTS_SUCESSFUL,
        payload: products
    }
}



export const getProducts = () => {
    return (dispatch) => {
        dispatch(actionGetProducts())
        axios.get("http://localhost:3000/api/products")
        .then(res => {
            dispatch(actionGetProductsSuccessful(res.data))
        })
        .catch(err => {
            dispatch(actionGetProductsFailed(err))
        })
    }
}
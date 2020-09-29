import * as types from './types'

export const actionAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        payload: {
            product, quantity
        }
    }
}

export const actionRemoveFromCart = (product) => {
    return {
        type: types.REMOVE_FROM_CART,
        payload: {
            product
        }
    }
}

export const actionUpdateProductQuantity = (product, quantity) => {
    return {
        type: types.UPDATE_PRODUCT_QUANTITY,
        payload: {
            product, quantity
        }
    }
}
export const actionLoadFromLocalStorage = () => {
    return {
        type: types.LOAD_FROM_LOCAL_STORAGE,
    }
}
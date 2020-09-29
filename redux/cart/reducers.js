import { actionUpdateProductQuantity } from './actions'
import * as types from './types'

const initialState = []
const isServer = typeof window === "undefined"
var loadedFromLocalStorage = false

const _cartReducer = (state, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            {
                let { product, quantity } = action.payload
                console.log(state, product, quantity)
                let __p = state.filter(_p => _p.product.id == product.id)
                if (__p.length > 0)
                    return cartReducer(state, actionUpdateProductQuantity(product, quantity + __p[0].quantity))

                return [...state, { product, quantity }]
            }

        case types.REMOVE_FROM_CART:
            {
                let { product } = action.payload
                return [...state.filter(_p => _p.product.id != product.id),]
            }

        case types.UPDATE_PRODUCT_QUANTITY:
            {
                let { product, quantity } = action.payload
                return [...state.map(_p => _p.product.id == product.id ? { product, quantity } : _p)]
            }

        case types.LOAD_FROM_LOCAL_STORAGE:
            {
                let _cart = loadInfoFromLocalStorage()
                if (_cart)
                    return _cart
                return [...state, ]
            }

        default:
            return [...state,]
    }
}

const cartReducer = (state = initialState, action) => {
    let res = _cartReducer(state, action)
    storeInLocalStorage(res)
    return res
}

const KEY_LS_CART = "KEY_LS_CART"

const storeInLocalStorage = (state) => {
    //storing to localStorage on update
    if (!isServer && loadedFromLocalStorage)
        localStorage.setItem(KEY_LS_CART, JSON.stringify(state))
}
const loadInfoFromLocalStorage = () => {
    if (!isServer) {
        loadedFromLocalStorage = true
        let cart = localStorage.getItem(KEY_LS_CART)
        if (cart) {
            cart = JSON.parse(cart)
            return cart
        }
    }
    console.log("Running on server: ", isServer)
    return null
}

export default cartReducer
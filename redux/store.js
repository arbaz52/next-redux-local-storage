import logger from "redux-logger";
import thunk from "redux-thunk";
import cartReducer from "./cart/reducers";
import productsReducer from "./products/reducers";

const { createStore, combineReducers, applyMiddleware } = require("redux");

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
})

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default store
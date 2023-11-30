import { GET_CART_DATA, GET_CART_DATA_FAILURE, GET_CART_DATA_SUCCESS, GET_PRODUCTS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_SUCCESS } from "./actionType"

export const getProductsData = () => {
    return ({type: GET_PRODUCTS})
}

export const getProductsDataFailure = () => {
    return ({type: GET_PRODUCTS_FAILURE})
}

export const getProductsDataSuccess = (payload) => {
    return ({type: GET_PRODUCTS_SUCCESS, payload})
}

export const getCartData = () => {
    return ({type: GET_CART_DATA})
}

export const getCartDataFailure = () => {
    return ({type: GET_CART_DATA_FAILURE})
}

export const getCartDataSuccess = (payload) => {
    return ({type: GET_CART_DATA_SUCCESS, payload})
}
import { GET_CART_DATA, GET_CART_DATA_FAILURE, GET_CART_DATA_SUCCESS, GET_PRODUCTS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_SUCCESS } from "./actionType"

const initState = {
    isLoading: false,
    isError: false,
    products: [],
    cart: []
}

export const reducer = (state=initState, {type, payload}) => {
    switch(type) {
        case GET_PRODUCTS:
            return {
              ...state,
                isLoading: true,
                isError: false,
            }
        case GET_PRODUCTS_FAILURE:
            return {
              ...state,
                isLoading: false,
                isError: true,
                products: []
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                products: [...payload]
            }
        case GET_CART_DATA: 
            return {
                ...state,
                isLoading: false
            }
        case GET_CART_DATA_FAILURE:
            return {
               ...state,
                isLoading: false,
                isError: true
            }
        case GET_CART_DATA_SUCCESS: 
            return {
              ...state,
                isLoading: false,
                isError: false,
                cart: [...payload]
            }
        default: return {...state};
    }
}
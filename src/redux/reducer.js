import { ADD_PRODUCT, ADD_TO_CART, REMOVE_FROM_CART, RESET_CART, DELETE_CART_DATA, EDIT_PRODUCT_DATA, GET_CART_DATA, GET_CART_DATA_FAILURE, GET_CART_DATA_SUCCESS, GET_PRODUCTS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_SUCCESS } from "./actionType"

const initState = {
    isLoading: false,
    isError: false,
    products: [],
    cart: []
}

export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
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
        case ADD_PRODUCT:
            return {
                ...state,
                isLoading: false,
                isError: false,
                products: [...state.products, payload]
            }
        case ADD_TO_CART:
            const productToUpdate = state.cart.find((item) => item.id === payload.id)
            if (!productToUpdate) {
                return {
                    ...state,
                    isLoading: false,
                    isError: false,
                    cart: [...state.cart, payload]
                }
            } else {
                productToUpdate.quantity = productToUpdate.quantity + 1
                return {
                    ...state,
                    isLoading: false,
                    isError: false,
                    cart: [...state.cart]
                }
            }

        case REMOVE_FROM_CART:
            const updateProduct = state.cart.find((item) => item.id === payload.id)
            if (updateProduct.quantity === 1) {
                const filteredCart = state.cart.filter((item) => item.id !== payload.id)
                return {
                    ...state,
                    isLoading: false,
                    isError: false,
                    cart: [...filteredCart]
                }
            } else {
                updateProduct.quantity = updateProduct.quantity - 1
                return {
                    ...state,
                    isLoading: false,
                    isError: false,
                    cart: [...state.cart]
                }
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
        case EDIT_PRODUCT_DATA:
            let updatedData = state.products?.map((ele) => {
                return ele.id == payload.id ? payload : ele;
            })

            return {
                isError: false,
                isLoading: false,
                products: [...updatedData]
            }
        case DELETE_CART_DATA:
            let updatedCartData = state.cart?.filter((ele) => {
                return ele.id != payload;
            })

            return {
                isError: false,
                isLoading: false,
                cart: [...updatedCartData]
            }
        case RESET_CART:
            return {
                isError: false,
                isLoading: false,
                cart: []
            }
        default: return { ...state };
    }
}
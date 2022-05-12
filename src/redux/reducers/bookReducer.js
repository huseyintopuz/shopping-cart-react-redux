import { data } from '../../data'

const INITIAL_STATE = {
    bookList: data,
    cart: []
}

export const bookReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_CART':
                return {
                    ...state,
                    cart:
                        [...state.cart.filter(item => item.id !== action.payload.id), action.payload] // prevent adding duplicate items
              }
        case 'DELETE_CART':
            console.log("hello", action.payload, state.cart)
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }
        case 'CLEAR_CART':
            return {
                cart: []
            }        
        default: return state;
    }
}
export const addCart = book => {
    return {
        type: 'ADD_CART',
        payload: book
    }
}
export const deleteCart = cart => {
    return {
        type: 'DELETE_CART',
        payload: cart
    }
}
export const clearCart = cart => {
    return {
        type: 'CLEAR_CART'
    }
}
export const increment = nr => {
    return {
        type: 'INCREMENT',
        payload: nr
    }
}
export const decrement = nr => {
    return {
        type: 'DECREMENT',
        payload: nr
    }
}
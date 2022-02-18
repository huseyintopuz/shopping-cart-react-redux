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
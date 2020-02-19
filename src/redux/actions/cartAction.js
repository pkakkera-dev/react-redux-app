
export const addToCart = (selectedItem) => {

    return {
        type: 'ADD_TO_CART',
        payload: selectedItem
    }
}

export const removeFromCart = ( selectedItem ) => {

    return {
        type : "REMOVE_FROM_CART",
        payload: selectedItem
    }
}
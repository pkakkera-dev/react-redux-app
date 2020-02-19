
const initialState = {
    cartItems : []
}; 
const cartReducer = (state = initialState, action ) => {
    let newState = {};
    // console.log('cart reducers :: state- ',state, ', action- ', action);
    if( action.type === 'ADD_TO_CART') {
        newState = Object.assign({}, state, { cartItems : state.cartItems.concat(action.payload)})
    }else if( action.type === 'REMOVE_FROM_CART') {
        newState = Object.assign({}, state, { cartItems : state.cartItems.filter(item =>{
            return item.id !== action.payload.id
        })})
    }
    else {
        newState = state;
    };
    return newState;
}

export default cartReducer;
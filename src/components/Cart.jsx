
import React from 'react';
import { connect } from 'react-redux'
import CartItem from './CartItem'

const Cart  = (props) => {
    console.log('cart-items: ', props)
    return (
        <div className='cart'> 
        { props && props.itemsFromStore && (
            props.itemsFromStore.map(( item )=> <CartItem key={item.id} item={item}/>)
        )}
            
         </div>
    )
}

const mapStateToProps = (state) => {
    return {
        itemsFromStore : state.cartReducer.cartItems
    }
}

const connectedCart = connect(mapStateToProps)(Cart)

export default connectedCart;
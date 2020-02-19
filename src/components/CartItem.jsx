import React from 'react';
import { removeFromCart } from '../redux/actions/cartAction'
import { connect } from 'react-redux'
const CartItem = (props) => {

    const removeCartHandler = (item) => {
        console.log('removeCartHandler--', item)
        props.removeItem(item)

    }
    return(
        <div className='product-detail'>
            <div className='product-img'>
                <img alt='Prd-img' src={props.item.thumbnailUrl}></img>
            </div>
            <div className='product-dsc'>
                <span>{props.item.title}</span>
            </div>
            <div className='btn-section'>
                <button className='add-to-cart-btn' onClick={()=> removeCartHandler(props.item)}> Remove </button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem : ( selectedItem ) => dispatch(removeFromCart(selectedItem))
    }
    
}

export default connect(null,mapDispatchToProps)(CartItem);
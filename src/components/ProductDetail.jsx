import React from 'react';
import { addToCart } from '../redux/actions/cartAction'
import { connect } from 'react-redux'
const ProductDetail = (props) => {

    const addToCartHandler = (item) => {
        console.log('addToCartHandler--', item)
        props.myAction(item)

    }
    return(
        <div className='product-detail'>
            <div className='product-img'>
                <img alt='Prd-img' src={props.photo.thumbnailUrl}></img>
            </div>
            <div className='product-dsc'>
                <span>{props.photo.title}</span>
            </div>
            <div className='btn-section'>
                <button className='add-to-cart-btn' onClick={()=> addToCartHandler(props.photo)}> Add to Cart</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        myAction : ( selectedItem )=> dispatch(addToCart(selectedItem))
    }
}

const connectedProductDetail = connect(null, mapDispatchToProps)(ProductDetail)

export default connectedProductDetail;
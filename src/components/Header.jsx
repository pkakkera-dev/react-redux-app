
import React from 'react';
import { connect } from 'react-redux'

const Header  = (props) => {
    return (
        <div className='header'>
            <div className='logo-container'></div>
            <div className='main-container'></div>
            <div className='cart-item-container'>
                <span className='item-counter'>{props.itemsCount + ' : Items'}</span>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        itemsCount : state.cartReducer.cartItems.length
    }
}

const connectedHeader = connect(mapStateToProps)(Header)

export default connectedHeader;
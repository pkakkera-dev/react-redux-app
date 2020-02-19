
import React from 'react';
import { connect } from 'react-redux';
import ProductDetail  from './ProductDetail'


const ProductList  = (props) => {
    return (
        <div className='productList'> 
        {
           ( props.photos && props.photos.length > 0 ) && (
               props.photos.map((photo)=>{
                return (
                    <ProductDetail key={photo.id} photo={photo}/>
                )
               })
           )
    
        }
         
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps-- productlist - state ::', state)
    return {
        photos : state.photoReducer.photos
    }
}

const connectedProductList = connect(mapStateToProps)(ProductList);
export default connectedProductList;
//const connectedProductDetail = connect(mapDispatchToProps)(ProductDetail)

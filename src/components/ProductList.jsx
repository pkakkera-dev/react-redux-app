
import React from 'react';
import { connect } from 'react-redux';


const ProductList  = (props) => {
    console.log('ProductList :: props----------- ', props)
    return (
        <div className='productList'> 
        {
           ( props.photos && props.photos.length > 0 ) && (
               props.photos.map((photo)=>{
                return (
                    <div key={photo.id} className='productDetails'>
                        {photo.title}
                    </div>
                )
               })
           )
    
        }
         
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps--loist', state)
    return {
        photos : state.photos
    }
}
const connectedProductList = connect(mapStateToProps)(ProductList);
export default connectedProductList;
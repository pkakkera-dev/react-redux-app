import React,{ Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './css/style.css';
import { getPhotosUsingThunk } from './redux/actions/productAction';
import { connect } from 'react-redux';

class App extends Component {
state = {
} 

componentDidMount() {
  //console.log('componentDidMount :: props ',this.props);
  //this.props.getPhotos();
  this.props.getPhotosUsingThunk();
}
render() {
return (
  <div className='appContainer'>  
    <Header />
    <ProductList/>
    <Cart type={'cricket'}/>
    <Footer />

  </div>
)

}
}

const mapDispatchToProps = (dispatch) => {
  return {
    // getPhotos : () => dispatch(getPhotos()),
    getPhotosUsingThunk : () => dispatch(getPhotosUsingThunk())
  }
}
const connectedApp = connect(null, mapDispatchToProps)(App)
export default connectedApp;

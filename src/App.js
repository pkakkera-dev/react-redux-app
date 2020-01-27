import React,{ Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './css/style.css';
import getPhotos from './redux/actions/index';
import { connect } from 'react-redux';

class App extends Component {
state = {

} 

componentDidMount() {
  console.log('componentDidMount :: props ',this.props);
  this.props.getPhotos();
}
render() {
return (
  <div className='appContainer'>  
    <Header />
    <ProductList/>
    <Cart />
    <Footer />

  </div>
)

}
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPhotos : () => dispatch(getPhotos())
  }
}
const connectedApp = connect(null, mapDispatchToProps)(App)
export default connectedApp;

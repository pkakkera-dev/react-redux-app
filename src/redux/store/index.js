import { createStore } from 'redux';
import photoReducer from '../reducers/index';


const store = createStore(photoReducer);

export default store;

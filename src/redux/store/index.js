import { createStore, applyMiddleware } from 'redux';
import photoReducer from '../reducers/index';
import thunk from 'redux-thunk'

const store = createStore(photoReducer, applyMiddleware(thunk));

export default store;

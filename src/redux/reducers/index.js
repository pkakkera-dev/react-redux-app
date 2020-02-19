import { combineReducers } from 'redux';
import photoReducer from './productReducer';
import cartReducer from './cartReducer'


const rootReducer = combineReducers({
    photoReducer, cartReducer
})


export default rootReducer;
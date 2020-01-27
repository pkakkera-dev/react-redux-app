const initialState = {
    photos : []
}; 
const photoReducer = (state = initialState, action ) => {
    let newState = {};
    console.log('reducers :: state- ',state, ', action- ', action);
    if( action.type === 'GET_PHOTOS') {
        newState = Object.assign({}, state, { photos : state.photos.concat(action.payLoad)})
    }else {
        newState = state;
    };
    return newState;
}

export default photoReducer;
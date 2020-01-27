import axios from 'axios';
export const getPhotos = () => {
        let pList = [
                { id:1, title:"one"},
                { id:2, title:"two"},
                { id:3, title:"three"}
            ];

        return {
           type : 'GET_PHOTOS',
           payload : pList 
        }
        
}

export const getPhotosUsingThunk = (dispatch) => {
	return async (dispatch) => {
		return await axios.get('https://jsonplaceholder.typicode.com/photos')
		.then(response => {
			//console.log("axiox-------",response)
			dispatch({
				type: 'GET_PHOTOS_THUNK',
				payload: response.data.splice(4950)
			})
		})
		.catch(err => console.log('GET_PHOTOS_THUNK-- error', err))
		}
}


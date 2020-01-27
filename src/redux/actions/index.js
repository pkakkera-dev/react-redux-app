
const getPhotos = () => {
        let pList = [
                { id:1, title:"one"},
                { id:2, title:"two"},
                { id:3, title:"three"}
            ];

        return {
           type : 'GET_PHOTOS',
           payLoad : pList 
        }
        
}

export default getPhotos;
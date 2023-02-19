const initialData = {
    users:[],
    data:[],
    liked:[],
    wishlist:[]
}

export const storedData = (storeData = initialData, action) => {
    switch(action.type){
        case"DATA":{
            return {
                ...storeData,
                data: action.payload
            }
        }
        default: return storeData;
    }
}
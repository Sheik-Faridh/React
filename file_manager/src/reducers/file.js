import { CREATE_FILE,UPDATE_FILE,DELETE_FILE } from '../actions/types';
import FileManager from '../lib/filemanager';


const file = (state = [] , action) => {

    const { type } = action;

    switch(type){
        case CREATE_FILE:
            return [...state,action.payload.file];
        case UPDATE_FILE:
            // clone the array because the array is pass by reference type
            const file = JSON.parse(JSON.stringify(state));
            const { id,prop } = action.payload;
            return FileManager.updateAssetProp(file,id,prop);
        case DELETE_FILE:
            return state.filter(asset => !action.payload.list.includes(asset.id));
        default:
            return state;
    }
} 

export default file;
 
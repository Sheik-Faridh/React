import { CREATE_FOLDER,UPDATE_FOLDER,DELETE_FOLDER } from '../actions/types';
import FileManager from '../lib/filemanager';

const intitalState = [
    {
        ...FileManager.generateFolderSchema('New Folder')
    }
]

const folder = (state = intitalState, action = {}) => {

    const { type } = action;

    switch(type){
        case CREATE_FOLDER:
            return [...state,action.payload.folder];
        case UPDATE_FOLDER:
            // clone the array because the array is pass by reference type
            const folder = JSON.parse(JSON.stringify(state));
            const { id,prop } = action.payload;
            return FileManager.updateAssetProp(folder,id,prop);
        case DELETE_FOLDER:
            return state.filter(asset => !action.payload.list.includes(asset.id));
        default:
            return state;
    }
} 

export default folder;
 
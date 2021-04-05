import { CURRENT_DIRECTORY,FILE_UPLOAD,SEARCH_ASSETS,DELETE_ASSETS } from '../actions/types';

const initialState = {
    currentDir: null,
    fileUpload: false,
    searchAssets: null,
    deleteAssetLists: { file: [], folder: []}
}

const manager = (state = initialState, action = []) => {
    const { type } = action;
    switch(type){
        case CURRENT_DIRECTORY:
            return { ...state, currentDir: action.payload.dir_id };
        case DELETE_ASSETS:
            return { ...state, deleteAssetLists: action.payload.list };
        case FILE_UPLOAD:
            return { ...state, fileUpload: action.payload.fileUpload };
        case SEARCH_ASSETS:
            return { ...state, searchAssets: action.payload.name };
        default:
            return state;
    }
}

export default manager;
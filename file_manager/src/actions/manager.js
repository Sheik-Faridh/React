import { CURRENT_DIRECTORY,DELETE_ASSETS,SEARCH_ASSETS,FILE_UPLOAD } from './types';

export const setCurrentDir = id => ({
    type: CURRENT_DIRECTORY,
    payload: {
        dir_id: id
    }
})

export const showFileUpload = fileUpload => ({
    type: FILE_UPLOAD,
    payload: {
        fileUpload
    }
})

export const setDeleteAsset = list => ({
    type: DELETE_ASSETS,
    payload: {
        list
    }
})

export const searchAsset = name => ({
    type: SEARCH_ASSETS,
    payload: {
        name
    }
})






import { CREATE_FOLDER,UPDATE_FOLDER,DELETE_FOLDER } from './types';

export const createNewFolder = folder => ({
    type: CREATE_FOLDER,
    payload: {
        folder: folder
    }
})

export const updateExistingFolder = ({id,prop}) => ({
    type: UPDATE_FOLDER,
    payload: {
        id,
        prop 
    }
})

export const deleteFolder = list => ({
    type: DELETE_FOLDER,
    payload: {
        list
    }
})
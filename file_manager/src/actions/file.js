import { CREATE_FILE,UPDATE_FILE,DELETE_FILE } from './types';

export const createNewFile = file => ({
    type: CREATE_FILE,
    payload: {
        file: file
    }
})

export const updateExistingFile = ({id,prop}) => ({
    type: UPDATE_FILE,
    payload: {
        id,
        prop 
    }
})

export const deleteFile = list => ({
    type: DELETE_FILE,
    payload: {
        list
    }
})
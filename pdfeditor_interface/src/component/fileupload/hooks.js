import { useReducer } from "react";

const initialState = {
    isFileUploaded: false,
    isFileLoaded: false,
    file: null,
    fileList: null,
    status: null,
    fileId: null,
    fileDialogOpen: null
}

const reducer = (state,action) => {
    const {type,payload} = action;
    switch(type){
        case "FILE_LOAD":
            return {
                ...state,
                isFileLoaded: payload.isFileLoaded,
                file:payload.file, 
                fileId: payload.fileId, 
                isFileUploaded: payload.isFileUploaded
            };
        case "FILE_LIST":
            return {
                ...state,
                fileList: payload.fileList
            };
        case "FILE_ID":
            return {
                ...state,
                fileId: payload.fileId
            };
        case "FILE_DIALOG":
            return {
                ...state,
                fileDialogOpen: payload.fileDialogOpen, 
                file: payload.hasOwnProperty("file") ?  payload.file : state.file,
                fileId: payload.hasOwnProperty("fileId") ? payload.fileId : state.fileId,
                fileList: payload.hasOwnProperty("fileList") ? payload.fileList : state.fileList
            };
        case "FILE_UPLOAD":
            return {
                ...state,
                ...payload
            };
        default:
            return state;
    }
}

const useFileUpload = () => {
    const [fileUploadState,dispatch] = useReducer(reducer,initialState);

    return {
        fileUploadState,
        dispatch
    }
}

export default useFileUpload;
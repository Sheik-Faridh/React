import { useState,useEffect,useCallback } from 'react';
import { showToast } from '../../index';
import { deletePDFFile,getAllFiles } from '../../utils';

const useFileDialog = (fileId,fileList,setLoading,dispatch) => {
    const [file,setFile] = useState(fileId || "");
    const [fileCollection,setFileCollection] = useState(fileList);

    useEffect(() => {
        fileCollection && !fileCollection.length && setFile("");
    },[fileCollection])

    const handleClose = useCallback(
        e => {
            e.preventDefault();
            dispatch({
                type: "FILE_DIALOG",
                payload: {
                    fileDialogOpen: false,
                    fileList: fileCollection
                }
            });
        }, 
        [fileCollection]
    )

    const updateFile = useCallback(
        async e => {
            try{ 
                e.preventDefault();
                if(file){
                    dispatch({
                        type: "FILE_DIALOG",
                        payload: {
                            fileDialogOpen: false,
                            file: fileCollection.find(fileData => fileData._id === file),
                            fileId: file,
                            fileList: fileCollection
                        }
                    });
                }else{
                    showToast({
                        type: "error",
                        message: "Please select the file"
                    });
                }
            }catch(error){
                showToast({
                    type: "error",
                    message: error.message
                });
            }
        }
    ,[file,fileCollection])

    const onChangeHandler = useCallback(
        e => {
            e.preventDefault();
            const { value } = e.target;
            setFile(value)
        },
        []
    )

    const deleteFile = useCallback(
        async _id => {
            try{
                setLoading({
                    loading: true,
                    loadingMessage: "Deleting the files..."
                });
                await deletePDFFile(_id);
                const fileListData = await getAllFiles();
                setFile("");
                setFileCollection(fileListData);
                if(fileId === _id)
                    dispatch({
                        type: "FILE_DIALOG",
                        payload: {
                            fileDialogOpen: true,
                            fileId: null,
                            file: null
                        }
                    });
                showToast({
                    type: "success",
                    message: "File deleted successfully"
                });
            }catch(error){
                showToast({
                    type: "error",
                    message: error.message
                });
            }finally{
                setLoading({
                    loading: false,
                    loadingMessage: ""
                });
            }
        },
        []
    )

    return {
        file,
        fileCollection,
        deleteFile,
        onChangeHandler,
        updateFile,
        handleClose
    };
}

export default useFileDialog;
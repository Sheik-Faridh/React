import React, { useEffect,useCallback,useRef } from 'react';
import { Card,CardContent,CardActions,Button} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Header from '../header/header';
import FileDialog from '../filedialog/filedialog';
import CircularProgress from '@material-ui/core/CircularProgress';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import LaunchIcon from '@material-ui/icons/Launch';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import useStyles from '../login/styles';
import useFileUpload from './hooks';
import Preview from './preview';
import { showToast } from '../../index';
import { getAllFiles,uploadFile } from '../../utils';
import './style.css';

const FileUpload = () => {

    const inputFileRef = useRef();

    const styleElem = useStyles();

    const history = useHistory();

    const { fileUploadState,dispatch } = useFileUpload();

    const {
        file,
        fileList,
        isFileLoaded,
        isFileUploaded,
        status,
        fileDialogOpen,
        fileId
    } = fileUploadState;

    useEffect(() => {
        if(status === "completed" || !status){
            getAllFiles()
            .then(fileData => {
                dispatch({
                    type: "FILE_LIST",
                    payload: {
                        fileList: fileData
                    }
                })
            }).catch(error => {
                showToast({
                    type: "error",
                    message: error.message
                })
            })
        }
    },[status])

    const triggerBrowseFile = useCallback(
        e => {
            e.preventDefault();
            inputFileRef.current.click();
        },
        []
    )

    const uploadFileToServer = useCallback(
        async e => {
            e.preventDefault();
            dispatch({
                type: "FILE_UPLOAD",
                payload: {
                    status: "inprogress",
                    isFileUploaded: false
                }
            });
            const result = await uploadFile(file);
            if(!result.isUploaded)
                showToast({
                    type: "error",
                    message: "Failed to upload the file"
                })
            else
                showToast({
                    type: "success",
                    message: "File Uploaded successfully"
                })
            
            dispatch({
                type: "FILE_UPLOAD",
                payload: {
                    status: "completed",
                    isFileUploaded: result.isUploaded,
                    fileId: result?.file?._id || null
                }
            });
        },
        [file]
    )

    const onFileChangeHandler = useCallback(
        e => {
            const fileData = e.target.files[0];
            dispatch({
                type: "FILE_LOAD",
                payload:{
                    isFileLoaded: true,
                    file: fileData,
                    fileId: null,
                    isFileUploaded: false
                }
            })
        },
        [],
    )

    const openFileDialog = useCallback(
        e => {
            e.preventDefault();
            dispatch({
                type: "FILE_DIALOG",
                payload:{
                    fileDialogOpen: true
                }
            })
        },
        []
    )

    const openInEditor = useCallback(
        e => {
            e.preventDefault();
            history.push(`/editor/${fileId}`);
        },
        [fileId]
    )
    
    return (
        <>
            <div className={styleElem.root}>
                <Header />
                <Card className={styleElem.card}> 
                    <CardContent>
                        {
                            file
                            ?  <Preview file={file} />
                            :  <div className="no-file-section">
                                    <p>Select any file</p>
                                </div>
                        }
                    </CardContent>
                    <CardActions className={styleElem.cardAction}>
                        <div className="button-group">
                            <Button variant="contained" color="primary" startIcon={<FileCopyIcon />} disabled={fileList && fileList.length ? false : true} onClick={openFileDialog}>Select File</Button>
                            <Button variant="contained" color="primary" startIcon={<FolderOpenIcon />} onClick={triggerBrowseFile}>Browse</Button>
                            {isFileLoaded && !isFileUploaded ? <Button variant="contained" color="primary" startIcon={<CloudUploadIcon />} onClick={uploadFileToServer}>
                                { status === "inprogress" ? "Uploading" : "Upload" }
                                { status === "inprogress" &&  <CircularProgress size={14} className={styleElem.spinner}/>}
                                </Button>
                                : ""
                            }
                            {fileId ? <Button variant="contained" color="primary" onClick={openInEditor} endIcon={<LaunchIcon />}>Open in Editor</Button> : ""}
                        </div>
                        <input type="file" hidden ref={inputFileRef} accept="application/pdf" onChange={onFileChangeHandler}/>
                    </CardActions>
                </Card>
            </div>
            { fileDialogOpen && <FileDialog fileList={fileList} fileId={fileId} dispatch={dispatch}/> }
        </>
    )
}

export default FileUpload;
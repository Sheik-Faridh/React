import React, { useEffect,useCallback } from 'react';
import { connect } from 'react-redux';
import HOCLoading from '../hoc/hocloading';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';
import AdobeEditor from './AdobeSDK';
import { getFileAsArray } from './helper';
import {
    getFileData,
    getFile,
    updateFile,
    getLoggedInUserData
} from '../../utils';
import { setUser } from '../login/helper';
import { showToast } from '../../index';
import './styles.css';

const Editor = props => {

    const { fileId } = props.match.params;
    const { user,setUserData,setLoading } = props;

    const history = useHistory();

    !fileId && history.push('/upload_file');
    
    const saveCBHandler = useCallback(
        (metaData, content, options) => {
            setLoading({
                loading: true,
                loadingMessage: "Saving the file changes..."
            });
            return new Promise(async (resolve, reject) => {
                const blob = new Blob([content.buffer],  { type: 'application/pdf' });
                const file = new File([blob], metaData.fileName);
                const res = await updateFile(fileId,file);
                if(!res)
                    showToast({
                        type: "error",
                        message: "failed to save the file"
                    });
                else
                    showToast({
                        type: "success",
                        message: "File saved successfully"
                    });
                resolve({
                   code: AdobeDC.View.Enum.ApiResponseCode.SUCCESS,
                   data: {
                      metaData: metaData
                   }
                });
                setLoading({
                    loading: false,
                    loadingMessage: ""
                });
            });
        },
        [fileId]
    )

    const moveToFileUpload = useCallback(
        () => {
            history.push('/upload_file');
        },
        []
    )

    const getUserData = useCallback(
        async userData => {
            try{
                let userInfo = userData;
                if(!user.email){
                    const res = await getLoggedInUserData();
                    userInfo = res;
                }
                return {
                    userName: `${userInfo.firstName} ${userInfo.lastName}`,
                    firstName: userInfo.firstName,
                    lastName: userInfo.lastName,
                    email: userInfo.email
                }
            }catch(error){
                throw error;
            }
        }
        , 
        []
    )

    useEffect(async () => {
        if(fileId){
            try{
                setLoading({
                    loading: true,
                    loadingMessage: "Loading the file..."
                });
                const fileData = await getFileData(fileId);
                if(fileData){
                    const file = await getFile(fileId,fileData);
                    const fileAsArray = await getFileAsArray(file);
                    const userData = await getUserData(user);
                    await AdobeEditor.initialize();
                    const adobeClientView = AdobeEditor.renderFile(fileAsArray,fileData.name,"adobe-dc-view");
                    AdobeEditor.registerUser(adobeClientView,userData);
                    AdobeEditor.registerSaveEvent(adobeClientView,saveCBHandler);
                    showToast({
                        type: "success",
                        message: "Successfully loaded"
                    });
                    const { firstName,lastName,email } = userData;
                    setUserData({
                        firstName,
                        lastName,
                        email
                    });
                }else{
                    history.push('/editor/file_not_found');
                    throw new Error(`File not found: ${fileId}`);
                }
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
        }
    },[fileId]);

    return (
        <>
            <div className="back-icon-wrapper" onClick={moveToFileUpload}>
                <ArrowBackIcon fontSize="small" htmlColor="#707070" />
            </div>
            <div id="adobe-dc-view"></div>
        </>
    );
}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    setUserData: data => {
        dispatch(setUser(data))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(HOCLoading(Editor));
import { useState,useLayoutEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import FileManager from '../lib/filemanager';
import { setCurrentDir,showFileUpload } from '../actions/manager';

const useNavigation = () => {

    const { folder,manager } = useSelector(state => state);
    const {currentDir} = manager;
    const dispatch = useDispatch();
    const [ moveUp,setMoveUp ] = useState(false);

    const moveUpHandler = () => {
        const asset = FileManager.getParentDir(folder,currentDir);
        dispatch(setCurrentDir(asset.parent_id))
    }

    const fileUploadHandler = () => {
        dispatch(showFileUpload(true));
    }

    useLayoutEffect(() => {
        if(currentDir){
            const asset = FileManager.getParentDir(folder,currentDir);
            setMoveUp(asset ? true : false);
        }else{
            setMoveUp(false); 
        }
    },[currentDir,folder])

    return {
        moveUp,
        moveUpHandler,
        fileUploadHandler
    };

}

export default useNavigation;
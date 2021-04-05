import { useDispatch,useSelector } from 'react-redux';
import { message } from 'antd';
import FileManager from '../lib/filemanager';
import { showFileUpload } from '../actions/manager';
import { createNewFile } from '../actions/file';

const useFileUpload = () => {
    const {folder,file: fileAsset,manager} = useSelector(state => state)
    const dispatch = useDispatch();

    const cancelHandler = () => {
        dispatch(showFileUpload(false))
    }

    const uploadHandler = (file,fileList) => {
        const newName = FileManager.getNewNameForAsset([...folder,...fileAsset],manager.currentDir,file.name,'file');
        const asset = FileManager.generateFileSchema(newName,manager.currentDir,file);
        dispatch(createNewFile(asset));
        file.name === fileList[fileList.length - 1].name && message.success('Files upload successfully');
        return false;
    }

    return {
        cancelHandler,
        uploadHandler
    }
}

export default useFileUpload;
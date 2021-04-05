import { useState,useEffect,useMemo,useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Progress } from 'antd';
import { deleteFolder } from '../actions/folder';
import { deleteFile } from '../actions/file';

const DeleteModal = ({hidePopup}) => {

    const [percentage,setPercentage] = useState(5);
    const dispatch = useDispatch();
    const manager = useSelector(state => state.manager);
    const { deleteAssetLists: { file, folder }} = manager;
    const deleteList = useMemo(() => file.length + folder.length, [file,folder]);
    const deletedList = useMemo(() =>  Math.ceil((percentage/100) * deleteList), [percentage,deleteList]);

    const deleteAsset = useCallback(() => {
        file.length && dispatch(deleteFile(file));
        folder.length && dispatch(deleteFolder(folder));
        hidePopup(prevState => ({ ...prevState, selectedList: [], delete: false }));
    },[file,folder,hidePopup,dispatch])

    useEffect(() => {
        if(percentage < 100){
            const timer = setTimeout(() => setPercentage(prevPercent => prevPercent + 5), 200);
            return () => clearTimeout(timer);
        }else{
            deleteAsset();
        }
    },[percentage,deleteAsset])

    const cancelHandler = () => {
        hidePopup(prevState => ({ ...prevState, delete: false }));
    }

    return (
        <Modal
            wrapClassName="delete-modal"
            visible={true}
            title="Delete"
            onOk={deleteAsset}
            onCancel={cancelHandler}
        >
            Deleting {deletedList} of {deleteList}
            <Progress percent={percentage} status="active" />
        </Modal>
    )
} 

export default DeleteModal;
import { useState,useEffect,useRef } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import FileManager from '../lib/filemanager';
import { createNewFolder } from '../actions/folder';
import { createNewFile } from '../actions/file';
import { setDeleteAsset } from '../actions/manager';
import { generateDefaultName } from '../lib/helpers';

const initialState = { 
    id: null, 
    rename: false,
    delete: false,
    selectedList: [], 
    properties: { 
        id: null,
        show: false 
    },
    fileUpload: false,
    latest_asset: null,
    visible: false
}; 

const useAssetContext = () => {
    const { file,folder,manager } = useSelector(state => state);
    const [assetAction,setAssetAction] = useState(initialState);
    const dispatch = useDispatch();
    const assetContainer = useRef();
    const assets = manager.searchAssets ? FileManager.filterAssetByName([...folder,...file], manager.searchAssets,manager.currentDir) : FileManager.getCurrentDirAssets([...folder,...file],manager.currentDir);

    const generateNewAsset = (type,ext) => {
        const defaultName = generateDefaultName(type,ext);
        const fileName = FileManager.getNewNameForAsset([...file,...folder],manager.currentDir,defaultName,type);
        const asset = type === 'file' ? FileManager.generateFileSchema(fileName,manager.currentDir) : FileManager.generateFolderSchema(fileName,manager.currentDir);
        dispatch(type === 'folder' ? createNewFolder(asset) : createNewFile(asset));
        setAssetAction(prevState => ({ ...prevState, id: null, latest_asset: asset.id }));
    }

    const deleteAssetHandler = () => {
        const list = assetAction.id
                        ? FileManager.getAllChildAssetsList([...file,...folder],assetAction.id)
                        : assetAction.selectedList.length
                            ? FileManager.generateListByType([...file,...folder],assetAction.selectedList)
                            : { file: [], folder: [] }
        if(list.file.length || list.folder.length){
            dispatch(setDeleteAsset(list));
            setAssetAction(prevState => ({ ...prevState, id: null, selectedList: [], delete: true }));
        }
    }

    const selectAllAssets = () => {
        const allAssets = [...file,...folder].filter(a => a.parent_id === manager.currentDir).map(a => a.id);
        setAssetAction(prevState => ({ ...prevState, id: null, selectedList: allAssets }));
    }

    const keyPressHandler = e => {
        if(e.target.localName !== 'input'){
            e.preventDefault();
            e.ctrlKey && e.key === 'f' && generateNewAsset('folder');
            e.shiftKey && e.key === 'F' && generateNewAsset('file','.txt');
            e.ctrlKey && e.key === 'a' && selectAllAssets();
            e.key === 'Delete' && assetAction.selectedList.length && deleteAssetHandler();
        }
    }

    const clickHandler = e => {
        (e.target === assetContainer.current || e.target.classList.contains('ant-space')) && assetAction.selectedList.length && setAssetAction(prevState => ({...prevState, selectedList: []}));
    }

    useEffect(() => {
        !assetAction.delete && (manager.deleteAssetLists.file.length > 0 || manager.deleteAssetLists.folder.length > 0) && dispatch(setDeleteAsset({ file: [], folder: []})); 
    },[assetAction.delete,manager.deleteAssetLists,dispatch])

    useEffect(() => {
        setAssetAction(prevState => ({ ...prevState, fileUpload: manager.fileUpload }));
    },[manager.fileUpload])

    return {
        assets,
        assetAction,
        setAssetAction,
        generateNewAsset,
        deleteAssetHandler,
        keyPressHandler,
        clickHandler,
        assetContainer
    };
}

export default useAssetContext;
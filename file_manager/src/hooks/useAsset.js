import { useState,useEffect,useRef,useMemo,useLayoutEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { message } from 'antd';
import icons from '../lib/icons';
import FileManager from '../lib/filemanager';
import { setCurrentDir } from '../actions/manager';
import { updateExistingFolder } from '../actions/folder';
import { updateExistingFile } from '../actions/file';

const useAsset = ({asset,assetAction,setAssetAction}) => {
    const inputRef = useRef(null);
    const { file,folder,manager } = useSelector(state => state);
    const dispatch = useDispatch();

    const [ assetState,setAssetState ] = useState({
        editAsset: false,
        assetName: asset.name
    });

    const isSelectedAsset = assetAction.selectedList.includes(asset.id);

    const Icon = useMemo(() => {
        return asset.type === 'folder' 
            ? icons.folder 
            : asset.name.includes('.')
                ? icons[`.${asset.name.split('.').pop()}`] || icons.default
                : icons.default
    }, [asset])

    const onClick = e => {
        e.preventDefault();
        e.stopPropagation();
        if(e.ctrlKey)
            assetAction.selectedList.includes(asset.id) && setAssetAction(prevState => ({ ...prevState, selectedList: prevState.selectedList.filter(a => a !== asset.id) }));
        else
            !assetState.editAsset && !assetAction.selectedList.includes(asset.id) && setAssetAction(prevState => ({ ...prevState, selectedList: [...prevState.selectedList, asset.id] }));
    }

    const onDoubleClick = e => {
        e.preventDefault();
        e.stopPropagation();
        if(asset.type === 'folder'){
            dispatch(setCurrentDir(asset.id));
            setAssetAction(prevState => ({ ...prevState, id: null, selectedList: [] }));
        }else{
            message.error('No Valid App to open the file');
        }
    }

    const onChangeHandler = e => {
        const { value } = e.target;
        const newName = asset.type === 'folder' ? value : `${value}.${asset.name.split('.').pop()}`;
        setAssetState(prevState => ({ ...prevState,assetName: newName}));
    } 

    const onBlur = () => {
        setAssetState(prevState => ({ editAsset: false, assetName: !assetState.assetName ? asset.name : prevState.assetName }));
        setAssetAction(prevState => ({ ...prevState, rename: false, id: null, latest_asset: null }));
        if(assetState.assetName && assetState.assetName !== asset.name) {
            const newName = FileManager.getNewNameForAsset([...file,...folder],manager.currentDir,assetState.assetName,asset.type);
            const prop = { id: asset.id , prop: { name: newName } };
            dispatch(asset.type === 'folder' ? updateExistingFolder(prop) : updateExistingFile(prop));
        }
    }

    const contextMenuHandler = () => {
        setAssetAction(prevState => ({...prevState, id: asset.id}));
    }

    useEffect(() => {
        assetAction.id === asset.id && assetAction.rename && setAssetState(prevState => ({ ...prevState,editAsset: true}));
    },[assetAction,asset.id])

    useEffect(() => {
        assetState.editAsset && inputRef.current.focus({ cursor: 'all' });
    },[assetState.editAsset])

    useLayoutEffect(() => {
        assetAction.latest_asset === asset.id && setAssetState(prevState => ({ ...prevState,editAsset: true}));
    },[assetAction.latest_asset,asset.id])

    useEffect(() => {
        setAssetState(prevState => ({ ...prevState,assetName: asset.name }));
    },[asset.name])

    return {
        ...assetState,
        onClick,
        onDoubleClick,
        onChangeHandler,
        contextMenuHandler,
        onBlur,
        inputRef,
        Icon,
        isSelectedAsset,
        style: { color: '#2e91d9', fontSize: asset.type === 'folder' ? '60px' : '50px', cursor: 'pointer' }
    }
}

export default useAsset;
import { useState,useEffect,useRef,useCallback } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { message,Menu } from 'antd';
import { FolderFilled } from '@ant-design/icons';
import FileManager from '../lib/filemanager';
import { setCurrentDir } from '../actions/manager';
const { Item } = Menu;

const initialState = {
    customNavigation: false,
    inputVal: null
}

const useSelection = () => {

    const { file,folder,manager } = useSelector(state => state);
    const [selectionState,setSelectionState]= useState(initialState);
    const containerRef = useRef();
    const dispatch = useDispatch();
    const inputRef = useRef();
    const parentDirs = FileManager.getParentDirAssets([...file,...folder],manager.currentDir);

    const clickHandler = e => {
        e.preventDefault();
        containerRef.current.contains(e.target) && setSelectionState(prevState => ({...prevState, customNavigation: true, inputVal: `\\${parentDirs.map(a => a.name).join('\\')}`  }));
    }

    const changeHandler = e => {
        setSelectionState(prevState => ({...prevState, inputVal:  e.target.value  }));
    }

    const enterHandler = () => {
        try{
            const command = selectionState.inputVal;
            const dirList = command.substring(1).split('\\');
            const folderId = FileManager.validateDirList(folder,dirList);
            dispatch(setCurrentDir(folderId));
            setSelectionState(prevState => ({...prevState, customNavigation: false, inputVal: null}));
        }catch(error){
            message.error(`${error.message} - ${selectionState.inputVal}`);
            inputRef.current.focus({ cursor: 'all' });
        }
    }

    const blurHandler = () => {
        setSelectionState(prevState => ({...prevState, customNavigation: false, inputVal: null}));
    }

    useEffect(() => {
        selectionState.customNavigation && inputRef.current.focus({ cursor: 'all' });
    },[selectionState.customNavigation])

    const itemClickHandler = useCallback(
        id => {
            dispatch(setCurrentDir(id));
        },
        [dispatch]
    )

    const overlay = useCallback(
        id => {
            const childDir = folder.filter(a => a.parent_id === id);
            return (
                <Menu className="selection-menu-wrapper">
                    {
                        childDir.length 
                            ? childDir.map(d => <Item key={d.id} icon={<FolderFilled style={{ color: '#2e91d9'}} />} onClick={() => itemClickHandler(d.id)}>{d.name}</Item>)
                            : <Item key="none">No Folder Found</Item>
                    }
                </Menu>
            )
        },
        [folder,itemClickHandler]
    )

    return {
        parentDirs,
        clickHandler,
        selectionState,
        changeHandler,
        enterHandler,
        blurHandler,
        overlay,
        inputRef,
        containerRef
    }
}

export default useSelection;
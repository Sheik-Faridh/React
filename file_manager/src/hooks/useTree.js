import { useSelector,useDispatch } from 'react-redux';
import FileManager from '../lib/filemanager';
import { setCurrentDir } from '../actions/manager';

const useTree = () => {

    const { file,folder } = useSelector(state => state);
    const dispatch = useDispatch();
    const treeData = FileManager.getCascadingTreeView([...file,...folder]);

    const changeHandler = value => {
        const asset = [...file,...folder].find(a => a.id === value);
        dispatch(setCurrentDir(asset.type === 'file' ? asset.parent_id : asset.id));
    }

    return {
        treeData,
        changeHandler
    }

}

export default useTree;
import { useMemo,useCallback } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Menu,message } from 'antd';
import { FolderFilled,DeleteFilled,DownloadOutlined } from '@ant-design/icons';
import icons from '../lib/icons';
import { setCurrentDir } from '../actions/manager';
const { Item,SubMenu } = Menu;

const Icon = ({component: Component,...props}) => <Component {...props} />

const useAssetMenu = ({assetAction,setAssetAction,generateNewAsset,deleteAssetHandler}) => {

    const { file,manager} = useSelector(state => state);
    const dispatch = useDispatch();

    const contextMenuHandler = visible => {
        if(assetAction.id && typeof visible === 'boolean' && !visible)
            setAssetAction(prevState => ({ ...prevState, id: null, visible }));
        else if(typeof visible === 'boolean')
            setAssetAction(prevState => ({ ...prevState, visible}));
    }

    const isDownloadAvailable = useCallback(() => {
        if(!assetAction.selectedList.length && assetAction.id){
            const assetData = file.find(f => f.id === assetAction.id);
            if(assetData) return assetData.file ? true : false;
        }
        return false;
    },[assetAction,file])

    const downloadHandler = useCallback(() => {
        const assetData = file.find(f => f.id === assetAction.id);
        const a = window.document.createElement('a');
        a.href = window.URL.createObjectURL(assetData.file,{ type: assetData.file.type});
        a.download = assetData.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    },[file,assetAction.id]);

    const showProperties = useCallback(
        () => {
            setAssetAction(
                prevState => ({
                    ...prevState,
                    id: null,
                    properties: {
                        id: prevState.id || manager.currentDir,
                        show: true
                    }
                })
            )
        },
        [setAssetAction,manager]
    )

    const openAsset = useCallback(() => {
        const isFile = file.some(f => f.id === assetAction.id);
        if(isFile)
            message.error('No Valid App to open the file');
        else
            dispatch(setCurrentDir(assetAction.id));
        setAssetAction(prevState => ({ ...prevState, id: null, selectedList: [] }));
    },[file,setAssetAction,dispatch,assetAction]);


    const contextMenu = useMemo(
        () => (
            <Menu onClick={() => setAssetAction(prevState => ({...prevState,visible: false}))} className={assetAction.visible ? 'show-menu' : 'hide-menu'}>
                { assetAction.id && <Item key="open" onClick={openAsset}>Open</Item>}
                { !assetAction.id && <SubMenu title="New">
                        <Item key="folder" icon={<FolderFilled style={{color: '#2e91d9'}} />} onClick={() => generateNewAsset('folder')}>Folder <span className="shortcuts">Ctrl + F</span></Item>
                        <Item key=".txt" icon={<Icon component={icons['.txt']} style={{color: '#2e91d9'}} />} onClick={() => generateNewAsset('file','.txt')}>Text Document <span className="shortcuts">Shift + F</span></Item>
                        <Item key=".png" icon={<Icon component={icons['.png']} style={{color: '#2e91d9'}} />} onClick={() => generateNewAsset('file','.png')}>Image</Item>
                        <Item key=".xls" icon={<Icon component={icons['.xls']} style={{color: '#2e91d9'}} />} onClick={() => generateNewAsset('file','.xls')}>Excel Document</Item>
                        <Item key=".pdf" icon={<Icon component={icons['.pdf']} style={{color: '#2e91d9'}} />} onClick={() => generateNewAsset('file','.pdf')}>PDF Document</Item>
                        <Item key=".docx" icon={<Icon component={icons['.docx']} style={{color: '#2e91d9'}} />} onClick={() => generateNewAsset('file','.docx')}>Word Document</Item>
                        <Item key=".ppt" icon={<Icon component={icons['.ppt']} style={{color: '#2e91d9'}} />} onClick={() => generateNewAsset('file','.ppt')}>PowerPoint Document</Item>
                        <Item key=".zip" icon={<Icon component={icons['.zip']} style={{color: '#2e91d9'}} />} onClick={() => generateNewAsset('file','.zip')}>Compressed Folder</Item>
                    </SubMenu> }
                { assetAction.id && <Item key="rename" onClick={() => setAssetAction(prevState => ({ ...prevState, rename: true }))}>Rename</Item> }
                { isDownloadAvailable() && <Item key="download" icon={<DownloadOutlined />} onClick={downloadHandler}>Download</Item>}
                <Item key="properties" onClick={showProperties} disabled={manager.currentDir || assetAction.id ? false : true}>Properties</Item>
                { (assetAction.id || assetAction.selectedList.length) && <Item key="delete" icon={<DeleteFilled />} danger onClick={deleteAssetHandler}>Delete</Item> }
            </Menu>
        ),
        [assetAction,manager,setAssetAction,isDownloadAvailable,openAsset,downloadHandler,deleteAssetHandler,generateNewAsset,showProperties]
    )
        
    return [contextMenu,contextMenuHandler];
}

export default useAssetMenu;
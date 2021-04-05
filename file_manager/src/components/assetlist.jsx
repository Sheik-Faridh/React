import { Dropdown, Space, Empty } from 'antd';
import Asset from './asset';
import Modal from './modal';
import useAssetContext from '../hooks/useAssetContext';
import useAssetMenu from '../hooks/useAssetMenu';
import styles from '../styles/fileroute.module.css';

const AssetList = () => {

    const { 
        assets,
        assetAction,
        setAssetAction,
        keyPressHandler,
        generateNewAsset,
        deleteAssetHandler,
        clickHandler,
        assetContainer
    } = useAssetContext();

    const [contextMenu, setContextMenu] = useAssetMenu({ assetAction,setAssetAction,generateNewAsset,deleteAssetHandler });
   
    return (
        <>
            <Dropdown visible={assetAction.visible} overlay={contextMenu} trigger={['contextMenu']} onVisibleChange={setContextMenu}>
                <div className={styles.assetListContainer} ref={assetContainer} tabIndex="0" onKeyDown={keyPressHandler} onClick={clickHandler}>
                    {
                        assets.length 
                            ?   <Space size={[20,10]} wrap align="start">
                                    { assets.map(asset => <Asset key={asset.id} asset={asset} assetAction={assetAction} setAssetAction={setAssetAction} />) }
                                </Space>
                            :   <Empty description="No File/Folder Found" />
                    }
                </div>
            </Dropdown>
            <Modal assetAction={assetAction} setAssetAction={setAssetAction} />
        </>
    )
}

export default AssetList;
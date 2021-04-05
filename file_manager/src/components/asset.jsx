import { Input,Card } from 'antd';
import useAsset from '../hooks/useAsset';
import useClickPreventionOnDoubleClick from '../hooks/useClickPreventionOnDoubleClick';
import styles from '../styles/fileroute.module.css';
import { showAssetNameWithoutExt } from '../lib/helpers';
const { Meta } = Card;

const Asset = props => {

    const { 
        assetName,
        editAsset,
        onClick,
        onDoubleClick,
        onChangeHandler,
        contextMenuHandler,
        onBlur,
        inputRef,
        Icon,
        isSelectedAsset,
        style
    } = useAsset(props);

    const [ handleClick,handleDoubleClick ] = useClickPreventionOnDoubleClick(onClick,onDoubleClick);

    const classProp = isSelectedAsset ? `${styles.assetWrapper} ${styles.selectedAssetWrapper}` : styles.assetWrapper

    return (
        <div className={classProp} onClick={handleClick} onDoubleClick={handleDoubleClick} onContextMenu={contextMenuHandler}>
            <Card
                style={{ width: 100,background: 'transparent' }}
                cover={<Icon  style={style} />}
            >
                <Meta 
                    title={ 
                        editAsset 
                            ?   <Input 
                                    ref={inputRef} 
                                    className={styles.assetInput} 
                                    bordered={false} 
                                    value={props.asset.type === 'folder' ? assetName : showAssetNameWithoutExt(assetName)} 
                                    onChange={onChangeHandler}
                                    onBlur={onBlur} 
                                    onPressEnter={onBlur}
                                />  
                            :  props.asset.type === 'folder' ? assetName : showAssetNameWithoutExt(assetName)
                    } 
                />
            </Card>
        </div>
    )
}

export default Asset;
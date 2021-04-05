import { TreeSelect } from 'antd';
import useTree from '../hooks/useTree';
import styles from '../styles/fileroute.module.css';

const TreeView = () => {

    const {
        treeData,
        changeHandler
    } = useTree();

    return (
        <div className={styles.treeWrapper}>
            <TreeSelect
                style={{ width: '100%' }}
                virtual={false}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                onChange={changeHandler}
                treeData={treeData}
            />
        </div>
    )

}

export default TreeView;
import { Breadcrumb, Col,Input } from 'antd';
import { FolderFilled } from '@ant-design/icons';
import useSelection from '../hooks/useSelection';
import TreeView from './treeview';
import styles from '../styles/fileroute.module.css';
const { Item } = Breadcrumb;

const Selection = () => {
    const { parentDirs,clickHandler,selectionState,changeHandler,enterHandler,inputRef,blurHandler,overlay,containerRef } = useSelection();

    return (
        <Col span={16}>
            <div className={styles.selectionContainer}>
                {
                    selectionState.customNavigation
                        ?   <Input 
                                ref={inputRef}
                                style={{ width: '100%'}}
                                prefix={<FolderFilled style={{ color: '#2e91d9', fontSize: '22px', padding: '0 10px'}} /> } 
                                value={selectionState.inputVal}
                                onChange={changeHandler}
                                onPressEnter={enterHandler}
                                onBlur={blurHandler}
                            />
                        :   <>
                                <div ref={containerRef} className={styles.selectionWrapper}  tabIndex="0" onClick={clickHandler}>
                                    <FolderFilled style={{ color: '#2e91d9', fontSize: '22px', padding: '0 10px'}} />
                                    <Breadcrumb separator=">" >
                                        <Item>D:</Item>
                                        { parentDirs.map(dir => <Item key={dir.id} overlay={() => overlay(dir.id)}>{dir.name}</Item>) }
                                    </Breadcrumb>
                                </div>
                                <TreeView />
                            </> 
                }
            </div>
        </Col>
    )
}

export default Selection;
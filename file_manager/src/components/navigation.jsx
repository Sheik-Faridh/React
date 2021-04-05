import { Col, Button, Tooltip } from 'antd';
import { ArrowUpOutlined,UploadOutlined } from '@ant-design/icons';
import useNavigation from '../hooks/useNavigation';
import styles from '../styles/fileroute.module.css';

const Navigation = () => {

    const { moveUp,moveUpHandler,fileUploadHandler } = useNavigation();

    return (
        <Col span={2}>
            <div className={styles.navigationWrapper}>
                <Tooltip title='Move Up' placement='left'>
                    <Button shape='circle' disabled={!moveUp} onClick={moveUpHandler} icon={<ArrowUpOutlined  style={{ fontSize: '20px', color: '#A0A0A5', padding: '0 5px' }} />} />
                </Tooltip>
                <Tooltip title='Upload' placement='right'>
                    <Button shape='circle' onClick={fileUploadHandler} icon={<UploadOutlined  style={{ fontSize: '20px', color: '#A0A0A5', padding: '0 5px' }} />} />
                </Tooltip>
            </div>
        </Col>
    )
}

export default Navigation;
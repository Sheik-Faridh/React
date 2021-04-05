import { Modal,Tabs,Descriptions,Divider,Button } from 'antd';
import { useSelector } from 'react-redux';
import FileManager from '../lib/filemanager';
import icons from '../lib/icons';
import { formatDate,defaultNames } from '../lib/helpers';

const { TabPane } = Tabs;
const { Item } = Descriptions;

const getAssetTotalSize = (assetData,lists) => lists.reduce((total,id) => {
        const data = assetData.find(a => a.id === id);
        total += data?.file?.size ?? 0;
        return total;
    },0)

const FileInfo = ({file,folder}) => {

    const FileIcon = file.name.includes('.') ? icons[`.${file.name.split('.').pop()}`] || icons.default : icons.default
    const parentDir = FileManager.getParentDirAssets(folder,file.parent_id);
    const location = parentDir.length ? `D:${parentDir.map(a => a.name).join('\\')}` : 'D:';
    const type = defaultNames[`.${file.name.split('.').pop()}`] || defaultNames.default;
    return (
        <Descriptions 
            bordered={true}
            column={1}
        >
            <Item label={<FileIcon style={{ fontSize: '16px',color: '#2e91d9'}} />}>{file.name}</Item>
            <Item label="Type">{type.substring(4)}</Item>
            <Divider type="horizontal" />
            <Item label="Location">{location}</Item> 
            <Item label="Size">{file.file?.size ?? 0} bytes</Item>
            <Divider type="horizontal" />
            <Item label="Created">{formatDate(file.created_at)}</Item> 
            <Item label="Modified">{formatDate(file.updated_at)}</Item>
        </Descriptions>
    )
}

const FolderInfo = ({folder,file,info}) => {
    const FileIcon = icons.folder;
    const parentDir = FileManager.getParentDirAssets(folder,info.parent_id);
    const location = parentDir.length ? `D:${parentDir.map(a => a.name).join('\\')}` : 'D:';
    const lists = FileManager.getAllChildAssetsList([...folder,...file],info.id); // same level 
    return (
        <Descriptions 
            bordered={true}
            column={1}
        >
            <Item label={<FileIcon style={{ fontSize: '16px',color: '#2e91d9'}} />}>{info.name}</Item> 
            <Divider type="horizontal" />
            <Item label="Location">{location}</Item> 
            <Item label="Size">{getAssetTotalSize([...folder,...file],[...lists.folder,...lists.file])} bytes</Item>
            <Item label="Total">{ lists.file.length + lists.folder.length }<span className="helper">( Folders { lists.folder.length } Files { lists.file.length } )</span></Item>
            <Divider type="horizontal" />
            <Item label="Created">{formatDate(info.created_at)}</Item> 
            <Item label="Modified">{formatDate(info.updated_at)}</Item>
        </Descriptions>
    )
}

const Properties = ({id,hidePopup}) => {

    const { file, folder } = useSelector(state => state);
    const assetInfo = [...file,...folder].find(a => a.id === id);

    const closePopup = () => {
        hidePopup(
            prevState => ({
                ...prevState,
                properties: {
                    id: null,
                    show: false
                }
            })
        )
    }

    return (
        <Modal
            wrapClassName="property-modal"
            title="Properties"
            visible={true}
            footer={
                [
                    <Button key="ok" onClick={closePopup}>Ok</Button>
                ]
            }
            onCancel={closePopup}
        >
            <Tabs type="card">
                <TabPane tab="General" key="general">
                    { assetInfo.type === 'file' && <FileInfo file={assetInfo} folder={folder} /> }
                    { assetInfo.type === 'folder' && <FolderInfo file={file} folder={folder} info={assetInfo} /> }
                </TabPane>
            </Tabs>
        </Modal>
    )
}

export default Properties;
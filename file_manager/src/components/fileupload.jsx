import { Upload, Modal } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import useFileUpload from '../hooks/useFileUpload';

const { Dragger } = Upload;

const FileUpload = () => {

    const {
        cancelHandler,
        uploadHandler
    } = useFileUpload();

    return (
        <Modal
            wrapClassName="file-upload-modal"
            title="Upload"
            visible={true}
            footer={null}
            onCancel={cancelHandler}
        >
            <Dragger 
                beforeUpload={uploadHandler}
                multiple={true}
                showUploadList={false}
            >
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Drag file to this area to upload</p>
            </Dragger>
        </Modal>
    )
}

export default FileUpload;
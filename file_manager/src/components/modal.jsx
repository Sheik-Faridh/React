import DeleteModal from './deletemodal';
import Properties from './properties';
import FileUpload from './fileupload';

const Modal = ({assetAction,setAssetAction}) => {
    return (
        <>
            { assetAction.delete && <DeleteModal hidePopup={setAssetAction} /> }
            { assetAction.properties.show && <Properties hidePopup={setAssetAction} id={assetAction.properties.id} /> }
            { assetAction.fileUpload && <FileUpload /> }
        </>
    )
}

export default Modal;
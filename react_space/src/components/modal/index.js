import { useSelector } from 'react-redux';
import QRCode from './qrcode';
import Logout from './logout';

const Modal = () => {
  const modal = useSelector((state) => state.modal);

  const Component = {
    QR_CODE: <QRCode />,
    LOGOUT: <Logout />,
    DEFAULT: <></>,
  };

  return modal.open ? Component[modal.type] : Component.DEFAULT;
};

export default Modal;

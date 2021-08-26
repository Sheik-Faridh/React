import { Modal } from 'antd';
import { useDispatch } from 'react-redux';
import QR from 'qrcode.react';
import actions from '../../../store/modal/actions';

const QRCode = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(actions.closeModal());
  };

  return (
    <Modal
      footer={null}
      closable={false}
      visible={true}
      destroyOnClose={true}
      onCancel={closeModal}
    >
      <div className='flex flex-col justify-center space-y-5'>
        <div className='bg-gray-100 rounded p-2 text-center'>
          <h2 className='dark-blue text-xl mb-0'>Scan QR Code</h2>
          <p className='w-4/5 m-auto text-gray-500'>
            Place qr code inside the frame to scan please avoid the shake to get
            the results quickly
          </p>
        </div>
        <div className='corner-frame w-max h-auto border-gray-500 m-auto p-3'>
          <QR value='sheikfaridh' />
        </div>
        <div className='text-center'>
          <button className='primary px-3 min-w-min' onClick={closeModal}>
            Got it
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default QRCode;

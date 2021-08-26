import { Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import actions from '../../../store/modal/actions';

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const closeModal = () => {
    dispatch(actions.closeModal());
  };

  const routeToLogin = () => {
    history.push('/login');
    closeModal();
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
        <div className='bg-gray-100 rounded p-1 text-center'>
          <h2 className='dark-blue text-lg mb-0 uppercase'>Logout Confirm</h2>
        </div>
        <p className='space-color text-sm font-semibold'>
          Do you want really logout?
        </p>
        <div className='text-center space-x-2'>
          <button className='secondary px-3 min-w-min' onClick={closeModal}>
            Cancel
          </button>
          <button className='danger px-3 min-w-min' onClick={routeToLogin}>
            Logout
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default Logout;

import { useRef, useState, useEffect } from 'react';
import { Tooltip } from 'antd';
import { MdLiveHelp } from 'react-icons/md';
import { ReactComponent as Logo } from '../../../assets/svg/logo.svg';

const Login = () => {
  const inputRef = useRef();
  const [showInput, setInput] = useState(false);

  const sendAccessCode = () => {
    setInput(true);
  };

  const verifyTOTP = () => {};

  useEffect(() => {
    showInput && inputRef.current && inputRef.current.focus();
  }, [showInput]);

  return (
    <div className='flex justify-center	items-center bg-gray-200 w-screen h-screen'>
      <div className='flex flex-col justify-center p-6 w-3/5 h-auto space-y-3 bg-white shadow-2xl'>
        <div className='text-2xl font-semibold tracking-widest text-center uppercase text-gray-700'>
          <Logo
            className='inline mx-2'
            style={{ fill: '#e62552', width: '1.5em', height: '1.5em' }}
          />
          Space
        </div>
        <div className='text-center'>
          <span className='block text-sm my-3 text-gray-400 text-left'>
            Request access below, and you will receive an email notifying that
            your access has been granted.
          </span>
          <div className='inline-block'>
            {showInput ? (
              <input
                ref={inputRef}
                className='p-1'
                placeholder='Enter Access Code'
                type='text'
              />
            ) : (
              ''
            )}
            <button className='primary' onClick={sendAccessCode}>
              {showInput ? 'Verify Access Code' : 'Request Access Code'}
            </button>
          </div>
        </div>
        <div className='separator'>
          <span className='text-sm border-2 p-2 align-middle bg-gray-200 rounded-full border-gray-200 text-gray-500 uppercase'>
            or
          </span>
        </div>
        <div className='text-center'>
          <span className='block text-sm mb-3 text-gray-400 text-left'>
            You can now complete two factor authentication in Space using TOTP.
          </span>
          <div className='inline-block'>
            <input className='p-1' placeholder='Enter TOTP' type='text' />
            <button className='primary' onClick={verifyTOTP}>
              Verify TOTP
            </button>
            <Tooltip
              placement='bottom'
              color='#264966'
              title='Download authenticator apps and select Add MFA Device in Profile page and scan the QR code to view the TOTP'
            >
              <MdLiveHelp
                className='inline mx-4'
                color='#12344d'
                size='1.5em'
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

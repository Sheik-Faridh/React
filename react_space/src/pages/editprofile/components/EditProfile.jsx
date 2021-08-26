import { useHistory } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import Icon from '../../../components/icon';
import ContactInfo from './ContactInfo';
import AccessDetails from './AccessDetails';
import MaritalStatus from './MaritalStatus';
import OtherDetails from './OtherDetails';
import FamilyDetails from './FamilyDetails';
import PassportDetails from './PassportDetails';
import AccountInfo from './AccountInfo';
import useForm from '../hooks/useForm';

const LeftArrowIcon = () => (
  <Icon prop={{ className: 'inline mx-1' }}>
    <BsArrowLeft />
  </Icon>
);

const EditProfile = () => {
  const history = useHistory();
  const form = useForm();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className='px-6 py-3'>
      <div className='w-full mb-2 text-lg'>
        <ul className='link m-0'>
          <li className='inline p-2'>Profile</li>
          <li className='inline p-2'>Sheik Faridh</li>
          <li className='inline p-2'>Edit</li>
        </ul>
      </div>
      <div className='w-full h-auto bg-white p-3 rounded shadow-lg'>
        <div
          className='text-left text-blue-700 font-medium cursor-pointer hover:text-blue-500'
          onClick={goBack}
        >
          <LeftArrowIcon /> Go Back
        </div>
        <form onSubmit={form.handleSubmit}>
          <div className='flex flex-row gap-4'>
            <div className='flex flex-col w-3/5 space-y-4'>
              <ContactInfo form={form} />
              <FamilyDetails form={form} />
            </div>
            <div className='flex-flex-col w-2/5 space-y-4'>
              <AccessDetails form={form} />
              <MaritalStatus form={form} />
              <OtherDetails form={form} />
              <PassportDetails form={form} />
              <AccountInfo form={form} />
            </div>
          </div>
          <div className='my-4 text-center space-x-2'>
            <button className='secondary' type='button' onClick={goBack}>
              Close
            </button>
            <button className='primary' type='submit'>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;

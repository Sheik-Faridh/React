import { AiOutlineMail } from 'react-icons/ai';
import { MdDetails } from 'react-icons/md';
import { GrUserManager } from 'react-icons/gr';
import { GoDeviceMobile, GoLocation } from 'react-icons/go';
import { BsCalendar, BsGraphUp } from 'react-icons/bs';
import { FaBirthdayCake } from 'react-icons/fa';
import Icon from '../../../components/icon';
import NoData from '../../../components/nodata';

const DetailsIcon = () => (
  <Icon prop={{ className: 'inline mx-1 text-xl' }}>
    <MdDetails />
  </Icon>
);

const ManagerIcon = () => (
  <Icon prop={{ className: 'inline mx-1 text-xl', color: '#12344d' }}>
    <GrUserManager />
  </Icon>
);

const EmailIcon = () => (
  <Icon prop={{ className: 'inline mx-4 text-xl', color: '#12344d' }}>
    <AiOutlineMail />
  </Icon>
);

const PhoneIcon = () => (
  <Icon prop={{ className: 'inline mx-4 text-xl', color: '#12344d' }}>
    <GoDeviceMobile />
  </Icon>
);

const LocationIcon = () => (
  <Icon prop={{ className: 'inline mx-4 text-xl', color: '#12344d' }}>
    <GoLocation />
  </Icon>
);

const ExperienceIcon = () => (
  <Icon prop={{ className: 'inline mx-4 text-xl', color: '#12344d' }}>
    <BsGraphUp />
  </Icon>
);

const CalenderIcon = () => (
  <Icon prop={{ className: 'inline mx-4 text-xl', color: '#12344d' }}>
    <BsCalendar />
  </Icon>
);

const BirthdayIcon = () => (
  <Icon prop={{ className: 'inline mx-4 text-xl', color: '#12344d' }}>
    <FaBirthdayCake />
  </Icon>
);

const EmpDetails = () => {
  return (
    <div className='flex flex-col w-1/5 space-y-2'>
      <div className='w-full h-max-content bg-white shadow-2xl'>
        <div className='bg-gray-50 capitalize font-medium text-base p-3 border-2 border-gray-200 rounded-sm text-center'>
          <DetailsIcon />
          Details
        </div>
        <div className='table w-full p-1'>
          <div className='table-row-group'>
            <div className='table-row my-1'>
              <div className='table-cell font-semibold p-2'>
                <EmailIcon />
              </div>
              <div className='table-cell text-sm text-gray-500 p-2'>
                faridh@qburst.com
              </div>
            </div>
            <div className='table-row my-1'>
              <div className='table-cell font-semibold p-2'>
                <PhoneIcon />
              </div>
              <div className='table-cell text-sm text-gray-500 p-2'>
                8825976090
              </div>
            </div>
            <div className='table-row my-1'>
              <div className='table-cell font-semibold p-2'>
                <ExperienceIcon />
              </div>
              <div className='table-cell text-sm text-gray-500 p-2'>
                2 years 6 months
              </div>
            </div>
            <div className='table-row my-'>
              <div className='table-cell font-semibold p-2'>
                <CalenderIcon />
              </div>
              <div className='table-cell text-sm text-gray-500 p-2'>
                24 May 2021
              </div>
            </div>
            <div className='table-row my-1'>
              <div className='table-cell font-semibold p-2'>
                <LocationIcon />
              </div>
              <div className='table-cell text-sm text-gray-500 p-2'>
                Chennai One IT Sez
              </div>
            </div>
            <div className='table-row my-1'>
              <div className='table-cell font-semibold p-2'>
                <BirthdayIcon />
              </div>
              <div className='table-cell text-sm text-gray-500 p-2'>
                26 Sep 1996
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-max-content bg-white shadow-2xl'>
        <div className='bg-gray-50 capitalize font-medium text-base p-3 border-2 border-gray-200 rounded-sm text-center'>
          <ManagerIcon />
          Active PMs
        </div>
        <div className='m-auto pt-2 pb-3'>
          <NoData message="No Active PM's" />
        </div>
      </div>
    </div>
  );
};

export default EmpDetails;

import ProfileCard from './ProfileCard';
import ProfileTab from './ProfileTab';
import EmpDetails from './EmpDetails';

const Profile = () => {
  return (
    <div className='px-6 py-3'>
      <div className='w-full mb-2 text-lg'>
        <ul className='link m-0'>
          <li className='inline p-2'>Profile</li>
          <li className='inline p-2'>Sheik Faridh</li>
        </ul>
      </div>
      <div className='flex flex-row space-x-4 w-full'>
        <div className='flex flex-col space-y-2 w-4/5'>
          <ProfileCard />
          <ProfileTab />
        </div>
        <EmpDetails />
      </div>
    </div>
  );
};

export default Profile;

import { useHistory } from 'react-router-dom';
import { VscRocket } from 'react-icons/vsc';
import emptyState from '../../assets/image/notfound.png';
import Icon from '../../components/icon';

const Rocket = () => (
  <Icon prop={{ className: 'inline mx-1', color: '#fff' }}>
    <VscRocket />
  </Icon>
);

const NotFound = () => {
  const history = useHistory();

  return (
    <div className='flex flex-col content space-y-4 justify-center items-center w-full overflow-hidden'>
      <div className='w-full text-center'>
        <img
          className='inline w-2/5 h-auto rounded-full object-cover'
          src={emptyState}
          alt='404 Not Found'
        />
      </div>
      <div className='uppercase text-lg font-semibold'>
        <div className='space-color'>Looks like you are lost in Darkness</div>
      </div>
      <div className=''>
        <button className='primary' onClick={() => history.push('/a/')}>
          Go Home
          <Rocket />
        </button>
      </div>
    </div>
  );
};

export default NotFound;

import DSForm from './DSForm';
import StatusHistory from './StatusHistory';

const DailyStatus = () => {
  return (
    <div className='px-6 py-3 select-none'>
      <div className='w-full font-semibold text-lg'>Daily Status</div>
      <div className='flex flex-col p-3 space-y-4 w-full'>
        <DSForm />
        <StatusHistory />
      </div>
    </div>
  );
};

export default DailyStatus;

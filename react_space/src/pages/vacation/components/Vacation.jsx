import { useState } from 'react';
import Request from './Request';
import Track from './Track';

const tabLists = ['Request', 'Track'];

const Vacation = () => {
  const [tab, setTab] = useState(tabLists[0]);
  return (
    <div className='px-6 py-3'>
      <div className='w-full mb-2 text-lg'>
        <ul className='link m-0'>
          <li className='inline p-2'>Vacation</li>
          <li className='inline p-2 captialize'>{tab}</li>
        </ul>
      </div>
      <div className='w-full p-4 bg-white shadow-2xl rounded-md bg-gray-50'>
        <div className='flex flex-row justify-center space-x-4'>
          <div className='w-52 p-3 text-center bg-green-400 rounded shadow-md'>
            <div className='text-white font-semibold text-2xl'>12</div>
            <div className='text-white font-medium text-xs'>
              No of Vacations
            </div>
          </div>
          <div className='w-52 p-3 text-center bg-blue-400 rounded shadow-md'>
            <div className='text-white font-semibold text-2xl'>0</div>
            <div className='text-white font-medium text-xs'>
              No of Loss of Pay Token
            </div>
          </div>
        </div>
        <div className='flex flex-col items-start justify-between '>
          <ul className='tabs flex space-x-4 select-none' role='tablist'>
            {tabLists.map((list) => (
              <li
                key={list}
                className={`tab ${
                  tab === list
                    ? 'active font-bold'
                    : 'text-gray-400 border-gray-300 font-semibold'
                } p-2 cursor-pointer capitalize border-b-4 rounded-sm border-solid border-opacity-0 hover:border-opacity-50`}
                onClick={() => setTab(list)}
              >
                {list}
              </li>
            ))}
          </ul>
          <div className='p-2 w-full'>
            <div
              className={`tabPane ${tab === 'Request' ? 'block' : 'hidden'}`}
            >
              <Request />
            </div>
            <div className={`tabPane ${tab === 'Track' ? 'block' : 'hidden'}`}>
              <Track />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacation;

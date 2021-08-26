import { useState } from 'react';
import Overview from './Overview';
import Details from './Details';
import Logs from './Logs';
import Projects from './Projects';

const tabLists = ['Overview', 'Details', 'Projects', 'Logs'];

const ProfileTab = () => {
  const [tab, setTab] = useState(tabLists[0]);

  return (
    <div className='flex flex-col items-start justify-between w-full p-6 bg-white shadow-2xl rounded-md bg-gray-50'>
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
        <div className={`tabPane ${tab === 'Overview' ? 'block' : 'hidden'}`}>
          <Overview />
        </div>
        <div className={`tabPane ${tab === 'Details' ? 'block' : 'hidden'}`}>
          <Details />
        </div>
        <div className={`tabPane ${tab === 'Projects' ? 'block' : 'hidden'}`}>
          <Projects />
        </div>
        <div className={`tabPane ${tab === 'Logs' ? 'block' : 'hidden'}`}>
          <Logs />
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;

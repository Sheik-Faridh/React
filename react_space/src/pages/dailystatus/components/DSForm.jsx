import { useMemo } from 'react';
import { Select } from 'antd';

const getLastEightDays = () => {
  const today = new Date();
  let startDate = new Date(new Date().setDate(today.getDate() - 8));
  const lastEightDayLists = [];
  while (startDate <= today) {
    lastEightDayLists.push(startDate.toLocaleDateString());
    startDate.setDate(startDate.getDate() + 1);
  }
  return lastEightDayLists;
};

const getHoursList = () =>
  Array(17)
    .fill(0)
    .map((_, i) => (i >= 10 ? `${i}` : `0${i}`));

const activityType = [
  'Select',
  'Project management',
  'Training',
  'Architecting',
  'Requirements analysis',
  'System design',
  'Coding',
  'Graphic design',
  'Testing',
  'HTML/CSS',
  'Pre-sales',
  'Tech Support',
  'UX design',
  'Marketing',
  'Business Analysis',
  'Recruitment & HR',
  'Other',
];

const DSForm = () => {
  const lastEightDayLists = useMemo(() => getLastEightDays(), []);
  const hoursList = useMemo(() => getHoursList(), []);
  return (
    <div className='sm:w-full md:w-3/5 bg-gray-50 border-2 border-gray-100 rounded shadow-md select-none'>
      <form className='bg-white py-3 px-4'>
        <div className='grid grid-cols-2 mb-2 space-x-4'>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold required'>
              Date
            </label>
            <Select
              style={{ width: '100%' }}
              placeholder='Choose Date'
              showArrow={false}
            >
              {lastEightDayLists.map((d) => (
                <Select.Option key={d} value={d}>
                  {d}
                </Select.Option>
              ))}
            </Select>
          </div>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold required'>
              Project
            </label>
            <Select
              style={{ width: '100%' }}
              placeholder='Choose Project'
              showArrow={false}
            >
              <Select.Option value=''>N/A</Select.Option>
            </Select>
          </div>
        </div>
        <div className='grid grid-cols-2 mb-2 space-x-4'>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold required'>
              Activity Type
            </label>
            <Select
              style={{ width: '100%' }}
              placeholder='Choose Activity'
              showArrow={false}
            >
              {activityType.map((d) => (
                <Select.Option key={d} value={d}>
                  {d}
                </Select.Option>
              ))}
            </Select>
          </div>
          <div className='m-0'>
            <label className='block dark-blue my-1 font-semibold required'>
              Time
            </label>
            <div className='flex space-x-1'>
              <Select
                style={{ width: '50%' }}
                placeholder='Choose Hours'
                showArrow={false}
              >
                {hoursList.map((d) => (
                  <Select.Option key={d} value={d}>
                    {d}
                  </Select.Option>
                ))}
              </Select>
              <Select
                style={{ width: '50%' }}
                placeholder='Choose Minutes'
                showArrow={false}
              >
                <Select.Option value='00'>00</Select.Option>
                <Select.Option value='15'>15</Select.Option>
                <Select.Option value='30'>30</Select.Option>
                <Select.Option value='45'>45</Select.Option>
              </Select>
            </div>
          </div>
        </div>
        <div className='m-0'>
          <label className='block dark-blue my-1 font-semibold'>
            Activity Description
          </label>
          <textarea
            className='w-full p-2'
            rows='5'
            wrap='soft'
            placeholder='Use T# or t# in your description to indicate Redmine ticket/task. For example : T#1234'
          ></textarea>
          <p className='block text-gray-500 text-xs m-0'>
            Enter the actual number of hours against each of your project(s). If
            you're working on multiple projects, submit separate entry for each
            project.
            <span className='block'>
              If you're not assigned to a project, select the option "N/A" from
              Project drop down.
            </span>
            <span className='block'>
              You should book the time against a project if you are contributing
              your effort, whether you are allocated or not. If you have been
              working on the project regularly, ask the PM to formally allocate
              you.
            </span>
            Please make sure you're not booking time for organizational (non
            project) activities like pre-sales, trainings, your non project
            related self learning activity to any project.
          </p>
          <div className='mt-2 block text-gray-500 text-xs'>
            Also, if you are learning something, mention the platform name
            too.(Java, iPhone etc). Directions:
            <ul className='list-disc'>
              <li className='list-inside'>
                Do not include lunch time and long breaks greater than 15
                minutes.
              </li>
              <li className='list-inside'>
                You are expected to put in 8 hours a day.
              </li>
              <li className='list-inside'>
                However report actual hours worked whether it is lesser or
                greater than 8 hours.
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-2 text-center'>
          <button type='submit' className='primary'>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default DSForm;

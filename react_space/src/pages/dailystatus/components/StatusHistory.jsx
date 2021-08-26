import { Select } from 'antd';

const history = [
  {
    postedOn: '11/06/2021 18:14:30',
    message:
      'Designed and developed the Carousel component in React. Shared the Carousel component between two projects using Module Federation. Analyzed concept of dynamic and static imports.',
    postedFor: '11/06/2021',
    activityType: 'Coding',
    displayTimeSpent: '8:00',
  },
  {
    postedOn: '10/06/2021 19:37:08',
    message:
      'Transferred static CSS files from one project to another using the Module Federation concept.\nImplemented Tailwind CSS in Webpack.\nDeveloped carousel component in React',
    postedFor: '10/06/2021',
    activityType: 'Coding',
    displayTimeSpent: '8:00',
  },
  {
    postedOn: '09/06/2021 19:20:22',
    message:
      'Developed two apps as Host and Remote in React using Webpack 5.\nImplemented Module Federation concept.',
    postedFor: '09/06/2021',
    activityType: 'Training',
    displayTimeSpent: '8:00',
  },
  {
    postedOn: '08/06/2021 18:21:39',
    message:
      'Added validation to the forms using Formik library.\nAnalyzed Webpack tool configuration for React application.',
    postedFor: '08/06/2021',
    activityType: 'Coding',
    displayTimeSpent: '8:00',
  },
  {
    postedOn: '07/06/2021 18:37:54',
    message:
      'Designed and developed the edit screen with nested forms in React.\nHandled nested forms using Formik library.\nBuilt form with different fields.',
    postedFor: '07/06/2021',
    activityType: 'Coding',
    displayTimeSpent: '8:00',
  },
  {
    postedOn: '04/06/2021 18:31:43',
    message:
      'Analyzed some React unit testing libraries.\nLearned the basic concepts of web security.',
    postedFor: '04/06/2021',
    activityType: 'Coding',
    displayTimeSpent: '8:00',
  },
  {
    postedOn: '03/06/2021 19:29:18',
    message:
      'Prepared for the client interview. \nAttended client interview for the project Omron.',
    postedFor: '03/06/2021',
    activityType: 'Training',
    displayTimeSpent: '8:00',
  },
  {
    postedOn: '02/06/2021 19:18:31',
    message:
      'Learned basic concepts of TypeScript.\nPrepared for the client interview - Project Omron.',
    postedFor: '02/06/2021',
    activityType: 'Training',
    displayTimeSpent: '8:00',
  },
  {
    postedOn: '01/06/2021 19:04:27',
    message:
      'Analyzed the Advanced React patterns like Compound Components and Render Props.\nLearned about the Tailwind CSS for achieving responsive web design.',
    postedFor: '01/06/2021',
    activityType: 'Training',
    displayTimeSpent: '8:00',
  },
  {
    postedOn: '31/05/2021 18:44:26',
    message:
      'Developed the React list app with Redux and Redux-Thunk.\nTransformed the Income Tax Calculator app into Progressive Web App (PWA).\nCreated the new repo for Income Tax Calculator.',
    postedFor: '31/05/2021',
    activityType: 'Coding',
    displayTimeSpent: '8:00',
  },
  {
    postedOn: '28/05/2021 18:43:42',
    message:
      'Added functionality for calculating income tax based on the given net income.\nAttended "Back to Basics" training.\nDeveloped the React app to list the data from fake API service.',
    postedFor: '28/05/2021',
    activityType: 'Training',
    displayTimeSpent: '8:00',
  },
  {
    postedOn: '27/05/2021 18:57:34',
    message:
      'Developed the user interface for Income Tax Calculator in React using Tailwind CSS.\nImplemented Formik library for building forms in React.\nBuilt the React app using the TypeScript',
    postedFor: '27/05/2021',
    activityType: 'Coding',
    displayTimeSpent: '8:00',
  },
  {
    postedOn: '26/05/2021 18:32:42',
    message:
      'Developed the demo app in React using state management libraries like Valtio and Zustand.\nWorked on CV corrections.\nAttended Work from Home Guidelines training.',
    postedFor: '26/05/2021',
    activityType: 'Training',
    displayTimeSpent: '8:00',
  },
  {
    postedOn: '25/05/2021 18:21:10',
    message:
      'Prepared CV in the QB format and sent for verification.\nDeveloped the demo app in React without third party libraries for state management.\nAnalysed React state manager libraries.',
    postedFor: '25/05/2021',
    activityType: 'Training',
    displayTimeSpent: '8:00',
  },
  {
    postedOn: '24/05/2021 18:40:13',
    message:
      'Completed on-boarding formalities like updating documents, bank details, EPF, attending sessions and updating the profile in Space, etc.',
    postedFor: '24/05/2021',
    activityType: 'Training',
    displayTimeSpent: '8:00',
  },
];

const StatusHistory = () => {
  return (
    <div className='flex flex-col pb-4 border-2 light-gray rounded shadow-lg select-none'>
      <div className='flex justify-between px-6 py-4'>
        <div className='capitalize font-semibold text-lg'>My History</div>
        <Select
          style={{ width: '10%' }}
          placeholder='Choose Type'
          showArrow={false}
        >
          <Select.Option>All</Select.Option>
        </Select>
      </div>
      <div className='flex flex-col space-y-2 px-4'>
        {history.map((h, i) => (
          <div
            className='grid grid-cols-12 divide-x-2 divide-gray-200 py-3 px-5 bg-white border-2 border-gray-100 rounded shadow-lg'
            key={i}
          >
            <div className='col-start-1 col-end-3'>
              <div className='table space-color'>
                <div className='table-row-group'>
                  <div className='table-row'>
                    <div className='table-cell space-color font-semibold text-xs py-1'>
                      Date:
                    </div>
                    <div className='table-cell px-1'>
                      <label className='blue p-0.5 text-xs'>
                        {h.postedFor}
                      </label>
                    </div>
                  </div>
                  <div className='table-row'>
                    <div className='table-cell space-color font-semibold text-xs py-1'>
                      Posted at:
                    </div>
                    <div className='table-cell px-1'>
                      <label className='grey p-0.5 text-xs'>{h.postedOn}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-start-3 col-end-12 -ml-7'>
              <div className='px-2 text-sm font-semibold dark-blue whitespace-pre-line'>
                {h.message}
              </div>
            </div>
            <div className='col-start-12'>
              <div className='px-2 inline-block'>
                <div className='text-xs mb-0.5 text-gray-500 font-bold'>
                  {h.displayTimeSpent} hour(s)
                </div>
                <div className='text-xs mb-0.5 text-gray-500 font-semibold'>
                  {h.activityType}
                </div>
                <label className='text-xs yellow p-0.5'>Pending</label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusHistory;

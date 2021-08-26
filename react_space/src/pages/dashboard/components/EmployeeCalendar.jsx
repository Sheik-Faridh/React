import { Calendar } from 'antd';
import { BsCalendar } from 'react-icons/bs';
import Accordion from './Accordion';
import Icon from '../../../components/icon';

const CalendarIcon = () => (
  <Icon prop={{ className: 'inline mx-0.5 mb-1', size: '1.3em' }}>
    <BsCalendar />
  </Icon>
);

const EmployeeCalendar = ({ index }) => {
  const handler = (date) => {
    const month = new Date().getMonth();
    const dateMonth = date._d.getMonth();
    return !(month === dateMonth);
  };

  const header = () => {
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    return (
      <div className='flex justify-end mb-2'>
        <label className='inline grey px-3 py-1 font-semibold'>{month}</label>
        <label className='inline blue px-3 py-1 font-semibold'>
          {date.getFullYear()}
        </label>
      </div>
    );
  };

  return (
    <div className='bg-white w-full rounded shadow-md select-none'>
      <Accordion icon={<CalendarIcon />} name='Calendar' index={index}>
        <div className='p-4'>
          <Calendar headerRender={header} disabledDate={handler} />
        </div>
      </Accordion>
    </div>
  );
};

export default EmployeeCalendar;

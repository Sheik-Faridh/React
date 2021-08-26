import { FaBirthdayCake } from 'react-icons/fa';
import { AiTwotoneCrown } from 'react-icons/ai';
import Accordion from './Accordion';
import Icon from '../../../components/icon';

const BirthdayIcon = () => (
  <Icon prop={{ className: 'inline mx-0.5 mb-1', size: '1.3em' }}>
    <FaBirthdayCake />
  </Icon>
);

const CrownIcon = () => (
  <Icon
    prop={{
      className: 'inline -ml-2.5 mb-1 transform -rotate-45',
      size: '1.4em',
      color: '#FFD700',
    }}
  >
    <AiTwotoneCrown />
  </Icon>
);

const birthDayListData = [
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDAxOfSwQoM/view/profile',
    name: 'Nived',
    dob: '13 Jun',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgICgj8f0hAgM/view/profile',
    name: 'Sayooj',
    dob: '13 Jun',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDA__7k1wkM/view/profile',
    name: 'Ansula',
    dob: '13 Jun',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgICgzZnw8AoM/view/profile',
    name: 'Sharath',
    dob: '13 Jun',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDg7tqx4QoM/view/profile',
    name: 'Aneesh',
    dob: '14 Jun',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgICA6OCz7wgM/view/profile',
    name: 'Arun',
    dob: '14 Jun',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDAm5vI0AoM/view/profile',
    name: 'Athul',
    dob: '14 Jun',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDA9L7jkQsM/view/profile',
    name: 'Shelja',
    dob: '14 Jun',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIRCxIIRW1wbG95ZWUYxbGnAww/view/profile',
    name: 'Dilna',
    dob: '15 Jun',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDgktXd1woM/view/profile',
    name: 'Abhijith',
    dob: '15 Jun',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDgtrPSjAoM/view/profile',
    name: 'Akhila',
    dob: '15 Jun',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIQCxIIRW1wbG95ZWUYopooDA/view/profile',
    name: 'Sandeep',
    dob: '15 Jun',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgICgtKeXzwkM/view/profile',
    name: 'Dhanya',
    dob: '16 Jun',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDg1sag-AsM/view/profile',
    name: 'Akhil',
    dob: '17 Jun',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgICAnJitlwsM/view/profile',
    name: 'Abhishek',
    dob: '17 Jun',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgICgoLqnvAgM/view/profile',
    name: 'Saudath',
    dob: '19 Jun',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgICgs8mZmwoM/view/profile',
    name: 'Pavan',
    dob: '19 Jun',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIRCxIIRW1wbG95ZWUYraD5AQw/view/profile',
    name: 'Dipin',
    dob: '19 Jun',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgICAqIaQ8gsM/view/profile',
    name: 'Jeffy',
    dob: '19 Jun',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDgsvH21ggM/view/profile',
    name: 'Binil',
    dob: '19 Jun',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDAv7-AiAsM/view/profile',
    name: 'Tom',
    dob: '19 Jun',
  },
];

const BirthdayList = ({ index }) => {
  return (
    <div className='bg-white w-full rounded shadow-md select-none'>
      <Accordion
        icon={<BirthdayIcon />}
        name='Upcoming Birthdays'
        index={index}
      >
        <div className='flex flex-row justify-center flex-wrap gap-4 bg-white p-2'>
          {birthDayListData.map((e, i) => (
            <div
              key={i + 1}
              className='light-gray px-2 py-2 rounded shadow transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg'
            >
              <div className='w-75px h-100px min-h-100px max-h-100px'>
                <img
                  className='w-full h-full object-cover'
                  alt={`${e.name} pic`}
                  src={e.image}
                />
              </div>
              <div className='dark-blue text-xs font-medium text-center'>
                <CrownIcon /> {e.name}
              </div>
              <div className='dark-blue text-xs font-medium text-center'>
                {e.dob}
              </div>
            </div>
          ))}
        </div>
      </Accordion>
    </div>
  );
};

export default BirthdayList;

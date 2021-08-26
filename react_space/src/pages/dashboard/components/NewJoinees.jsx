import { GrUserNew } from 'react-icons/gr';
import Accordion from './Accordion';
import Icon from '../../../components/icon';

const NewJoineeIcon = () => (
  <Icon prop={{ className: 'inline mx-0.5 mb-1', size: '1.3em' }}>
    <GrUserNew />
  </Icon>
);

const newJoineesList = [
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDg_svRogkM/view/profile',
    name: 'Liji',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDg3vDGiwkM/view/profile',
    name: 'Vijaykumar',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDg3p-J_AsM/view/profile',
    name: 'Amal',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDgnuau7AkM/view/profile',
    name: 'Suraj',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDgvq660woM/view/profile',
    name: 'Vincy',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDg3oiZvgoM/view/profile',
    name: 'Mohammed',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDg3t2SygsM/view/profile',
    name: 'Mebin',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDg_ur20AkM/view/profile',
    name: 'Don',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDgvs7O1ggM/view/profile',
    name: 'Justin',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDgvs7O1goM/view/profile',
    name: 'Mansoor',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDg_suNrggM/view/profile',
    name: 'Siva',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDgzunQ3AgM/view/profile',
    name: 'Pourna',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDgnvrg3QgM/view/profile',
    name: 'Saffan',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDg3reUwAkM/view/profile',
    name: 'Bipinraj',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDgnrqd-QkM/view/profile',
    name: 'Sharon',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDg3reUwAsM/view/profile',
    name: 'Grinny',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDg3tzlxwkM/view/profile',
    name: 'Reshma',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDg9qe52AkM/view/profile',
    name: 'Ajay',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDg7sL4yQsM/view/profile',
    name: 'Sarath',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDgnuuuwAoM/view/profile',
    name: 'Sathya',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDgns_PpwgM/view/profile',
    name: 'Prabhakaran',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDgnuuuwAgM/view/profile',
    name: 'Vishnu',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDgrp-6vwoM/view/profile',
    name: 'Fuad',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDgnt_K4ggM/view/profile',
    name: 'Dinesh',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDg7vr1-woM/view/profile',
    name: 'Radhika',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDg7o7AmggM/view/profile',
    name: 'Gautham',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDgrorivwoM/view/profile',
    name: 'Rahul',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDg3raI1wgM/view/profile',
    name: 'Nithya',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDgnsrIlwsM/view/profile',
    name: 'Manasa',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDg3oyKggsM/view/profile',
    name: 'Sachin',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDg7pWblQsM/view/profile',
    name: 'Sheik',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDgroqHnwkM/view/profile',
    name: 'Michael',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDg3vS7yQsM/view/profile',
    name: 'Akhil',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDgrtLrjwkM/view/profile',
    name: 'Hari',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDg7qvLwggM/view/profile',
    name: 'Suhail',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDgntKd3AoM/view/profile',
    name: 'Nikhil',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDg7tqx4QoM/view/profile',
    name: 'Aneesh',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDgzuOBpAgM/view/profile',
    name: 'Ebin',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDgjorc0QkM/view/profile',
    name: 'Silpa',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDg7uv20goM/view/profile',
    name: 'Sony',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDg7trRmAsM/view/profile',
    name: 'Kiran',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDgrq72hAkM/view/profile',
    name: 'Sumi',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDgruKb1gkM/view/profile',
    name: 'Vidhya',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDgzuPeygsM/view/profile',
    name: 'Promod',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDgpraZswgM/view/profile',
    name: 'Arjun',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDgntC19QoM/view/profile',
    name: 'Deepak',
  },
  {
    image:
      'https://space.qburst.com//employee/ag5zfnFidXJzdC1zcGFjZXIVCxIIRW1wbG95ZWUYgIDg9pfQ2wgM/view/profile',
    name: 'Vinayak',
  },
];

const NewJoinees = ({ index }) => {
  return (
    <div className='bg-white w-full rounded shadow-md select-none'>
      <Accordion icon={<NewJoineeIcon />} name='New Joinees' index={index}>
        <div className='flex flex-row justify-center flex-wrap gap-4 bg-white p-2'>
          {newJoineesList.map((e, i) => (
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
                {e.name}
              </div>
            </div>
          ))}
        </div>
      </Accordion>
    </div>
  );
};

export default NewJoinees;

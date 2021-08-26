import { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { GrAddCircle } from 'react-icons/gr';

const dataIds = {
  'Project List': 'projectList',
  'Upcoming Birthdays': 'birthDayList',
  'World Clock': 'clock',
  Calendar: 'employeeCalendar',
  'New Joinees': 'newJoinees',
};

const Accordion = ({ icon, name, children, index }) => {
  const [active, setActive] = useState(true);

  return (
    <Draggable draggableId={dataIds[name]} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className='accordion'
          style={{ ...provided.draggableProps.style }}
        >
          <div
            {...provided.dragHandleProps}
            className='relative text-center py-1 px-2 bg-gray-50 rounded shadow-md w-full'
          >
            <div className='inline text-lg font-semibold dark-blue'>
              {icon}
              {name}
            </div>
            <div
              className='inline p-1 absolute items-center rounded right-2 bottom-1.5 cursor-pointer hover:bg-gray-200'
              onClick={() => setActive(!active)}
            >
              {active ? (
                <AiOutlineCloseCircle size='1.5em' />
              ) : (
                <GrAddCircle size='1.5em' />
              )}
            </div>
          </div>

          <div
            className={`duration-500 delay-200 p-2 ${
              active ? 'block' : 'hidden'
            }`}
          >
            {children}
          </div>
          {provided.placeholder}
        </div>
      )}
    </Draggable>
  );
};

export default Accordion;

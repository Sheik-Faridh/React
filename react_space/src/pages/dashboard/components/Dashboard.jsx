import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import ProjectList from './ProjectList';
import Clock from './Clock';
import NewJoinees from './NewJoinees';
import BirthdayList from './BirthdayList';
import EmployeeCalendar from './EmployeeCalendar';
import actions from '../../../store/dashboard/actions';
import '../styles/dashboard.css';

const dashBoardData = {
  projectList: (k, i) => <ProjectList key={k} index={i} />,
  birthDayList: (k, i) => <BirthdayList key={k} index={i} />,
  clock: (k, i) => <Clock key={k} index={i} />,
  employeeCalendar: (k, i) => <EmployeeCalendar key={k} index={i} />,
  newJoinees: (k, i) => <NewJoinees key={k} index={i} />,
};

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const Dashboard = () => {
  const dashboardState = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  const getList = (id) => dashboardState.align[id];

  const dragEndHandler = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const reOrderedData = reorder(
        getList(source.droppableId),
        source.index,
        destination.index
      );

      let updatedData =
        source.droppableId === 'right'
          ? { right: reOrderedData, left: dashboardState.align.left }
          : { right: dashboardState.align.left, left: reOrderedData };

      dispatch(actions.updateAlignment(updatedData));
    } else {
      const finalResult = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      );

      dispatch(
        actions.updateAlignment({
          left: finalResult.left,
          right: finalResult.right,
        })
      );
    }
  };

  return (
    <div className='dashboard-container px-6 py-3 select-none'>
      <div className='w-full font-semibold text-lg'>Dashboard</div>
      <DragDropContext onDragEnd={dragEndHandler}>
        <div className='flex p-3 w-full gap-4 md:flex-row sm:flex-col'>
          <Droppable droppableId='left'>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                className={`flex flex-col gap-4 md:w-1/2 sm:w-full ${
                  snapshot.isDraggingOver ? 'bg-indigo-50' : 'light-gray'
                }`}
              >
                {dashboardState.align.left.map((d, i) =>
                  dashBoardData[d](d, i)
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId='right'>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                className={`flex flex-col gap-4 md:w-1/2 sm:w-full ${
                  snapshot.isDraggingOver ? 'bg-indigo-50' : 'light-gray'
                }`}
              >
                {dashboardState.align.right.map((d, i) =>
                  dashBoardData[d](d, i)
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
};

export default Dashboard;

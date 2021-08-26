import types from './types';

const initialDashboardState = {
  align: {
    left: localStorage.getItem('align')?.left || [
      'projectList',
      // 'birthDayList',
    ],
    right: localStorage.getItem('align')?.right || [
      'clock',
      'employeeCalendar',
      // 'newJoinees',
    ],
  },
};

const reducer = (state = initialDashboardState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case types.ALIGN_POSITION:
      return { ...state, align: { ...payload } };
    default:
      return state;
  }
};

export default reducer;

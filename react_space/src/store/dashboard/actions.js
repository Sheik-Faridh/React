import types from './types';

const actions = {
  updateAlignment: (data) => ({
    type: types.ALIGN_POSITION,
    payload: data,
  }),
};

export default actions;

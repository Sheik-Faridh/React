import types from './types';

const initialState = {
  open: false,
  type: null,
};

const reducer = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case types.OPEN_QRCODE_MODAL:
    case types.OPEN_LOGOUT_POPUP:
      return { ...state, open: true, ...payload };
    case types.CLOSE_MODAL:
      return { ...state, open: false, ...payload };
    default:
      return state;
  }
};

export default reducer;

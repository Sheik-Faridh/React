import types from './types';

const actions = {
  openQRcodeModal: () => ({
    type: types.OPEN_QRCODE_MODAL,
    payload: {
      type: 'QR_CODE',
    },
  }),

  closeModal: () => ({
    type: types.CLOSE_MODAL,
    payload: {
      type: null,
    },
  }),

  openLogoutPopup: () => ({
    type: types.OPEN_LOGOUT_POPUP,
    payload: {
      type: 'LOGOUT',
    },
  }),
};

export default actions;

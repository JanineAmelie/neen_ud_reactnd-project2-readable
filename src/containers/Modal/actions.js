// import * as postAPI from '../../services/postAPIs';
import { SET_MODAL_TO_SHOW, TOGGLE_MODAL } from './constants';

export const toggleModal = () => ({
  type: TOGGLE_MODAL,
});

export const setModalToShow = (payload) => ({
  type: SET_MODAL_TO_SHOW,
  payload,
});

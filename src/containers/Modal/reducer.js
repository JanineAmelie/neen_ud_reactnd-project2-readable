import produce from 'immer';
import { TOGGLE_MODAL, SET_MODAL_TO_SHOW } from '../../containers/Modal/constants';

const modalInitialStore = {
  modalIsOpen: false,
  modalToShow: '', // submitCommentModal, submitPostModal, editPostModal, editCommentModal
};

/*  disable rules in eslint to accomodate immer */
/*  eslint-disable no-param-reassign */
/*  eslint-disable consistent-return */
/*  eslint-disable no-unused-vars */

const modal = produce((draft, action) => {
  if (!draft) {
    return modalInitialStore;
  }

  switch (action.type) {
    case SET_MODAL_TO_SHOW:
      draft.modalToShow = action.payload;
      break;
    case TOGGLE_MODAL:
      draft.modalIsOpen = !draft.modalIsOpen;
      break;
    default:
      return draft;
  }
});

export default modal;

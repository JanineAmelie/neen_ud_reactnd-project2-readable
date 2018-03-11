import produce from 'immer';
import { SET_DETAIL_ID, RECEIVE_DETAIL_POST } from './constants';

const detailInitialState = {
  id: '',
  currentDetail: {},
};

/*  disable rules in eslint to accomodate immer */
/*  eslint-disable no-param-reassign */
/*  eslint-disable consistent-return */
/*  eslint-disable no-unused-vars */
/*  eslint-disable default-case */


const detail = produce((draft, action) => {
  if (!draft) {
    return detailInitialState;
  }

  switch (action.type) {
    case SET_DETAIL_ID:
      draft.id = action.payload;
      break;
    case RECEIVE_DETAIL_POST:
      draft.categories = action.categories;
      break;
    default:
      return draft;
  }
});

export default detail;

import produce from 'immer';
import {
  RECEIVE_DETAIL_POST,
  LOADING_DETAIL_COMPLETE,
  LOADING_COMMENTS_COMPLETE,
  RECEIVE_COMMENTS,
  SET_CURRENT_DETAIL_DELETED,
  RESET_DETAIL_STATE,
  SET_DETAIL_ID,
} from './constants';
import utils from '../../utilities';

const detailInitialState = {
  detailId: '',
  detailIsDeleted: '',
  loadingDetail: true,
  loadingComments: true,
  comments: [],
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
      draft.detailId = action.payload;
      break;
    case RECEIVE_DETAIL_POST:
      if (utils.checkIfEmptyObject(action.payload)) {
        console.log('is Empty object!!/post does not exist: ');
        draft.detailIsDeleted = true;
      } else {
        console.log('Post is not deleted ');
        draft.detailIsDeleted = false;
      }
      break;
    case RECEIVE_COMMENTS:
      console.log('reducer:', action.payload)
      draft.comments = action.payload;
      break;
    case LOADING_DETAIL_COMPLETE:
      draft.loadingDetail = false;
      break;
    case LOADING_COMMENTS_COMPLETE:
      draft.loadingComments = false;
      break;
    case SET_CURRENT_DETAIL_DELETED:
      draft.detailIsDeleted = true;
      break;
    case RESET_DETAIL_STATE: // There has to be a better way to reset state :( returning initial state doesn't work
      draft.loadingDetail = true;
      draft.loadingComments = true;
      draft.detailId = '';
      draft.detailIsDeleted = '';
      draft.comments = [];
      break;
    default:
      return draft;
  }
});

export default detail;

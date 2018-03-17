import produce from 'immer';
import {
  RECEIVE_DETAIL_POST,
  LOADING_DETAIL_COMPLETE,
  LOADING_COMMENTS_COMPLETE,
  RECEIVE_COMMENTS,
  SET_CURRENT_DETAIL_DELETED,
  RESET_DETAIL_STATE,
} from './constants';

const detailInitialState = {
  currentDetail: '',
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
    case RECEIVE_DETAIL_POST:
      draft.currentDetail = action.payload;
      break;
    case RECEIVE_COMMENTS:
      draft.comments = action.payload;
      break;
    case LOADING_DETAIL_COMPLETE:
      draft.loadingDetail = false;
      break;
    case LOADING_COMMENTS_COMPLETE:
      draft.loadingComments = false;
      break;
    case SET_CURRENT_DETAIL_DELETED:
      draft.currentDetail.deleted = true;
      break;
    case RESET_DETAIL_STATE:
      console.log('foobar');
      draft.currentDetail = '';
      draft.loadingDetail = true;
      draft.loadingComments = true;
      draft.comments = [];
      break;
    default:
      return draft;
  }
});

export default detail;

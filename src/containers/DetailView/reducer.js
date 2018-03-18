import produce from 'immer';
import {
  RECEIVE_DETAIL_POST,
  LOADING_DETAIL_COMPLETE,
  SET_CURRENT_DETAIL_DELETED,
  RESET_DETAIL_STATE,
  SET_DETAIL_ID,

  LOADING_COMMENTS_COMPLETE,
  RECEIVE_COMMENTS,
  RECEIVE_DELETED_COMMENT,
  RECEIVE_NEW_COMMENT,
  RECEIVE_NEW_COMMENT_SCORE,
  SET_COMMENT_SORT_METHOD,
  GET_COMMENT_TO_EDIT,
  REMOVE_COMMENT_TO_EDIT,
  RECEIVE_EDITED_COMMENT,
} from './constants';
import utils from '../../utilities';

const detailInitialState = {
  detailId: '',
  detailIsDeleted: '',
  loadingDetail: true,
  loadingComments: true,
  commentSortMethod: 'timestamp', //  voteScore
  currentlyEditingComment: {},
  comments: [],
};
function commentToUpdate(comments, updatedCommentId) {
  return comments.findIndex((post) => post.id === updatedCommentId);
}

/*  disable rules in eslint to accomodate immer */
/*  eslint-disable no-param-reassign */
/*  eslint-disable consistent-return */
/*  eslint-disable no-unused-vars */
/*  eslint-disable default-case */


const detail = produce((draft, action) => {
  if (!draft) {
    return detailInitialState;
  }

  const indexOfCommentToUpdate = commentToUpdate(draft.comments, action.commentToEdit);

  switch (action.type) {
    // ----------------- DETAIL  ----------------------//
    case SET_DETAIL_ID:
      draft.detailId = action.payload;
      break;
    case RECEIVE_DETAIL_POST:
      draft.detailIsDeleted = !!utils.checkIfEmptyObject(action.payload);
      break;
    case LOADING_DETAIL_COMPLETE:
      draft.loadingDetail = false;
      break;
    case SET_CURRENT_DETAIL_DELETED:
      draft.detailIsDeleted = true;
      break;
    case RESET_DETAIL_STATE:
      //  @TODO: There has to be a better way to reset state :( returning initial state doesn't work??
      draft.loadingDetail = true;
      draft.loadingComments = true;
      draft.detailId = '';
      draft.detailIsDeleted = '';
      draft.comments = [];
      break;

    // ----------------- COMMENTS  ----------------------// @TODO: Move to own reducer
    case SET_COMMENT_SORT_METHOD:
      draft.commentSortMethod = action.payload;
      break;
    case RECEIVE_NEW_COMMENT:
      draft.comments.push(action.payload);
      break;
    case LOADING_COMMENTS_COMPLETE:
      draft.loadingComments = false;
      break;
    case RECEIVE_COMMENTS:
      draft.comments = action.payload;
      draft.loadingComments = false;
      break;
    case RECEIVE_DELETED_COMMENT:
      draft.comments[indexOfCommentToUpdate].deleted = true;
      break;
    case RECEIVE_NEW_COMMENT_SCORE:
      draft.comments[indexOfCommentToUpdate].voteScore = action.newScore;
      break;
    case GET_COMMENT_TO_EDIT:
      draft.currentlyEditingComment = draft.comments[indexOfCommentToUpdate];
      break;
    case REMOVE_COMMENT_TO_EDIT:
      draft.currentlyEditingComment = {};
      break;
    case RECEIVE_EDITED_COMMENT:
      draft.comments[indexOfCommentToUpdate] = action.payload;
      break;
    default:
      return draft;
  }
});

export default detail;

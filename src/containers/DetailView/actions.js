import * as getAPI from '../../services/getAPIs';

import {
  // detail constants
  SET_DETAIL_ID,
  RECEIVE_DETAIL_POST,
  RESET_DETAIL_STATE,
  LOADING_DETAIL_COMPLETE,
  SET_CURRENT_DETAIL_DELETED,

  // comment constants
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
import * as deleteAPI from '../../services/delAPIs';
import * as postAPI from '../../services/postAPIs';
import * as putAPI from '../../services/putAPIs';

import { incrementCommentCount, decrementCommentCount } from '../../containers/ListView/actions';

export const setDetailId = (payload) => ({
  type: SET_DETAIL_ID,
  payload,
});

//  --------- DETAIL ACTIONS & THUNKS -----------  //

export const fetchSinglePostDetail = (detailId) => (dispatch) => (
  getAPI
    .getSinglePost(detailId)
    .then((data) => dispatch(receiveSinglePost(data)))
    .then(dispatch(setLoadingDetailComplete()))
    .then(dispatch(fetchPostsComments(detailId)))
);

export const receiveSinglePost = (post) => ({
  type: RECEIVE_DETAIL_POST,
  payload: post,
});


export const resetDetailState = () => ({
  type: RESET_DETAIL_STATE,
});

export const setLoadingDetailComplete = () => ({
  type: LOADING_DETAIL_COMPLETE,
});

export const setCurrentDetailDeleted = () => ({
  type: SET_CURRENT_DETAIL_DELETED,
});

//  --------- COMMENTS ACTIONS & THUNKS -----------  //
export const setCommentSortMethod = (payload) => ({
  type: SET_COMMENT_SORT_METHOD,
  payload,
});

export const setLoadingCommentsComplete = () => ({
  type: LOADING_COMMENTS_COMPLETE,
});

export const receiveComments = (payload) => ({
  type: RECEIVE_COMMENTS,
  payload,
});


export const fetchPostsComments = (id) => (dispatch) => (
  getAPI
    .getPostComments(id)
    .then((data) => dispatch(receiveComments(data)))
    .then(dispatch(setLoadingCommentsComplete()))
);

export const deleteComment = (commentId, parentId) => (dispatch) => (
  deleteAPI
    .deleteComment(commentId)
    .then((data) => dispatch(receiveDeletedComment(data)))
    .then(() => dispatch(decrementCommentCount(parentId)))
);

export const receiveDeletedComment = (updatedPost) => ({
  type: RECEIVE_DELETED_COMMENT,
  commentToEdit: updatedPost.id,
});

export const receiveNewComment = (newPost) => ({
  type: RECEIVE_NEW_COMMENT,
  payload: newPost,
});

export const submitNewComment = (data) => (dispatch) => (
  postAPI
    .addNewCommentToPost(data.parentId, data.author, data.body)
    .then((data) => dispatch(receiveNewComment(data)))
    .then(() => dispatch(incrementCommentCount(data.parentId)))
);

export const updateCommentScore = (commentId, type) => (dispatch) => (
  postAPI
    .voteComment(commentId, type)
    .then((data) => dispatch(receiveNewCommentScore(data)))
);


export const receiveNewCommentScore = (updatedComment) => ({
  type: RECEIVE_NEW_COMMENT_SCORE,
  newScore: updatedComment.voteScore,
  commentToEdit: updatedComment.id,
});

export const removeCurrentlyEditingComment = () => ({
  type: REMOVE_COMMENT_TO_EDIT,
});


export const getCommentToBeEdited = (commentId) => ({
  type: GET_COMMENT_TO_EDIT,
  commentToEdit: commentId,
});

export const receiveNewEditedComment = (newComment) => ({
  type: RECEIVE_EDITED_COMMENT,
  payload: newComment,
  commentToEdit: newComment.id,
});

export const submitEditedComment = (data) => (dispatch) => {
  return (
    putAPI
      .editComment(data.id, data.timestamp, data.body)
      .then((data) => dispatch(receiveNewEditedComment(data)))
  );
}
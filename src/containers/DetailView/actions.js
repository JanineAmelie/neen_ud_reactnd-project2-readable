import * as getAPI from '../../services/getAPIs';

import {
  // detail constants
  SET_DETAIL_ID,
  RECEIVE_DETAIL_POST,
  RESET_DETAIL_STATE,
  LOADING_DETAIL_COMPLETE,
  LOADING_COMMENTS_COMPLETE,
  RECEIVE_COMMENTS,
  SET_CURRENT_DETAIL_DELETED,

  // comment constants
  RECEIVE_DELETED_COMMENT,
} from './constants';
import * as deleteAPI from '../../services/delAPIs';

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

export const deleteComment = (commentId) => (dispatch) => (
  deleteAPI
    .deleteComment(commentId)
    .then((data) => dispatch(receiveDeletedComment(data)))
);

export const receiveDeletedComment = (updatedPost) => ({
  type: RECEIVE_DELETED_COMMENT,
  commentToEdit: updatedPost.id,
});

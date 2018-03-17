import * as getAPI from '../../services/getAPIs';

import {
  SET_DETAIL_ID,
  RECEIVE_DETAIL_POST,
  RESET_DETAIL_STATE,
  LOADING_DETAIL_COMPLETE,
  LOADING_COMMENTS_COMPLETE,
  RECEIVE_COMMENTS,
  SET_CURRENT_DETAIL_DELETED,
} from './constants';

export const setDetailId = (payload) => ({
  type: SET_DETAIL_ID,
  payload,
});

export const fetchSinglePostDetail = (detailId) => (dispatch) => (
  getAPI
    .getSinglePost(detailId)
    .then((data) => dispatch(receiveSinglePost(data)))
    .then(dispatch(setLoadingDetailComplete()))
    .then(dispatch(fetchPostsComments(detailId)))
);

export const fetchPostsComments = (id) => (dispatch) => {
  console.log('thunk:', id);
  return (
    getAPI
      .getPostComments(id)
      .then((data) => dispatch(receiveComments(data)))
      .then(dispatch(setLoadingCommentsComplete()))
  );
}
export const receiveSinglePost = (post) => ({
  type: RECEIVE_DETAIL_POST,
  payload: post,
});

export const receiveComments = (payload) => {
  console.log('action:', payload);
  return ({
    type: RECEIVE_COMMENTS,
    payload,
  });
};

export const resetDetailState = () => ({
  type: RESET_DETAIL_STATE,
});

export const setLoadingDetailComplete = () => ({
  type: LOADING_DETAIL_COMPLETE,
});

export const setLoadingCommentsComplete = () => ({
  type: LOADING_COMMENTS_COMPLETE,
});

export const setCurrentDetailDeleted = () => ({
  type: SET_CURRENT_DETAIL_DELETED,
});


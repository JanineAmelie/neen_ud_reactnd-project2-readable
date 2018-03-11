import * as getAPI from '../../services/getAPIs';

import {
  SET_DETAIL_ID,
  RECEIVE_DETAIL_POST,
} from './constants';

export const setDetailId = (payload) => ({
  type: SET_DETAIL_ID,
  payload,
});

export const fetchSinglePostDetail_thenComments = (detailId) => (dispatch) => (
  getAPI
    .getSinglePost(detailId)
    .then((res) => res.json())
    .then((data) => dispatch(receiveSinglePost(data)))
    .then(console.log('made it this far'))
);

export const receiveSinglePost = (post) => ({
  type: RECEIVE_DETAIL_POST,
  post,
});


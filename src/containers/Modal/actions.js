// import * as postAPI from '../../services/postAPIs';
import { SET_MODAL_TO_SHOW, TOGGLE_MODAL } from './constants';

export const toggleModal = () => ({
  type: TOGGLE_MODAL,
});

export const setModalToShow = (payload) => ({
  type: SET_MODAL_TO_SHOW,
  payload,
});

// export const fetchInitialPosts = () => (dispatch) => (
//   getAPI
//     .getAllPosts()
//     .then((res) => res.json())
//     .then((data) => dispatch(receivePosts(data)))
// );
//
// export const receivePosts = (posts) => ({
//   type: RECEIVE_INITIAL_POSTS,
//   posts,
// });
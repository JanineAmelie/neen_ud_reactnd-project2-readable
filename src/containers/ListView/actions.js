import {
  RECEIVE_INITIAL_POSTS,
  RECEIVE_NEW_POST_SCORE,
  RECEIVE_DELETED_POST,
  RECEIVE_NEW_POST,
  RECEIVE_EDITED_POST,
  GET_POST_TO_EDIT,
  REMOVE_POST_TO_EDIT,
  FINISHED_LOADING_POSTS,
  INCREMENT_POST_COMMENT_COUNT,
  DECREMENT_POST_COMMENT_COUNT,
} from './constants';
import * as getAPI from '../../services/getAPIs';
import * as postAPI from '../../services/postAPIs';
import * as deleteAPI from '../../services/delAPIs';
import * as putAPI from '../../services/putAPIs';

export const fetchInitialPosts = () => (dispatch) => (
  getAPI
    .getAllPosts()
    .then((res) => res.json())
    .then((data) => dispatch(receivePosts(data))) //  @TODO COMBINE
    .then(() => dispatch(finishedLoadingPosts()))
);

export const finishedLoadingPosts = () => ({
  type: FINISHED_LOADING_POSTS,
});


export const receivePosts = (posts) => ({
  type: RECEIVE_INITIAL_POSTS,
  posts,
});

export const updatePostScore = (postId, type) => (dispatch) => (
  postAPI
    .votePost(postId, type)
    .then((res) => res.json())
    .then((data) => dispatch(receiveNewPostScore(data)))
);


export const receiveNewPostScore = (updatedPost) => ({
  type: RECEIVE_NEW_POST_SCORE,
  newScore: updatedPost.voteScore,
  postToEdit: updatedPost.id,
});


export const receiveDeletedPost = (updatedPost) => ({
  type: RECEIVE_DELETED_POST,
  postToEdit: updatedPost.id,
});


export const deletePost = (postId) => (dispatch) => (
  deleteAPI
    .deletePost(postId)
    .then((res) => res.json())
    .then((data) => dispatch(receiveDeletedPost(data)))
);

export const receiveNewPost = (newPost) => ({
  type: RECEIVE_NEW_POST,
  payload: newPost,
});

export const submitNewPost = (data) => (dispatch) => (
  postAPI
    .addNewPost(data.title, data.body, data.author, data.category)
    .then((data) => dispatch(receiveNewPost(data)))
);

export const getPostToBeEditedData = (id) => ({
  type: GET_POST_TO_EDIT,
  postToEdit: id,
});

export const removeCurrentlyEditingPost = () => ({
  type: REMOVE_POST_TO_EDIT,
});


export const receiveNewEditedPost = (newPost) => ({
  type: RECEIVE_EDITED_POST,
  payload: newPost,
  postToEdit: newPost.id,
});

export const submitEditedPost = (data) => (dispatch) => (
  putAPI
    .editPost(data.id, data.title, data.body)
    .then((data) => dispatch(receiveNewEditedPost(data)))
);

export const incrementCommentCount = (id) => ({
  type: INCREMENT_POST_COMMENT_COUNT,
  postToEdit: id,
});

export const decrementCommentCount = (id) => ({
  type: DECREMENT_POST_COMMENT_COUNT,
  postToEdit: id,
});

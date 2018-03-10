import { RECEIVE_INITIAL_POSTS, RECEIVE_NEW_POST_SCORE } from './constants';
import * as getAPI from '../../services/getAPIs';
import * as postAPI from '../../services/postAPIs';

export const fetchInitialPosts = () => (dispatch) => (
  getAPI
    .getAllPosts()
    .then((res) => res.json())
    .then((data) => dispatch(receivePosts(data)))
);

export const receivePosts = (posts) => ({
  type: RECEIVE_INITIAL_POSTS,
  posts,
});
export const updatePostScore = (postId, type) => (dispatch) => {
  return (
    postAPI
      .votePost(postId, type)
      .then((res) => res.json())
      .then((data) => dispatch(receiveNewPostScore(data)))
  );
};

export const receiveNewPostScore = (updatedPost) => {
  return ({
    type: RECEIVE_NEW_POST_SCORE,
    newScore: updatedPost.voteScore,
    postToEdit: updatedPost.id,
  });
};

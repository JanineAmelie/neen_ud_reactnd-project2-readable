/*  disable rules in eslint to accomodate immer */
/*  eslint-disable no-param-reassign */
/*  eslint-disable consistent-return */
/*  eslint-disable no-unused-vars */
/*  eslint-disable default-case */
import produce from 'immer';
import { RECEIVE_INITIAL_POSTS, RECEIVE_NEW_POST_SCORE } from './constants';

function postToUpdate(posts, updatedPostId) {
  return posts.findIndex((post) => post.id === updatedPostId);
}

const postsInitialState = {
  posts: [],
};

const posts = produce((draft, action) => {
  if (!draft) {
    return postsInitialState;
  }

  const indexOfPostToUpdate = postToUpdate(draft.posts, action.postToEdit);

  switch (action.type) {
    case RECEIVE_INITIAL_POSTS:
      draft.posts = action.posts;
      break;
    case RECEIVE_NEW_POST_SCORE:
      // console.log('REDUCER: update the score here of post:', action.postToEdit, 'with new Score:', action.newScore);
      // const theElem = draft.posts.findIndex((post) => post.id === action.postToEdit);
      // draft.posts[draft.posts.findIndex((post) => post.id === action.postToEdit)].voteScore = action.newScore;
      draft.posts[indexOfPostToUpdate].voteScore = action.newScore;
      break;
    default:
      return draft;
  }
});

export default posts;


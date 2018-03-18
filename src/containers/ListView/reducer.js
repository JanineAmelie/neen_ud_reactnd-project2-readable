/*  disable rules in eslint to accomodate immer */
/*  eslint-disable no-param-reassign */
/*  eslint-disable consistent-return */
/*  eslint-disable no-unused-vars */
/*  eslint-disable default-case */
import produce from 'immer';
import {
  RECEIVE_INITIAL_POSTS,
  RECEIVE_NEW_POST_SCORE,
  RECEIVE_DELETED_POST,
  RECEIVE_NEW_POST,
  GET_POST_TO_EDIT,
  REMOVE_POST_TO_EDIT,
  RECEIVE_EDITED_POST,
  FINISHED_LOADING_POSTS,
  DECREMENT_POST_COMMENT_COUNT,
  INCREMENT_POST_COMMENT_COUNT,
} from './constants';

function postToUpdate(posts, updatedPostId) {
  return posts.findIndex((post) => post.id === updatedPostId);
}

const postsInitialState = {
  loadingPosts: true,
  posts: [],
  currentlyEditingPost: {},
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
      draft.posts[indexOfPostToUpdate].voteScore = action.newScore;
      break;
    case RECEIVE_DELETED_POST:
      draft.posts[indexOfPostToUpdate].deleted = true;
      break;
    case RECEIVE_NEW_POST:
      draft.posts.push(action.payload);
      break;
    case GET_POST_TO_EDIT:
      draft.currentlyEditingPost = draft.posts[indexOfPostToUpdate];
      break;
    case RECEIVE_EDITED_POST:
      draft.posts[indexOfPostToUpdate] = action.payload;
      break;
    case REMOVE_POST_TO_EDIT:
      draft.currentlyEditingPost = {};
      break;
    case FINISHED_LOADING_POSTS:
      draft.loadingPosts = false;
      break;
    case INCREMENT_POST_COMMENT_COUNT:
      draft.posts[indexOfPostToUpdate].commentCount += 1;
      break;
    case DECREMENT_POST_COMMENT_COUNT:
      draft.posts[indexOfPostToUpdate].commentCount -= 1;
      break;
    default:
      return draft;
  }
});

export default posts;

// console.log('REDUCER: update the score here of post:', action.postToEdit, 'with new Score:', action.newScore);
// const theElem = draft.posts.findIndex((post) => post.id === action.postToEdit);
// draft.posts[draft.posts.findIndex((post) => post.id === action.postToEdit)].voteScore = action.newScore;


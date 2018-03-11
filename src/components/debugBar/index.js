import React from 'react';
import {
  getAllCategoryPosts,
  getAllCategories,
  getAllPosts,
  getSinglePost,
  getSingleCommentDetails,
  getPostComments,
} from '../../services/getAPIs';

import {
  votePost,
  voteComment,
  addNewPost,
  addNewCommentToPost,
} from '../../services/postAPIs';

import {
  deleteComment,
  deletePost,
} from '../../services/delAPIs';

function randomNumber() { return Math.floor(Math.random()* (999 - 100 + 1) + 100); }


const categories = ['react', 'redux', 'udacity'];
function randomCategory() { return categories[Math.floor(Math.random() * categories.length)] }
//  @TODO: delete methods not working properly? they dont set the flag to true or false... they actually delete it?
const DebugBar = () => (
  <div className="categories">
    <button onClick={() => getAllPosts()}> get all posts</button>
    <button onClick={() => getAllCategories()}>get all categories</button>

    <button onClick={() => getAllCategoryPosts('react')}> get all react posts</button>
    <button onClick={() => getAllCategoryPosts('redux')}> get all redux posts</button>
    <button onClick={() => getAllCategoryPosts('udacity')}> get all udacity posts</button>

    <button onClick={() => getSinglePost('8xf0y6ziyjabvozdd253nd')} > getPostDetails </button>
    <button onClick={() => getPostComments('8xf0y6ziyjabvozdd253nd')} > get all comments of post </button>

    <button onClick={() => votePost('8xf0y6ziyjabvozdd253nd', 'upVote')} > upvotePost </button>
    <button onClick={() => votePost('8xf0y6ziyjabvozdd253nd', 'downVote')} > downVotePost </button>

    <button onClick={() => voteComment('894tuq4ut84ut8v4t8wun89g', 'upVote')} > upvoteComment </button>
    <button onClick={() => voteComment('894tuq4ut84ut8v4t8wun89g', 'downVote')} > downvoteComment </button>
    <button onClick={() => getSingleCommentDetails('8tu4bsun805n8un48ve89')} > getSingleCommentDetails </button>

    <button onClick={() => addNewCommentToPost('8xf0y6ziyjabvozdd253nd', 'theSkull', `[${randomNumber()}]thisIsbodyText`)} > add comment to post</button>
    <button onClick={() => addNewPost(`TITLE #[${randomNumber()}]`, `[${randomNumber()}]thisIsbodyText`, `user[${randomNumber()}]`, randomCategory())}> Submit a new post </button>

    <button onClick={() => deleteComment('w0JPtThrxKBErzujoXt8e')}> Delete a comment </button>
    <button onClick={() => deletePost('8xf0y6ziyjabvozdd253nd')}> Delete a Post </button>
  </div>
);

export default DebugBar;
/* eslint-disable no-console */
const api = 'http://localhost:3001';

// @TODO: Put back dynamic token
// let token = localStorage.token;
// if (!token) {
//   localStorage.token = Math.random().toString(36).substr(-8);
//   token = localStorage.token;
// }

const headers = {
  Accept: 'application/json',
  Authorization: 'neen-authorized',
  'Content-Type': 'application/json',
};
//
// export const getAllPosts = () => (
//   fetch(
//     `${api}/posts`,
//     { headers }
//   )
// );

export const getAllPosts = () => (
  fetch(
    `${api}/posts`,
    { headers }
  )
);
//  export const fetchTodos = () => fetch('/api/todos');

export const getAllCategories = () => (
  fetch(
    `${api}/categories`,
    { headers }
  )
);

export const getAllCategoryPosts = (category) => {
  fetch(
    `${api}/${category}/posts`,
    { headers }
  )
    .then((res) => res.json())
    .then((data) => console.log(data.categories));
};

export const getSinglePost = (postId) => {
  fetch(
    `${api}/posts/${postId}`,
    { headers }
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
};

export const getSingleCommentDetails = (commentId) => {
  fetch(
    `${api}/comments/${commentId}`,
    { headers }
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
};

export const getPostComments = (postId) => {
  fetch(
    `${api}/posts/${postId}/comments`,
    { headers }
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
};

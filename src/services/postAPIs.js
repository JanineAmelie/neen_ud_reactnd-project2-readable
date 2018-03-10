/* eslint-disable space-in-parens,object-shorthand */
/* eslint-disable prefer-destructuring,no-console */

const nanoid = require('nanoid'); // @TODO: how to convert to Import statement ?
const api = 'http://localhost:3001';

// @TODO: Put back dynamic token
// let token = localStorage.token;
//
// if (!token) {
//   localStorage.token = Math.random().toString(36).substr(-8);
//   token = localStorage.token;
// }

const headers = {
  Accept: 'application/json',
  Authorization: 'neen-authorized',
  'Content-Type': 'application/json',
};


export const votePost = (postId, type) => {
  fetch(
    `${api}/posts/${postId}`,
    {
      headers,
      method: 'POST',
      body: JSON.stringify({
        option: type,
      }),
    }
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
};


export const voteComment = (commentId, type) => {
  fetch(
    `${api}/comments/${commentId}`,
    {
      headers,
      method: 'POST',
      body: JSON.stringify({
        option: type,
      }),
    }
  )
    .then((res) => res.json())
    .then((data) => console.log(data.voteScore));
};

export const addNewPost = (title, body, author, category) => {
  const newData = {
    id: nanoid(),
    timestamp: Date.now(),

    title: title,
    body: body,
    author: author,
    category: category,
  };

  fetch(
    `${api}/posts`,
    {
      headers,
      method: 'POST',
      body: JSON.stringify( newData ),
    }
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
};


export const addNewCommentToPost = (theId, theAuthor, body) => {
  console.log('parentId:', theId, 'author:', theAuthor, 'body:', body)
  const newData = {
    id: nanoid(),
    timestamp: Date.now(),
    body: body,
    author: theAuthor,
    parentId: theId,
  };

  fetch(
    `${api}/comments`,
    {
      headers,
      method: 'POST',
      body: JSON.stringify( newData ),
    }
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
};

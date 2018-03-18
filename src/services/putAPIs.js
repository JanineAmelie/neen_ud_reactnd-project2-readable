/* eslint-disable space-in-parens */

const api = 'http://localhost:3001';
const headers = {
  Accept: 'application/json',
  Authorization: 'neen-authorized',
  'Content-Type': 'application/json',
};

export const editComment = (commentId, timeStamp, newText) => {
  const newData = {
    timestamp: timeStamp,
    body: newText,
  };
  return (
    fetch(
      `${api}/comments/${commentId}`,
      {
        headers,
        method: 'PUT',
        body: JSON.stringify(newData),
      }
    )
      .then((res) => res.json())
  );
};


export const editPost = (postId, title, body) => {
  const newData = {
    title,
    body,
  };
  return (
    fetch(
      `${api}/posts/${postId}`,
      {
        headers,
        method: 'PUT',
        body: JSON.stringify( newData ),
      }
    )
      .then((res) => res.json())
  );
};

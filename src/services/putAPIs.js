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
    body: `${newText}`,
  };

  fetch(
    `${api}/comments/${commentId}`,
    {
      headers,
      method: 'POST',
      body: JSON.stringify( newData ),
    }
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
};

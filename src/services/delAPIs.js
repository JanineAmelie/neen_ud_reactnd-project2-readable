const api = 'http://localhost:3001';
const headers = {
  Accept: 'application/json',
  Authorization: 'neen-authorized',
  'Content-Type': 'application/json',
};

export const deleteComment = (commentId) => (
  fetch(
    `${api}/comments/${commentId}`,
    {
      headers,
      method: 'delete',
    }
  )
    .then((res) => res.json())
    .then((data) => console.log(data))
);

export const deletePost = (postId) => (
  fetch(
    `${api}/posts/${postId}`,
    {
      method: 'delete',
      headers,
    }
  )
);


export function deleteData(postId) {
  return fetch(`${api}/posts/${postId}`, {
    method: 'delete',
    headers,
  })
    .then((response) => response.json());
}

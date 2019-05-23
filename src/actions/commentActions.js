export const ADD_COMMENT = 'ADD_COMMENT';
export const addComment = (postIndex, comment) => ({
  type: ADD_COMMENT,
  payload: { postIndex, comment }
});

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = (postIndex, commentIndex) => ({
  type: DELETE_COMMENT,
  payload: { postIndex, commentIndex }
});

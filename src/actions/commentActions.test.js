import { ADD_COMMENT, DELETE_COMMENT, addComment, deleteComment } from './commentActions';

describe('comment actions tests', () => {

  it('adds a comment', () => {
    const result = addComment(1, 'this is a great post!');
    expect(result).toEqual({
      type: ADD_COMMENT,
      payload: {
        postIndex: 1,
        comment: 'this is a great post!'
      }
    });
  });

  it('deletes a comment', () => {
    const result = deleteComment(1, 2);
    expect(result).toEqual({
      type: DELETE_COMMENT,
      payload: {
        postIndex: 1,
        commentIndex: 2
      }
    });
  });
});

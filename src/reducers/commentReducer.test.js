import reducer from './commentReducer';
import { addComment, deleteComment, } from '../actions/commentActions';
import { removePost } from '../actions/postActions';

describe('comment reducer', () => {

  it('creates a comment', () => {
    const result = reducer({}, addComment(1, 'hi'));
    expect(result).toEqual({
      1: ['hi']
    });
  });

  it('adds another comment', () => {
    const startingState = {
      1: ['hi']
    };
    const result = reducer(startingState, addComment(1, 'bye'));
    expect(result).toEqual({
      1: ['hi', 'bye']
    });
  });

  it('deletes a comment', () => {
    const startingState = {
      1: ['hi', 'bye']
    };
    const result = reducer(startingState, deleteComment(1, 0));
    expect(result).toEqual({
      1: ['bye']
    });
  });


});

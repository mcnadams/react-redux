import reducer from './postReducer';
import { addPost, removePost, updatePost } from '../actions/postActions';

describe('post reducer tests', () => {
  
  it('creates a post', () => {
    const result = reducer([], addPost('hi', 'bye'));
    expect(result).toEqual([
      {
        title: 'hi',
        body: 'bye'
      }
    ]);
  });

  it('deletes a post', () => {
    const initialState = [
      {
        title: 'hi',
        body: 'bye'
      },
      {
        title: 'hello',
        body: 'goodbye'
      }
    ];
    const result = reducer(initialState, removePost(1));
    expect(result).toEqual([
      {
        title: 'hi',
        body: 'bye'
      }
    ]);
  });

  it('updates a post', () => {
    const initialState = [
      {
        title: 'hi',
        body: 'bye'
      },
      {
        title: 'hello',
        body: 'goodbye'
      }
    ];
    const result = reducer(initialState, updatePost(1, 'Actually hello again'));
    expect(result).toEqual([
      {
        title: 'hi',
        body: 'bye'
      },
      {
        title: 'hello',
        body: 'Actually hello again'
      }
    ]);
  });

});

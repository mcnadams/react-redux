import { ADD_POST, REMOVE_POST, addPost, removePost } from './postActions';

describe('blog tests', () => {

  it('can add a post', () => {
    const post = addPost('hi', 'bye');
    expect(post).toEqual({
      type: ADD_POST,
      payload: { title: 'hi', body: 'bye' }
    });
  });

  it('can remove a post', () => {
    const result = removePost();
    expect(result).toEqual({
      type: REMOVE_POST
    });
  });
  
});

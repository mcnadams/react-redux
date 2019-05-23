import { getComments } from './commentSelectors';

describe('comment selector tests', () => {

  it('get all comments for a post', () => {
    const state = {
      comments: { 
        1: ['hi', 'bye'],
        2: ['no'] 
      }
    };
    const result = getComments(state, 1);
    expect(result).toEqual(['hi', 'bye']);
  });

});

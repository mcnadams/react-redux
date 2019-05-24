import { getComments } from './commentSelectors';

describe('comment selector tests', () => {

  it('get all comments for a post', () => {
    const state = {
      comments: { 
        0: ['hi', 'bye'],
        1: ['no'] 
      }
    };
    const result = getComments(state, 0);
    expect(result).toEqual(['hi', 'bye']);
  });

});

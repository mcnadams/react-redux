import { getAllPosts, getPost } from './postSelectors';

describe('post selector tests', () => {

  it('gets all posts', () => {
    const state = {
      posts: [
        { title: 'first post', body: 'I am here' },
        { title: 'second post', body: 'I am not here' },
        { title: 'third post', body: 'I will be here' }
      ]
    };
    const result = getAllPosts(state);
    expect(result).toEqual([
      { title: 'first post', body: 'I am here', id: 0 },
      { title: 'second post', body: 'I am not here', id: 1  },
      { title: 'third post', body: 'I will be here', id: 2  }
    ]);
  });

  it('gets a post by index', () => {
    const state = {
      posts: [
        { title: 'first post', body: 'I am here' },
        { title: 'second post', body: 'I am not here' },
        { title: 'third post', body: 'I will be here' }
      ]
    };
    const result = getPost(state, 0);
    expect(result).toEqual({ title: 'first post', body: 'I am here', id: 0 });
  });

  
});


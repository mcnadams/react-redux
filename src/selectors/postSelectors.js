export const getAllPosts = (state) => {
  return state.posts.map((post, index) => ({ ...post, id: index }));
};

export const getPost = (state, id) => getAllPosts(state)[id];

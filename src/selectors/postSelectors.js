export const getAllPosts = (state) => {
  return state.posts.map((post, id) => ({ ...post, id }));
};

export const getPost = (state, id) => getAllPosts(state)[id];

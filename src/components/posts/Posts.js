import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function Posts({ posts, deletePost }) {

  const postList = posts.map(post => (
    <li key={post.id}>
      <Post post={post} deletePost={deletePost} />
    </li>
  ));

  return (
    <ul>
      {postList}
    </ul>
  );
  
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired,
  deletePost: PropTypes.func.isRequired
};

export default Posts;

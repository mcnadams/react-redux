import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaRegTrashAlt } from 'react-icons/fa';

function Post({ post, deletePost }) {
  return (
    <>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
      <FaRegTrashAlt onClick={deletePost.bind(null, post.id)} />
    </>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  deletePost: PropTypes.func.isRequired
};

export default Post;

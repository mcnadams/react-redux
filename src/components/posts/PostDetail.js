import React from 'react';
import PropTypes from 'prop-types';
import CreateComment from '../containers/CreateComment';

function PostDetail({ post }) {
  return (
    <section>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <CreateComment />
    </section>
  );
}

PostDetail.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default PostDetail;

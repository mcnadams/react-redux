import React from 'react';
import PropTypes from 'prop-types';
import CreateComment from '../../containers/CreateComment';
import Comments from '../../containers/CommentsByPost';

function PostDetail({ post }) {
  return (
    <section>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Comments id={post.id}/>
      <CreateComment id={post.id} />
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

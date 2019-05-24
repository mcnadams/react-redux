import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function Comments({ comments, deleteComment }) {
  const commentList = comments.map((comment, i) => (
    <li key={i}>
      <Comment comment={comment} commentId={i} deleteComment={deleteComment}/>
    </li>
  ));

  return (
    <ul>
      {commentList}
    </ul>
  );

}

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.string),
  deleteComment: PropTypes.func.isRequired
};

export default Comments;

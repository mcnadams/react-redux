import React from 'react';
import PropTypes from 'prop-types';
import { FaRegTrashAlt } from 'react-icons/fa';

function Comment({ commentId, comment, deleteComment }) {
  return (
    <section>
      <p>{comment}</p>
      <FaRegTrashAlt onClick={deleteComment.bind(null, commentId)} />
    </section>
  );
}

Comment.propTypes = {
  commentId: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired
};

export default Comment;

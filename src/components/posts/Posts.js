import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import styles from './PostForm.css'

function Posts({ posts, deletePost }) {

  const postList = posts.map(post => (
    <li key={post.id} className={styles.Post}>
      <Post post={post} deletePost={deletePost} className={styles.Post}/>
    </li>
  ));

  return (
    <ul className={styles.PostList}>
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

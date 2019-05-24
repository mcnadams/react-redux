import { connect } from 'react-redux';
import Posts from '../components/posts/Posts';
import { getAllPosts } from '../selectors/postSelectors';
import { removePost } from '../actions/postActions';

const mapStateToProps = state => ({
  posts: getAllPosts(state)
});

const mapDispatchToProps = dispatch => ({
  deletePost(id) {
    dispatch(removePost(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);

import { connect } from 'react-redux';
import CommentForm from '../components/comments/CommentForm';
import { addComment } from '../actions/commentActions';

const mapDispatchToProps = dispatch => ({
  onSubmit(id, comment) {
    dispatch(addComment(id, comment));
  }
});

export default connect(
  null, 
  mapDispatchToProps
)(CommentForm);

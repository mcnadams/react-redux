import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CommentForm extends PureComponent {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
  }

  state = {
    postIndex: decodeURIComponent(this.props.match.params.id),
    comment: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.postIndex, this.state.comment);
    this.setState({ comment: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea name='comment' value={this.state.comment} onChange={this.handleChange} />
        <button>Comment</button>
      </form>
    );
  }

}


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class PostForm extends PureComponent {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    title: '',
    body: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.title, this.state.body);
    this.setState({ title: '', body: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="title" value={this.state.title} onChange={this.handleChange} />
        <textarea name="body" value={this.state.body} onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    );
  }
}

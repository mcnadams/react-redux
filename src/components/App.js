import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import AllPosts from '../containers/AllPosts';
import CreatePost from '../containers/CreatePost';

export default function App() {
  return (
    <Router>
      <Route path='/' component={AllPosts} />
      <Route path='/createPost' component={CreatePost} />
    </Router>
  );
}

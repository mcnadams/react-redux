import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import AllPosts from '../containers/AllPosts';
import CreatePost from '../containers/CreatePost';
import DisplayPost from '../containers/DisplayPost';
import Home from '../containers/Home';

export default function App() {
  return (
    <Router>
      <Link to='/'>Home</Link>
      <Switch>
        <Route path='/posts/:id' component={DisplayPost} />
        <Route exact path='/' component={Home} />
        <Route path='/createPost' component={CreatePost} />
      </Switch>
    </Router>
  );
}

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import CreatePost from '../containers/CreatePost';
import DisplayPost from '../containers/DisplayPost';
import Home from '../containers/Home';

export default function App() {
  return (
    <Router>
      <Link to='/'>Home</Link>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/posts/:id' component={DisplayPost} />
        <Route path='/createPost' component={CreatePost} />
      </Switch>
    </Router>
  );
}

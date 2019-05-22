/* eslint-disable no-console */
import { createStore } from 'redux';
import { ADD_POST, REMOVE_POST, addPost, removePost } from './actions/postActions';


const initialState = {
  post: []
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return { ...state, post: action.payload };
    case REMOVE_POST:
      return { post: [] };
    default:
      return state;
  }
}

export const store = createStore(reducer);

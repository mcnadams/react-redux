import { ADD_COMMENT, DELETE_COMMENT } from '../actions/commentActions';
import { REMOVE_POST } from '../actions/postActions';

const initialState = {};

function removeComments(state, postId) {
  const newState = { ...state };
  delete newState[postId];
  return newState;
}

export default function commentReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_COMMENT:
      return { 
        ...state, 
        [action.payload.postIndex]: [
          ...(state[action.payload.postIndex] || []), 
          action.payload.comment
        ]
      };
    case DELETE_COMMENT:
      return {
        ...state,
        [action.payload.postIndex]: [
          ...state[action.payload.postIndex].slice(0, action.payload.commentIndex),
          ...state[action.payload.postIndex].slice(action.payload.commentIndex + 1)
        ]
      };
    case REMOVE_POST: 
      return removeComments(state, action.payload);
    default:
      return state;
  }
}

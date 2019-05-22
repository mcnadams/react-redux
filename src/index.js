/* eslint-disable no-console */
import { createStore } from 'redux';

const initialState = {
  drink: null,
  sandwich: null,
  chips: null
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_DRINK':
      return { ...state, drink: action.payload };
    case 'REMOVE_DRINK':
      return { ...state, drink: null };
    case 'ADD_CHIPS':
      return { ...state, chips: action.payload };
    case 'REMOVE_CHIPS':
      return { ...state, chips: null };
    case 'ADD_SANDWICH':
      return { ...state, sandwich: action.payload };
    case 'REMOVE_SANDWICH':
      return { ...state, sandwich: null };
    default:
      return state;
  }
}

const store = createStore(reducer);

console.log('start:', store.getState());

store.dispatch({
  type: 'ADD_DRINK',
  payload: 'beer'
});
console.log('added beer:', store.getState());

store.dispatch({
  type: 'ADD_CHIPS',
  payload: 'kale chips'
});
console.log('added chips:', store.getState());

store.dispatch({
  type: 'ADD_SANDWICH',
  payload: 'hummus and veggies'
});
console.log('added sandwich:', store.getState());

store.dispatch({
  type: 'REMOVE_DRINK'
});
console.log('remove beer:', store.getState());

store.dispatch({
  type: 'REMOVE_CHIPS'
});
console.log('removed chips:', store.getState());

store.dispatch({
  type: 'REMOVE_SANDWICH'
});
console.log('removed sandwich:', store.getState());



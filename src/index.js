/* eslint-disable no-console */
import { createStore } from 'redux';
import { ADD_DRINK, REMOVE_DRINK, ADD_CHIPS, REMOVE_CHIPS, ADD_SANDWICH, REMOVE_SANDWICH } from './lunchActions';
import { addDrink, addChips, addSandwich, removeDrink, removeChips, removeSandwich } from './lunchActions';


const initialState = {
  drink: null,
  sandwich: null,
  chips: null
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DRINK:
      return { ...state, drink: action.payload };
    case REMOVE_DRINK:
      return { ...state, drink: null };
    case ADD_CHIPS:
      return { ...state, chips: action.payload };
    case REMOVE_CHIPS:
      return { ...state, chips: null };
    case ADD_SANDWICH:
      return { ...state, sandwich: action.payload };
    case REMOVE_SANDWICH:
      return { ...state, sandwich: null };
    default:
      return state;
  }
}

const store = createStore(reducer);

console.log('start:', store.getState());

store.dispatch(addDrink('beer'));
console.log('added beer:', store.getState());

store.dispatch(addChips('kale chips'));
console.log('added chips:', store.getState());

store.dispatch(addSandwich('hummus and veggie'));
console.log('added sandwich:', store.getState());

store.dispatch(removeDrink());
console.log('remove beer:', store.getState());

store.dispatch(removeChips());
console.log('removed chips:', store.getState());

store.dispatch(removeSandwich());
console.log('removed sandwich:', store.getState());



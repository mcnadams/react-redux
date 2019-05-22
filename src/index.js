/* eslint-disable no-console */
import { createStore } from 'redux';
import { addDrink, addChips, addSandwich, removeDrink, removeChips, removeSandwich } from './actions/lunchActions';
import reducer from './reducers/lunchReducer';

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



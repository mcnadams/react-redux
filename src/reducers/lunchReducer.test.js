import { addDrink, removeDrink, addSandwich, removeSandwich, addChips, removeChips } from '../actions/lunchActions';
import reducer from './lunchReducer';

describe('lunch reducer tests', () => {

  it('adds a drink', () => {
    const initialState = {
      drink: null
    };

    const updatedState = reducer(initialState, addDrink('water'));

    expect(updatedState).toEqual({
      drink: 'water'
    });
  });

});

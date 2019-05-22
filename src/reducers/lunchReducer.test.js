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

  it('removes a drink', () => {
    const initialState = {
      drink: 'water'
    };

    const updatedState = reducer(initialState, removeDrink());
    expect(updatedState).toEqual({
      drink: null
    });
  });

  it('adds chips', () => {
    const initialState = {
      chips: null
    };

    const updatedState = reducer(initialState, addChips('water'));
    expect(updatedState).toEqual({
      chips: 'water'
    });
  });

  it('removes chips', () => {
    const initialState = {
      chips: 'water'
    };

    const updatedState = reducer(initialState, removeChips());
    expect(updatedState).toEqual({
      chips: null
    });
  });

  it('adds a sandwich', () => {
    const initialState = {
      sandwich: null
    };

    const updatedState = reducer(initialState, addSandwich('water'));
    expect(updatedState).toEqual({
      sandwich: 'water'
    });
  });

  it('removes a sandwich', () => {
    const initialState = {
      sandwich: 'water'
    };

    const updatedState = reducer(initialState, removeSandwich());
    expect(updatedState).toEqual({
      sandwich: null
    });
  });

});

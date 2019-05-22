import { addDrink, ADD_DRINK, addSandwich, ADD_SANDWICH, addChips, ADD_CHIPS, REMOVE_DRINK, removeDrink, REMOVE_SANDWICH, removeSandwich, removeChips, REMOVE_CHIPS } from './lunchActions';

describe('lunch actions', () => {

  it('can add a drink', () => {
    const result = addDrink('beer');
    expect(result).toEqual({
      type: ADD_DRINK,
      payload: 'beer'
    });
  });

  it('can add chips', () => {
    const result = addChips('beer');
    expect(result).toEqual({
      type: ADD_CHIPS,
      payload: 'beer'
    });
  });

  it('can add a sandwich', () => {
    const result = addSandwich('beer');
    expect(result).toEqual({
      type: ADD_SANDWICH,
      payload: 'beer'
    });
  });

  it('can remove a drink', () => {
    expect(removeDrink()).toEqual({
      type: REMOVE_DRINK
    });
  });

  it('can remove chips', () => {
    expect(removeChips()).toEqual({
      type: REMOVE_CHIPS
    });
  });

  it('can remove a sandwich', () => {
    expect(removeSandwich()).toEqual({
      type: REMOVE_SANDWICH
    });
  });

});

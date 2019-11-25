// Two types of selectors
// 1. input selector - doesn't use createSelector
// 2. output selector - does use input selectors and createSelector
import { createSelector } from 'reselect';

// Input selector that is a function that gets the state and just returns the state.shop
const selectShop = state => state.shop;

// Output selector
export const selectCollections = createSelector(
	// Takes a collection (array) of input selectors as first argument
	// Takes a function that returns the value that we want out of the selector as second argument
	[selectShop],
	shop => shop.collections
);
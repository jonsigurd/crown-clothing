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

// Output selector that can convert our object of SHOP_DATA into an array
export const selectCollectionsForPreview = createSelector(
	// Returns createSelector call that gets selectCollections
	[selectCollections],
	// The method Object.keys gets us all of the keys of an object that we passed into it and gives it to us
	// in an array format. Here we get the keys off of our collections (these are hats, sneaker, jackets,
	// womens and mens)
	// We map over the array of keys and we'll give the key the collections at that key value (the data at
	// that key)
	// After making the initial state of collections = null, we now say that if collections is a null object,
	// then we want to return something different, so we say, if collections exists, tehn call object keys,
	// if it's false (null), then return an empty version of our collections (in this case it's an empty
	// array) 
	collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

// Output selector. We pass in the collectionUrlParam, which is a string, and we'll return
// cretaeSelector, which in this case is a function that returns another function
export const selectCollection = collectionUrlParam => createSelector(
	// Returns createSelector call that gets selectCollections
	[selectCollections],
	// This returns the corresponding collection in SHOP_DATA based on the string value of the url
	// If this collections object doesn't exist, we want to return what will be similar to the above. So if
	// collections exists, then return the collections with the collectionUrlParam, and if it doesn't, then
	// we return null. - It's better that we return null, so that the components that use this selector will
	// get a null object, and so they will naturally know that there is no data here
	collections => (collections ? collections[collectionUrlParam] : null)
);
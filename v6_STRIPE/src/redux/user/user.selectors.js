// Two types of selectors
// 1. input selector - doesn't use createSelector
// 2. output selector - does use input selectors and createSelector
import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
	// Instead of making an array, we can pass the selectors in as successive arguments like so:
	// selectUser,
	// selectCart
	[selectUser],
	(user) => user.currentUser
);
// Moving our state outside of our component into their own reducers, makes it easier to test later on
// Our INITIAL_STATE will point to the directory information inside directory.component.jsx
const INITIAL_STATE = {
	sections: [
		{
			title: 'hats',
			imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
			id: 1,
			linkUrl: 'shop/hats'
		},
		{
			title: 'jackets',
			imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
			id: 2,
			linkUrl: 'shop/jackets'
		},
		{
			title: 'sneakers',
			imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
			id: 3,
			linkUrl: 'shop/sneakers'
		},
		{
			title: 'womens',
			imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
			size: 'large',
			id: 4,
			linkUrl: 'shop/womens'
		},
		{
			title: 'mens',
			imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
			size: 'large',
			id: 5,
			linkUrl: 'shop/mens'
		}
	]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
	// Making switch statement on action.type and returning state by default
	switch(action.type) {
		default:
			return state;
	}
};

export default directoryReducer;
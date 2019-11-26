import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

// Now we just render a regular functional component, because we don't need access to state, and thus
// there is no need to use a class component
const Directory = ({ sections }) => (
	// Local state inside constructor is moved to directory.reducer.js (now we don't use class here)

	// Here we just pull sections off of our props that we get in here
	<div className='directory-menu'>
		{sections.map(({ id, ...otherSectionProps }) => (
			<MenuItem key={id} {...otherSectionProps} />
		))}
	</div>
);

// Here the createStructuredSelector call will automatically pass our top level state that we get as
// our mapStateToProps into each subsequent selector
const mapStateToProps = createStructuredSelector({
	// The props we want point to the correct selector now
	sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
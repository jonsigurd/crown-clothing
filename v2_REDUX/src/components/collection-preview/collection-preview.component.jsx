import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
	// In className='preview' we spread in all of the props from the item itself other than the id, because
	// we use it as the key and then spread wverything else in as a prop, which we then destructure auth
	// of our props object and use inside of our collection item (collection-item.component.jsx)
	<div className='collection-preview'>
		<h1 className='title'>{title.toUpperCase()}</h1>
		<div className='preview'>
			{items
				.filter((item, idx) => idx < 4)
				.map(({ id, ...otherItemProps }) => (
				<CollectionItem key={id} {...otherItemProps} />
				))}
			
		</div>
	</div>
)

export default CollectionPreview;
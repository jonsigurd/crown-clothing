import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './collection-preview.styles';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
	// In className='preview' we spread in all of the props from the item itself other than the id, because
	// we use it as the key and then spread wverything else in as a prop, which we then destructure auth
	// of our props object and use inside of our collection item (collection-item.component.jsx)
	// NOW INSTEAD OF THE ABOVE, we now just want the whole item (l.17), and call item.id for our key (l.18) and
	// pass item as the item instead of (...otherItemProps)
	<CollectionPreviewContainer>
		<TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
			{title.toUpperCase()}
		</TitleContainer>
		<PreviewContainer>
			{items
				.filter((item, idx) => idx < 4)
				.map((item) => (
				<CollectionItem key={item.id} item={item} />
				))}
		</PreviewContainer>
	</CollectionPreviewContainer>
)

export default withRouter(CollectionPreview);
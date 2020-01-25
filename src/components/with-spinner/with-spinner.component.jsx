import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

// This WithSpinner component will take some component and returns a new functional component (as
// Higher-Order Components do)
// This component will get an isLoading prop and then every other prop that the regular component being
// wrapped will expect
// This spinner is a loading component that will render while a page is loading, and if it's not loading, it
// will render the other component immediately
const WithSpinner = WrappedComponent => {
	// This makes it more explicit
	const Spinner = ({ isLoading, ...otherProps }) => {
		// Rendering either our spinner, depending on the isLoading prop, or else return the wrapped component
		// that we have, and pass it every other prop, except from the isLoading prop
		return isLoading ? (
			<SpinnerOverlay>
				<SpinnerContainer />
			</SpinnerOverlay>
		) : (
			<WrappedComponent {...otherProps} />
		);
	}
	return Spinner;	
};
// Our shop page will know, when our shop data is finished loading, so this will be called from there

export default WithSpinner;
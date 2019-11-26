import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

// Functional component that takes price as a prop
const StripeCheckoutButton = ({ price }) => {
	// Stripe wants the price in cents
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_6YiqjbdI0AB1J1fC8rx9OWFB';
	
	const onToken = token => {
		console.log(token);
		alert('Payment Successful');
	}
	
	return (
		<StripeCheckout 
			label='Pay Now'
			name='Crown Clothing'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	)
};

export default StripeCheckoutButton
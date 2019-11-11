import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
	constructor() {
		super();
		
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}
	
	handleSubmit = async event => {
		event.preventDefault();
		
		const { displayName, email, password, confirmPassword } = this.state;
		
		// If the inputted passwords don't match, we don't want to proceed
		if(password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}
		
		try {
			// We destructure user of the return of the await userAuth object
			// This creates a new user account associated with the specified email address and password
			// On successful creation of the user account, this user will also be signed in to the app
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			
			// When we get that object back, we await the below to finish
			await createUserProfileDocument(user, { displayName });
			
			// When it's finished, we setState to our initial state, where everything is empty
			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});
		} catch (error) {
			console.error(error);
		}
	};

	handleChange = event => {
		// We destructure auth of the event - the name and the value from the target
		const { name, value } = event.target;
		
		// Then dynamically set name to value as an object
		this.setState({ [name]: value });
	};
	
	render() {
		// Destructuring of the four values from our state
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className='sign-up'>
				<h2 className='title'>I do not have an account</h2>
				<span>Sign up with your email and password</span>
				<form className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput
						type='text'
						name='displayName'
						value={displayName}
						onChange={this.handleChange}
						label='Display Name'
						required
					/>
					<FormInput
						type='email'
						name='email'
						value={email}
						onChange={this.handleChange}
						label='Email'
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={password}
						onChange={this.handleChange}
						label='Password'
						required
					/>
					<FormInput
						type='password'
						name='confirmPassword'
						value={confirmPassword}
						onChange={this.handleChange}
						label='Confirm Password'
						required
					/>
				<CustomButton type='submit'> SIGN UP </CustomButton>
				</form>
			</div>
		)
	}
}

export default SignUp;
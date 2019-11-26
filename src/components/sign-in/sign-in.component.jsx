import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			email: '',
			password: ''
		};
	}
	
	handleSubmit = async event => {
		event.preventDefault();
		
		// We destructure auth of the event - the email and password of our state
		const { email, password } = this.state;
		
		try {
			// We await for auth.signinWithEmailAndPassword -  passing in email and password
			// This asyncronously signs in using an email and password
			await auth.signinWithEmailAndPassword(email, password);
			// On success, we clear our state
			this.setState({ emaol: '', password: ''})
		} catch (error) {
			console.log(error);
		}
		
		this.setState({ email: '', password: '' });
	};
	
	handleChange = event => {
		// We destructure auth of the event - the name and the value from the target
		const { value, name } = event.target;
		
		// Then dynamically set name to value as an object
		this.setState({ [name]: value });
	};
	
	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				
				<form onSubmit={ this.handleSubmit }>
					<FormInput
						name='email'
						type='email'
						value={this.state.email}
						handleChange={this.handleChange}
						label='email'
						required
					/>
					<FormInput
						name='password'
						type='password'
						value={this.state.password}
						handleChange={this.handleChange}
						label='password'
						required
					/>
					<div className='buttons'>
						<CustomButton type="submit"> Sign in </CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
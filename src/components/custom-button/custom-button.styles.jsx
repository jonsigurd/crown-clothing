// css allows us to write a block of css that we can pass in and render as css inside of any of our
// styled components
import styled, { css } from 'styled-components';

const buttonStyles = css`
	background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
	background-color: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
		border: none;
	}
`;

const googleSignInStyles = css`
	background-color: #4285f4;
	color: white;
	
	&.hover {
		background-color: #357ae8;
		border: none;
	}
`;

// Function that can be called inside the CustomButtonContainer component below to get the correct
// button styles
const getButtonStyles = props => {
	// Returning different styles depending on what we have
	// If isGoogleSignIn, then return googleSignInStyles
	if (props.isGoogleSignIn) {
		return googleSignInStyles;
	}
	
	// If not googleSignIn, then if inverted, return invertedButtonStyles, or otherwise just return the
	// regular buttonStyles
	return props.inverted ? invertedButtonStyles : buttonStyles;
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
	display: flex;
	justify-content: center;
	
	${getButtonStyles}
`;
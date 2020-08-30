// css allows us to write a block of css that we can pass in and render as css inside of any of our
// styled components (we actually don't need to use this, because we can use f.ex. as='div' or whatever
// we want to apply the same styles to)
import styled/*, { css }*/ from 'styled-components';
import { Link } from 'react-router-dom';

/*
// This is the code that we want more than once for our OptionLink and OptionDiv
const OptionContainerStyles = css`
	padding: 10px 15px;
	cursor: pointer;
`;
*/

export const HeaderContainer = styled.div`
	height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
	height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
	align-items: center;
	justify-content: flex-end;
`;

// As this contains the same styles as the div, we just juse this inside our component, but for the divs,
// we just write as='div' and that div will contain the same styles
export const OptionLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
`;

/*
// Uses the css component OptionContainerStyles
export const OptionDiv = styled.div`
	${OptionContainerStyles}
`;
*/
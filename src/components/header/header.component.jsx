  
import React from 'react';
// An higher order component that lets us modify our component to have access to things related to redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

const Header = ({ currentUser, hidden}) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
		</LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {currentUser ? (
				// We use as='div', because this is a div and it has the same styles as the OptionLink
        <OptionLink as='div' onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>
          SIGN IN
        </OptionLink>
      )}
			<CartIcon />
		</OptionsContainer>
		{
			hidden ? null :
			<CartDropdown />
		}
	</HeaderContainer>
);

// First connect argument (second in App.js)
// Here the createStructuredSelector call will automatically pass our top level state that we get as
// our mapStateToProps into each subsequent selector
const mapStateToProps = createStructuredSelector({
	// The props we want point to the correct selector now
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

// Taking the function that allows us to access the state as first parameter (our root reducer) - here we get the null value as currentUser
export default connect(mapStateToProps)(Header);
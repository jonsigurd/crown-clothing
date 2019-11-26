  
import React from 'react';
import { Link } from 'react-router-dom';
// An higher order component that lets us modify our component to have access to things related to redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
			<CartIcon />
    </div>
		{
			hidden ? null :
			<CartDropdown />
		}
  </div>
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
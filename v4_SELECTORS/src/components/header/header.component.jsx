  
import React from 'react';
import { Link } from 'react-router-dom';
// An higher order component that lets us modify our component to have access to things related to redux
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

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
// Function that returns an object, where the name of the prop is the prop we want to pass in and the value will be the value
// Here we destructure where we specify exactly what we want of the states user and cart (destructuring nested values)
const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
	// props that have the current state of user and cart
	currentUser,
	hidden
});

// Taking the function that allows us to access the state as first parameter (our root reducer) - here we get the null value as currentUser
export default connect(mapStateToProps)(Header);
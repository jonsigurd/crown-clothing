  
import React from 'react';
import { Link } from 'react-router-dom';
// An higher order component that lets us modify our component to have access to things related to redux
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
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
    </div>
  </div>
);

// First connect argument (second in App.js)
// Function that returns an object, where the name of the prop is the prop we want to pass in and the value will be the value - here we have state object as parameter (the root reducer)
const mapStateToProps = state => ({
	// Prop that has the value of currentUser as null from the reducer
	currentUser: state.user.currentUser
});

// Taking the function that allows us to access the state as first parameter (our root reducer) - here we get the null value as currentUser
export default connect(mapStateToProps)(Header);
import { connect } from 'react-redux';
import React from 'react';
import { fetchFavors } from '../../actions/favor_actions';
import { logout } from '../../actions/session_actions';

import Splash from './splash';


const mSTP = state => {
    return {
          loggedIn: state.session.isAuthenticated,
        favors: state.entities.favors,
        currentUser: state.session.user 
    }
}

const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout()),
        fetchFavors: () => dispatch(fetchFavors())
    }
}

export default connect(mSTP, mDTP)(Splash);
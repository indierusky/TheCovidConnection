// src/components/nav/navbar.js

import React from 'react';
import { Link } from 'react-router-dom'
import '../../session/navbar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div className="nav-btns">
                <button className="nav-btns-child"><Link to={'/profile'}>View Profile</Link></button>
                <button className="nav-btns-child-login" onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div className="nav-btns">
                {/* <Link to={'/signup'}>Signup</Link>
                <Link to={'/login'}>Login</Link> */}
                {this.props.sign}
                   
                   <br/>

                {this.props.log} 
                 
            </div>
        );
      }
  }

  render() {
      const logAbout = ( 
       
        <div  className="nav-abt">
         <button id = "news" className="nav-btns-child login-links"><Link to={'/'}>Home</Link></button>
         <button id = "abt" className="nav-btns-child-login login-links"><Link to={'/newsfeed'}>Newsfeed</Link></button> 
         </div>
         
  )
      return (
        <div className="nav-bar-top">
          <div className="nav-bar-left">
            {/* <img className="logo-header"  src="https://i.ibb.co/7XZkXFt/goldencclogo.png"/> */}
            { logAbout }
          </div>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;
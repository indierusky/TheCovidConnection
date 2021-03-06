// src/components/session/login_form.js

import React from 'react';
import { withRouter } from 'react-router-dom';
import { Icon, InlineIcon } from '@iconify/react';
import windowClose from '@iconify-icons/fa-solid/window-close';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/profile');
    }

    this.setState({errors: nextProps.errors})
  }


  componentWillUnmount(){
      
    this.props.clearSessionErrors();


  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };


      this.props.loginUser(user);
    
   
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form className="login-form-box" onSubmit={this.handleSubmit}>
          <center>Welcome to the Covid Connection! </center>
          <br/>

                <center><img className="logo-img"  src="https://i.ibb.co/bB4XFt6/goldencclogo-1.png"/></center>

            {/* <center><img className="logo-img"  src="https://i.ibb.co/5MynHJQ/Clogo3.png"/></center> */}
            

           
           <br/>
             
           <center> <div >Please  Login or {this.props.other}</div></center>
            
          <div onClick={this.props.closeModal} className="close-x"><Icon className="fstylet" icon={windowClose} /></div>
          {this.renderErrors()}
          <div className="login-form">
              <input type="text"
              className="form-input"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Enter Email"
              />
            <br/>
              <input type="password"
              className="form-input"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Enter Password"
              />
            <br/>
            <input className="submit-btn" type="submit" value="Submit" />
            
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
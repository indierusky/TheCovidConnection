import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCircle, faPlus, faBell, faNewspaper, faUser, faBars, faSignOutAlt, faUserPlus, faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import { Icon, InlineIcon } from '@iconify/react';
import firstAid from '@iconify-icons/openmoji/first-aid';
// npm install --save-dev @iconify/react @iconify-icons/ph
// import { Icon, InlineIcon } from '@iconify/react';
import firstAidLight from '@iconify-icons/ph/first-aid-light';


import '../splash/splash_nav.scss';



class SplashNav2 extends React.Component{
constructor(props){
super(props);

this.state ={

        notes: false,
        info: false,
        add: false,
        favors: false
        
}



this.showDropdown = this.showDropdown.bind(this);

this.renderForm = this.renderForm.bind(this);

this.logoutUser = this.logoutUser.bind(this);


}



showDropdown(field) {

    
        return e => {
            e.preventDefault();
            e.stopPropagation();
            this.setState({

                notes: false,
                info: false,
                add: false,
                favors: false

            })
            this.setState({[field]: !this.state[field]}, () => {
            if (this.state[field] === true) { 
                document.addEventListener('click', this.showDropdown);
             } else {
                document.removeEventListener("click", this.showDropdown) 

            }
            });
        }
    }







componentDidMount() {
        this.props.closeModal();
        this.props.fetchFavors();
    }

componentWillUnmount() {
        this.props.closeModal();
    }
    


logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }




    


renderForm(field) {
    if (this.props.modal === field) {
      return () => {
        this.props.closeModal();
      }
    }
    return () => this.props.openModal(field)
  }






render(){
    
const signUpOrProfile = this.props.loggedIn? (   <Link class="icon-link-splash" to={'/covid'} > <i class="fas fa-user icon-splash icon-fill">  <Icon className="first-aid-sp" icon={firstAidLight} /><span className="covid-corner span-profile"> Covid  Corner </span></i> </Link>):
  (this.props.sign);
const logInOrLogOut = this.props.loggedIn?  (<i class="fas fa-sign-in icon-splash icon-fill"  onClick={this.logoutUser}> <FontAwesomeIcon  icon={faSignOutAlt} /><span className="logout-splash"> Sign Out </span> </i> ): 
(this.props.log);
return (

    // <section className="navcontainer content">

       
   
    <header className="icon-container-splash">

    


        <div className="header-div header-div-1">
           <Link className="icon-link-splash" to={"/newsfeed"}> <i className="fas fa-home icon-splash icon-fill"> <span className="nav-menu-txt covid-news">Newsfeed</span><FontAwesomeIcon  icon={faNewspaper} /> </i></Link>
        </div>
     
        
        <div className="header-div">
         <Link className="icon-link-splash" to={"/"}>  <i class="fas fa-newspaper icon-splash icon-fill"><span className="nav-menu-txt news-home">Home</span> <FontAwesomeIcon  icon={faHome} /> </i> </Link>                
        </div>
  

      

    
        <div className="header-div header-splash-text">
          <h1 className="splash-head">  <span className="first-letter">C</span>ovid  <img className="logo-img-nav"  src="https://i.ibb.co/mRq0JL9/golddouble-C.png"/>   <span className="first-letter">C</span>onnection  </h1>
            {/* <h1 className="splash-head">  <img className="logo-img-nav"  src="https://i.ibb.co/ssyLXBJ/realcclogo.png"/>  Covid Connection  </h1> */}
            {/* <h1 className="splash-head">  <img className="logo-img-nav"  src="https://i.ibb.co/7XZkXFt/goldencclogo.png"/>  Covid Connection  </h1> */}
        </div>
          
          


    

      <div className="header-div">
     {signUpOrProfile}
    </div>
           

   
        <div className="header-div header-div-4">
      {logInOrLogOut}
        </div>         




{/* 
        <div className="mid">     
            <div onClick={this.showDropdown("favors")}>
                <span className="favor-button"> Favors </span>
            </div>
                

                    

                {this.state.favors ? this.favorMenu() : null}

    </div> */}







    </header>

 

    // </section>

   





);

}

}







export default withRouter(SplashNav2);
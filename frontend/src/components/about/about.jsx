import React from 'react';
import HospitalsNear from './hospitals_near'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch} from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { NavLink, Link } from 'react-router-dom';
import SplashNav2 from './profile_nav_container_sp';
import NavBarContainer from './navbar_container';


import './about.css';

class About extends React.Component {

     constructor(props){
        super(props)

        

      this.handleNav = this.handleNav.bind(this);


     }

    



  handleNav() {

     if (!this.props.loggedIn) {

        return <NavBarContainer />

     }else{

        return  <SplashNav2 />

     }





  }

    render() {

        const aboutNav = this.handleNav();
         
        return(
            <>
              <div> {aboutNav} </div>
            <div className="about">
                    <div className="about-header">
                        <h1> About The Developer </h1>
                        <h2> View more of my projects or contact me!</h2>
                    </div>
                    <div className="about-people">
                        

                        <div className="person-div">
                            <h2> Aaron Robinson </h2>
                            <div className="links">
                                <div className="link-text-image">
                                    <a href="https://github.com/indierusky"> 
                                        <FontAwesomeIcon className="about-lnks" icon={faGithub} />
                                        <p> Github </p>
                                    </a>
                                </div>
                                <div className="link-text-image">
                                     <a href="https://www.linkedin.com/in/aaron-robinson-258a77201/"> 
                                         <FontAwesomeIcon className="about-lnks" icon={faLinkedinIn} />
                                         <p> LinkedIn </p>
                                    </a>
                                </div>
                            </div>
                            <h4> Email: aaronjrobinson@hotmail.com </h4>
                            <h4> Phone: 347-664-0151</h4>
                            
                        </div>

                    
                  
                        
                    </div>
                    <Link id="back-link" to={'/'}>Back</Link>
                </div>
                </>

                
        )
    }
}

export default About;

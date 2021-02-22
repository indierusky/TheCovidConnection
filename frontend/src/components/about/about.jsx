import React from 'react';
import HospitalsNear from './hospitals_near'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch} from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { NavLink, Link } from 'react-router-dom';
import './about.css'

class About extends React.Component {

    render() {
         
        return(
            <div className="about">
                    <div className="about-header">
                        <h1> About The Developers </h1>
                        <h2> View more of our projects or contact us!</h2>
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

                
        )
    }
}

export default About;

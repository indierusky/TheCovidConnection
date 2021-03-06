import React from 'react';
import ProfileNavContainer from './profile_nav_container';
import {NavLink, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLifeRing, faHandsHelping, faPlus, faBell, faBars, faCircle, faTimes} from '@fortawesome/free-solid-svg-icons';
import FavorsReducer from '../../reducers/favors_reducer';
// import NavBarContainer from './../splash/profile_nav_container';
import NavBarContainer from './nav_container_profile.js';
// import NavBarNoLogoContainer from '../../session/navbar_no_logo_container';
import { Icon, InlineIcon } from '@iconify/react';
import emailIcon from '@iconify-icons/fxemoji/email';
import signOut20Regular from '@iconify-icons/fluent/sign-out-20-regular';
import ellipsisH from '@iconify-icons/fa-solid/ellipsis-h';




// import FavorItem from '../favors/favor_item';
class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favors: this.props.favors, 
                        notes: false, 
                        info: false, 
                        add: false,
                        showFavors: false  } 

        this.handleFavors = this.handleFavors.bind(this);
        this.handleNoFavors = this.handleNoFavors.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.showDropdown = this.showDropdown.bind(this);
        this.favorMenu = this.favorMenu.bind(this);
        this.showUserInfo = this.showUserInfo.bind(this);
        this.logoutUser  = this.logoutUser.bind(this);
    }




    showDropdown(field) {
        return e => {
            e.preventDefault();
            e.stopPropagation();
            this.setState({[field]: !this.state[field]}, () => {
            if (this.state[field] === true) { 
                document.addEventListener('click', this.showDropdown);
             } else {
                document.removeEventListener("click", this.showDropdown) 

            }
            });
        }
    }

    
    addMenu(){


return(

<section className="add-menu-items" >
 <h2 className="author-menu">  Create  <span className="menu-x" onClick={this.showDropdown("add")}> <FontAwesomeIcon icon={faTimes} /> </span> </h2>
    <hr />

    <div className="add-menu-list">

        
        <span className="add-menu-item" onClick={this.renderForm('favor')}>
        <span><FontAwesomeIcon icon={faHandsHelping} />Create Favor    
        <p className="add-menu-desc" > A member of CC can either request a favor when in need or keep record of something they 
        have done as a good deed. </p></span></span>

    </div>
    </section>

)

} 


    favorMenu(){

 if(this.props.favors.length === 0) return  null;
      
     
   const favors =  this.props.favors
                   .filter(favor => favor.favor_for_user_id === this.props.currentUser.id)
                    .map(favor => {
            
            return ( <span> {favor.favor_title} <br /></span> );
        })

      return (

            <section className="favor-menu-items" >
          <h2 className="author-menu">  Favors  <span className="menu-x" onClick={this.showDropdown("favors")}>  X </span> </h2>
         <div className="favor-menu-list">
            <div className="add-menu-item">
            <span className="favor-menu-list">  {favors} </span>

            </div>
        </div>
         </section>   
      )
    
    }



logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

    showUserInfo(){


return(

<section className="sidenav" >
  <section className="add-menu-items">
 <h2 className="author-menu">  Menu  <span className="menu-x" onClick={this.showDropdown("info")}>  <FontAwesomeIcon icon={faTimes} /> </span> </h2>
 <hr />
<div className="profile-menu-list" >
    <Link to="/profile" className="user-menu-link"> <span className="prof-info"> 
      <i className="fas fa-user-circle"> {this.props.currentUser.username} <p className="pi-style">See your profile </p></i></span></Link>
    
 <hr />

 <span > <Icon icon={emailIcon} />  <span className="email-info">{this.props.currentUser.email}</span></span>

 <hr />
  <span className="logout-menu" onClick={this.logoutUser}> <Icon className="log-men-door" icon={signOut20Regular} />
  <span className="lg-men">Log Out</span></span> 

</div>
</section>
</section> 


)

}

renderForm(field) {
    if (this.props.modal === field) {
      return () => {
        this.props.closeModal();
      }
    }
    return () => this.props.openModal(field)
  }

    componentDidMount() {
      console.log(this.props.currentUser.id)
      this.props.fetchFavors();
      this.state = this.props.favors;
      this.props.closeModal();
      // this.props.fetchFavorsForUser({ user_id: this.props.user_profile_id });
    }
    componentWillReceiveProps(newState) {
      this.setState({ favors: newState.favors });
    }


    componentDidUpdate(prevProps) {

 
   


        if (this.props.favors !== prevProps.favors) {

        

            const newFavors = this.props.favors;
            this.setState({ favors: newFavors })
        }


}


    componentWillUnmount() {
        this.props.closeModal();
    }
    // listOfRequest() {
    //   return this.props.favors[0].filter(favor => favor.favor_for_user_id === this.props.user_profile_id)
    // }
    renderForm(field) {
    if (this.props.modal === field) {
      return () => {
        this.props.closeModal();
      }
    }
    return () => this.props.openModal(field)
  }
    handleNoFavors(){
     
              if (!this.props.favors) return (
              <>
              {/* <ProfileNavContainer /> */}
              <div className="prof-nofavors"> We currently have no record of any favors by you.
                Click the add button to list any good deeds you have done lately </div>
              </>
    )}
  handleNoTakenFavors() {
    
    if (!this.props.favors) return (
      <>
        {/* <ProfileNavContainer /> */}
        <div className="prof-nofavors"> We currently have no record of any favors that you are working on for other users.
       </div>
      </>
    )
  }
  handleButtonName(favor) {
    if (favor.favor_status === "Doing") {
      return "This is Taken by you, " + favor.favor_by_username
      // return "This is Taken by you, " + favor.favor_by_username + ". Click here to mark complete."
    } else if (favor.favor_status === "Request") {
      return "Click to Accept Favor"
    } else {
      return "Debug this."
    }
  }
    handleTime(time){
    let currentDate = new Date(time);
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;
    return (
      <div className="date">
        <span> Date: {currentDate.toDateString()} </span>
        <span className="time-str"> Time: {hours} :{minutes} :{seconds} </span>
      </div>
    )
    }
    // .filter(favor => favor.favor_for_user_id === this.props.currentUser.id && favor.favor_status !== "Done")
  handleFavors() {
    if (this.props.favors) {
      return (
        <div className="small-prof-favors">
          {this.props.favors
            .filter(favor => favor.favor_for_user_id === this.props.currentUser.id && favor.favor_status !== "Done")
            .map((favor, idx) => {
              if ((!this.props.currentUser || (Object.keys(this.props.currentUser).length === 0))) {
                return <div className="favor-item" >
                  <h2 className="favor-header"> {favor.favor_title} </h2>
                  <p key={idx} className="favor-list"> {this.handleTime(favor.date)} </p>
                  <p className="favor-description"> {favor.favor_description}</p>
                  <p className="favor-for-text">For <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                  {/*NOTE: We may want to add a "this favor is being fulfilled by *username* here" */}
                  {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                  {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
                </div>
              } else if (favor.favor_for_user_id === this.props.currentUser.id && favor.favor_status === "Request") {
                return <div className="favor-item">
                  <h2 className="favor-header"> {favor.favor_title} </h2>
                  <p key={idx} className="favor-list"> {this.handleTime(favor.date)} </p>
                  <p className="favor-description"> {favor.favor_description}</p>
                  <p className="favor-for-text">For <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                  <p className="currently-fulfilling-none">This favor has not been taken yet</p>
                  {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                  <button className="map-button nav-btns-child-login" onClick={() => this.props.deleteFavor(favor)}>Delete</button>
                </div>
              } else if (favor.favor_for_user_id === this.props.currentUser.id && favor.favor_status === "Doing") {
                return <div className="favor-item">
                  <h2 className="favor-header"> {favor.favor_title} </h2>
                  <p key={idx} className="favor-list"> {this.handleTime(favor.date)} </p>
                  <p className="favor-description"> {favor.favor_description}</p>
                  <p className="favor-for-text">For <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                  <p id="currently-fulfilling">This favor has been accepted by <Link className="showLinksCurrently" to={`/user/${favor.favor_by_user_id}`} >{favor.favor_by_username}  </Link></p>
                  {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                  <button className="map-button nav-btns-child-login" onClick={() => this.props.updateFavor(favor)}>Click here to log favor as complete.</button>
                </div>
              } else if (favor.favor_by_user_id === this.props.currentUser.id && favor.favor_status === "Doing") {
                return <div className="favor-item">
                  <h2 className="favor-header"> {favor.favor_title} </h2>
                  <p key={idx} className="favor-list"> {this.handleTime(favor.date)} </p>
                  <p className="favor-description"> {favor.favor_description}</p>
                  <p className="favor-for-text">For <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                  <p id="currently-fulfilling">You are currently fulfilling this favor for {favor.favor_for_username}</p>
                  <button className="map-button nav-btns-child-login" onClick={() => this.props.updateFavor(favor)}>
                    Click here to undo accepting this favor.
                  </button>
                  {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
                </div>
              }
              else if (favor.favor_by_username) {
                return <div className="favor-item">
                  <h2 className="favor-header"> {favor.favor_title} </h2>
                  <p key={idx} className="favor-list"> {this.handleTime(favor.date)} </p>
                  <p className="favor-description">  {favor.favor_description}</p>
                  <p className="favor-for-text">For <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                  <p id="currently-fulfilling">This favor has been accepted by <Link className="showLinks" to={`/user/${favor.favor_by_user_id}`} >{favor.favor_by_username}  </Link></p>
                  {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                  {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
                </div>
              } else {
                return <div className="favor-item">
                  <h2 className="favor-header"> {favor.favor_title} </h2>
                  <p key={idx} className="favor-list"> {this.handleTime(favor.date)} </p>
                  <p className="favor-description">  {favor.favor_description}</p>
                  <p className="favor-for-text">For <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                  
                  {/* <p>This favor has been accepted by {favor.favor_by_username}</p> */}
                  <button className="map-button nav-btns-child-login" onClick={() => this.props.updateFavor(favor)}>Click here to accept favor</button>
                  {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
                  {/* <button className="map-button nav-btns-child-login" onClick={() => this.props.deleteFavor(favor)}>Delete</button> */}
                </div>

              }
            }
            )
          }
        </div>
      )
    }
  }
      // .filter(favor => favor.favor_by_user_id === this.props.currentUser.id && favor.favor_status !== "Done")
  handleTakenFavors() {
    if (this.props.favors) {
      return (
        <div className="small-prof-favors">
          {this.props.favors
            .filter(favor => favor.favor_by_user_id === this.props.currentUser.id && favor.favor_status !== "Done")
            .map((favor, idx) => {
              if ((!this.props.currentUser || (Object.keys(this.props.currentUser).length === 0))) {
                return <div className="favor-item" >
                  <h2 className="favor-header"> {favor.favor_title} </h2>
                  <p key={idx} className="favor-list"> {this.handleTime(favor.date)} </p>
                  <p className="favor-description"> {favor.favor_description}</p>
                  <p className= "favor-for-text">For <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                  {/*NOTE: We may want to add a "this favor is being fulfilled by *username* here" */}
                  {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                  {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
                </div>
              } else if (favor.favor_for_user_id === this.props.currentUser.id && favor.favor_status === "Request") {
                return <div className="favor-item">
                  <h2 className="favor-header"> {favor.favor_title} </h2>
                  <p key={idx} className="favor-list"> {this.handleTime(favor.date)} </p>
                  <p className="favor-description"> {favor.favor_description}</p>
                  <p className="favor-for-text">For <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                  <p className="currently-fulfilling-none">This favor has not been taken yet</p>
                  {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                  <button className="map-button nav-btns-child-login" onClick={() => this.props.deleteFavor(favor)}>Delete</button>
                </div>
              } else if (favor.favor_for_user_id === this.props.currentUser.id && favor.favor_status === "Doing") {
                return <div className="favor-item">
                  <h2 className="favor-header"> {favor.favor_title} </h2>
                  <p key={idx} className="favor-list"> {this.handleTime(favor.date)} </p>
                  <p className="favor-description"> {favor.favor_description}</p>
                  <p className="favor-for-text">For <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                  <p id="currently-fulfilling">This favor has been accepted by <Link className="showLinksCurrently" to={`/user/${favor.favor_by_user_id}`} >{favor.favor_by_username}  </Link></p>
                  {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                  <button className="map-button nav-btns-child-login" onClick={() => this.props.updateFavor(favor)}>Click here to log favor as complete.</button>
                </div>
              } else if (favor.favor_by_user_id === this.props.currentUser.id && favor.favor_status === "Doing") {
                return <div className="favor-item">
                  <h2 className="favor-header"> {favor.favor_title} </h2>
                  <p key={idx} className="favor-list"> {this.handleTime(favor.date)} </p>
                  <p className="favor-description"> {favor.favor_description}</p>
                  <p className="favor-for-text">For <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                  <p id="currently-fulfilling">You are currently fulfilling this favor</p>
                  <button className="map-button nav-btns-child-login" onClick={() => this.props.updateFavor(favor)}>
                    Click here to undo accepting this favor.
                  </button>
                  {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
                </div>
              }
              else if (favor.favor_by_username) {
                return <div className="favor-item">
                  <h2 className="favor-header"> {favor.favor_title} </h2>
                  <p key={idx} className="favor-list"> {this.handleTime(favor.date)} </p>
                  <p className="favor-description">  {favor.favor_description}</p>
                  <p id="currently-fulfilling">This favor has been accepted by <Link className="showLinks" to={`/user/${favor.favor_by_user_id}`} >{favor.favor_by_username}  </Link></p>
                  {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                  {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
                </div>
              } else {
                return <div className="favor-item">
                  <h2 className="favor-header"> {favor.favor_title} </h2>
                  <p key={idx} className="favor-list"> {this.handleTime(favor.date)} </p>
                  <p className="favor-description">  {favor.favor_description}</p>
                  <p className="favor-for-text">For <Link className="showLinks" to={`/user/${favor.favor_for_user_id}`} >{favor.favor_for_username}  </Link></p>
                  
                  {/* <p>This favor has been accepted by {favor.favor_by_username}</p> */}
                  <button className="map-button nav-btns-child-login" onClick={() => this.props.updateFavor(favor)}>Click here to accept favor</button>
                  {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
                  {/* <button className="map-button nav-btns-child-login" onClick={() => this.props.deleteFavor(favor)}>Delete</button> */}
                </div>

              }
            }
            )
          }
        </div>
      )
    }
  }
    render() {
      // const this_user_favors = this.listOfRequest();
        // const noFavors = this.handleNoFavors();
        // const hasFavors = this.handleFavors();
        const favors = (this.props.favors ? this.handleFavors() : this.handleNoFavors());
        const taken_favors = (this.props.favors ? this.handleTakenFavors() : this.handleNoTakenFavors());
      // if (!this.props.currentUser || (Object.keys(this.props.currentUser).length === 0)) {
      //   return (
      //     <h1>You are not logged in</h1>
      //   )
      // }

      if ((!this.props.currentUser || (Object.keys(this.props.currentUser).length === 0))) {

          return (
            <>
              <NavBarContainer />
            <div className="profile-view">
            {/* <div  className="banners">
                     <h3 className="covid-help">  Currently experiencing Covid symptoms?  Visit our info page for tips handling stress --
                       <NavLink to="/covid">Covid Help</NavLink> </h3>
                      <img className="support-banner" src="https://i.ibb.co/qxSdNMH/sustain-2.png" />
                      <img className="support-banner" src="https://i.ibb.co/10YkVyz/covidtips.png" />
                     <img className="support-banner" src="https://i.ibb.co/41BLxw2/covidflag.png" />
                     <img className="support-banner" src="https://i.ibb.co/LzLgWcc/connected-1.png" />https://i.ibb.co/1JDb3PM/connected-2.png
                     <img className="support-banner" src="https://i.ibb.co/1JDb3PM/connected-2.png" />
                      <img className="support-banner" src="https://i.ibb.co/gt2Lfs5/ccmessage-1.png" /> 
                       <img className="support-banner" src="https://i.ibb.co/6mFTFMS/ccmessage-2.png" />
                      <img className="support-banner" src="https://i.ibb.co/LpRyT28/staysafe.png" />

                      <img className="support-banner" src="https://i.ibb.co/KXzV90D/connected-3.png" />
                      <img className="support-banner" src="https://i.ibb.co/bbg6wy4/favorpic-1.png" />
              </div> */}
              
           

            <div className="prof-favors">
              <h1 className="profile-name-title">  Welcome {this.props.currentUser.username}!  </h1>
              {/* <h3 className="prof-fav-hd2"> These are the good deeds you have requested from others  </h3> <br /> */}
                
                <div className="favor-lst">
                    
                    <h2 className="prof-fav-hd"> <FontAwesomeIcon icon={faLifeRing} />  Requested Favors</h2>
                    <button className="favor-btn" onClick={this.renderForm('favor')}>
                      <img className="add-favor" src="https://cdn2.iconfinder.com/data/icons/vibrancie-health/30/health_002-medical-cross-hospital-first-aid-doctor-512.png" /> Add Favor</button>
                    {favors}
                </div>
                  <h2 className="prof-fav-hd"> <FontAwesomeIcon icon={faHandsHelping} />  Taken Favors</h2>
                  <div className="favor-lst">
                    {taken_favors}
                  </div>
                  <div className="small-prof-favors">
                {/* {this.handleFavors()}
                {this.handleNoFavors()} */}
              </div>
              </div>
               <div>
                        {/* <img className="banner" src="https://i.ibb.co/MSmtpdb/Stay.jpg" alt="covid help"/> */}
              </div>
              {/* {this.state.favors.map(favor => (
                <FavorItem key={favor.id} title={favor.title} />
              ))} */}
            </div>
            </>
          );
        } else {

            return (
              <>
                {/* <ProfileNavContainer /> */}
                <NavBarContainer/>
                <div className="profile-view">

                   <div className="profile-page-header"> 
                        <div className="mid">     
                              <div onClick={this.showDropdown("add")}>
                                  <button className="home-lk"><FontAwesomeIcon className="fstyle profile-plus" icon={faPlus}/></button>Request Favor
                              </div>  

                                {this.state.add ? this.addMenu() : null}
                  </div>

                <div  className="profile-header-mid"> 
                
                      <span className="favor-subhead">  {this.props.currentUser.username}'s Profile  </span>
                </div>

                <div className="profile-header-right" onClick={this.showDropdown("info")}>
                            <button className="home-lk-menu"><Icon icon={ellipsisH} />   Show Menu</button>

                            {this.state.info ? this.showUserInfo() : null}


                </div>
           

           </div>

                  {/* <div  className="banners">
                     <h3 className="covid-help">  Currently experiencing Covid symptoms?  Visit our info page for tips handling stress --
                       <NavLink to="/covid">Covid Help</NavLink> </h3>
                      <img className="support-banner" src="https://i.ibb.co/qxSdNMH/sustain-2.png" />
                      <img className="support-banner" src="https://i.ibb.co/10YkVyz/covidtips.png" />
                     <img className="support-banner" src="https://i.ibb.co/41BLxw2/covidflag.png" />
                     <img className="support-banner" src="https://i.ibb.co/LzLgWcc/connected-1.png" />https://i.ibb.co/1JDb3PM/connected-2.png
                     <img className="support-banner" src="https://i.ibb.co/1JDb3PM/connected-2.png" />
                      <img className="support-banner" src="https://i.ibb.co/gt2Lfs5/ccmessage-1.png" /> 
                       <img className="support-banner" src="https://i.ibb.co/6mFTFMS/ccmessage-2.png" />
                      <img className="support-banner" src="https://i.ibb.co/LpRyT28/staysafe.png" />

                      <img className="support-banner" src="https://i.ibb.co/KXzV90D/connected-3.png" />
                      <img className="support-banner" src="https://i.ibb.co/bbg6wy4/favorpic-1.png" />
              </div> */}
                  <div className="prof-favors">
                    {/* <h1 className="favor-title prof-title">  Welcome {this.props.currentUser.username}!  </h1> */}
                    <div className="two-lists">
                    {/* <h3 className="prof-fav-hd2"> These are the good deeds you have requested from others  </h3> <br /> */}
                    <div className="favor-lst-requests">
                      <div className="favor-request-boxes">
                          <h2 className="prof-fav-hd"> <FontAwesomeIcon icon={faLifeRing} />  Requested Favors</h2>
                          <div className="favor-button-and-text" onClick={this.renderForm('favor')}>
                          <button className="favor-btn" onClick={this.renderForm('favor')}> Favor
                              <img className="add-favor" src="https://cdn2.iconfinder.com/data/icons/vibrancie-health/30/health_002-medical-cross-hospital-first-aid-doctor-512.png" /> 
                          </button>
                          {/* <p id="add-favor-text">{"Ask Favor"}</p> */}
                        </div>
                      </div>
                      {favors}
                    </div>
                    
                    <div className="favor-lst-taken">
                        <h2 className="prof-fav-hd acceptance"> <FontAwesomeIcon icon={faHandsHelping} />  Accepted Favors</h2>
                        <div className="favor-button-and-text" onClick={this.renderForm('favor')}>
                          <div className="add-favor-ghost"></div>
                          
  
                        </div>
            
                      {taken_favors}
                    </div>
                  </div>

                  </div>
                  <div>
                    {/* <img className="banner" src="https://i.ibb.co/MSmtpdb/Stay.jpg" alt="covid help"/> */}
                  </div>
                  {/* {this.state.favors.map(favor => (
                    <FavorItem key={favor.id} title={favor.title} />
                  ))} */}
                </div>
              </>
            );

        }
      } 
}
export default Profile;
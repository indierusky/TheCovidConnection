import React from 'react';
import ProfileNavContainer from './profile_nav_container';
import {NavLink, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import FavorsReducer from '../../reducers/favors_reducer';
// import FavorItem from '../favors/favor_item';

// npm install --save @iconify/react @iconify-icons/jam
// import { Icon, InlineIcon } from '@iconify/react';
// import firstAid from '@iconify-icons/jam/first-aid';
// npm install --save @iconify/react @iconify-icons/openmoji
import { Icon, InlineIcon } from '@iconify/react';
import firstAid from '@iconify-icons/openmoji/first-aid';



class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.favors;
        this.handleFavors = this.handleFavors.bind(this);
        this.handleNoFavors = this.handleNoFavors.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.handleTime = this.handleTime.bind(this);
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
    handleButtonName(favor){
      if (favor.favor_status === "Doing") {
        return "Accepted Favor, Click to Undo"
      } else {
        return "Click to Accept Favor"
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
    handleFavors(){
    if(this.props.favors){
      return (
      <div className="prof-favors">
         {this.props.favors
          .filter(favor => favor.favor_for_user_id === this.props.currentUser.id)
          .map( (favor, idx) => {
            if ((!this.props.currentUser || (Object.keys(this.props.currentUser).length === 0))) {
              return <div className="favor-item" >
                 <h2 className="favor-header"> {favor.favor_title} </h2>
                <p key={idx} className="favor-list">  {favor.favor_description}</p>
                <p> {this.handleTime(favor.date)} </p>
                {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
              </div>
            } else if (favor.favor_for_user_id === this.props.currentUser.id && favor.favor_status === "Request") {
              return <div className="favor-item">
                 <h2 className="favor-header"> {favor.favor_title} </h2>
              <p key={idx} className="favor-list">  {favor.favor_description}</p>
              <p> {this.handleTime(favor.date)} </p>
              <p className="favor-list">This favor has not been taken yet</p>
              {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */ }
              <button className="map-button nav-btns-child-login" onClick={() => this.props.deleteFavor(favor)}>Delete</button>
          </div>
            } else if (favor.favor_for_user_id === this.props.currentUser.id && favor.favor_status === "Doing") {
              return <div className="favor-item">
                 <h2 className="favor-header"> {favor.favor_title} </h2>
                <p key={idx}  className="favor-list"> {this.handleTime(favor.date)} {favor.favor_description}</p>
                <p id="taken-favor">This favor has been taken by {favor.favor_by_username}</p>
                {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                <button className="map-button nav-btns-child-login" onClick={() => this.props.deleteFavor(favor)}>Delete</button>
              </div>
            }
            else if (favor.favor_for_user_id === this.props.currentUser.id) {
              return <div className="favor-item">
                 <h2 className="favor-header"> {favor.favor_title} </h2>
                <p key={idx} className="favor-list"> {this.handleTime(favor.date)} {favor.favor_description}</p>
                {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                <button className="map-button nav-btns-child-login" onClick={() => this.props.deleteFavor(favor)}>Delete</button>
              </div>
            }
            else if (favor.favor_by_user_id === this.props.currentUser.id) {
              return <div>
                 <h2 className="favor-header"> {favor.favor_title} </h2>
                <p key={idx} className="favor-list"> {this.handleTime(favor.date)} {favor.favor_description}</p>
                <p>For {favor.favor_for_username}</p>
                <button className="map-button nav-btns-child-login" ionClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button>
                {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
              </div>
            }
            else {
              return <div>
                 <h2 className="favor-header"> {favor.favor_title} </h2>
                <p key={idx} className="favor-list"> {this.handleTime(favor.date)} {favor.favor_description}</p>
                <p>This favor has been accepted by {favor.favor_by_username}</p>
                {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
              </div>
            }
          }
          )
        }
    </div>
      )}
      }
  handleTakenFavors() {
    if (this.props.favors) {
      return (
        <div className="prof-favors">
          {this.props.favors
            .filter(favor => favor.favor_by_user_id === this.props.currentUser.id)
            .map((favor, idx) => {
              if ((!this.props.currentUser || (Object.keys(this.props.currentUser).length === 0))) {
                return <div className="favor-item">
                  <h2 className="favor-header"> {favor.favor_title} </h2>
                  <p key={idx} className="favor-list"> {this.handleTime(favor.date)} {favor.favor_description}</p>
                  {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                  {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
                </div>
              } else if (favor.favor_for_user_id === this.props.currentUser.id) {
                return <div className="favor-item">
                   <h2 className="favor-header"> {favor.favor_title} </h2>
                  <p key={idx} className="favor-list"> {this.handleTime(favor.date)} {favor.favor_description}</p>
                  {/* <button onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button> */}
                  <button className="map-button nav-btns-child-login" onClick={() => this.props.deleteFavor(favor)}>Delete</button>
                </div>
              } else if (favor.favor_by_user_id === this.props.currentUser.id) {
              return <div className="favor-item">
               <h2 className="favor-header"> {favor.favor_title} </h2>
              <p key={idx} className="favor-list"> {this.handleTime(favor.date)} {favor.favor_description}</p>
              <p>You are currently fulfilling this favor for {favor.favor_for_username}</p>
              <button className="map-button nav-btns-child-login" onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button>
              {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
          </div>
            }
              else {
                return <div>
                   <h2 className="favor-header"> {favor.favor_title} </h2>
                  <p key={idx} className="favor-list"> {this.handleTime(favor.date)} {favor.favor_description}</p>
                  <button className="map-button nav-btns-child-login" onClick={() => this.props.updateFavor(favor)}>{this.handleButtonName(favor)}</button>
                  {/* <button onClick={() => this.props.deleteFavor(favor)}>delete</button> */}
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
          return (
            <>
            <ProfileNavContainer />
            <div className="profile-view">
              
           

            <div className="prof-favors">
              <h1 className="favor-title">  Welcome {this.props.currentUser.username}!  </h1>

              <div className="requests">
              <h3 className="prof-fav-hd2"> These are the good deeds you have requested from others  </h3> <br />
                <h2 className="prof-fav-hd"> <FontAwesomeIcon icon={faUser} />  Requested Favors</h2>
                <center> <button className="favor-btn" onClick={this.renderForm('favor')}>
                <Icon className="first-aid" icon={firstAid} /> Add Favor</button></center>
                <div className="favor-lst">
                      {favors}
                </div>
                </div>
                </div>
                <div className="prof-favors">
                  <h3 className="prof-fav-hd2"> These are the good deeds you have done for others  </h3> <br />

                  <h2 className="prof-fav-hd"> <FontAwesomeIcon  icon={faUser} />  Completed Favors</h2>
                  <div className="favor-lst">
                    {taken_favors}
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
export default Profile;
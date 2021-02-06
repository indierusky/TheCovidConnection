import React from 'react';
import ProfileNavContainer from '../profiles/profile_nav_container';
import NavBarContainer from './profile_nav_container_sp';

import ImageSlider from './image_slider';
import {SlideImages} from './slides';

import '../profiles/profile.css';
import './covid.css';

import { connect } from 'react-redux';
// import { fetchFavors, fetchFavorsForUser } from '../../actions/favor_actions';
// import { updateFavor, deleteFavor } from '../../actions/favor_actions';
// import NewsFeed from './newsfeed'
import {openModal, closeModal} from '../../actions/modal_actions';






class CovidHelp  extends React.Component {

constructor(props){
    super(props)

  this.state = { slideIndex: 1};


this.plusSlides = this.plusSlides.bind(this);
this.currentSlide = this.currentSlide.bind(this);
this.showSlides = this.showSlides.bind(this);
this.handleSlides = this.handleSlides.bind(this);
this.handleNav = this.handleNav.bind(this);


}

handleNav() {
        if (this.props.loggedIn ) {
            return <ProfileNavContainer /> 
        } else {
            return  <NavBarContainer /> 
        }
    }




handleSlides() {

return (
<>
<div className="slideshow-container">

  <div className="mySlides fade">
    <div className="numbertext">1 / 6</div>
    <img className="support-banner" src="https://i.ibb.co/SQLXj3y/1.png"/>
    <div className="text">Caption one</div>
  </div>

  <div className="mySlides fade">
    <div className="numbertext">2 / 6</div>
    <img className="support-banner" src=" https://i.ibb.co/fDdmsYj/2.png"/>
    <div className="text">Caption Two</div>
  </div>

  <div className="mySlides fade">
    <div className="numbertext">3 / 6</div>
    <img className="support-banner" src="https://i.ibb.co/r4g1jGw/3.png"/>
    <div className="text">Caption Three</div>
  </div>
   <div className="mySlides fade">
    <div className="numbertext">4 / 6</div>
    <img className="support-banner" src="https://i.ibb.co/fk1Rkdd/4.png"/>
    <div className="text">Caption Four</div>
  </div>

  <div className="mySlides fade">
    <div className="numbertext">5 / 6</div>
    <img className="support-banner" src="https://i.ibb.co/gFCy8ny/5.png"/>
    <div className="text">Caption Five</div>
  </div>

  <div className="mySlides fade">
    <div className="numbertext">6 / 6</div>
    <img className="support-banner" src="https://i.ibb.co/ZxttcGY/6.png"/>
    <div className="text">Caption Six</div>
  </div>


  <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
  <a className="next" onClick= {() => this.plusSlides(1)}>&#10095;</a>
</div>
<br />
 <div >
  <center> 
  <span className="dot" onClick= {() => this.currentSlide(1)}></span>
  <span className="dot" onClick={() => this.currentSlide(2)}></span>
  <span className="dot" onClick={() => this.currentSlide(3)}></span>
  <span className="dot" onClick={() => this.currentSlide(4)}></span>
  <span className="dot" onClick={() => this.currentSlide(5)}></span>
  <span className="dot" onClick={() => this.currentSlide(6)}></span>


  
  </center> 
</div> 
</>


)

}

showSlides(n) {

    let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if(slides.length > 0 ){
  if (n > slides.length) this.setState({slideIndex:  1})
  if (n < 1) this.setState({slideIndex: slides.length})
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
   if(slides[this.state.slideIndex-1] !== undefined) slides[this.state.slideIndex-1].style.display = "block";
   if(dots[this.state.slideIndex-1] !== undefined) dots[this.state.slideIndex-1].className += "active";
  
  }

// let i;
// // getElementsByClassName
//   const slides = document.getElementsByClassName("mySlides");
//   if(!slides.length) return null;
//  if(slides.length > 0){
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   this.setState({slideIndex: this.slideIndex+1});
//   if (this.state.slideIndex > slides.length) this.setState({slideIndex: 1})

  
//   slides[this.state.slideIndex-1].style.display = "block";
//   setTimeout(this.showSlides, 2000); // Change image every 2 seconds
//   }
}

// componentWillReceiveProps(newState) {
//       this.setState({slideIndex: newState.slideIndex, });
//     }
   


plusSlides(n) {

let current = this.state.slideIndex;
let next = current + n;
 this.setState({ slideIndex: next}) 
 this.showSlides(this.state.slideIndex);
}

// Thumbnail image controls
currentSlide(n) {

  this.setState({ slideIndex: n})
  this.showSlides(this.state.slideIndex);
}


render() {

 const slides = this.handleSlides();   


 const slideShow = this.showSlides(this.state.slideIndex);

 const  realNav =  this.handleNav();
return (

<>

<div>{realNav}</div> 

<div> {slides} </div>
{/* 
<div>
  <ImageSlider slides={SlideImages} />

</div> */}




{/* <div className="banners">

    <img className="support-banner" src="https://i.ibb.co/SQLXj3y/1.png"/>
    <img className="support-banner" src=" https://i.ibb.co/fDdmsYj/2.png"/>
    <img className="support-banner" src="https://i.ibb.co/r4g1jGw/3.png"/>
    <img className="support-banner" src="https://i.ibb.co/fk1Rkdd/4.png"/>
    <img className="support-banner" src="https://i.ibb.co/gFCy8ny/5.png"/>
    <img className="support-banner" src="https://i.ibb.co/ZxttcGY/6.png"/>
                          
</div> */}
</>





)




}










}

const mSTP = (state, ownProps) => {
  
  return {
    user_profile_id: ownProps.match.params.user_id,
    favors: state.entities.favors,
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session.user,
    modal: state.ui.modal,

  };
};

const mDTP = dispatch => {
  return {
    // fetchFavors: () => dispatch(fetchFavors()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    // fetchFavorsForUser: (user_id) => dispatch(fetchFavorsForUser(user_id)),
    // updateFavor: (favor) => dispatch(updateFavor(favor)),
    // deleteFavor: (favor_id) => dispatch(deleteFavor(favor_id))

  };
};


export default connect(mSTP, mDTP)(CovidHelp);

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

  this.state = { slideIndex: 1, 
                 slideIndexP: 1};


this.plusSlides = this.plusSlides.bind(this);
this.currentSlide = this.currentSlide.bind(this);
this.showSlides = this.showSlides.bind(this);
this.handleSlides = this.handleSlides.bind(this);
this.plusPreventSlides = this.plusPreventSlides.bind(this);
this.currentPreventSlide = this.currentPreventSlide.bind(this);
this.showPreventSlides = this.showPreventSlides.bind(this);
this.handlePreventSlides = this.handlePreventSlides.bind(this);
this.handleNav = this.handleNav.bind(this);


}

handleNav() {
       
            return  <NavBarContainer /> 
        
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


handlePreventSlides() {

return (
<>
<div className="slideshow-container-prevent">

  <div className="mySlidesp fade">
    <div className="numbertext">1 / 5</div>
    <img className="support-banner" src="https://i.ibb.co/jVgdNYb/rule1-1.jpg"/>
    <div className="text">Caption one</div>
  </div>

  <div className="mySlidesp fade">
    <div className="numbertext">2 / 5</div>
    <img className="support-banner" src=" https://i.ibb.co/BjyhR3y/rule2-1.jpg"/>
    <div className="text">Caption Two</div>
  </div>

  <div className="mySlidesp fade">
    <div className="numbertext">3 / 5</div>
    <img className="support-banner" src="https://i.ibb.co/GT2WkfN/rule2.jpg"/>
    <div className="text">Caption Three</div>
  </div>
   <div className="mySlidesp fade">
    <div className="numbertext">4 / 5</div>
    <img className="support-banner" src="https://i.ibb.co/3yNcMtk/rule4.jpg"/>
    <div className="text">Caption Four</div>
  </div>

  <div className="mySlidesp fade">
    <div className="numbertext">5 / 5</div>
    <img className="support-banner" src="https://i.ibb.co/n3GMmZh/rule5.jpg"/>
    <div className="text">Caption Five</div>
  </div>

  

  <a className="prev" onClick={() => this.plusPreventSlides(-1)}>&#10094;</a>
  <a className="next" onClick= {() => this.plusPreventSlides(1)}>&#10095;</a>
</div>
<br />
 <div >
  <center> 
  <span className="dotp" onClick= {() => this.currentPreventSlide(1)}></span>
  <span className="dotp" onClick={() => this.currentPreventSlide(2)}></span>
  <span className="dotp" onClick={() => this.currentPreventSlide(3)}></span>
  <span className="dotp" onClick={() => this.currentPreventSlide(4)}></span>
  <span className="dotp" onClick={() => this.currentPreventSlide(5)}></span>


  
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
  
  
   if(slides[this.state.slideIndex-1] !== undefined) slides[this.state.slideIndex-1].style.display = "block";
  
  }

}

  showPreventSlides(n) {

    let i;
  const slides = document.getElementsByClassName("mySlidesp");
  const dotps = document.getElementsByClassName("dotp");
  if(slides.length > 0 ){
  if (n > slides.length) this.setState({slideIndexP:  1})
  if (n < 1) this.setState({slideIndexP: slides.length})
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
   if(slides[this.state.slideIndexP-1] !== undefined) slides[this.state.slideIndexP-1].style.display = "block";
  
  }


}




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



plusPreventSlides(n) {

let current = this.state.slideIndexP;
let next = current + n;
 this.setState({ slideIndexP: next}) 
 this.showPreventSlides(this.state.slideIndex);
}

// Thumbnail image controls
currentPreventSlide(n) {

  this.setState({ slideIndexP: n})
  this.showPreventSlides(this.state.slideIndexP);
}


render() {

 const slides = this.handleSlides();   
 const preventSlides = this.handlePreventSlides();

 const slideShow = this.showSlides(this.state.slideIndex);
 const preventSlideShow = this.showPreventSlides(this.state.slideIndexP);

 const  realNav =  this.handleNav();
return (

<>
<section className="covid-help-page">
<div>{realNav}</div> 

<div className="covid-intro"> 
<h1 className="covid-title">  Welcome to the <span className="first-letter">C</span>ovid <span className="first-letter">C</span>orner!  </h1>
<h3 className="covid-subtitle"> The double golden <span className="first-letter">C</span> adorns every members profile symbolizing the golden rule we all follow. <br />
<span className="first-letter">CC</span> members are <span className="first-letter">C</span>ompassionate, <span className="first-letter">C</span>aring, <span className="first-letter">C</span>ourteous, <span className="first-letter">C</span>oncerned, <span className="first-letter">C</span>onsiderate, <span className="first-letter">C</span>omforting, 
<br /> <span className="first-letter">C</span>reative, <span className="first-letter">C</span>aptivating and <span className="first-letter">C</span>onquering the Corona virus with <span className="first-letter">C</span>ourage and <span className="first-letter">C</span>ommittment </h3>
 <h2 className="covid-subtitle"> This is our covid 19 resource page where you can find <br />
  vital information regarding the pandemic affecting our world.   </h2>


</div>

<div className="slide-header"> If you or anyone you know are currently feeling stressed or overwhelmed due to <br/> covid-19 related issues... 
 Here goes some really important tips on how to deal with things... </div>

<div> {slides} </div>

<div className="slide-header"> If you or anyone you know may have been exposed to someone who has covid-19 <br/> 
 Here goes some really important signs and symptoms to look out for... </div>

     <img className="symptom-banner" src="https://i.ibb.co/vHcZj21/symptoms.png"/>



<div className="slide-header prevent-header"> Here goes some tips on how to stay safe and prevent the spread of Covid 19 Remember to practice social <br/> distancing.
 Especially for anyone with children, if they are in school or travel outside please note... </div>

  <div> {preventSlides} </div>


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

</section>
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

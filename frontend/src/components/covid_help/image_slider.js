import React, {useState} from 'react';
import {SlideImages} from './slides';
// import{FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons';


const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const  length = SlideImages.length;


    const nextSlide = () => {

        setCurrent( current === length - 1 ? 0 : current + 1)

    }

     const prevSlide = () => {

        setCurrent( current === 0 ? length - 1 : current - 1)

    }

    if(!Array.isArray(slides) || slides.length <= 0) return null;


    return (
        <section className="slider">
        <FontAwesomeIcon icon={faArrowAltCircleLeft}  className="left-arrow" onClick={prevSlide} />  
        <FontAwesomeIcon icon={faArrowAltCircleRight}  className="right-arrow" onClick={nextSlide} />    
  
        {SlideImages.map((slide, index) =>   {

            return (

            <div className={index === current ? 'slide-active' : 'slide'} key= {index}>
              
              {index === current && (<img src={slide.image} alt="covid help" className= "image-slide"/>)}
               
                    
            </div>
            )


        }) }
       </section>
    )
}

export default ImageSlider

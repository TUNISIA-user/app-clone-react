import React from 'react';
import { SwiperSlide } from 'swiper/react';
 
import "./ShowUpdate.css";
import 'swiper/css';
const Card__Swiper = ({ img1, img2 }) => {
    return (
        <div className='siwp'>
            <div className='siwper-logo'>
                <img src={img1} alt="Logo"/>
            </div>
            <img src={img2} alt="Slide"/>
        </div>
    );
}

export default Card__Swiper;

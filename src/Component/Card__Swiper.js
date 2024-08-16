import React, { useEffect } from 'react';
import { SwiperSlide } from 'swiper/react';
 
import "./ShowUpdate.css";
import 'swiper/css';
import { useGlobalContext } from '../context/GlobalContext';


const Card__Swiper = ({ id,img1, img2 }) => {
 
    const Move = useGlobalContext()
 
      const Hadnel__button = ()=>{
        console.log(id)
        Move.dispatch({
            type : "COLSE__PER__ID" ,
            payload  : id ,
           })   

      }
    return (
        
        <div className='siwp'>
            <div className='siwper-logo' onClick={Hadnel__button}>
                <img src={img1} alt="Logo"/>
            </div>
            <img src={img2}  />
        </div>
    );
}

export default Card__Swiper;

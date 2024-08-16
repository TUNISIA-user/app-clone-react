import React from 'react';
import "./ShowUpdate.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card__Swiper from './Card__Swiper';
import { useGlobalContext } from '../context/GlobalContext';
const ShowUpdate = () => {
    let date = new Date();
    let hours = date.getHours();   
    let minutes = date.getMinutes(); 
    const Move  = useGlobalContext()
         console.log(Move)
 
         const close__all = ()=>{
            Move.dispatch({
                type : "CLOSE__ALL"
            })
         }

 

    return (
        <div className='container__app'>
            <div className='container__app_phone'>
                <div className='container__lvl1'>
                    <div className='container__lvl1__icon1'>
                        <span>{hours} : {minutes}</span>
                        <span className="material-symbols-outlined">image</span>
                    </div>
                    <div className='container__lvl1__icon2'>   
                        <span className="material-symbols-outlined">flight</span>
                        <span>20%</span>
                        <span className="material-symbols-outlined">battery_5_bar</span>
                    </div>
                </div>

                <div className='container__lvl2'>
                    <Swiper spaceBetween={30} slidesPerView={1}>
 
                    {Move.Container.map( (item) => {
                           return           <SwiperSlide>
                                    <Card__Swiper id={item.id} img1="https://cdn.pixabay.com/photo/2015/08/03/13/58/whatsapp-873316_1280.png"   img2={item.img} />
                               
                                   </SwiperSlide>

         } )}
                    </Swiper>
                 
   
                      
                </div>

              
                 {Move.Container.length>0 &&   
                     <div className='coantiner__button__delte__every__thing' onClick={close__all}> Close all</div>
                       }
            </div>
        </div>
    );
}

export default ShowUpdate;

import React, { useEffect } from 'react'
import "./Recenet.css"
import { useGlobalContext  } from '../context/GlobalContext'
import { Link } from 'react-router-dom'
const Recenet = () => {
    const Move = useGlobalContext()
    let date = new Date();
    let hours = date.getHours();   
    let minutes = date.getMinutes(); 
  return (
         <>
          <div className='recent__container'>
                      <br/>
             <div className='clone-app'>
                 {Move.Basket.map((item)=>{
                  return  <div className='clone-app-card'>
                    <h1>{item.numero}</h1>
                    <h1>{hours} : {minutes}</h1>
                       
                  </div>
                  
                 })}
             </div>

                <div className='login-get'>                                 
               <Link to={"/login"}>          <span class="material-symbols-outlined">radio_button_unchecked</span>                  </Link>
             </div>

          </div>
         </>
  )
}

export default Recenet
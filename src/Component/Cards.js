import React, { useEffect, useState } from 'react'
import "./Cards.css" 
import { useGlobalContext } from '../context/GlobalContext'
import { useNavigate } from 'react-router-dom'
const Cards = ({id,name,logored,numero}) => {
     const Nav = useNavigate()
    const [isopen,setisopen] = useState(false)
 
   const Handel__Click = ()=>{
    isopen ? setisopen(false)  :setisopen (true)
  
   }
   const Move = useGlobalContext();

   const removeItem = () => {
    Move.dispatch({
      type: 'REMOVE_ITEM_FROM_BASKET',
      payload__id: id,
    });
    Move.dispatch({
      type: 'REMOVE_ITEM_FROM_BASKET2',
      numero: numero,
    });

     
  };






  
const call__function = ()=>{
  console.log(id,name,logored,numero)
}



  const Update__to = ()=>{
Nav("/Update")
  }

    return (
       <> 
       <div className='Cards__container' onClick={Handel__Click}>
        <div className='logo'>{name}</div>
        <div className='log2'> <h2>{logored}</h2></div>
       </div>

       <div className='Cards__container2' style={isopen? {display:"flex"} : {display:"none"}}>
      <div >
      Mobile +216{numero}
        </div>

        <div className='container__call'>
        <span class="material-symbols-outlined" onClick={call__function}>call</span>
        <span class="material-symbols-outlined">chat_bubble</span>
        <span class="material-symbols-outlined"onClick={Update__to} >update</span>
        <span class="material-symbols-outlined"  onClick={removeItem} >remove</span>
        
        </div>
       </div>

       <br/>  
       </>
  )
}


export default Cards

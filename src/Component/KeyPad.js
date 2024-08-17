import React, { useState } from 'react'
import "./KeyPad.css"
import { Link } from 'react-router-dom'
import CardBootmom from './CardBootmom'
import "./CardBootom.css"
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context/GlobalContext'

const KeyPad = () => {
  const [data,setData] = useState("")
  const [open , setIsopen] = useState("none")
 const Handel = (x)=>{
 
  setData((prev)=>prev+x.target.value)
 }
 
 const bottom__bar  = ()=>{
  setIsopen("flex")
   
}
const Delete = ()=>{
   const    Update = data.slice(0, -1);
  setData(Update)
}
const Nav  =useNavigate ()
const goToContact =()=>{
  Nav("/phone")

}
let date = new Date();
let hours = date.getHours();   // Returns the hour (0-23)
let minutes = date.getMinutes(); // Returns the minutes (0-59)
let dat__min = {
  hours,
  minutes
}


const Move = useGlobalContext()
 

const Handel__Update = () => {
  console.log(Move.Container); // Log the current state of Container

  // Find the item with id 1 in the Container array
  const res = Move.Container.find((item) => item.id === 1);

  if (!res) {
    // If the item doesn't exist, dispatch the action to add it
    Move.dispatch({
      type: "PUSH_IMG_WITH_ID",
      payload: {
        id: 1,
        img: "/POINT/login.png"

              
      }
    });
  }  
};
// dont forget git push origin <name Branche> --force 
 
const Hand2 = () => {
 
  console.log(Move)
const res = Move.Container.find( (item) => item.id==2)
if(!res){
  Move.dispatch({
    type: "PUSH_IMG_WITH_ID2",
    payload: {
      id: 2,
      img: "/POINT/pciture__1.png"
    }
  });
} 
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const Handel__react__component =()=>{
  Move.dispatch({
    type: "RECENT",
    payload__data :  {
      id: getRandomNumber(1,434),
      number: data,
      dat__min,
    }
  })
  console.log(Move)
}
 
  return (
    <> 
    <div className='body__container__app__keyPad'> 
    <div className='container__keyPad'>   
 

    <div className='container__lvl1'>
        <div className='container__lvl1__icon1'>
            <span className='low__batteary'>{hours} : {minutes}</span>
            <span class="material-symbols-outlined">image</span>
                                              
        </div>
        <div className='container__lvl1__icon2'>   
            <span class="material-symbols-outlined">flight</span>
            <span className='low__batteary'>20%</span>
        <span class="material-symbols-outlined" >battery_5_bar</span>
      
        </div>
    </div>




    <div className='container__lvl2' style={{color:"white"}}>
   {data.length > 0 &&   <span class="material-symbols-outlined" onClick={bottom__bar}>add</span>   }
    <span class="material-symbols-outlined">search</span>
    <span class="material-symbols-outlined">more_vert</span>
     
    
    </div>




    
    <div className='container__lvl3'  > 
    <input 
  type="text" 
  style={data.length >= 8   ? { color: "green", background: "black", fontFamily: "sans-serif", fontSize: "35px" } 
    : { color: "red" ,   fontFamily: "cursive",fontSize:"35px"}} 
  id="container__lvl3__search" 
  value={data}
  
/>
   
    </div>



    <div className='container__lvl4'>
      <div className='container__lvl4__number'>


        <div className='n1'>  
        <button style={{borderRadius:"40px"}} value={"1"}  onClick={Handel}   >1</button>
        <button  style={{borderRadius:"40px"}}  value={"2"}  onClick={Handel}  >2</button>
        <button style={{borderRadius:"40px"}}   value={"3"}  onClick={Handel}   >3</button>
        </div>


        <div className='n2'> 
        <button style={{borderRadius:"40px"}}   value={"4"}   onClick={Handel}  >4</button>
        <button style={{borderRadius:"40px"}}  value={"5"}  onClick={Handel}   >5</button>
        <button  style={{borderRadius:"40px"}}   value={"6"}  onClick={Handel}   >6</button>
        </div>


        <div className='n3'> 
        <button style={{borderRadius:"40px"}}   value={"7"}   onClick={Handel}  >7</button>
        <button style={{borderRadius:"40px"}}  value={"8"}    onClick={Handel}  >8</button>
        <button style={{borderRadius:"40px"}}   value={"9"}   onClick={Handel}  >9</button>
         </div>


         <div className='n4'>
        <button value={"*"} style={{borderRadius:"40px"}}   onClick={Handel}  >*</button>
        <button value={"0"} style={{borderRadius:"40px"}}  onClick={Handel}   >0</button>
        <button value={"#"} style={{borderRadius:"40px"}}  onClick={Handel} >#</button>
                                       
       

        </div>
     
      </div>
    </div>


 
{data &&
    <div className='container__lvl5'>
    <div className='container__lvl5__x3'><span class="material-symbols-outlined" onClick={goToContact}>contacts</span></div>
    <div className='container__lvl5__x2'><span class="material-symbols-outlined" id='call' onClick={Handel__react__component} >call</span></div>
   
      <div className='container__lvl5__x1' onClick={Delete}  ><span class="material-symbols-outlined"  >backspace</span></div>
    
 
    </div>    }


    <div className='container__lvl6' >
      <Link to={"/Update"} style={{textDecoration:"none",color:"white"}} onClick={Handel__Update}>Update</Link>
      <Link to={"/recent"} style={{textDecoration:"none",color:"white"}}    >Recentes</Link>

      <Link to={"/phone"} style={{textDecoration:"none",color:"white"}}  onClick={Hand2} >contacts</Link>
      
    </div>


    <div className='container__lvl7'>
      <CardBootmom open = {open}  numero = {data}/>
    </div>
        

       <div className='conatiner__lvl8' style={{color:"white"}}>
      
       <Link to={"/ShowUpdate"}  style={{textDecoration:"none",color:"white"}}    >   <span class="material-symbols-outlined">menu</span> </Link>
 
       <Link to={"/login"}  style={{textDecoration:"none",color:"white"}}   >   <span class="material-symbols-outlined">circle</span> </Link>

       <span class="material-symbols-outlined">arrow_back_ios</span>

       </div>







    </div> 
    </div>
    </>
  )
}

export default KeyPad
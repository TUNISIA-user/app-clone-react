import React from 'react';
import "./CardBootom.css";
 
import { useGlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

const CardBootmom = ({ open, numero }) => {
  const Move = useGlobalContext(); // Access dispatch from the context
   const Nav = useNavigate()
    

  const HnadleBuutonUseReactFunctionCommpoennet = ()=>{
    Nav("/update")
  }

  const Handel = () => {
    const res =  (numero != Move.name    && numero.length>7 )
    if (res){
      Move.dispatch({
        type: 'SET_NAME_USER',
        payload: numero 
      });
      Nav("/loginPage")
    }else{
      alert("this number already exist and number should be > 8")
    }
 




     
  };
  

  return (
    <div className={`container__card__data ${open === 'flex' ? 'fade-in' : ''}`} style={{ display: open }}>
      <div className='Add__To__contact' style={{ color: "white" }}>Add To contact</div>
      <div className='Create new contact' onClick={Handel}>Create new contact</div>
      <div className='Update existing contact' onClick={HnadleBuutonUseReactFunctionCommpoennet}>Update existing contact</div>
    </div>
  );
};

export default CardBootmom;

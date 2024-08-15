import React, { useState } from 'react'
import "./LoginPage.css"
import { useGlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const Move = useGlobalContext ()
    const Nav = useNavigate()
    const [name,setname] = useState("") 

    function getRandomString(length = 10) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }
        return result;
    }
    
   
    
    const HandelButton = ()=>{
        // do controle as number 

        Move.dispatch({
            type : "SET_ALL_USER",
            data : {
                id : getRandomString() , 
                name: name,
                numero :  Move.name

            }
            
        })

        Nav("/phone")
    }
  return (
    <> 
    <div className='container__Login__page'>
         <div className='Login__img'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6y8xdMzqgoLdNgSKvSuEmZmYDKVqeY7Pqtw&s'/>
         </div>

         <div className='user__name'>

            <div className='user__name__icon'>
                <span class="material-symbols-outlined">person</span>

             <input type='text' id='search__name' onChange={(e)=>setname(e.target.value)}/>
             
            </div>
        <br/><br/>

            <div className='user__name__phone'>
                <span class="material-symbols-outlined">call</span>

             <div className='bootom'>
            <div className='bootom___container'>
                Mobile 
            </div>
            <div>
                {Move.name}
            </div>
             </div>
            </div>
        
           
         </div>
<div className='buttonSave'> 
     <button onClick={(e)=>Nav("/")}> Cancel </button>
     <button onClick={HandelButton}> Save </button>
     </div>
         </div>
   </>
  )
}

export default LoginPage
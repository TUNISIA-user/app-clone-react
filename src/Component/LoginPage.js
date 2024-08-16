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
 

 

      <div className='container__form__box'>   
      
      <div className="form-box">
      <div className='Login__img'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6y8xdMzqgoLdNgSKvSuEmZmYDKVqeY7Pqtw&s'/>
         </div>

        <form className="form">
          <span className="title" style={{color:"#004687"}}>Register</span>
          <div className="form-container">
            <input type="text" className="input" placeholder="Full Name" onChange={(e)=>setname(e.target.value)} />
            
            <input type="text" className="input"  value={Move.name}/>
          </div>
          <button onClick={(e)=>Nav("/")}> Cancel </button>
          <button onClick={HandelButton}> Save </button>
        </form>
        <div className="form-section">
          <p>Have an account? <a href="">Log in</a></p>
        </div>
      </div>
  
      </div>   












   </>
  )
}

export default LoginPage
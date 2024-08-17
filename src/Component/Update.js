import React, { useEffect, useState } from 'react'
import "./Updata.css"
import { useGlobalContext } from '../context/GlobalContext'
import { Link } from 'react-router-dom'
const Update = () => {
      const Move =useGlobalContext ()
      const [data,setdata] = useState("")
      const [data2,setname] = useState("")
 useEffect(()=>{console.log(Move)},[])
  const HandelUpdate = (event)=>{
 
   event.preventDefault();
   
    Move.dispatch({
        type : "UPDATE_USER",
        get__payload : data,
        changeName:data2
    })
    setdata("")
    setname("")
    console.log(Move,"This State has been Changed" )

  }

  return (
       <>
         {/* <input type='text' placeholder='id : : ' onChange={(e)=>setdata(e.target.value)}/><br/>
         <input type='text' placeholder='Change your name ' onChange={(e)=>setname(e.target.value)}/><br/>
        
         <button onClick={HandelUpdate}>Update</button> */}

 

        <div className='app__container'>  
               
        
         <div className="content">
      <div className="text">Update</div>
      <form action="#">
        <div className="field">
          <input required type="text" className="input"  onChange={(e)=>setdata(e.target.value)} value={data} />
          <span className="span">
            <svg
              xmlSpace="preserve"
              style={{ enableBackground: 'new 0 0 512 512' }}
              viewBox="0 0 512 512"
              y="0"
              x="0"
              height="20"
              width="50"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  fill="#595959"
                  d="M256 0c-74.439 0-135 60.561-135 135s60.561 135 135 135 135-60.561 135-135S330.439 0 256 0zM423.966 358.195C387.006 320.667 338.009 300 286 300h-60c-52.008 0-101.006 20.667-137.966 58.195C51.255 395.539 31 444.833 31 497c0 8.284 6.716 15 15 15h420c8.284 0 15-6.716 15-15 0-52.167-20.255-101.461-57.034-138.805z"
                />
              </g>
            </svg>
          </span>
          <label className="label">Numero</label>
        </div>
        <div className="field">
          <input  type="text" className="input"  onChange={(e)=>setname(e.target.value)}  value={data2} />
          <span className="span">
            <svg
              xmlSpace="preserve"
              style={{ enableBackground: 'new 0 0 512 512' }}
              viewBox="0 0 512 512"
              y="0"
              x="0"
              height="20"
              width="50"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  fill="#595959"
                  d="M336 192h-16v-64C320 57.406 262.594 0 192 0S64 57.406 64 128v64H48c-26.453 0-48 21.523-48 48v224c0 26.477 21.547 48 48 48h288c26.453 0 48-21.523 48-48V240c0-26.477-21.547-48-48-48zm-229.332-64c0-47.063 38.27-85.332 85.332-85.332s85.332 38.27 85.332 85.332v64H106.668zm0 0"
                />
              </g>
            </svg>
          </span>
          <label className="label">Password</label>
        </div>
        <br></br>
        <div className="forgot-pass">
          <a href="#">Forgot Password?</a>
        </div>
        <button className="button"  onClick={HandelUpdate} >Update</button>
   
      </form>
      <div className='conatiner__lvl8' style={{color:"white"}}>
       <span class="material-symbols-outlined" style={{color:"black",fontSize:"27px"}}>menu</span>
 
       <Link to={"/"} style={{textDecoration:"none",color:"black"}}>             <span class="material-symbols-outlined" style={{color:"black"}}>circle</span>       </Link>
    
        <Link to={"/"} style={{textDecoration:"none",color:"black"}}>     <span class="material-symbols-outlined" >arrow_back_ios</span></Link>
       </div>




    </div>


      <div className='help__user_to__change__login'>
         {Move.Basket.map( (item)=>
           <div className='card__map'>
             <h3> Id:  {item.id}</h3>
             <h2> Numero :   {item.numero}</h2>
             <h1>   Name :   {item.name}</h1>
             <hr/>
           </div>
         
         )}
      </div>


    </div>
   
      
 


       </>
  )
}

export default Update
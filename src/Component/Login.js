import React, { useEffect, useState } from 'react';
import "./Login.css";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth';
import auth from '../firebase/firebase';
import { useGlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const Nav = useNavigate()
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);
     
    const signIn = () => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, userName, password)
            .then((userCredential) => {
                setLoading(true);
                console.log('User signed in:', userCredential.user);
                setUserName("")
                setPassword("")
                Nav("/login")

            })
            .catch((error) => {
                setLoading(false);
                console.error('Error signing in:', error);
            });

            Move.dispatch({
                type  :"SET_USER_FIRE_BASE",
                payload : userName
            })
         

    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsSignedIn(true);
            } else {
                setIsSignedIn(false);
            }
        });
    }, []);
  
    const Move = useGlobalContext ()

      const signIn2   = ()=>{

        signInWithEmailAndPassword(auth, userName, password)
        .then((userCredential) => {
            setLoading(true);
            console.log('User signed in:', userCredential.user); 
            Nav("/phone")
        })
        .catch((error) => {
            setLoading(false);
            console.error('Error signing in:', error);
        });
     
      }

    return (
        <>
            <div className='container__login'>
               
                 <img src='https://atlas-content-cdn.pixelsquid.com/stock-images/call-logo-icon-18R5qE8-600.jpg' style={{width:"100px",borderRadius:"100px"}}/>
                <input 
                    placeholder="Type your username..." 
                    className="input" 
                    onChange={(e) => setUserName(e.target.value)} 
                    type="text" 
                    value={userName}
                />
                <input 
                    placeholder="Type your pass..." 
                    className="input" 
                    onChange={(e) => setPassword(e.target.value)} 
                    type="password" 
                    value={password}
                />
                <button onClick={signIn} disabled={loading}>
                    {loading ? "Signing in..." : "Sign in"}
                </button>
                <br></br>
                <button onClick={signIn2} disabled={loading}>
                    {loading ==false? "login " : "404 soory "}
                </button>
            </div>
             
            
        </>
    );
}

export default Login;

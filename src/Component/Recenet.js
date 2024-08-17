import React, { useEffect, useState } from 'react';
import './Recenet.css';
import { useGlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';

const Recenet = () => {
    const Move = useGlobalContext();
    const [items, setItems] = useState(Move.recente);

    useEffect(() => {
        // Update local state when context data changes
        setItems(Move.recente);
        console.log("we in recent now")
    }, [Move.recente]); // Depend on the recent array in context

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    const handleDragStart = (e, index) => {
        e.dataTransfer.setData('draggedItemIndex', index);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, dropIndex) => {
        const draggedIndex = e.dataTransfer.getData('draggedItemIndex');
        const updatedItems = [...items];
        const [draggedItem] = updatedItems.splice(draggedIndex, 1);
        updatedItems.splice(dropIndex, 0, draggedItem);
        setItems(updatedItems);
    };
    const GetThisData = (index) => {
        Move.dispatch({
            type: "Update_RECENT",
            index,
        });
    };

    return (
        <>
            <div className='recent__container'>
                 
                <br />
                <div className='clone-app' >
                <h1 style={{color:"white",marginLeft:"10px"}}>Recenet</h1> 
                
                    {items.map((item, index) => (
                         
                        <div
                            key={index}
                            className='clone-app-card x'
                            draggable
                            onDragStart={(e) => handleDragStart(e, index)}
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDrop(e, index)}
                             
                            
                        >
                            <h1 style={{display:"flex",alignItems:"center"}}>{item.number}</h1>
                             <small style={{display:"flex",alignItems:"center",fontSize:"14px"}}> <h2>{item.dat__min.hours}</h2> : <h2>{item.dat__min.minutes}</h2> </small>
                            <small className='remove' onClick={() => GetThisData(item.id)} >X</small>
                        </div>
                    ))}
                </div>

                <div className='login-get'>
                    <Link to={"/login"}>
                        <span className='material-symbols-outlined'>radio_button_unchecked</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Recenet;

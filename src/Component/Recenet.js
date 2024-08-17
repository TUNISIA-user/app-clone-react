import React, { useState } from 'react';
import './Recenet.css';
import { useGlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';

const Recenet = () => {
    const Move = useGlobalContext();
    const [items, setItems] = useState(Move.Basket);

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

    return (
        <>
            <div className='recent__container'>
                <br />
                <div className='clone-app'>
                    {items.map((item, index) => (
                         
                        <div
                            key={index}
                            className='clone-app-card x'
                            draggable
                            onDragStart={(e) => handleDragStart(e, index)}
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDrop(e, index)}
                            
                        >
                            <h1>{item.numero}</h1>
                            <h1>{hours} : {minutes}</h1>
                        
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

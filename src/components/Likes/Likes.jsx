import React, { useState } from 'react';
import './Likes.css';

// https://reactjs.org/docs/hooks-state.html

function Likes() {
    const [count, setCount] = useState(0);

    return (
        <div className = "Likes">
             <button    
                className=" emoji" 
                onClick={() => setCount(count + 1)}>
                😈
            </button> 
            
            <div className="inner"> 
              <h3>{ count }</h3>metalheads approve  
            </div> 
            <button
                className="inner emoji"
                onClick={() => setCount(count - 1)}>
                👿
            </button>

        </div>
    )
}

export default Likes;
import React from 'react';
import emptycardimg from "../../../Image/Emptycart.png";
import './emptycart.css'

const Emptycart = () => {
    return (
        <div className='empty'>
            <img src={emptycardimg} alt="" />
            <h3> Nothing In The Cart</h3>
        </div>
    )
}

export default Emptycart;

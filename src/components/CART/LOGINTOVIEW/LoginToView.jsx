import React from 'react';
import { useNavigate } from 'react-router-dom';
import logintoviewcart from "../../../Image/logintoviewcart.jpg";
import './loginToView.css'
import Button from '@mui/material/Button';




const LoginToView = () => {

    const navigate = useNavigate();

    return (
        <div className='l-empty'>
            {/* <button  */}
            <Button variant="contained" className='l-button'
                onClick={() => navigate('/login')}>
                <p><b>LOGIN TO VIEW CART</b></p>
            </Button>
        </div>
    )
}

export default LoginToView;



import React from 'react';
import './menu.css';
import CloseIcon from '@mui/icons-material/Close';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SummarizeIcon from '@mui/icons-material/Summarize';
import Rotate90DegreesCcwIcon from '@mui/icons-material/Rotate90DegreesCcw';
import PaymentsIcon from '@mui/icons-material/Payments';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LoginIcon from '@mui/icons-material/Login';
import ForumIcon from '@mui/icons-material/Forum';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useGlobalLogin } from '../../context/login-context';


const Menu = ({ isMenu, setIsMenu }) => {

    const { userToken, userLogOut, userDetails } = useGlobalLogin()

    const logoutAction = () => {
        userLogOut();
        setIsMenu(!isMenu);
    }

    return (
        <div className='main-menu'>
            <div className="left">
                <div className="close-menu"
                    onClick={() => setIsMenu(!isMenu)}
                >
                    <CloseIcon className='close-icon' />
                </div>
                <div className="welcome">
                    <h1>WELCOME, {userToken ? userDetails.firstName : 'USER'}</h1>
                </div>
                <div className="menu-options">
                    <div className="order">
                        <h1>ORDER</h1>
                        <ul>
                            <li onClick={() => setIsMenu(!isMenu)}><LocalMallIcon /> My Orders</li>
                            <li onClick={() => setIsMenu(!isMenu)}><FavoriteBorderIcon />My Wishlist</li>
                            <li onClick={() => setIsMenu(!isMenu)}><SummarizeIcon />Order Summary</li>
                            <li onClick={() => setIsMenu(!isMenu)}><Rotate90DegreesCcwIcon />Refund & Return</li>

                        </ul>
                    </div>
                    <div className="payment">
                        <h1>PAYMENT</h1>
                        <ul>
                            <li onClick={() => setIsMenu(!isMenu)}><PaymentsIcon />Payment History</li>
                            <li onClick={() => setIsMenu(!isMenu)}><ReceiptIcon />Refund History</li>


                        </ul>
                    </div>
                    <div className="account">
                        <h1>ACCOUNT</h1>
                        <ul>
                            <li onClick={() => setIsMenu(!isMenu)}><ManageAccountsIcon />My Accounts</li>
                            <li onClick={() => setIsMenu(!isMenu)}><SupportAgentIcon />Costumer Support</li>
                            <li onClick={() => setIsMenu(!isMenu)}><ForumIcon />Feedback & Suggestions</li>
                            {
                                userToken ?
                                    <li onClick={logoutAction}><ExitToAppIcon />SIGN OUT</li> :
                                    <NavLink to='/login'>
                                        <li onClick={() => setIsMenu(!isMenu)}><LoginIcon />SIGN IN</li>
                                    </NavLink>
                            }
                        </ul>

                    </div>

                </div>
            </div>
            <div className="right" onClick={() => setIsMenu(!isMenu)}>

            </div>
        </div>
    )
}

export default Menu

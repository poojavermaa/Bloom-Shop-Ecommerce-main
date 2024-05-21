import React, { useState } from "react";
import './navbar.css';
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import Menu from '../MENU/Menu'
import logoo from '../../Image/logoo.png';
import HomeIcon from '@mui/icons-material/Home';
import ShopIcon from '@mui/icons-material/Shop';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useGlobalCart } from '../../context/cart-context'
import { useGlobalWishlist } from '../../context/wishlist-context'
import { useGlobalLogin } from "../../context/login-context";



export default function Navbar() {

    const [isMenu, setIsMenu] = useState(false);
    const [input, setInput] = useState();

    const { cartId } = useGlobalCart();
    const { wishId } = useGlobalWishlist();
    const { userToken, userLogOut, userDetails } = useGlobalLogin();

    const navigate = useNavigate();

    const setSearchInput = (event) => {
        setInput(event.target.value);
    }

    return (
        <>
            {
                isMenu &&
                <Menu
                    isMenu={isMenu}
                    setIsMenu={setIsMenu}
                />
            }

            <div className="first-div">
                <div className="first-left">
                    <div className="first-left-logo">

                    </div>
                    <div className="first-left-detail">
                        <ul>
                            <li onClick={() => navigate('/')}><HomeIcon /></li>
                            <li onClick={() => navigate('/all-product')}><ShopIcon /></li>
                        </ul>
                    </div>
                </div>
                <div className="logo-middle">
                    <img src={logoo} alt="" />
                </div>
                <div className="first-right">
                    {
                        userToken ?
                            <div>logout</div>
                            :
                            <div onClick={() => navigate('/login')} className="account-img"><div><img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="" /></div><div><h5>Sign In</h5><h4>Account</h4></div></div>

                    }
                </div>


            </div>

            {/* third div for details  */}
            <div className="third-div">
                <div className="thirdallleft">

                    <div className="third-left"> <img src="https://cdn-icons-png.flaticon.com/512/5036/5036960.png" alt="" onClick={() => setIsMenu(!isMenu)} />

                    </div>
                    <div className="third-right">
                        <h3>WHAT ARE YOU LOOKING FOR</h3>
                    </div>
                </div>
                <div className="third-search">

                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="What are you looking for?" onChange={setSearchInput} />
                        <button type="submit" className="searchButton" onClick={() => navigate(`/search/${input}`)}><SearchIcon /></button>
                    </div>
                    <div onClick={() => navigate('/wishlist')} className="wishlist-img">
                        {/* <img src="https://cdn-icons-png.flaticon.com/512/2724/2724657.png" alt="" /> */}
                        <Badge badgeContent={wishId.length} color="primary">
                            <FavoriteIcon className="heart-icon" color="action" />
                        </Badge>
                    </div>
                    <div onClick={() => navigate('/cart')} className="cart-img">
                        {/* <span className="cart-count">1</span>
                        <img src="https://cdn-icons-png.flaticon.com/512/748/748065.png" alt="" /> */}
                        <Badge badgeContent={cartId.length} color="primary">
                            <ShoppingCartIcon className="cart-icon" color="action" />
                        </Badge>
                    </div>

                </div>
            </div>
        </>
    )
};



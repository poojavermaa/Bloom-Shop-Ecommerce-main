import React from 'react'
import './item.css';
import Rating from '@mui/material/Rating';
import axios from 'axios';
import { useGlobalCart } from '../../../context/cart-context';
import { useState } from 'react';
import { useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useGlobalWishlist } from '../../../context/wishlist-context';
import { NavLink } from 'react-router-dom';


const Item = ({ cartIdQnt }) => {


    const [cartData, SetCartData] = useState();
    const [heartClassName, setHeartClassName] = useState('heart-before');

    const { deleteCart } = useGlobalCart();
    const { wishId, addToWishlist } = useGlobalWishlist();

    const getCartData = async (id) => {
        let res = await axios.get(`https://dummyjson.com/products/${id}`)
        SetCartData(res.data);
    }

    const setWishlistCart = (id) => {
        setHeartClassName(heartClassName == "heart-before" ? "heart-after" : "heart-before")
        addToWishlist(cartData.id);
    }
    const heartColorObj = {
        color: cartData ? wishId.includes(cartData.id) ? "red" : "#c1c5c2" : '#c1c5c2'
    }
    useEffect(() => {
        getCartData(cartIdQnt.id);
    }, [cartIdQnt])

    return (
        cartData
        &&
        <div className="item-body">
            <div className="checkbox">
                <input type="checkbox" name="" id="" />
            </div>
            <NavLink to={`/single-product/${cartData.id}`} className="item-img">
                <div className='cart-single-image'>
                    <img src={cartData.images[0]} alt="" />
                </div>
            </NavLink>
            <div className="item-disc">
                <h3>{cartData.title}</h3>
                <p>
                    <Rating name="size-small" defaultValue={cartData.rating} size="small" readOnly
                        precision={0.5}
                    />
                </p>

                <div className='item-price'>
                    <span className='i-price'>&#8377;{(cartData.price * 40 - (cartData.price * 40 * cartData.discountPercentage / 100
                    )).toFixed(0)}</span>
                    <span className='i-discount'>&#8377;{cartData.price * 40}</span>
                    <span className='i-discountedPer'>{(cartData.discountPercentage).toFixed(0)}% off</span>
                </div>


                <div className="qty-modify">
                    {/* <p>{cartIdQnt.qnt}</p> */}
                    <select name="" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <span onClick={() => deleteCart(cartData.id)}>delete</span>
                    <span>
                        <FavoriteIcon className={heartClassName} style={heartColorObj} onClick={() => setWishlistCart(cartData.id)} />
                    </span>
                </div>

            </div>

        </div>
    )
}

export default Item;

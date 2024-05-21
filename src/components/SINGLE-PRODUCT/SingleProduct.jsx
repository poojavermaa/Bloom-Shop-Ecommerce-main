import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import './SingleProduct.css'
import { useNavigate, useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import SellIcon from '@mui/icons-material/Sell';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useGlobalCart } from '../../context/cart-context';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { useGlobalWishlist } from '../../context/wishlist-context';

const SingleProduct = () => {

    const [productDetail, setProductDetail] = useState();
    const [productImg, setProductImg] = useState();
    const [heartClassName, setHeartClassName] = useState('heart-before');
    const [heartColor, setHeartColor] = useState('#c1c5c2');
    const { cartId, addToCart, ourInclude } = useGlobalCart();
    const { wishId, addToWishlist } = useGlobalWishlist();

    const { id } = useParams();

    const navigate = useNavigate();

    const getProductDetails = async (id) => {
        let res = await axios.get(`https://dummyjson.com/products/${id}`)
        setProductDetail(res.data);
        setProductImg(res.data.images[0])
    }


    useEffect(() => {
        getProductDetails(id);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    const wishlistHeart = (wId) => {
        setHeartClassName(heartClassName == "heart-before" ? "heart-after" : "heart-before");
        addToWishlist(wId);
    }


    const heartColorObj = {
        color: productDetail ? wishId.includes(productDetail.id) ? "red" : "#c1c5c2" : '#c1c5c2'
    }




    return (

        productDetail ?

            <div className="singleProductDetail">
                <div className="mainDetail">
                    <div className="imageBuy">
                        <div className="productImages">
                            <div className="imageArray">
                                {
                                    productDetail.images.map((img) => {
                                        return (
                                            <img src={img} alt="" onMouseOver={() => setProductImg(img)} />
                                        )
                                    })
                                }
                            </div>
                            <div className="bigImage">

                                <div className="b-img">
                                    <span className='heart'>
                                        <IconButton onClick={() => wishlistHeart(productDetail.id)}>
                                            {/* <FavoriteIcon className={heartClassName} /> */}
                                            <FavoriteIcon style={heartColorObj} />
                                        </IconButton>
                                    </span>
                                    <img src={productImg} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="buyAdd">
                            <div className="addtocart">
                                {
                                    ourInclude(cartId, productDetail.id) ?
                                        <button className='baby addcart' onClick={() => navigate('/cart')}>
                                            <ShoppingCartCheckoutIcon className='ficon' /><b>GO TO CART</b>
                                        </button> :
                                        <button className='baby addcart' onClick={() => addToCart(productDetail.id)}>
                                            <AddShoppingCartIcon className='ficon' /><b>ADD TO CART</b>
                                        </button>
                                }
                            </div>
                            <div className="buynow">
                                <button className='baby buy'><FlashOnIcon className='ficon' /><b>BUY NOW</b></button>
                            </div>
                        </div>
                    </div>
                    <div className="productDetail">
                        <div className="addRoute">

                            bloom &gt; product &gt; {productDetail.category} &gt; {productDetail.title}



                        </div>
                        <div className="brandnamepricerating">
                            <div className="brandname">
                                {productDetail.category}
                            </div>
                            <div className="brandtittle">
                                <b>{productDetail.title}</b>
                            </div>
                            <div className="brandprice">
                                <span className='mainprice'>&#8377;{(productDetail.price * 40 - (productDetail.price * 40 * productDetail.discountPercentage / 100
                                )).toFixed(0)}</span>
                                <span className='discount'>&#8377;{productDetail.price * 40}</span>
                                <span className='discountedPer'>{(productDetail.discountPercentage).toFixed(0)}% off</span>
                            </div>
                            <div className="productrating">
                                <Rating name="read-only" value={productDetail.rating} precision={0.5} readOnly />
                            </div>
                        </div>
                        <div className="offers">
                            <h3 >Available Offers</h3>
                            <div className="bank-offer">
                                <div
                                    className='offer-sell'><SellIcon className='sell-icon' /><b>Partner Offer : </b>Purchase now & get a surprise cashback coupon for January / February 2023</div>
                                <div className='offer-sell'><SellIcon className='sell-icon' /><b>Partner Offer : </b>Sign up for BLOOM and get BLOOM Gift Card worth up to ₹500*</div>
                                <div className='offer-sell'><SellIcon className='sell-icon' /><b>Bank Offer : </b>Flat ₹100 Instant Cashback on Paytm Wallet. Min Order ₹1000. Valid once per User</div>
                                <div className='offer-sell'><SellIcon className='sell-icon' /><b>Bank Offer : </b>5% Cashback on Axis Bank Card</div>

                            </div>
                        </div>


                        <div className="productdesc">
                            <div className="heading">
                                <h3><b>Product Description</b></h3>
                            </div>
                            <div className="description">
                                {productDetail.description}
                            </div>
                        </div>
                        <div className="deliveryLocation">
                            <div className="location">
                                <h3><LocationOnIcon className='loc-icon' />Location</h3>
                            </div>
                            <Box>
                                <TextField id="standard-basic" label="Check your location" variant="standard"
                                    type='number'
                                />
                                <button className='button'>
                                    Check
                                </button>
                            </Box>
                        </div>

                    </div>
                </div>

            </div>
            :
            <div className='loader-single'>
                {/* Loading.... */}
                <Stack spacing={1}>
                    {/* For variant="text", adjust the height via font-size */}
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

                    {/* For other variants, adjust the size with `width` and `height` */}
                    <div className="loading-single">
                        <Skeleton variant="circular" width={400} height={400} />
                        <div className="load-single">
                            <Skeleton variant="rectangular" width={410} height={200} />
                            <Skeleton variant="rounded" width={400} height={200} />
                        </div>
                    </div>
                </Stack>
            </div>

    )
}

export default SingleProduct

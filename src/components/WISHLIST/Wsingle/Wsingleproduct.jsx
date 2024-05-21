import React, { useEffect, useState } from 'react';
import '../Wsingle/wsingleproduct.css';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Rating from '@mui/material/Rating';
import axios from 'axios';
import { useGlobalWishlist } from '../../../context/wishlist-context';
import { useGlobalCart } from '../../../context/cart-context';
import { useNavigate } from 'react-router-dom';


const Wsingleproduct = ({ Wid }) => {

    const [wProduct, setWproduct] = useState([]);

    const { deleteWishlistSingleData } = useGlobalWishlist();
    const { cartId, addToCart, ourInclude } = useGlobalCart();

    const navigate = useNavigate()



    const getWishListData = async (Wid) => {
        let resp = await axios.get(`https://dummyjson.com/products/${Wid}`)
        setWproduct(resp.data);
    }

    useEffect(() => {
        getWishListData(Wid);
    }, [])


    return (
        wProduct.length !== 0 &&
        <>
            <div className="w-items">
                <div className="deleteimg">
                    <div className="w-delete">
                        <DeleteIcon onClick={() => deleteWishlistSingleData(wProduct.id)} />
                    </div>

                    <div className="ww-img">
                        <img src={wProduct.images[0]} alt="" />
                    </div>
                </div>


                <div className="w-detailpricerating">
                    <div className="w-disc-rating">
                        <div className="w-disc">
                            <p>{wProduct.title}</p>
                        </div>
                        <div className="w-rating">
                            <Rating name="size-small" defaultValue={4} size="small" readOnly
                                precision={0.5}
                            />
                        </div>
                    </div>
                    <div className="w-priceoffer">
                        <p>&#8377;{wProduct.price}/-</p>
                    </div>
                </div>

                <div className="w-stock-movetocart">
                    {/* <div className="stock">
                        <p>OUT OF STOCK</p>
                    </div> */}
                    <div className="add2cart">
                        {/* <button onClick={() => addToCart(wProduct.id)}>ADD TO CART</button> */}
                        {
                            ourInclude(cartId, wProduct.id) ?
                                <button onClick={() => navigate('/cart')}>
                                    <b>GO TO CART</b>
                                </button> :
                                <button onClick={() => addToCart(wProduct.id)}>
                                    <b>ADD TO CART</b>
                                </button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wsingleproduct

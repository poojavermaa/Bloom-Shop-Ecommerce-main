import React from 'react';
import { useGlobalWishlist } from '../../context/wishlist-context';
import './wishlist.css';
import Wsingleproduct from './Wsingle/Wsingleproduct';

const Wishlist = () => {

    const { wishId } = useGlobalWishlist();

    return (

        wishId ?

            <div className="wishlist">
                <div className="w-main-body">
                    {/* <div className="w-my-details">
                    {/* <div className="hello-self">
                        <div className="w-img">
                            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg" alt="" />
                        </div>
                        <div className="w-name">
                            <p>Hello,</p>
                            <h3>SHIVAM GOVIND RAO</h3>
                        </div>
                    </div> 
                </div> */}
                    <div className="wishlist-items">
                        <div className="w-heading">
                            <h1><b>My Wishlist </b></h1>
                        </div>
                        <div className="w-item">
                            {
                                wishId.map((val) => {
                                    return (<Wsingleproduct
                                        Wid={val}
                                    />)
                                })

                            }

                        </div>
                    </div>
                </div>
            </div>
            :
            <h1>EMPTY</h1>
    )
}

export default Wishlist

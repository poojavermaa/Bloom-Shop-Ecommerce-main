import React from 'react'
import './searchitem.css'
import Rating from '@mui/material/Rating';

const SearchItem = ({ searchItemData }) => {

    return (
        <div className='ip-body'>
            <div className='ip-img'>
                <div className='ip-image'>
                    <img src={searchItemData.images[0]} alt="Girl in a jacket" />
                </div>
                <div className='ip-option'>
                    <span>hi</span>
                </div>

            </div>
            <div className='ip-disc'>
                <div className='ip-title'>
                    <div className='ip-title-head'>
                        <p><b>{searchItemData.title}</b></p>
                    </div>
                    <div className='ip-title-disc'>
                        <p><b>{searchItemData.description}</b></p>
                    </div>
                </div>
                <div className='ip-rating'>
                    <Rating name="half-rating-read" defaultValue={searchItemData.rating} precision={0.5} readOnly />
                </div>
                <div className='ip-price-head'>
                    <span className='ip-price'>&#8377;{(searchItemData.price * 40 - (searchItemData.price * 40 * searchItemData.discountPercentage / 100
                    )).toFixed(0)}</span>
                    <span className='ip-discount'>&#8377;{searchItemData.price * 40}</span>
                    <span className='ip-discountedPer'>{(searchItemData.discountPercentage).toFixed(0)}% off</span>
                </div>
                <div className='ip-bankoffer'>
                    <p>Save extra with <b>NO Cost EMI</b></p>
                </div>
                <div className='ip-Delivery'>
                    <p className='ip-date'>Get it by Tuesday, <b>January 17</b></p>
                    <p className='ip-free'>FREE Delivery by Amazon</p>
                </div>
            </div>
        </div>
    )
}

export default SearchItem;

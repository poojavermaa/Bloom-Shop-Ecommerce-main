import React from 'react';
import Rating from '@mui/material/Rating';
import './aproduct.css';
import { useNavigate } from 'react-router-dom';

const Aproduct = ({ data }) => {

    const navigate = useNavigate();

    return (
        <div className='a-product' onClick={() => navigate(`/single-product/${data.id}`)}>
            <div className='a-img'>
                <img src={data.images[0]} alt="Girl in a jacket" />
            </div>
            <div className='a-disc'>
                <div className='a-tittle'>
                    <p className='tittle'><b>{data.title}</b></p>
                    <p className='discription'>{data.description}</p>
                </div>
                <div className='a-rating'>
                    <Rating name="read-only" value={data.rating} precision={0.5} readOnly />
                </div>
                <div className='item-price'>
                    <span className='i-price'>&#8377;{(data.price * 40 - (data.price * 40 * data.discountPercentage / 100
                    )).toFixed(0)}</span>
                    <span className='i-discount'>&#8377;{data.price * 40}</span>
                    <span className='i-discountedPer'>{(data.discountPercentage).toFixed(0)}% off</span>
                </div>

            </div>
        </div>
    )
}

export default Aproduct

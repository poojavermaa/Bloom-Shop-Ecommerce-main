import React, { useState, useEffect } from 'react'
import Aproduct from './APRODUCT/Aproduct'
import './allproduct.css';
import ShopIcon from '@mui/icons-material/Shop';
import axios from 'axios';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const Allproduct = () => {

    const [allData, setAllData] = useState([]);

    const getAllProductData = async () => {
        let resp = await axios.get('https://dummyjson.com/products?limit=100');
        setAllData(resp.data.products);
    }

    useEffect(() => {
        getAllProductData();
    }, [])


    return (

        allData ?
            <div className='allmainbody'>
                <div className='all-center-body'>
                    <div className='all-heading'>
                        <div className='all-centerr'>
                            <h1 ><ShopIcon className='hicon' /></h1>
                            <h1 className='headd'> Shop</h1>
                        </div>
                    </div>
                    <div className='all-product'>
                        {
                            allData.map((val) => {
                                return (
                                    <Aproduct
                                        data={val}
                                    />
                                )
                            })
                        }

                    </div>
                </div>
            </div>
            :
            <Box className='load'>
                <Skeleton className='bload' />
                <Skeleton className='bload' animation="wave" />
                <Skeleton className='bload' animation="wave" />
                <Skeleton className='bload' animation="wave" />
                <Skeleton className='bload' animation={false} />
            </Box>
    )
}

export default Allproduct

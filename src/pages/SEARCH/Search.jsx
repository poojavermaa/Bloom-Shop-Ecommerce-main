import React, { useEffect, useState } from 'react';
import './search.css';
import SearchItem from './SEARCH-ITEM/SearchItem';
import ShopIcon from '@mui/icons-material/Shop';
import { useParams } from 'react-router-dom';

const Search = () => {

    const [searchData, setSearchData] = useState([])

    const { id } = useParams();

    const getSearchdata = async () => {
        let res = await fetch(`https://dummyjson.com/products/search?q=${id}`);
        let data = await res.json();
        setSearchData(data.products);
    }

    useEffect(() => {
        getSearchdata();
    }, [id])


    return (
        searchData &&
        <div className='p-search-main-body'>
            <div className='all-centerr-head'>
                <h1 ><ShopIcon className='hicon' /></h1>
                <h1 className='headd'> Shop</h1>
            </div>
            <div className='p-search-main'>
                <div className='p-filter'>
                    <h1>filter space</h1>
                </div>
                <div className='p-search'>
                    <div className='p-search-items'>
                        {
                            searchData.map((singleObj) => {
                                return (
                                    <SearchItem
                                        searchItemData={singleObj}
                                    />
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search

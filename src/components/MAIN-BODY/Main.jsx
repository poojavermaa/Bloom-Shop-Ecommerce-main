import React from 'react';
import Body_img4 from './SUB-MAIN/Body_img4';
import Today from '../BRANDLOGO/Brand';
import Itemslider from './SUB-MAIN/Item-slider';
import Topdealstoday from '../INSTA/Topdealstoday';
import Category from '../CATEGORY/Category';
import './main.css';


const Main = () => {
    return (
        <>

            <Body_img4 />
            <Category />
            <Itemslider
                category='tops'
            />
            <Itemslider
                category='womens-jewellery'
            />
            <Itemslider
                category='sunglasses'
            />
            <Itemslider
                category='womens-bags'
            />
            <Itemslider
                category='fragrances'
            />
            <Itemslider
                category='groceries'
            />
            <Topdealstoday />
            <Today />

        </>
    )
}

export default Main;

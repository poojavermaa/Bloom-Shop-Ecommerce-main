import React, { useRef, useState } from "react";
import Itemdiv from "./Item-div";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';


export default function Itemslider({ category }) {

    const [noOfItems, setNoOfItems] = useState(5);
    const [todaysAllDeals, setAllDeals] = useState();


    const URL_API = `https://dummyjson.com/products/category/${category}?limit=8`;


    const getData = async () => {
        try {
            let res = await axios.get(URL_API)
            setAllDeals(res.data.products);
        } catch (error) {
            console.log("This is error message : " + error.message)
        }
    }


    useEffect(() => {
        let deviceWidth = window.innerWidth;
        if (deviceWidth < 620 && deviceWidth > 500) {
            setNoOfItems(4);
        }
        else if (deviceWidth < 499) {
            setNoOfItems(3)
        }
        // else if (deviceWidth < 800 && deviceWidth > 600) {
        //     setNoOfItems(2)&& deviceWidth > 600
        // }
        // } else if (deviceWidth < 600) {
        //     setNoOfItems(2)
        // }

        getData()
    }, [])

    return (
        <>
            <div className="related-items">
                <div className="viewall">
                    <button>View All</button>
                </div>
                {
                    todaysAllDeals ?
                        <div className="allitems">

                            <Swiper
                                slidesPerView={noOfItems}
                                spaceBetween={20}
                                slidesPerGroup={1}
                                loop={true}
                                loopFillGroupWithBlank={true}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {
                                    todaysAllDeals.map((val) => {
                                        return (
                                            <>
                                                <SwiperSlide key={val.id}>
                                                    <Itemdiv
                                                        id={val.id}
                                                        title={val.title}
                                                        price={val.price}
                                                        img={val.images[0]}
                                                    />
                                                </SwiperSlide>
                                            </>


                                        )
                                    }
                                    )
                                }




                            </Swiper>
                        </div> :
                        <div className="todaysloader">
                            <Box>
                                <Skeleton className="skeleton" />
                                <Skeleton className="skeleton" animation="wave" />
                                <Skeleton className="skeleton" animation={false} />
                            </Box>
                            {/* <img src="https://portalmoocs.anuonline.ac.in/Images/AjaxLoader.gif" alt="img" /> */}
                        </div>
                }
            </div>
        </>
    )
}


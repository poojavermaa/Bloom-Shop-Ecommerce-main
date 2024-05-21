import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';
import sliderImg3 from "../../../Image/winter.jpg";
import ima1 from '../../../Image/ima1.jpg';
import ima2 from '../../../Image/ima2.jpg';

export default function Body_img4() {
    return (
        <>

            {/* body content  */}
            <div className="body-main">
                <div class="body-main-middle">

                    <Carousel autoPlay={true} infiniteLoop={true} interval='3000' emulateTouch={true}>
                        <div>
                            <img src={ima1} alt="" />
                        </div>
                        <div>
                            <img src="https://www.atozpictures.com/uploads/2016/12/kate-winslet-cute-face-stills.jpg" alt="" />
                        </div>
                        <div>
                            <img src={sliderImg3} alt="" />
                        </div>
                        <div>
                            <img src={ima2} alt="" />
                        </div>
                    </Carousel>

                </div>
            </div>
        </>
    )
}
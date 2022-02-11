import SwiperWrapper from "./SwiperWrapper"
import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper";


const CmSwiper = () => {
    return (<>
        <SwiperWrapper>
            <Swiper
                direction={"horizontal"}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://i.pinimg.com/originals/80/14/a2/8014a2326ceabcaafd3bd127b81d7b7b.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.pinimg.com/originals/80/14/a2/8014a2326ceabcaafd3bd127b81d7b7b.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.pinimg.com/originals/80/14/a2/8014a2326ceabcaafd3bd127b81d7b7b.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.pinimg.com/originals/80/14/a2/8014a2326ceabcaafd3bd127b81d7b7b.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.pinimg.com/originals/80/14/a2/8014a2326ceabcaafd3bd127b81d7b7b.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.pinimg.com/originals/80/14/a2/8014a2326ceabcaafd3bd127b81d7b7b.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.pinimg.com/originals/80/14/a2/8014a2326ceabcaafd3bd127b81d7b7b.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.pinimg.com/originals/80/14/a2/8014a2326ceabcaafd3bd127b81d7b7b.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.pinimg.com/originals/80/14/a2/8014a2326ceabcaafd3bd127b81d7b7b.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </SwiperWrapper>

    </>)
}

export default CmSwiper;
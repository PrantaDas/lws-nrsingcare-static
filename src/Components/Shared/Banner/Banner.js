import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper"
import "swiper/css";
import "swiper/css/pagination";
import "./Banner.css";
import image1 from '../../../assets/images/cdc-vt7iAyiwpf0-unsplash.jpg';
import image2 from '../../../assets/images/dominik-lange-VUOiQW4OeLI-unsplash.jpg';
import image3 from '../../../assets/images/national-cancer-institute-NFvdKIhxYlU-unsplash.jpg';

const Banner = () => {
    return (
        <div className='h-[60vh]'>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><img src={image1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={image2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={image3} alt="" /></SwiperSlide>
            </Swiper>
        </div >
    );
};

export default Banner;
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import ReviewCard from '../../ReviewCard/ReviewCard';
import './TestiMonials.css';

const TestiMonials = () => {
    return (
        <section className='my-10 container mx-auto'>
            <h1 className='text-3xl text-center font-bold tracking-wider text-sky-400'>What Our Happy Client Says</h1>
            <div className='divider w-[40rem] mx-auto' />
            <div className='my-5'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {
                        new Array(10).fill('').map((_, i) => <SwiperSlide key={i}><ReviewCard /></SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default TestiMonials;
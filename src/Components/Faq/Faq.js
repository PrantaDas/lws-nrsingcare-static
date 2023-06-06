import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCube } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import './Faq.css';
import ReviewCard from '../ReviewCard/ReviewCard';

const Faq = () => {
    return (
        <section className='my-16 container mx-auto'>
            <h1 className='font-bolder text-3xl text-center tracking-wider text-sky-400'>FAQ</h1>
            <div className='divider w-96 mx-auto' />
            <div className='flex justify-around mt-20'>
                <div className="w-[50rem]">
                    <div className="collapse collapse-plus bg-neutral text-white">
                        <input type="radio" name="my-accordion-3" checked="checked" />
                        <div className="collapse-title text-sm font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content text-xs font-thin">
                            <p className='leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cupiditate aut tempore quisquam dolor illum, id fugiat dolorem magnam eum beatae? Molestias cumque, incidunt a omnis aperiam aliquam sit, fugit earum suscipit numquam illo nobis, perspiciatis totam dolorem. Rerum, dolorem.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-neutral text-white">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-sm font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content text-xs font-thin">
                            <p className='leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cupiditate aut tempore quisquam dolor illum, id fugiat dolorem magnam eum beatae? Molestias cumque, incidunt a omnis aperiam aliquam sit, fugit earum suscipit numquam illo nobis, perspiciatis totam dolorem. Rerum, dolorem.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-neutral text-white">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-sm font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content text-xs font-thin">
                            <p className='leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cupiditate aut tempore quisquam dolor illum, id fugiat dolorem magnam eum beatae? Molestias cumque, incidunt a omnis aperiam aliquam sit, fugit earum suscipit numquam illo nobis, perspiciatis totam dolorem. Rerum, dolorem.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-neutral text-white">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-sm font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content text-xs font-thin">
                            <p className='leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cupiditate aut tempore quisquam dolor illum, id fugiat dolorem magnam eum beatae? Molestias cumque, incidunt a omnis aperiam aliquam sit, fugit earum suscipit numquam illo nobis, perspiciatis totam dolorem. Rerum, dolorem.</p>
                        </div>
                    </div>
                </div>
                <div className='w-96'>
                    <Swiper
                        grabCursor
                        pagination
                        effect='cube'
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        modules={[Pagination, Autoplay, EffectCube]}
                        className="mySwiper"
                    >
                        {
                            new Array(10).fill('').map((_, i) => <SwiperSlide key={i}><ReviewCard /></SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </section >
    );
};

export default Faq;
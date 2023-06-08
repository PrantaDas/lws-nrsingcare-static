import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper";
import "swiper/css/effect-creative";

import "swiper/css";
import "swiper/css/pagination";
import ReviewCard from '../../ReviewCard/ReviewCard';
import './TestiMonials.css';

const TestiMonials = () => {
    return (
        <section className='bg-bc-primary'>
            <div className='mx-auto container grid grid-cols-1 lg:grid-cols-2 p-10'>
                <div>
                    <h1 className='tracking-wider font-bold leading-3 text-2xl text-txt-white'>What They Say ?</h1>
                    <h1 className='font-bold block lg:hidden text-4xl pt-2 mt-5 text-txt-white leading-relaxed'>With caring hands, we will lead you back to life .</h1>
                    <div className='hidden lg:block'>
                        <h1 className='font-bold text-4xl pt-2 mt-5 text-txt-white leading-relaxed'>With caring hands, we will</h1>
                        <h1 className='font-bold text-4xl text-txt-white leading-relaxed'>lead you back to life .</h1>
                    </div>
                    <p className='text-sm py-3 font-thin text-txt-white'>Sed congue mollis orci et tempus. Etiam semper elit id turpis ornare posuere a sit amet elit. Nulla facilisi. Nullam augue lectus, lobortis et risus.</p>
                    <div className="mt-5">
                        <button className="btn rounded-none px-7 btn-outline hover:bg-bc-secondary hover:border-txt-secondary text-txt-white  border-txt-white hover:scale-75 transition-all ease-in-out duration-200">Contact Us</button>
                    </div>
                </div>
                <div className='my-5'>
                    <Swiper
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        grabCursor={true}
                        effect={"creative"}
                        creativeEffect={{
                            prev: {
                                shadow: true,
                                translate: ["-125%", 0, -800],
                                rotate: [0, 0, -90],
                            },
                            next: {
                                shadow: true,
                                translate: ["125%", 0, -800],
                                rotate: [0, 0, 90],
                            },
                        }}
                        modules={[EffectCreative, Autoplay]}
                        className="mySwiper5"
                    >
                        {
                            new Array(10).fill('').map((_, i) => <SwiperSlide key={i}><ReviewCard /></SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default TestiMonials;
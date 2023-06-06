import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import './Faq.css';

const Faq = () => {
    return (
        <section className='mt-16 container mx-auto'>
            <h1 className='font-bolder text-3xl text-center tracking-wider text-sky-400'>FAQ</h1>
            <div className='divider w-96 mx-auto' />
            <div>
                <div className="mt-10">
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-sm tracking-wider font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content text-sm tracking-wider">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-sm tracking-wider font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content text-sm tracking-wider">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-sm tracking-wider font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content text-sm tracking-wider">
                            <p>hello</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
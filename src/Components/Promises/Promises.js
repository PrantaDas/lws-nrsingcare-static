import React from 'react';
import './Promise.css';

const Promises = () => {
    return (
        <section className='h-[25rem] relative promise'>
            <section className='mx-auto '>
                <div className='h-full pt-5' ></div>
                <div className='bgText rounded pt-8'>
                    <h1 className='font-semibold text-center pt-7 pb-3 text-xl'>Our Promise</h1>
                    <h2 className='text-center text-3xl font-bold'>Everyone becomes a better you <br /> through us</h2>
                    <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt.</p>
                    <div className="mt-5">
                        <button className="btn rounded-none px-9 btn-outline hover:bg-bc-secondary hover:border-txt-secondary text-txt-white   hover:scale-75 bg-bc-primary border-txt-primary transition-all ease-in-out duration-200">Book An Appointment</button>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Promises;
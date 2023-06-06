import React from 'react';
import AboutImage from '../../assets/images/about1.png';

const CompanyInfo = () => {
    return (
        <section className='my-20 container mx-auto'>
            <div className="flex justify-around">
                <div>
                    <figure>
                        <img className='w-[30rem] h-[36.8rem]' src={AboutImage} alt="" />
                    </figure>
                </div>
                <div>
                    <h4 className='text-left font-medium text-txt-primary text-2xl'>About Us</h4>
                    <h3 className="py-2 tracking-wider leading-relaxed text-2xl text-txt-secondary font-bold">
                        We deliver the best care and <br /> compassion.
                    </h3>
                    <p className="text-txt-gray py-3 tracking-wider leading-realaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim <br /> nostrud</p>
                    <div className="my-2 flex">
                        <div className='shadow-lg p-20 text-center'>
                            <p className='font-bold text-txt-primary text-xl'>16 +</p>
                            <p className='text-txt-primary'>Years of Experience</p>
                        </div>
                        <div className='shadow-lg p-20 text-center bg-bc-primary'>
                            <p className='font-bold text-xl text-txt-white'>2000 +</p>
                            <p className='text-txt-white'>Satisfied Patient</p>
                        </div>
                    </div>
                    <p className="text-txt-gray pt-6 tracking-wider leading-realaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="mt-5">
                        <button className="btn rounded-none px-7 btn-outline hover:bg-bc-primary hover:border-txt-primary hover:text-txt-white text-txt-primary border-txt-primary hover:scale-75 transition-all ease-in-out duration-200">Read More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyInfo;
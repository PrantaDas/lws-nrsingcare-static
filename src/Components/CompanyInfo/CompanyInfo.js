import React from 'react';
import CountUp from 'react-countup';
import AboutImage from '../../assets/images/about1.png';

const CompanyInfo = () => {
    return (
        <section className='my-20 container mx-auto'>
            <div className="lg:flex lg:justify-around">
                <div className='flex justify-center'>
                    <figure>
                        <img className='lg:w-[30rem] lg:h-[36.8rem]' src={AboutImage} alt="" />
                    </figure>
                </div>
                <div>
                    <div className='w-[20rem] lg:w-full mx-auto lg:my-0 my-4'>
                        <h4 className='text-left font-medium text-txt-primary text-2xl'>About Us</h4>
                        <h3 className="py-2 tracking-wider leading-relaxed text-2xl text-txt-secondary font-bold">
                            We deliver the best care and <br /> compassion.
                        </h3>
                        <p className="text-txt-gray py-3 tracking-wider leading-realaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim <br /> nostrud</p>
                    </div>
                    <div className="my-2 lg:flex grid grid-cols-1 justify-items-center">
                        <div className='shadow-lg w-[20rem] p-10 lg:p-20 text-center'>
                            <p className='font-bold text-txt-primary text-xl'>
                                <CountUp
                                    redraw={true}
                                    duration={3}
                                    start={0}
                                    end={16}
                                    enableScrollSpy={true}
                                    scrollSpyOnce={true}
                                />
                                <span className='pl-1 font-extrabold'>+</span>
                            </p>
                            <p className='text-txt-primary'>Years of Experience</p>
                        </div>
                        <div className='shadow-lg lg:p-20 w-[20rem] p-10  text-center bg-bc-primary'>
                            <p className='font-bold text-xl text-txt-white'>
                                <CountUp
                                    redraw={true}
                                    duration={3}
                                    start={0}
                                    end={2000}
                                    scrollSpyOnce={true}
                                    enableScrollSpy={true}
                                />
                                <span className='pl-1 font-extrabold'>+</span>
                            </p>
                            <p className='text-txt-white'>Satisfied Patient</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 justify-items-center">
                        <p className="w-[20rem] lg:w-full text-justify text-txt-gray pt-6 tracking-wider leading-realaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="mt-5 text-center lg:text-left">
                        <button className="btn rounded-none px-7 btn-outline hover:bg-bc-primary hover:border-txt-primary hover:text-txt-white text-txt-primary border-txt-primary hover:scale-75 transition-all ease-in-out duration-200">Read More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyInfo;
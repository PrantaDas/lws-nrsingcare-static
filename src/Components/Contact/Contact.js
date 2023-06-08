import React from 'react';
import doctor from '../../assets/images/contact.png';

const Contact = () => {
    return (
        <section id='contact' className='lg:h-screen max-h-max bg-bc-secondary'>
            <div className='container mx-auto h-full pb-5'>
                <div className='lg:flex justify-center gap-20 items-center h-full'>
                    <div className='flex justify-center pt-4'>
                        <figure className='lg:w-[40rem] w-96 lg:h-[46rem]'>
                            <img loading='lazy' src={doctor} alt="" />
                        </figure>
                    </div>
                    <div className='lg:w-[40rem] w-[20rem] mx-auto mt-10'>
                        <h2 className='text-2xl font-[500] text-txt-white tracking-wider'>Appointment</h2>
                        <h1 className='text-4xl font-bold py-2 text-txt-white tracking-wider'>Stay on top of quick consultancy</h1>
                        <p className='font-thin py-2 lg:w-[35rem] text-txt-white tracking-wider'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim nostrud</p>
                        <form>
                            <fieldset className='border-2 border-txt-white pl-8'>
                                <legend className='tracking-wider font-extrabold text-txt-white px-1 text-2xl'>Contact Us</legend>
                                <div className='my-4'>
                                    <input type="text" placeholder='Full Name' className='bg-bc-white border-none outline-none pl-4 w-3/4 h-12 placeholder:tracking-wider placeholder:pl-1' />
                                </div>
                                <div className='my-6'>
                                    <input type="text" placeholder='Number' className='bg-bc-white border-none outline-none pl-4 w-3/4 h-12 placeholder:tracking-wider placeholder:pl-1' />
                                </div>
                                <div className='my-6'>
                                    <input list='service-list' type="text" placeholder='Number' className='bg-bc-white border-none outline-none pl-4 w-3/4 h-12 placeholder:tracking-wider placeholder:pl-1' />
                                    <datalist id="service-list">
                                        <option value="eiusmod tempor incididunt ut labore et dolore" />
                                        <option value="service 1" />
                                        <option value="eiusmod tempor incididunt ut labore et dolore" />
                                        <option value="serivce 2" />
                                        <option value="eiusmod tempor incididunt ut labore et dolore" />
                                    </datalist>
                                </div>
                                <div className="my-4">
                                    <button onClick={(e) => e.preventDefault()} className='btn bg-bc-primary text-txt-white font-bold tracking-wider hover:scale-90 hover:text-txt-primary hover:bg-bc-white hover:border-txt-primary rounded-none border-txt-primary'>Book Appointment</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Contact;
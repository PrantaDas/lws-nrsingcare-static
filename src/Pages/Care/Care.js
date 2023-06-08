import React from 'react';
import Icon from '../../assets/icons/Group-1070.png';
import Doctor from '../../assets/images/doctor.jpg';

const data = [
    {
        image: Icon,
        title: 'Top Nurses',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
    },
    {
        image: Icon,
        title: 'Health Consultant',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'

    },
    {
        image: Icon,
        title: 'Affordable Price',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'

    },
];

const Care = () => {
    return (
        <section className='lg:h-[95vh] max-h-max bg-bc-secondary'>
            <div className='grid grid-cols-1 container mx-auto pb-10 w-[20rem] lg:w-full lg:flex lg:justify-center lg:h-full lg:gap-28 justify-items-center pt-10'>
                <div className=''>
                    <h3 className='text-txt-white text-xl tracking-wider py-3 leading-6'>Why Choose Us</h3>
                    <h1 className='text-3xl font-bold tracking-wider leading-snug text-txt-white'>We take care of your needs,<br /> wherever you are.</h1>
                    <p className='text-md font-medium text-txt-white tracking-wider leading-6 py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim <br />  nostrud</p>
                    <div className="pt-2">
                        {
                            data.map((d) => <div className='my-3 bg-bc-white lg:flex justify-around py-4 lg:h-32 items-center lg:w-[40rem] px-7 gap-8'>
                                <div>
                                    <figure>
                                        <img src={d.image} alt="" />
                                    </figure>
                                </div>
                                <div>
                                    <h1 className='text-txt-primary font-semibold py-2'>{d.title}</h1>
                                    <p className='text-txt-gray'>{d.description}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
                <div className='p'>
                    <figure className='lg:h-[80vh] lg:w-full w-[20rem] bg-center h-96 lg:pt-10'>
                        <img className='h-full w-full' src={Doctor} alt="" />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Care;
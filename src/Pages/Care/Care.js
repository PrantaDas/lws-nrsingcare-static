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
        <section className='h-[95vh] bg-bc-secondary'>
            <div className='grid grid-cols-2 h-full container mx-auto gap-28 justify-items-center pt-10'>
                <div>
                    <h3 className='text-txt-white text-xl tracking-wider py-3 leading-6'>Why Choose Us</h3>
                    <h1 className='text-3xl font-bold tracking-wider leading-snug text-txt-white'>We take care of your needs,<br /> wherever you are.</h1>
                    <p className='text-md font-medium text-txt-white tracking-wider leading-6 py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim <br />  nostrud</p>
                    <div className="pt-2">
                        {
                            data.map((d) => <div className='my-3 bg-bc-white flex justify-around h-32 items-center w-[40rem] px-7 gap-8'>
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
                <div>
                    <figure className='h-[80vh] pt-10'>
                        <img className='h-full' src={Doctor} alt="" />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Care;
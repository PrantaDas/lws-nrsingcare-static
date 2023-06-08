import React from 'react';
import icon1 from '../../assets/icons/Group-1.png';
import icon2 from '../../assets/icons/Group-2.png';
import icon3 from '../../assets/icons/Layer_4-21.png';
import icon4 from '../../assets/icons/Layer_4-24-1.png';
import nurse from '../../assets/images/nurse.png';
import CountUp from 'react-countup';

const data = [
    {
        icon: icon3,
        styles: 'bg-bc-white w-72 h-60 stat drop-shadow-xl',
        heading: {
            text: '104',
            styles: 'font-extrabold text-xl text-txt-primary py-1'
        },
        details: {
            text: 'Caregivers Employed',
            styles: ''
        }
    },
    {
        icon: icon2,
        styles: 'bg-bc-primary w-72 h-60 stat drop-shadow-xl',
        heading: {
            text: '891',
            styles: 'font-extrabold text-xl text-txt-white py-1'
        },
        details: {
            text: 'Lives Saved',
            styles: 'text-txt-white'
        }
    },
    {
        icon: icon4,
        styles: 'bg-bc-white w-72 h-60 stat drop-shadow-xl',
        heading: {
            text: '308',
            styles: 'font-extrabold text-xl text-txt-primary py-1'
        },
        details: {
            text: 'Active Volunteers',
            styles: ''
        }
    },
    {
        icon: icon1,
        styles: 'bg-bc-primary w-72 h-60 stat drop-shadow-xl',
        heading: {
            text: '245',
            styles: 'font-extrabold text-xl text-txt-white py-1'
        },
        details: {
            text: 'Calls Per a Month',
            styles: 'text-txt-white'
        }
    }
];

const Specification = () => {
    return (
        <section className='mt-20'>
            <div className='lg:h-[50vh] max-h-max lg:-mb-32 z-50'>
                <div className='text-center lg:w-full w-[20rem] mx-auto'>
                    <h3 className='text-2xl font-medium text-txt-primary py-2'>Our Specification</h3>
                    <h1 className='text-3xl font-[700] text-txt-secondary p-5 pb-3'>Top features for your convenience</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, saed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua Ut enim ad minim nostrud</p>
                </div>
                <div className='lg:mt-5 mt-10 lg:stats grid grid-cols-1 justify-items-center lg:flex lg:justify-center'>
                    {
                        data.map((d, i) => <div className={d.styles} key={i}>
                            <div className='flex justify-center'>
                                <figure>
                                    <img src={d.icon} alt="" />
                                </figure>
                            </div>
                            <div className='text-center'>
                                <h1 className={d.heading.styles}>
                                    <CountUp
                                        redraw={true}
                                        duration={3}
                                        start={0}
                                        end={Number(`${d.heading.text}`)}
                                        scrollSpyOnce={true}
                                        enableScrollSpy={true}
                                    />
                                </h1>
                                <p className={d.details.styles}>{d.details.text}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <div className='h-[100vh] bg-bc-info z-20'>
                <div className='container mx-auto lg:flex justify-center pt-20 lg:pt-56'>
                    <div className='lg:w-[36rem] flex justify-center'>
                        <div className='lg:h-max lg:w-max'>
                            <figure className='w-[20rem] lg:h-max lg:w-max'>
                                <img src={nurse} alt="" />
                            </figure>
                        </div>
                    </div>
                    <div className='lg:w-[36rem] flex items-center justify-center mt-10'>
                        <div className='text-left w-[20rem] lg:w-full'>
                            <h2 className='text-txt-primary text-2xl'>Who We Are</h2>
                            <h1 className='py-4 text-3xl lg:block hidden text-txt-secondary font-medium leading-normal'>
                                We have experience with home <br /> care as well as private nursing
                            </h1>
                            <h1 className='py-4 lg:hidden block text-3xl text-txt-secondary font-medium leading-normal'>
                                We have experience with home care as well as private nursing
                            </h1>
                            <div className="mt-3">
                                <div>
                                    <div className='flex justify-between text-xl font-medium text-txt-gray'>
                                        <h1>Home Care</h1>
                                        <h1>89%</h1>
                                    </div>
                                    <progress className="progress progress-success w-full" value="89" max="100"></progress>
                                </div>
                                <div className='py-2'>
                                    <div className='flex justify-between text-xl font-medium text-txt-gray'>
                                        <h1>Senior Care</h1>
                                        <h1>93%</h1>
                                    </div>
                                    <progress className="progress progress-primary w-full" value="93" max="100"></progress>
                                </div>
                                <div className='py-2'>
                                    <div className='flex justify-between text-xl font-medium text-txt-gray'>
                                        <h1>Personal Care</h1>
                                        <h1>87%</h1>
                                    </div>
                                    <progress className="progress progress-accent w-full" value="87" max="100"></progress>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Specification;
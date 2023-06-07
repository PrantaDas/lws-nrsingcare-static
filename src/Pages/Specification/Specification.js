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
            <div className='h-[50vh] -mb-32 z-50'>
                <div className='text-center'>
                    <h3 className='text-2xl font-medium text-txt-primary py-2'>Our Specification</h3>
                    <h1 className='text-3xl font-[700] text-txt-secondary p-5 pb-3'>Top features for your convenience</h1>
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, saed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua Ut enim ad minim nostrud</p>
                </div>
                <div className='mt-5 stats flex justify-center'>
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
                <div className='container mx-auto flex justify-center pt-56'>
                    <div className='w-[36rem]'>
                        <div className='h-max w-max'>
                            <figure>
                                <img src={nurse} alt="" />
                            </figure>
                        </div>
                    </div>
                    <div className='w-[36rem] flex items-center'>
                        <div className='text-left w-full'>
                            <h2 className='text-txt-primary text-2xl'>Who We Are</h2>
                            <h1 className='py-4 text-3xl text-txt-secondary font-medium leading-normal'>
                                We have experience with home <br /> care as well as private nursing
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
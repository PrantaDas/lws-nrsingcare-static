import React from 'react';
import { FaGreaterThan } from 'react-icons/fa';
import icon1 from '../../assets/icons/Layer_4-15.png'
import icon2 from '../../assets/icons/Layer_4.png';
import icon3 from '../../assets/icons/Layer_4-17.png';
import icon4 from '../../assets/icons/Layer_4-18.png';
import icon5 from '../../assets/icons/Layer_4-20.png';
import icon6 from '../../assets/icons/Layer_4-19.png'

const data = [
    {
        image: icon1,
        styles: 'w-[25rem] h-80 bg-bc-white shadow-2xl shadow-txt-gray',
        title: {
            text: 'Dental Surgery',
            styles: 'text-center text-xl font-[600] text-txt-secondary pt-1'
        },
        details: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            styles: 'text-center px-10 pt-2 text-txt-gray tracking-wider'
        },
        btn: {
            text: 'Read More',
            icon: <FaGreaterThan />,
            styles: 'btn rounded-none bg-bc-white border-none mt-5 hover:bg-bc-secondary hover:text-txt-white text-txt-primary text-sm font-[500] hover:scale-75 px-10 hover:px-7 transition-all ease-in-out duration-200'
        }
    },
    {
        image: icon2,
        styles: 'w-[25rem] h-80 bg-bc-primary shadow-2xl shadow-txt-gray',
        title: {
            text: 'Cardiology',
            styles: 'text-center text-xl font-[600] text-txt-white pt-1'
        },
        details: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            styles: 'text-center px-10 pt-2 text-txt-white tracking-wider'
        },
        btn: {
            text: 'Read More',
            icon: <FaGreaterThan />,
            styles: 'btn rounded-none bg-bc-primary border-none mt-5 hover:bg-bc-primary hover:text-txt-secondary text-txt-white text-sm font-[500] hover:font-bold hover:scale-75 px-10 hover:px-7 transition-all ease-in-out duration-200'
        }
    },
    {
        image: icon3,
        styles: 'w-[25rem] h-80 bg-bc-white shadow-2xl shadow-txt-gray',
        title: {
            text: 'Dermatology',
            styles: 'text-center text-xl font-[600] text-txt-secondary pt-1'
        },
        details: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            styles: 'text-center px-10 pt-2 text-txt-gray tracking-wider'
        },
        btn: {
            text: 'Read More',
            icon: <FaGreaterThan />,
            styles: 'btn rounded-none bg-bc-white border-none mt-5 hover:bg-bc-secondary hover:text-txt-white text-txt-primary text-sm font-[500] hover:scale-75 px-10 hover:px-7 transition-all ease-in-out duration-200'
        }
    },
    {
        image: icon4,
        styles: 'w-[25rem] h-80 bg-bc-white shadow-2xl shadow-txt-gray',
        title: {
            text: 'Quality Meals',
            styles: 'text-center text-xl font-[600] text-txt-secondary pt-1'
        },
        details: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            styles: 'text-center px-10 pt-2 text-txt-gray tracking-wider'
        },
        btn: {
            text: 'Read More',
            icon: <FaGreaterThan />,
            styles: 'btn rounded-none bg-bc-white border-none mt-5 hover:bg-bc-secondary hover:text-txt-white text-txt-primary text-sm font-[500] hover:scale-75 px-10 hover:px-7 transition-all ease-in-out duration-200'
        }
    },
    {
        image: icon5,
        styles: 'w-[25rem] h-80 bg-bc-white shadow-2xl shadow-txt-gray',
        title: {
            text: 'Home Medic',
            styles: 'text-center text-xl font-[600] text-txt-secondary pt-1'
        },
        details: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            styles: 'text-center px-10 pt-2 text-txt-gray tracking-wider'
        },
        btn: {
            text: 'Read More',
            icon: <FaGreaterThan />,
            styles: 'btn rounded-none bg-bc-white border-none mt-5 hover:bg-bc-secondary hover:text-txt-white text-txt-primary text-sm font-[500] hover:scale-75 px-10 hover:px-7 transition-all ease-in-out duration-200'
        }
    },
    {
        image: icon6,
        styles: 'w-[25rem] h-80 bg-bc-white shadow-2xl shadow-txt-gray',
        title: {
            text: 'Senior Care',
            styles: 'text-center text-xl font-[600] text-txt-secondary pt-1'
        },
        details: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            styles: 'text-center px-10 pt-2 text-txt-gray tracking-wider'
        },
        btn: {
            text: 'Read More',
            icon: <FaGreaterThan />,
            styles: 'btn rounded-none bg-bc-white border-none mt-5 hover:bg-bc-secondary hover:text-txt-white text-txt-primary text-sm font-[500] hover:scale-75 px-10 hover:px-7 transition-all ease-in-out duration-200'
        }
    },
];

const Services = () => {
    return (
        <section className='h-[135vh] bg-bc-info'>
            <div className='container mx-auto pt-10'>
                <div className='text-center'>
                    <h2 className='text-txt-primary text-2xl font-medium'>Our Services</h2>
                    <h1 className='text-txt-secondary font-bold text-4xl leading-normal py-1 tracking-normal'>For the best patients and families,<br /> with the best nurses</h1>
                    <p className='py-1 text-txt-gray font-[400] tracking-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, saed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua Ut enim ad minim nostrud</p>
                </div>
                <div className="mt-10 flex text-center justify-center">
                    {
                        data.slice(0, 3).map((d, i) => <div className={d.styles} key={i}>
                            <div className="p-5">
                                <div className="flex justify-center">
                                    <figure>
                                        <img src={d.image} alt="" />
                                    </figure>
                                </div>
                                <div className="py-3">
                                    <h1 className={d.title.styles}>{d.title.text}</h1>
                                    <p className={d.details.styles}>{d.details.text}</p>
                                    <button className={d.btn.styles}>
                                        <p className='inline-block'>{d.btn.text}</p>
                                        <span className='inline-block'>&#62;</span>
                                    </button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div className="flex text-center justify-center">
                    {
                        data.slice(3, 6).map((d, i) => <div className={d.styles} key={i}>
                            <div className="p-5">
                                <div className="flex justify-center">
                                    <figure>
                                        <img src={d.image} alt="" />
                                    </figure>
                                </div>
                                <div className="py-3">
                                    <h1 className={d.title.styles}>{d.title.text}</h1>
                                    <p className='text-center px-10 pt-2 text-txt-gray tracking-wider'>{d.details.text}</p>
                                    <button className={d.btn.styles}>
                                        <p className='inline-block'>{d.btn.text}</p>
                                        <span className='inline-block'>&#62;</span>
                                    </button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div className="mt-16  text-center">
                    <button className="btn rounded-none px-12 btn-outline hover:bg-bc-primary hover:border-txt-primary hover:text-txt-white text-txt-primary border-txt-primary hover:scale-75 transition-all ease-in-out duration-200">Read More</button>
                </div>
            </div>
        </section >
    );
};

export default Services;
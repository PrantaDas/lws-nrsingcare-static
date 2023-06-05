import React from 'react';
import { IoCall } from 'react-icons/io5';
import { ImLocation2 } from 'react-icons/im';
import { Link } from 'react-router-dom';

const tabs = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Our Services',
        path: '/services',
    },
    {
        name: 'Blog',
        path: '/blog',
    },
    {
        name: 'Contact Us',
        path: '/contact',
    }
];

const NavBar = () => {
    return (
        <section>
            <div className='px-10 pt-10 pb-2 grid grid-cols-2 justify-items-center'>
                <div>
                    <Link><h1 className='font-extrabold text-3xl'>LW Nursing Care</h1></Link>
                </div>
                <div className='flex gap-10'>
                    <div className='flex items-center gap-8'>
                        <div>
                            <a href="tel:+8801711111111"> <IoCall /></a>
                        </div>
                        <div>
                            <p className='text-sm tracking-wide leading-6'>+8801711111111</p>
                            <p className='text-sm tracking-wide leading-6'>info@lwnursingcarebd.com</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-8'>
                        <div>
                            <ImLocation2 />
                        </div>
                        <div>
                            <p className='text-sm tracking-wide leading-6'>House No: 12, Road No: 6, DOHS</p>
                            <p className='text-sm tracking-wide leading-6'>City, Mirpur: 12, Dhaka-1216</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar bg-neutral text-neutral-content flex justify-around">
                <div className='tabs'>
                    {
                        tabs.map((tab) => <Link className='tab font-bold focus:tab-active' key={tab.name} to={tab.path}>{tab.name}</Link>)
                    }
                </div>
                <div>
                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" placeholder="Search…" className="input input-sm input-bordered focus:outline-none" />
                            <button className="btn btn-square btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NavBar;
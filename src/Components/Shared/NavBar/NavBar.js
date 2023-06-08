import React from 'react';
import { IoCall } from 'react-icons/io5';
import { ImLocation2 } from 'react-icons/im';
import { Link } from 'react-scroll';

const tabs = [
    {
        name: 'Home',
        path: '/',
        id: 'home'
    },
    {
        name: 'Services',
        path: '/services',
        id: 'services'
    },
    {
        name: 'Gallery',
        path: '/blog',
        id: 'gallery'
    },
    {
        name: 'Contact Us',
        path: '/contact',
        id: 'contact'
    }
];

const NavBar = () => {
    return (
        <>
            <section className='w-screen lg:block hidden'>
                <div className='lg:px-10 lg:pt-10 pb-2 lg:grid lg:grid-cols-2 lg:justify-items-center'>
                    <div>
                        <Link
                            to={`home`}
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className='transition-all duration-300'
                        >
                            <h1 className='font-extrabold text-[#ED315D] lg:text-3xl'>LW Nursing Care</h1>
                        </Link>
                    </div>
                    <div className='lg:flex hidden lg:gap-10'>
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
                <div className="navbar bg-bc-secondary lg:flex lg:justify-around">
                    <div className='tabs'>
                        {
                            tabs.map((tab) => <Link
                                to={tab.id}
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                duration={500}
                                // offset={-70}
                                className='tab text-txt-white font-bold focus:text-txt-info focus:tab-active transition-all duration-300'
                                key={tab.name}
                            >{tab.name}
                            </Link>)
                        }
                    </div>
                    <div>
                        <div className="form-control hidden lg:block">
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

            <div className="navbar bg-base-100 lg:hidden">
                <div className="navbar-start">
                    <div className="dropdown z-50 opacity-100">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-bc-white mt-3 p-2 shadow rounded-box w-52">
                            {
                                tabs.map((tab) => <li>
                                    <Link
                                        to={tab.id}
                                        activeClass='active'
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        // offset={-70}
                                        className='lg:tab lg:text-txt-white font-bold text-txt-secondary focus:text-txt-info focus:tab-active transition-all duration-300'
                                        key={tab.name}
                                    >{tab.name}
                                    </Link>
                                </li>)
                            }
                        </ul>
                    </div>
                    <h1 className="btn btn-ghost hidden lg:block text-txt-primary normal-case text-xl font-bold">LWcare</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <h1 className="btn btn-ghost text-txt-primary normal-case text-xl lg:hidden font-extrabold">LWcare</h1>
                    <div className="form-control hidden lg:block">
                        <div className="input-group">
                            <input type="text" placeholder="Search…" className="input input-sm input-bordered focus:outline-none" />
                            <button className="btn btn-square btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
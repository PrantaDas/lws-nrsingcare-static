import React from 'react';
import { HiCheckBadge } from 'react-icons/hi2';

const CompanyInfo = () => {
    return (
        <section className='my-20 container mx-auto'>
            <h1 className='text-center font-bold text-3xl tracking-wider text-sky-400'>Company Information</h1>
            <div className='divider w-[45rem] mx-auto' />
            <div>
                <div className='h-[55vh] bg-gradient-to-br from-sky-600 to-violet-500 rounded-md grid grid-cols-2 justify-items-center content-center'>
                    <div>
                        {
                            new Array(8).fill('').map(() => <div className='flex items-center gap-3 py-2'>
                                <p className='text-lime-500'><HiCheckBadge /></p>
                                <p className='text-sm w-[30rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing. </p>
                            </div>)
                        }
                    </div>
                    <div>
                        {
                            new Array(8).fill('').map(() => <div className='flex items-center gap-3 py-2'>
                                <p className='text-lime-500'><HiCheckBadge /></p>
                                <p className='text-sm w-[30rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor, sit amet consectetur adipisicing. </p>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyInfo;
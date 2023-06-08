import React from 'react';
import image1 from '../../assets/gallery/g1-1.png';
import image2 from '../../assets/gallery/g2-1.png';
import image3 from '../../assets/gallery/g3-1.png';
import image4 from '../../assets/gallery/g4-1.png';
import image5 from '../../assets/gallery/g5-1.png';
import image6 from '../../assets/gallery/gc6.jpg';
import image7 from '../../assets/gallery/pb4.jpg';
import image8 from '../../assets/gallery/pb5.jpg';

const data = [
    {
        id: 1,
        photo: image1,
    },
    {
        id: 2,
        photo: image2,
    },
    {
        id: 3,
        photo: image3,
    },
    {
        id: 4,
        photo: image4,
    },
    {
        id: 5,
        photo: image5,
    },
    {
        id: 6,
        photo: image6,
    },
    {
        id: 7,
        photo: image7,
    },
    {
        id: 8,
        photo: image8,
    },
];


const Gallery = () => {
    return (
        <section id='gallery' className='bg-bc-white py-20'>
            <div className='container mx-auto'>
                <div className='text-center w-[23rem] lg:w-full mx-auto'>
                    <h2 className='text-txt-primary font-medium text-2xl'>Gallery</h2>
                    <div className='lg:block hidden'>
                        <h1 className='my-3 text-3xl text-txt-secondary font-semibold leading-normal'>Our cherished moments with<br /> our  patients.</h1>
                        <p className='text-txt-gray text-sm tracking-wider leading-'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, saed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua Ut enim ad minim nostrud</p>
                    </div>
                    <div className='lg:hidden block'>
                        <h1 className='my-3 text-3xl text-txt-secondary font-semibold leading-normal'>Our cherished moments with our  patients.</h1>
                        <p className='text-txt-gray text-sm tracking-wider leading-'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, saed do eiusmod tempor  incididunt ut labore et dolore magna aliqua Ut enim ad minim nostrud</p>
                    </div>
                </div>
                <div className='grid grid-cols-4 justify-items-center lg:gap-y-4 mt-10'>
                    {
                        data.map((d) => <div className='' key={d.id}>
                            <figure className='w-[6.8rem] lg:w-[23rem]'>
                                <img src={d.photo} alt="" />
                            </figure>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Gallery;
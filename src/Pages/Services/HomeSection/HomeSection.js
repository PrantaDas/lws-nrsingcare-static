import React from 'react';
import ServiceCard from '../../../Components/Shared/ServiceCard/ServiceCard';
import image1 from '../../../assets/images/cardImage2 (1).jpg';
import image2 from '../../../assets/images/cardImage2 (2).jpg';
import image3 from '../../../assets/images/cardImage3.jpg';


const data = [
    {
        title: 'Life hack',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, explicabo optio? Ullam, ipsa ex quasi aliquam voluptatem quos nobis enim, repudiandae, dolores ea eum tempore reiciendis in eos debitis soluta.',
        image: image1
    },
    {
        title: 'Life hack',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, explicabo optio? Ullam, ipsa ex quasi aliquam voluptatem quos nobis enim, repudiandae, dolores ea eum tempore reiciendis in eos debitis soluta.',
        image: image2
    },
    {
        title: 'Life hack',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, explicabo optio? Ullam, ipsa ex quasi aliquam voluptatem quos nobis enim, repudiandae, dolores ea eum tempore reiciendis in eos debitis soluta.',
        image: image3
    },
    {
        title: 'Life hack',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, explicabo optio? Ullam, ipsa ex quasi aliquam voluptatem quos nobis enim, repudiandae, dolores ea eum tempore reiciendis in eos debitis soluta.',
        image: image1
    },
    {
        title: 'Life hack',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, explicabo optio? Ullam, ipsa ex quasi aliquam voluptatem quos nobis enim, repudiandae, dolores ea eum tempore reiciendis in eos debitis soluta.',
        image: image2
    },
    {
        title: 'Life hack',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, explicabo optio? Ullam, ipsa ex quasi aliquam voluptatem quos nobis enim, repudiandae, dolores ea eum tempore reiciendis in eos debitis soluta.',
        image: image3
    }
];


const HomeSection = () => {
    return (
        <section>
            <h2 className="mt-16 font-bold text-4xl text-center uppercase tracking-wider">LW Nursing Care Agency</h2>
            <h3 className='my-5 text-center font-bold text-2xl text-sky-400'>Our Services</h3>
            <div className='divider w-60 mx-auto' />
            <div className="my-5 container mx-auto grid grid-cols-3 justify-items-center gap-y-14 bg-indigo-900 py-10 rounded-md">
                {
                    data.map((d, i) => <ServiceCard key={i} card={d} />)
                }
            </div>
        </section>
    );
};

export default HomeSection;
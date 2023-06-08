import React from 'react';
import CompanyInfo from '../../Components/CompanyInfo/CompanyInfo';
import Promises from '../../Components/Promises/Promises';
import Banner from '../../Components/Shared/Banner/Banner';
import TestiMonials from '../../Components/Shared/TestiMonials/TestiMonials';
import Services from '../../Components/Services/Services';
import Care from '../Care/Care';
import Specification from '../Specification/Specification';
import Gallery from '../../Components/Gallery/Gallery';
import Contact from '../../Components/Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner />
            <CompanyInfo />
            <Care />
            <Services />
            <Promises />
            <Specification />
            <Gallery />
            <Contact />
            <TestiMonials />
        </div>
    );
};

export default Home;
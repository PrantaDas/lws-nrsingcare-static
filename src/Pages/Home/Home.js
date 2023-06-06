import React from 'react';
import Banner from '../../Components/Shared/Banner/Banner';
import HomeSection from '../Services/HomeSection/HomeSection';
import CompanyInfo from '../../Components/CompanyInfo/CompanyInfo';
import TestiMonials from '../../Components/Shared/TestiMonials/TestiMonials';
import Faq from '../../Components/Faq/Faq';
import Promises from '../../Components/Promises/Promises';

const Home = () => {
    return (
        <div>
            <Banner />
            <HomeSection />
            <CompanyInfo />
            <Promises />
            <TestiMonials />
            {/* <Faq /> */}
        </div>
    );
};

export default Home;
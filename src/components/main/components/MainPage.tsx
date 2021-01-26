import React from 'react';
import Footer from '../../core/Footer';
import Header from '../../core/Header';
import SectionIntro from './SectionIntro';

const MainPage: React.FC = () => {
    return (
        <>
            <Header />
            <SectionIntro />
            <Footer /> 
        </>
    );
};

export default MainPage;
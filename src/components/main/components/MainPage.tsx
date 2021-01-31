import React from 'react';
const Footer = React.lazy(() => import('../../core/Footer'));
const Header = React.lazy(() => import('../../core/Header'));
const SectionIntro = React.lazy(() => import('./SectionIntro'));

const MainPage: React.FC = () => {
    return (
        <React.Suspense fallback="loading...">
            <Header />
            <SectionIntro />
            <Footer /> 
        </React.Suspense>
    );
};

export default MainPage;
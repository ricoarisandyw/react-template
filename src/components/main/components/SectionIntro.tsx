import React from 'react';
import { icons } from '../../../images/icons';
import {FaGithubAlt} from 'react-icons/fa'

const SectionIntro: React.FC = () => {
    return (
        <section className="d-flex" style={{height:"100vh"}}>
            <div className="my-auto mx-auto">
                <div className="text-center">
                    <h1>React + Webpack 5 + Bootstrap 5 + SCSS</h1>
                    <div className="d-none d-md-flex justify-content-center p-3">
                        <img className="px-3" height="100px" src={icons.logoReact} alt="logo react" />
                        <img className="px-3" height="100px" src={icons.logoWebpack} alt="logo react" />
                        <img className="px-3" height="100px" src={icons.logoBootstrap} alt="logo react" />
                        <img className="px-3" height="100px" src={icons.logoScss} alt="logo react" />
                    </div>
                    <button className="btn btn-primary circled">
                        <FaGithubAlt className="me-1" color="white" /> Clone Repository
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SectionIntro;
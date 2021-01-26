import React from 'react';
import HeaderItem from './HeaderItem';

const Header: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">by Rico</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <HeaderItem text="Home" link="" active/>
                <HeaderItem text="Profile" link=""/>
                <HeaderItem text="Template" link="">
                    <HeaderItem text="Dashboard" link="#" />
                    <HeaderItem text="E-commerce" link="#" />
                    <HeaderItem text="Social Media" link="#" />
                    <HeaderItem text="Games" link="#" />
                    <HeaderItem text="Blogger" link="#" />
                </HeaderItem>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
    );
}; 

export default Header;
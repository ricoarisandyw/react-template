import React from 'react';
import './Footer.scss'

const Footer: React.FC = () => {
    return (
        <footer className="p-5 bg-dark text-light">
            <div className="row">
                <div className="col-lg-4">
                    <h3>Profile</h3>
                    <ul className="list-unstyled text-small">
                        <li>Sidoarjo, Indonesia</li>
                        <li>+0812345678</li>
                        <li>dev.rico@mail.com</li>
                    </ul>
                </div>
                <div className="col-lg-4">
                    <h3>Template</h3>
                    <ul className="list-unstyled text-small">
                        <li>Dashboard</li>
                        <li>E - commerce</li>
                        <li>Social Media</li>
                        <li>Games</li>
                        <li>Blogger</li>
                    </ul>
                </div>
                <div className="col-lg-4">
                    <h3>Send me message</h3>
                    <form>
                        <div>
                            <label>What should I call you?</label>
                            <input className="form-control" />
                        </div>
                        <div>
                            <label>What improvement you will share?</label>
                            <input className="form-control" />
                        </div>
                        <div className="pt-3">
                            <input type="submit" className="btn btn-success" />
                        </div>
                    </form>
                </div>
            </div>
        </footer>
    ); 
};

export default Footer;
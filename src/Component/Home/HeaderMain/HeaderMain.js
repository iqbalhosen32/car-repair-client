import React from 'react';
import './HeaderMain.css';
import headerImage from '../../../Images/sten-rademaker-UZUzvJEvKnI-unsplash.jpg';

const HeaderMain = () => {
    return (
        <section className="headerMain-section p-3">
            <div className='row'>
                <div className='col-md-6 d-flex align-items-center'>
                    <div>
                        <h1 className="text-uppercase text-white">Professional <br /> Car Service</h1>
                        <a href="/service-booking" className="text-uppercase btn btn-all">Book Service</a>
                    </div>
                </div>
                <div className='col-md-6'>
                    <img className="header-image mt-4 mb-4" src={headerImage} alt=""></img>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;
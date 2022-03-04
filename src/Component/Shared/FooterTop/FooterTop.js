import React from 'react';
import './FooterTop.css';

const FooterTop = () => {
    return (
        <div className="FooterTop-container">
            <div className="row ">
                <div className="col-md-3 footerTop-single">
                    <h2 className="mb-4">Pages</h2>
                    <p>Home</p>
                    <p>Services</p>
                    <p>Home</p>
                    <p>Services</p>
                    <p>Home</p>
                </div>
                <div className="col-md-3 footerTop-single">
                    <h2 className="mb-4">SERVICES</h2>
                    <p>Change Oil</p>
                    <p>Engine Repair</p>
                    <p>Body Painting</p>
                    <p>Computer Diagnostics</p>
                    <p>Warranty Service</p>
                </div>
                <div className="col-md-3 footerTop-single">
                    <h2 className="mb-4">STORE</h2>
                    <p>Engine Parts</p>
                    <p>Suspension Parts</p>
                    <p>Engine Parts</p>
                    <p>Suspension Parts</p>
                    <p>Engine Parts</p>
                </div>
                <div className="col-md-3 footerTop-single">
                    <h2 className="mb-4">CONTACTS</h2>
                    <p>Fifth Avenue 42 New York 10018</p>
                    <p>info@irepair.com</p>
                    <p>8 100 830-1600</p>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;
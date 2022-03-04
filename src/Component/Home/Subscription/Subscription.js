import React from 'react';
import './Subscription.css';

const Subscription = () => {
    return (
        <div className="subscription-container">
            <div className="row subscription-wrapper">
                <div className="col-md-4 d-flex align-items-center">
                    <h2 className="text-white">Exclusive Savings <br /> <span style={{color: "#C8243E"}}>Discounts</span></h2>
                </div>
                <div className="col-md-8 d-flex align-items-center">
                    <div className="mail-section">
                        <input type="email" placeholder='Your Email'></input>
                        <button type="submit">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;
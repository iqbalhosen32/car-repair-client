import React from 'react';
import './Advantages.css';
import Guarantee from '../../../Images/Guarantee.png';
import Auto from '../../../Images/Auto Parts Store.png';
import Professional from '../../../Images/Professional Team.png';
import Truck from '../../../Images/Own Tow Truck.png';

const Advantages = () => {
    const advantages = [
        {
            advantageHeader: 'Official Guarantee',
            descriptions: 'We give a one-year guarantee for all work. Two years of official warranty for spare parts from our online store.',
            img: Guarantee
        },
        {
            advantageHeader: 'Auto Parts Store',
            descriptions: 'Own online store of original auto parts with delivery. 15% discount on spare parts when repairing your car.',
            img: Auto
        },
        {
            advantageHeader: 'Professional Team',
            descriptions: 'We employ only professional specialists with extensive experience in car services. Guarantee for all works.',
            img: Professional
        },
        {
            advantageHeader: 'Own Tow Truck',
            descriptions: 'If your car breaks down and does not go. We can quickly deliver it to our car service with our tow truck.',
            img: Truck
        }
    ]
    return (
        <div className="advantage-container">
            <h2 className="text-center text-white pt-5">Advantages</h2>
            <div className="row mt-5 pb-5 p-3">
                {
                    advantages.map(advantage =>
                        <div className="col-md-3 text-center advantage-single">
                            <img className="advantage-img" src={advantage.img} alt=""></img>
                            <h5 className="mt-4 text-white">{advantage.advantageHeader}</h5>
                            <small className="text-secondary">{advantage.descriptions}</small>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Advantages;
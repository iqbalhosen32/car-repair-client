import React from 'react';
import './Services.css'
import bodyPainting from '../../../Images/body-painting.jpg';
import breakSystem from '../../../Images/break-system.jpg';
import maintenance from '../../../Images/maintenance.jpg';
import engineRepair from '../../../Images/istockphoto-1284285153-170667a.jpg';

const Services = ({services}) => {
    // console.log(services)
    // const services = [
    //     {
    //         serviceName: 'Break Repair',
    //         img: breakSystem
    //     },
    //     {
    //         serviceName: 'Maintenance',
    //         img: maintenance
    //     },
    //     {
    //         serviceName: 'Engine Repair',
    //         img: engineRepair
    //     },
    //     {
    //         serviceName: 'Body Painting',
    //         img: bodyPainting
    //     }
    // ]
    return (
        <section className="service-container">
            <div>
                <h3 className="text-center pt-5 text-white">Our Services</h3>
            </div>
            <div className="row pt-5 pb-5 mb-5 d-flex justify-content-center align-items-center">
                {
                    services.map(service =>
                        <div className="col-md-3 p-3 banner-container">
                            <a href="/service-booking">
                                <span>
                                    <img className="banner-img" src={`data:image/png;base64,${service.image}`} alt="" />
                                </span>

                            </a>
                            <div className='centered'>
                                <button className="btn">{service.serviceName}</button>
                            </div>
                        </div>
                    )
                }
            </div>
            
        </section>
    );
};

export default Services;
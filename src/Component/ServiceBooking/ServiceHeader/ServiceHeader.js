import React, { useState } from 'react';
import './ServiceHeader.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ServiceCard from '../ServiceCard/ServiceCard';

const ServiceHeader = ({ services }) => {
    const [value, onChange] = useState(new Date());


    // console.log(services)
    return (
        <div>
            <div className="d-flex serviceHeader p-5 justify-content-center align-items-center">
                <div>
                    <Calendar className="calendar p-3" onChange={onChange} value={value} />
                </div>
            </div>
            <div className="services-container">
                <div className="row pt-3 pb-3 d-flex justify-content-center ">
                    {
                        services.map(service => <ServiceCard value={value} service={service}></ServiceCard>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default ServiceHeader;
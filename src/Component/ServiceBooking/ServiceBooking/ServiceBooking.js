import React from 'react';
import NavBar from './../../Shared/NavBar/NavBar';
import Footer from './../../Shared/Footer/Footer';
import Subscription from '../../Shared/Subscription/Subscription';
import ServiceHeader from '../ServiceHeader/ServiceHeader';

const ServiceBooking = ({services}) => {
    // console.log(test)
    return (
        <div>
            <NavBar></NavBar>
            <ServiceHeader services={services}></ServiceHeader>
            <Subscription></Subscription>
            <Footer></Footer>
        </div>
    );
};

export default ServiceBooking;
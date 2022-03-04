import React from 'react';
import BookingForm from './../BookingForm/BookingForm';

const ServiceCard = ({ service, value }) => {
    // const service = services};
    // console.log(service)

    const [modalIsOpen, setIsOpen] = React.useState(false);


    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (

        // <div>
        <div className="col-md-3 p-3 banner-container">
            <img className="banner-img" src={`data:image/png;base64,${service.image}`} alt="" />
            <div className='centered'>
                <button onClick={openModal} className="btn">{service.serviceName}</button>
            </div>
            <BookingForm serviceName={service.serviceName} modalIsOpen={modalIsOpen} closeModal={closeModal} value={value}></BookingForm>
        </div>
    );
};

export default ServiceCard;
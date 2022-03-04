import React from 'react';
import logo from '../../../Images/car-repair.png'

const SingleBookingList = ({bookListByEmail}) => {
    return (
        <div className="col-md-5 single-list">
            <div className="d-flex justify-content-between">
                <img className="logo" src={logo} alt=''></img>
                <button className="btn btn-all">Pending</button>
            </div>
            <h6 className="text-center mt-4 text-white">{bookListByEmail.serviceName}</h6>
        </div>
    );
};

export default SingleBookingList;
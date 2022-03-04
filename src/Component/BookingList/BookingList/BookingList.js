import React from 'react';
import './BookingList.css'
import Sidebar from '../../Dashboard/Dashboard/Sidebar/Sidebar';
import SingleBookingList from '../SingleBookingList/SingleBookingList';

const BookingList = ({bookListByEmail}) => {

    return (
        <div className="container-style">
            <div className="row">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 list-container">
                    <h6 className="text-white m-3">Service List</h6>

                    <div className="row">
                        {
                            bookListByEmail.map(bookListByEmail => <SingleBookingList bookListByEmail={bookListByEmail}></SingleBookingList>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingList;
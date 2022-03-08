import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUserPlus, faUser, faTableList, faCommentDots, faCalendarPlus, faHome } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';




const Sidebar = () => {
    // console.log(loggedInUser.email)
    const [isAdmin, setIsAdmin] = useState([]);
    const [isModerator, setIsModerator] = useState([]);

    console.log(isAdmin)
    console.log(isModerator)



    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: sessionStorage.getItem("email") })
        })
            .then(res => res.json())
            .then(result => {
                setIsAdmin(result)
            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/isModerator', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: sessionStorage.getItem("email") })
        })
            .then(res => res.json())
            .then(result => {
                // refreshPage()
                setIsModerator(result)
            })
    }, [])



    return (
        <div className="sidebar d-flex flex-column">
            <div className="sidebar-container">
                <h5 className="text-uppercase text-white m-3">Car Repair</h5>
                <ul className="list-unstyled">
                    <li>
                        <Link to="/home" className="text-decoration-none font-weight-bold text-style">
                            <FontAwesomeIcon icon={faHome} /> <span className="">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/service-booking" className="text-decoration-none font-weight-bold text-style">
                            <FontAwesomeIcon icon={faCartShopping} /> <span className="">Service Booking</span>
                        </Link>
                    </li>
                    {
                        isAdmin &&
                        <div>
                            <li>
                                <Link to="/add-new-service" className="text-decoration-none font-weight-bold text-style">
                                    <FontAwesomeIcon icon={faCalendarPlus} /> <span className="">Add New Service</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin-list" className="text-decoration-none font-weight-bold text-style">
                                    <FontAwesomeIcon icon={faUser} /> <span className="">Admin List</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/make-admin" className="text-decoration-none font-weight-bold text-style">
                                    <FontAwesomeIcon icon={faUserPlus} /> <span className="">Make Admin</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/add-moderator" className="text-decoration-none font-weight-bold text-style">
                                    <FontAwesomeIcon icon={faUserPlus} /> <span className="">Add New Moderator</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/moderator-list" className="text-decoration-none font-weight-bold text-style">
                                    <FontAwesomeIcon icon={faUser} /> <span className="">Moderator List</span>
                                </Link>
                            </li>
                        </div>
                    }
                    {
                        isModerator &&
                        <div>
                            <li>
                                <Link to="/add-new-service" className="text-decoration-none font-weight-bold text-style">
                                    <FontAwesomeIcon icon={faCalendarPlus} /> <span className="">Add New Service</span>
                                </Link>
                            </li>
                        </div>
                    }
                    <li>
                        <Link to="/booking-list" className="text-decoration-none font-weight-bold text-style">
                            <FontAwesomeIcon icon={faTableList} /> <span className="">Booking List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/review" className="text-decoration-none font-weight-bold text-style">
                            <FontAwesomeIcon icon={faCommentDots} /> <span className="">Review</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
import React, { useContext } from 'react';
import "./NavBar.css"
import { UserContext } from './../../../App';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    // console.log(loggedInUser)
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light" style={{ background: '#262626' }}>
                <div class="container-fluid">
                    <a class="navbar-brand text-white" href="/">CAR REPAIR</a>
                    <div className=' d-flex justify-content-end'>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link text-white active" aria-current="page" href="/home">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="/service-booking">Our Services</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link text-white" href="/dashboard">Dashboard</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="/contact-us">Contact Us</a>
                                </li>
                                {
                                    loggedInUser?.email
                                        ?
                                        <li>
                                            <button  className="btn btn-brand"><a className="nav-link text-white text-white" href="/login">LogOut</a></button>
                                        </li>
                                        :
                                        <li>
                                            <button className="btn btn-brand"><a className="nav-link text-white text-white" href="/login">Login</a></button>
                                        </li>

                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
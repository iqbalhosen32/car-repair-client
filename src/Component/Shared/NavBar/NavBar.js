import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { auth } from '../../Login/Login/firebase.config';
import "./NavBar.css"
import { UserContext } from './../../../App';


const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const refreshPage = () => {
        window.location.reload(false);
    }
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            sessionStorage.clear('email')
            console.log('Sign-out successful')
            refreshPage()
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ background: '#262626' }}>
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="/">CAR REPAIR</a>
                    <div className=' d-flex justify-content-end'>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link text-white active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/our-services">Our Services</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/dashboard">Dashboard</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/contact-us">Contact Us</a>
                                </li>
                                {
                                    loggedInUser?.email
                                        ?
                                        <li>
                                            <button onClick={logOut} className="btn btn-brand"><a className="nav-link text-white text-white" href="/login">LogOut</a></button>
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
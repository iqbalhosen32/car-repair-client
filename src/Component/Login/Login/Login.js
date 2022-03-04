import React, { useContext, useState, useEffect } from 'react';
import './Login.css';
import { signOut, GoogleAuthProvider, signInWithPopup, reload } from "firebase/auth";
import { auth } from './firebase.config';
import { UserContext } from '../../../App';
import NavBar from '../../Shared/NavBar/NavBar';



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const provider = new GoogleAuthProvider();

    // Stable login information or Read current user information
    const user = auth.currentUser;
    useEffect(() => {
        if (user) {
            setLoggedInUser(user)
        } else {

        }
    })


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                refreshPage()
                // ...
            }).catch((error) => {
                console.log(error)
            });
    }

    const refreshPage = () => {
        window.location.reload(false);
    }




    return (
        <div>
            <div>
                <NavBar></NavBar>
            </div>
            <div className="d-flex justify-content-center align-items-center login-container">
                <div className="text-center">
                    {
                        loggedInUser?.email
                            ?
                            <div>
                                <h2>Thank You {loggedInUser.displayName} </h2>
                                <p>You are Login successfully</p>
                            </div>
                            :
                            <div>
                                <h5>Login With</h5>
                                <button onClick={handleGoogleSignIn} className="btn btn-all m-1">Continue with google</button>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;
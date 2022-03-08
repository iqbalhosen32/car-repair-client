import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateOutletAM() {
    const [isModerator, setIsModerator] = useState([]);
    const [isAdmin, setIsAdmin] = useState([]);

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

    return isModerator || isAdmin ? <Outlet /> : <Navigate to="/login" />;
}
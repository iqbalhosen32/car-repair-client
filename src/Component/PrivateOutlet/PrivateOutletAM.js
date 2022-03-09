import { useState, useEffect } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

export default function PrivateOutletAM() {
    const [isModerator, setIsModerator] = useState([]);
    const [isAdmin, setIsAdmin] = useState([]);

    const location = useLocation()

    useEffect(() => {
        fetch('https://damp-woodland-01066.herokuapp.com/isAdmin', {
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
        fetch('https://damp-woodland-01066.herokuapp.com/isModerator', {
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

    return isModerator || isAdmin ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace/>;
}
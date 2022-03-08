import { useState, useEffect} from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateOutletAdmin() {
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

  return isAdmin ? <Outlet /> : <Navigate to="/login" />;
}
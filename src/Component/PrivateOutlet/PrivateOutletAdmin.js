import { useState, useEffect} from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function PrivateOutletAdmin() {
    const [isAdmin, setIsAdmin] = useState([]);

    const location = useLocation();
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

  return isAdmin ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}
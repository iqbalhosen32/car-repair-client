import { useState, useEffect} from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateOutletModerator() {
    const [isModerator, setIsModerator] = useState([]);
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

  return isModerator ? <Outlet /> : <Navigate to="/login" />;
}
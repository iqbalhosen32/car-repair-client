// import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import { useContext } from 'react';
import { AuthContext } from './../contexts/AuthProvider';

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}

export default useAuth;
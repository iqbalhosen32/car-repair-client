import { Navigate, Outlet } from "react-router-dom";

export default function PrivateOutlet() {

  return sessionStorage.getItem('email') ? <Outlet /> : <Navigate to="/login" />;
}
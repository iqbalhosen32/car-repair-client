import './App.css';
import Home from './Component/Home/Home/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ServiceBooking from './Component/ServiceBooking/ServiceBooking/ServiceBooking';
import { createContext, useEffect, useState } from 'react';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import BookingList from './Component/BookingList/BookingList/BookingList';
import AddService from './Component/AddService/AddService/AddService';
import Review from './Component/Review/Review/Review';
import Login from './Component/Login/Login/Login';
import { auth } from './Component/Login/Login/firebase.config';
import MakeAdmin from './Component/MakeAdmin/MakeAdmin/MakeAdmin';
import AdminList from './Component/AdminList/AdminList/AdminList';
import AddModaretor from './Component/AddModaretor/AddModaretor/AddModaretor';
import ModeratorList from './Component/ModeratorList/ModeratorList/ModeratorList';
import PrivateOutlet from './Component/PrivateOutlet/PrivateOutlet';
import PrivateOutletModerator from './Component/PrivateOutlet/PrivateOutletModerator';
import PrivateOutletAdmin from './Component/PrivateOutlet/PrivateOutletAdmin';
import PrivateOutletAM from './Component/PrivateOutlet/PrivateOutletAM';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  // console.log(loggedInUser)

  const [services, setServices] = useState([]);

  const [bookListByEmail, setBookListByEmail] = useState([]);

  // console.log(bookListByEmail);


  useEffect(() => {
    const url = `http://localhost:5000/booking-list-by-email`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: sessionStorage.getItem("email") })
    })
      .then(res => res.json())
      .then(result => setBookListByEmail(result))
  }, [])


  const user = auth.currentUser;
  useEffect(() => {
    if (user) {
      setLoggedInUser(user)
      sessionStorage.setItem("email", loggedInUser.email);
    } else {

    }
  })




  useEffect(() => {
    fetch('http://localhost:5000/allServices')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  useEffect(() => {
    const url = `http://localhost:5000/booking-list-by-email`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: sessionStorage.getItem("email") })
    })
      .then(res => res.json())
      .then(result => setBookListByEmail(result))
  }, [])

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="container">
        {/* <Router> */}
        <Routes>
          <Route path='/' element={<Home services={services} />} />
          <Route path='/home' element={<Home services={services} />} />
          <Route path='/service-booking' element={<ServiceBooking services={services} />} />
          <Route element={<PrivateOutlet />}>
            <Route path='/dashboard' element={<Dashboard bookListByEmail={bookListByEmail} />} />
          </Route>

          
          <Route element={<PrivateOutletAM />}>
            <Route path='/add-new-service' element={<AddService />} />
            <Route path='/booking-list' element={<BookingList bookListByEmail={bookListByEmail} />} />
          </Route>

          <Route element={<PrivateOutletAdmin />}>
            <Route path='/make-admin' element={<MakeAdmin />} />
            <Route path='/admin-list' element={<AdminList />} />
            <Route path='/add-moderator' element={<AddModaretor />} />
            <Route path='/moderator-list' element={<ModeratorList />} />
          </Route>

          <Route path='/review' element={<Review />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        {/* </Router> */}
      </div>
    </UserContext.Provider>
  );
}

export default App;
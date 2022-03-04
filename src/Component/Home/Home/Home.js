import React from 'react';
import Advantages from '../Advantages/Advantages';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Subscription from '../Subscription/Subscription';
import Testimonials from '../Testimonials/Testimonials';

const Home = ({clicked, services}) => {
    return (
        <section>
            <Header></Header>
            <Services clicked={clicked} services={services}></Services>
            <Advantages></Advantages>
            <Testimonials></Testimonials>
            <Subscription></Subscription>
            <Footer></Footer>
        </section>
    );
};

export default Home;
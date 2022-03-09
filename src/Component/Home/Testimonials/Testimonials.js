import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import Slider from 'react-slick';



const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        fetch('https://damp-woodland-01066.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    return (
        <div className="testimonial-container">
            <div>
                <h2 className="text-center text-white p-5">Testimonials</h2>
                <Slider {...settings}>
                    {
                        testimonials.map(testimonial =>
                            <div className="row">
                                <div className="d-flex justify-content-center">
                                    <div className="col-md-6 text-center advantage-single ">
                                        <img className="testimonial-img mb-3" src={`data:image/png;base64,${testimonial.img}`} alt=""></img>
                                        <small className="text-secondary">{testimonial.description}</small>
                                        <h3 className="mt-4 text-white">{testimonial.name}</h3>
                                        <h6 className="testimonial-designation pb-5">{testimonial.designation}</h6>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Testimonials;
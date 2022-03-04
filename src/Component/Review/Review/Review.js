import React, { useState } from 'react';
import Sidebar from '../../Dashboard/Dashboard/Sidebar/Sidebar';
import './Review.css'

const Review = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('companyName', info.companyName)
        formData.append('designation', info.designation)
        formData.append('description', info.description)

        const url = `http://localhost:5000/addReview`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error=> console.log(error))
    }
    return (
        <div className="container-style">
            <div className="row">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 review-container">
                    <h6 className="text-white m-3">Write Review About Us</h6>
                    <div className="add-service">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Your Name" />
                            </div>

                            <div className="form-group">
                                <input onBlur={handleBlur} type="text" className="form-control" name="companyName" placeholder="Company Name" />
                            </div>

                            <div className="form-group">
                                <input onBlur={handleBlur} type="text" className="form-control" name="designation" placeholder="Designation" />
                            </div>

                            <div className="form-group ">
                                <input onBlur={handleBlur} type="text" className="form-control description-section" name="description" placeholder="Description" />
                            </div>

                            <div className="form-check">
                                <input onChange={handleFileChange} type="file" className="form-control review-image" placeholder="Picture" />
                            </div>

                            <div className="d-flex justify-content-center mt-4">
                                <button type="submit" className="btn btn-all">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
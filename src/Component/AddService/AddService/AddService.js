import React, { useState } from 'react';
import './AddService.css'
import Sidebar from '../../Dashboard/Dashboard/Sidebar/Sidebar';

const AddService = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('serviceName', info.serviceName)

        const url = `http://localhost:5000/addNewService`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="container-style">
            <div className="row">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 add-service-container">
                    <h6 className="m-3 text-white">Add Service</h6>
                    <div className="add-service">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input onBlur={handleBlur} type="text" className="form-control" name="serviceName" placeholder="Enter Service Name" />
                                    </div>

                                </div>
                                <div className="col-md-6">
                                    <div className="form-check">
                                        <input onChange={handleFileChange} type="file" className="form-control" placeholder="Picture" />
                                    </div>
                                </div>
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

export default AddService;
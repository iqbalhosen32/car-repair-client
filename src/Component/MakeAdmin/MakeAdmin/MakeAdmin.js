import React from 'react';
import Sidebar from '../../Dashboard/Dashboard/Sidebar/Sidebar';
import './MakeAdmin.css';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const refreshPage = () => {
        window.location.reload(false);
    }

    const onSubmit = data => {
        fetch('http://localhost:5000/make-admin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(admin => {
            alert("New admin add successfully")
            refreshPage()
        })
        
    };
    return (
        <div className="container-style">
            <div className="row">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                    <h6 className="text-white m-3">Add New Admin</h6>
                    <div className="admin-wrapper">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="admin-input mt-3" type="text" name="name" placeholder="Admin Name" {...register("name", {required: true})} />
                            <input className="admin-input mt-3" type="email" name="email" placeholder="Enter Email" {...register("email", {required: true})} />
                            {errors.exampleRequired && <span>This field is required</span>}
                            <br/>
                            <button type="submit" className="btn btn-all mt-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;
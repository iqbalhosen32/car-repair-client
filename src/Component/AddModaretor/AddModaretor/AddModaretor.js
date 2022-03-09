import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Dashboard/Dashboard/Sidebar/Sidebar';

const AddModaretor = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const refreshPage = () => {
        window.location.reload(false);
    }

    const onSubmit = data => {
        fetch('https://damp-woodland-01066.herokuapp.com/add-moderator', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(admin => {
                alert("New moderator add successfully")
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
                    <h6 className="text-white m-3">Add New Moderator</h6>
                    <div className="admin-wrapper">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="admin-input mt-3" type="text" name="name" placeholder="Moderator Name" {...register("name", { required: true })} />
                            <input className="admin-input mt-3" type="email" name="email" placeholder="Enter Email" {...register("email", { required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}
                            <br />
                            <button type="submit" className="btn btn-all mt-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddModaretor;
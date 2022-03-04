import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Dashboard/Sidebar/Sidebar';

const AdminList = () => {
    const [admins, setAdmins] = useState([]);
    // console.log(admins)

    const refreshPage = () => {
        window.location.reload(false);
    }

    useEffect(() => {
        fetch('http://localhost:5000/admin-list')
            .then(res => res.json())
            .then(data => {
                setAdmins(data)
            })
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delete-admin/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
        alert("Admin Delete Successfully")
        refreshPage()
    }
    return (
        <div className="container-style">
            <div className="row">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                    <h6 className="text-white m-3">Admin Lists</h6>
                    <div className="mt-5">
                        <table className="table table-boderless">
                            <thead className="text-center">
                                <tr>
                                    <th className="text-white" scope="col">Sl.No</th>
                                    <th className="text-white" scope="col">Name</th>
                                    <th className="text-white" scope="col">Email Address</th>
                                    <th className="text-white" scope="col">Edit</th>
                                </tr>
                            </thead>
                            <tbody className="text-white text-center">
                                {
                                    admins.map((admin, index) =>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{admin.name}</td>
                                            <td>{admin.email}</td>
                                            <td><button onClick={() => handleDelete(admin._id)} className="btn btn-all">Delete Admin</button></td>
                                        </tr>
                                    )
                                }
                            </tbody>


                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminList;
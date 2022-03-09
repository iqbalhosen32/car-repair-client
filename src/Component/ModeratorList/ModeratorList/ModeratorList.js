import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Dashboard/Sidebar/Sidebar';

const ModeratorList = () => {
    const [moderators, setModerators] = useState([]);
    // console.log(moderators)

    const refreshPage = () => {
        window.location.reload(false);
    }

    useEffect(() => {
        fetch('https://damp-woodland-01066.herokuapp.com/moderator-list')
            .then(res => res.json())
            .then(data => {
                setModerators(data)
            })
    }, [])

    const handleDelete = (id) => {
        fetch(`https://damp-woodland-01066.herokuapp.com/delete-moderator/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
        alert("moderator Delete Successfully")
        refreshPage()
    }
    return (
        <div className="container-style">
            <div className="row">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                    <h6 className="text-white m-3">Moderator Lists</h6>
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
                                    moderators.map((moderator, index) =>
                                        <tr>
                                            <td className="">{index + 1}</td>
                                            <td className="">{moderator.name}</td>
                                            <td className="">{moderator.email}</td>
                                            <td className=""><button onClick={() => handleDelete(moderator._id)} className="btn btn-all">Delete moderator</button></td>
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

export default ModeratorList;
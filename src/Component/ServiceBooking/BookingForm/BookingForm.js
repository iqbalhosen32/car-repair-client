import React from 'react';
import './BookingForm.css'
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        width: '700px',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const BookingForm = ({ modalIsOpen, closeModal, serviceName, value }) => {
    const { handleSubmit, register } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        data.serviceName = serviceName;
        data.date = value;
        data.createdDate = new Date()
        console.log(data)
        const url = `http://localhost:5000/bookService`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            closeModal()
            alert('Thank You... Your Service Book Successfully')
        })

    }
    return (
        <div className="modal-container">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-brand text-center">{serviceName}</h2>
                <p className=" text-center mb-5">Date: {value.toDateString()}</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        <div className="form-group">
                            <input type="text" name="name" className="form-control" placeholder="Your Name" {...register('name', { required: true })} />
                        </div>
                        <div className="form-group">
                            <input type="phone" name="phone" className="form-control" placeholder="Your Number" {...register('number', { required: true })} />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" className="form-control" placeholder="Your Email" {...register('email', { required: true })} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-all ms-1 text-white">Submit</button>
                </form>
            </Modal>
        </div>
    );
};

export default BookingForm;
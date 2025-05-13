import axios from "axios";
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Create(){
    const navigate = useNavigate();
    const [formData , setFormData] =  useState({
        name : '',
        email : '',
        phone : ''
    })
    function handleSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:3000/user', formData)
        // fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) =>{
            navigate('/')
        } )
        .catch((err) => console.log(err))
    }
    return(
        <div className="w-100 vh-100 d-flex justify-content-center align-items-center bg-light vh-100">
            <div className="w-50 rounded bg-white border shadow p-4">
                 <h1>Add a User</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="mb-2">Name:</label>
                        <input type="text" placeholder="Enter Name" name="name" className="form-control mb-2" onChange={e => setFormData({...formData, name: e.target.value})} />
                    </div>
                    <div>
                        <label htmlFor="email" className="mb-2">Email:</label>
                        <input type="email" placeholder="Enter Email" name="email" className="form-control mb-2"  onChange={e => setFormData({...formData, email: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="phone" className="mb-2">Phone:</label>
                        <input type="text" placeholder="Enter phone " name="phone" className="form-control mb-2"  onChange={e => setFormData({...formData, phone: e.target.value})} />
                    </div>
                    <button className="btn bg-success text-white">Submit</button>
                    <Link to="/" className="btn bg-primary ms-3 text-white">Back</Link>
                </form>
            </div>
        </div>
    )
}
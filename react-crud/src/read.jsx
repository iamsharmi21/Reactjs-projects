import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

export default function Read(){
    const {id} = useParams();
    const [data, setData] = useState([]);
        useEffect(() => {
            axios.get('http://localhost:3000/user/'+id)
            // fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) =>{
                setData(res.data) 
               console.log(res.data, data)
            } )
            .catch((err) => console.log(err))
        },[])
    return(
        <div className="w-100 vh-100 d-flex justify-content-center align-items-center bg-light vh-100">
            <div className="w-50 rounded bg-white border shadow p-4">
                <h1>Detail of User</h1>
                <div className="mb-2">
                    <strong>Name: {data.name}</strong>
                </div>
                <div className="mb-2">
                    <strong>Email: {data.email}</strong>
                </div>
                <div className="mb-2">
                    <strong>Phone: {data.phone}</strong>
                </div>
                <Link to={`/update/${id}`} className="btn btn-success">Edit</Link>
                <Link to="/" className="btn bg-primary ms-3 text-white">Back</Link>
            </div>
        </div>    
    )
}
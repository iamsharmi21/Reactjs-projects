import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/user')
            // fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setData(res.data)
                console.log(res.data, data)
            })
            .catch((err) => console.log(err))
    }, [])
    const navigate = useNavigate();
    function handleDelete(id) {
        const confirm = window.confirm("Would u like to delete?");
        if (confirm) {
            axios.delete('http://localhost:3000/user/' + id)
            .then((res) => { navigate('/') })
            .catch((err) => {console.log(err)});
        }
    }
    return (
        <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100 ">
            <h1 className="mt-5 pt-5">List of Users</h1>
            <div className="w-75 rounded bg-white border shadow p-4">
                <div className="d-flex justify-content-end">
                    <Link to="/create" className="btn bg-success btn-sm text-light">Add+</Link>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((e) => {
                            return (
                                <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.email}</td>
                                    <td>{e.phone}</td>
                                    <td>
                                        <Link to={`/read/${e.id}`} className="btn btn-sm btn-info me-2">Read</Link>
                                        <Link to={`/update/${e.id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
                                        <button className="btn btn-sm btn-danger " onClick={event => handleDelete(e.id)}>Delete</button>
                                    </td>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
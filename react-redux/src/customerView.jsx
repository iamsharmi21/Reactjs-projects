import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteCustomers } from "./slices/customerSlice";

export default function CustomerView() {
    const customer = useSelector((state) => state.customers)
    const dispatch = useDispatch();

    function deletehandle(index){
        dispatch(deleteCustomers(index))
    }
    
    return (
        <div>
            <h3>Customer list</h3>
            <ul style={{listStyle:"none"}}>
                {
                    customer.map((customer, index) => <li>{customer} <button onClick={() => deletehandle(index)}>Delete</button></li>)
                }
            </ul>
        </div>
    )
}
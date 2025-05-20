import React, { useState } from "react"
import CustomerView from "./customerView";
import { addCustomers } from "./slices/customerSlice";
import { useDispatch } from "react-redux";

export default function CustomerAdd() {
    const [data, setData] = useState("");
    const dispatch = useDispatch();

    // const [customers, setCustomers] = useState([]);
    console.log(data);
    function handleSubmit() {
        if (data) {
            // setCustomers((previousState) => {
            //     return [...previousState, data]
            // })
            setData("")
            dispatch(addCustomers(data))
        }
    }
    return (
        <>
            <div>
                <h1>Add user here</h1>
                <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>

        </>

    )
}
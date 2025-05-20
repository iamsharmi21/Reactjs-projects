import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const customerSlice = createSlice({
    name : "customer",
    initialState : initialState,
    reducers : {
        addCustomers(state , action){
            state.push(action.payload)
        },
        deleteCustomers(state , action){
            const deleteIndex = action.payload;
            return state.filter((val, index) => index !== deleteIndex)
        }
    }
})

export const {addCustomers , deleteCustomers} =customerSlice.actions;
export default customerSlice.reducer
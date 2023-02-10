import React, { useState } from 'react'
import { useContext } from 'react';
import { AppContext } from './AppContext';
import {v4 as uuidv4} from "uuid";

const AddExpenseForm = () => {
    const{dispatch}=useContext(AppContext);
    const[name,setName]=useState("");
    const[cost,setCost]=useState("");

const onSubmit=(event)=>{
    event.preventDefault();
    //from here we are passing an expense from expense list
    const expense={
        id:uuidv4(),
        name:name,
        cost:cost,

    }
    dispatch({
        type:"ADD_EXPENSE",
        payload:expense,
    })
    setName("")
    setCost("")
}



    return (
        <form onSubmit={onSubmit}>
       
            <div className="namefield">
                <label htmlFor="name">Name </label>
                <input type="text" id="name" required className='name' value={name}  onChange={(event)=>setName(event.target.value)}/>
            </div>

            <div className="costfield">
                <label htmlFor="cost">Cost </label>
                <input type="text" id="cost" required className='cost' value={cost}  onChange={(event)=>setCost(event.target.value)}/>
            </div>

            <button type="submit" className='btnforsubmit'>SAVE</button>
        </form>
    )
}

export default AddExpenseForm
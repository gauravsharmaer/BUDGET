import React from 'react'
import ExpenseItem from './ExpenseItem';
import { AppContext } from './AppContext';
import { useContext } from 'react';
const ExpenseList = () => {
  const {expenses}=useContext(AppContext);
// const expenses=[
//     {id:1,name:"Shooping",cost:50},
//     {id:2,name:"Holiday",cost:300},
//     {id:3,name:"Transpor",cost:70},
//     {id:4,name:"Fuel",cost:40},
//     {id:5,name:"Child care",cost:500},
// ];
return(
   <ul>
     {
       expenses.map ((expense)=>(
        <ExpenseItem id={expense.id}
            name={expense.name}
            cost={expense.cost}
        />
       )

       )
    }
   </ul>
)
}

export default ExpenseList;
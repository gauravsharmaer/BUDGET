import React, { useContext } from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import { AppContext } from './AppContext';
const ExpenseItem = (props) => {

const{dispatch}=useContext(AppContext);
 const handleDeleteExpense=()=>{
  dispatch({
    type:"DELETE_EXPENSE",
    payload:props.id,
  })
 }

  return (
    <li className='list-group'>
         {props.name}
          
          <div className='costiconcontainer'> 
             <span className='cost-decoration'>
                ${props.cost}
                
             </span>
             <CancelIcon className='icon' onClick={handleDeleteExpense} size="1.5em"/>
          </div>

    
    </li>
    
  )
}

export default ExpenseItem
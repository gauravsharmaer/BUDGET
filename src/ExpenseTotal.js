import React from 'react'
import { useContext } from 'react'
import { AppContext } from './AppContext'
const ExpenseTotal = () => {
  const{expenses}=useContext(AppContext)
  const Totalexpenses=expenses.reduce((total,item)=>{
    return (total+=item.cost)
  },0)
  return (
   <div className="spent-container">Spent so far:${Totalexpenses}</div>

  )
}

export default ExpenseTotal
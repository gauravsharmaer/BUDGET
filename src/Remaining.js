import React, { useContext } from 'react'
import { AppContext } from './AppContext'
const Remaining = () => {
  const{expenses,budget}=useContext(AppContext);
  const Totalexpenses=expenses.reduce((total,item)=>{
    return (total=total+item.cost);

  },0)//here 0 is the starting value
 const remainingindicator=Totalexpenses>budget?"remaining-container-red ":"remaining-container-yellow "
  return (
    //dyanamically changing class name 
    <div className={remainingindicator}>
        <span>Remaining:${budget-Totalexpenses}</span>
    </div>
  )
}

export default Remaining
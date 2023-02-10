import React ,{useContext}from 'react'
import { AppContext } from './AppContext'

const Budget = () => {
  //here we are using the budget we gave as value in Appcontext
  const{budget}=useContext(AppContext)
  return (
    <div className="budget-container">
        <span>Budget:${budget}</span>
    </div>
  )
}

export default Budget
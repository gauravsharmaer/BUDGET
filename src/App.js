import React from 'react'
import Budget from './Budget'
import Remaining from './Remaining'
import ExpenseTotal from "./ExpenseTotal"
import ExpenseList from './ExpenseList'
import AddExpenseForm from './AddExpenseForm'
import { AppProvider } from './AppContext'
const App = () => {
    return (
       <AppProvider>


<div className="container">
            <h1 className='heading'>My Budget Planner</h1>
            <div className="budget"><Budget /></div>
            <div className="Remaining"><Remaining /></div>
            <div className="spent"><ExpenseTotal /></div>
            <hr />
            <h3>Expenses</h3>
            <div className="listofexpenses">
                <ExpenseList />
            </div>
            <hr />
            <h1>Add Expense</h1>
            <div className="expenseadder">
                <AddExpenseForm/>
            </div>
        </div>

       </AppProvider>
    );
};

export default App
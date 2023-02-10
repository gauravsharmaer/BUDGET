import {  useReducer } from "react";
import { createContext } from "react"

//appreducer from usereducer will acccept 2 parameters which are currrent state from react and action provided by dispatch
const AppReducer=(state,action)=>{
    //it uses switch statement to determine exactly  how to update the state ,using type of action provided by dispatch
    switch(action.type){
        //we will add expense from appfom
        case "ADD_EXPENSE":
            return{
                   ...state,//previous data
                   expenses:[...state.expenses,action.payload] //updated data
            }

            case "DELETE_EXPENSE":
            return{
                    ...state,
                    expenses:state.expenses.filter(
                        (expense)=>expense.id!==action.payload
                    )
            }
        default:
            return state;
    }

}


const initialState={
    budget:4000,
    expenses:[
        {id:1,name:"Shopping",cost:40},
        {id:2,name:"holiday",cost:400},
        {id:13,name:"car service",cost:400},
        
    ]
}
 //creating a context and assigning its value to Appcontext variable
export const AppContext=createContext();

 export const AppProvider=(props)=>{
    //to hold state we usereducer hooks
    //state is currentstate ,as the name sugggests initialstate ,App reducer is a function based on it the dispatch will update the currrent state
     const[state,dispatch]=useReducer(AppReducer,initialState);
     return(<AppContext.Provider value={
        {
            budget:state.budget,
            expenses:state.expenses,
            dispatch,
        }
     }>
      {props.children}
      {/* //any nested componenet inside our app provider */}
     </AppContext.Provider>)
}
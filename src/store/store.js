import { createStore } from 'redux';
import EmployeesDatas from '../datas/employees.json'

// State

const initialState = {
    newEmployee: "",
    employeeList: EmployeesDatas
}

// Actions

export const newEmployee = (newEmployee) => ({
    type: "newEmployee",
    payload: { newEmployee: newEmployee },
});

export const updateEmployeeList = (newEmployee) => ({
    type: "updateEmployeeList",
    payload: { newEmployee: newEmployee },
});


// Reducer 
function reducer(state, action) {

    if (action.type === "newEmployee") {
        const newEmployee = action.payload.newEmployee;
        return {
            ...state,
            newEmployee: newEmployee
        };
    }
    if (action.type === "updateEmployeeList") {
        
        const newEmployee = action.payload.newEmployee;
        return {
            ...state,
            employeeList: [newEmployee, ...state.employeeList]
        };
    }
    return state;
}

// Store

export const store = createStore(reducer, initialState);
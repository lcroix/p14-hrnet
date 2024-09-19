
import { USER_ADD, EMPLOYEES_ADD } from "../actions/formAction";


const initialState = {
    status:'null',
     employee: {
          firstname: "",
          lastname: "",
          dateOfBirth: "",
          startDate: "",
          street: "",
          city: "",
          state: "",
          zipCode: "",
          department: "",
     },
};
const initialStateEmployees = {
    employees: [],
    status: 'IDLE',
};

export const formReducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_ADD:
            return {
                ...state,
                status: 'SUCCEED',
                employee: {
                    firstname: action.payload.firstname,
                    lastname: action.payload.lastname,
                    dateOfBirth: action.payload.birthdate,
                    startDate: action.payload.startdate,
                    street: action.payload.street,
                    city: action.payload.city,
                    state: action.payload.state,
                    zipCode: action.payload.zipcode,
                    department: action.payload.state,
                }
            };
        default:
            return state; 
    }
};

export const employeesReducer = (state = initialStateEmployees, action) => {
    switch (action.type) {
        case EMPLOYEES_ADD:
            return {
                ...state,
                status: 'SUCCEED',
                employees: [...state.employees, action.payload] 
            };
        default:
            return state;
    }
};



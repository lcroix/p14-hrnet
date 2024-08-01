export const USER_ADD = 'USER_ADD'
export const EMPLOYEES_ADD = 'EMPLOYEES_ADD'


export const useradd = (userData) => {
    return {
        type: USER_ADD,
        payload: userData 

    }
}
export const employeesAdd = (employeeData) => {
    return {
        type: EMPLOYEES_ADD,
        payload: employeeData
    };
}




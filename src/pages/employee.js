import React from 'react';
import { NavLink } from 'react-router-dom';
import Form from '../components/form';


function CreateEmployee() {
    return ( 
            <div className='page'>
                <h1 className='title'>Current Employees</h1>
                <NavLink to='/'>Home</NavLink>
                <Form></Form>
            </div>
    )
}
export default CreateEmployee
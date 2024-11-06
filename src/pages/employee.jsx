import React from 'react';
import { NavLink } from 'react-router-dom';
import Form from '../components/form';
import './employee.css'


function CreateEmployee() {
    return ( 
            <div className='page'>
                <div className='header'>
                <h1 className='title'>Current Employees</h1>
                <NavLink to='/'>Home</NavLink>

                </div>
                <Form></Form>
            </div>
    )
}
export default CreateEmployee
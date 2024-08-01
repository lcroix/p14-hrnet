import React from "react";
import { useSelector } from 'react-redux';
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import 'react-data-table-component-extensions/dist/index.css';

export default function AllEmployees() {
    const employees = useSelector(state => state.employees.employees);
    console.log(employees);

    const columns = [
        {
            name: "First Name",
            selector: row => row.firstname,
            sortable: true,
        },
        {
            name: "Last Name",
            selector: row => row.lastname,
            sortable: true,
        },
        {
            name: "Birthdate",
            selector: row => row.birthdate,
            sortable: true,
            right: true,
        },
        {
            name: "City",
            selector: row => row.city,
            sortable: true,
        },
        {
            name: "Department",
            selector: row => row.departement,
            sortable: true,
        },
        {
            name: "Start Date",
            selector: row => row.startdate,
            sortable: true,
        },
        {
            name: "State",
            selector: row => row.state,
            sortable: true,
        },
        {
            name: "Street",
            selector: row => row.street,
            sortable: true,
        },
        {
            name: "Zipcode",
            selector: row => row.zipcode,
            sortable: true,
        },
    ];

    return (
        <>
            <div className="import-export-container">
                <div className="import-export-buttons">
                    <label className="custom-file-upload">
                        Import employees list
                    </label>
                </div>
            </div>
            <div className="employees-list-container">
                {employees && employees.length > 0 ? (
                    <DataTableExtensions
                        columns={columns}
                        data={employees}
                        print={false}
                        export={false}
                        filterPlaceholder="Search"
                    >
                        <DataTable
                            title="Employee List"
                            noHeader
                            pagination
                            highlightOnHover
                        />
                    </DataTableExtensions>
                ) : (
                    <div>No employees created.</div>
                )}
            </div>
        </>
    );
}

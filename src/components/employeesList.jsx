import React from "react";
import { useSelector } from 'react-redux';
import { CompactTable } from '@table-library/react-table-library/compact';
import { usePagination } from '@table-library/react-table-library/pagination';
import { useSort } from '@table-library/react-table-library/sort';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';
import './employeesList.css';

export default function AllEmployees() {
    const employees = useSelector(state => state.employees.employees);
    const theme = useTheme(getTheme());
    const pagination = usePagination({ nodes: employees }, {
      state: { page: 0, size: 10 }, 
      onChange: onPaginationChange,
    });

    function onPaginationChange(action, state) {
      console.log(action, state);
    }
    const sort = useSort(
      { nodes: employees },
      {
        onChange: onSortChange,
      },
      {
        sortFns: {
          FIRST_NAME: (array) => array.sort((a, b) => a.firstname.localeCompare(b.firstname)),
          LAST_NAME: (array) => array.sort((a, b) => a.lastname.localeCompare(b.lastname)),
          BIRTHDATE: (array) => array.sort((a, b) => new Date(a.birthdate) - new Date(b.birthdate)),
          CITY: (array) => array.sort((a, b) => a.city.localeCompare(b.city)),
          DEPARTMENT: (array) => array.sort((a, b) => a.departement.localeCompare(b.departement)),
          START_DATE: (array) => array.sort((a, b) => new Date(a.startdate) - new Date(b.startdate)),
          STATE: (array) => array.sort((a, b) => a.state.localeCompare(b.state)),
          STREET: (array) => array.sort((a, b) => a.street.localeCompare(b.street)),
          ZIPCODE: (array) => array.sort((a, b) => a.zipcode.localeCompare(b.zipcode)),
        }
      }
    );

    function onSortChange(action, state) {
      console.log(action, state);
    }

    // Définition des colonnes
    const COLUMNS = [
        { label: 'First Name', renderCell: (item) => item.firstname, sort: { sortKey: 'FIRST_NAME' } },
        { label: 'Last Name', renderCell: (item) => item.lastname, sort: { sortKey: 'LAST_NAME' } },
        { label: 'Birthdate', renderCell: (item) => item.birthdate, sort: { sortKey: 'BIRTHDATE' } },
        { label: 'City', renderCell: (item) => item.city, sort: { sortKey: 'CITY' } },
        { label: 'Department', renderCell: (item) => item.departement, sort: { sortKey: 'DEPARTMENT' } },
        { label: 'Start Date', renderCell: (item) => item.startdate, sort: { sortKey: 'START_DATE' } },
        { label: 'State', renderCell: (item) => item.state, sort: { sortKey: 'STATE' } },
        { label: 'Street', renderCell: (item) => item.street, sort: { sortKey: 'STREET' } },
        { label: 'Zipcode', renderCell: (item) => item.zipcode, sort: { sortKey: 'ZIPCODE' } },
    ];

    // Préparation des données
    const data = {
      nodes: pagination.state.nodes || employees.map((employee, index) => ({ ...employee, id: `employee-${index}` }))
    };

    return (
      <>
        <div className="import-export-container">
          <div className="import-export-buttons">
            <label className="custom-file-upload">Import employees list</label>
          </div>

          <div className="employees-list-container">
            {employees && employees.length > 0 ? (
              <CompactTable
                columns={COLUMNS}
                data={data}
                theme={theme}
                pagination={pagination}
                sort={sort}
              />
            ) : (
              <div>No employees created.</div>
            )}
          </div>

          <div className="pagination__Controls">
            <span>Total Pages: {pagination.state.getTotalPages(employees)}</span>
            <div className="pagination__Buttons">
              {pagination.state.getPages(employees).map((_, index) => (
                <button
                  key={`page-${index}`}
                  type="button"
                  className={`pagination__Button ${pagination.state.page === index ? 'active' : ''}`}
                  onClick={() => pagination.fns.onSetPage(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </>
    );
}

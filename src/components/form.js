import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "./form.css";
import districts from "../data/states.json";
import departement from "../data/departementsJobs.json";
import { useradd, employeesAdd } from "../redux/actions/formAction";
import { useDispatch } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import ModalComponent from "lcroix-confirm-popup/src/modale-component/modale-component";
// import { Modal } from  (import la modal custom)

export default function Form() {
  const [selectedState, setSelectedState] = useState(null);
  const [selectedDepartement, setSelectedDepartement] = useState(null);
  const [birthDate, setBirthDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  // const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();

  const handleForm = async (e) => {
    e.preventDefault();
    const postData = {
      firstname: e.target[0].value,
      lastname: e.target[1].value,
      birthdate: e.target[2].value,
      startdate: e.target[3].value,
      street: e.target[4].value,
      city: e.target[5].value,
      state: selectedState?.label,
      zipcode: e.target[7].value,
      departement: selectedDepartement?.name,
    };
    dispatch(useradd(postData));
    dispatch(employeesAdd(postData));
  };
  const options = districts.map((district) => ({
    value: district.abbreviation,
    label: district.name,
  }));


  return (
    <section className="sectionForm">
      <div className="formRight">
        <h2 className="title">Create Employee</h2>
        <div className="formContainer">
          <form
            className="formGroupControl"
            id="form-employee"
            onSubmit={(e) => handleForm(e)}
          >
            <div className="formGroupControl">
              <label htmlFor="firstname">First Name</label>
              <input type="text" id="firstname" />
            </div>
            <div className="formGroupControl">
              <label htmlFor="lastname">Last Name</label>
              <input type="text" id="lastname" />
            </div>
            <div className="selectDate">
              <label htmlFor="birthdate">Date of Birth</label>
              <DatePicker
                selected={birthDate}
                className="date-picker"
                placeholderText="dd/mm/yyyy"
                dateFormat="dd/MM/yyyy"
                showYearDropdown
                dropdownMode="select"
                onChange={(date) => setBirthDate(date)}
              />
            </div>
            <div className="selectDate">
              <label htmlFor="startdate">Start Date</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="date-picker"
                placeholderText="dd/mm/yyyy"
                dateFormat="dd/MM/yyyy"
                showYearDropdown
                dropdownMode="select"
              />
            </div>

            <div className="address">
              <span className="addresstitle">Address</span>

              <div className="formGroupControl">
                <label htmlFor="street">Street</label>
                <input type="text" id="street" />
              </div>
              <div className="formGroupControl">
                <label htmlFor="city">City</label>
                <input type="text" id="city" />
              </div>
              <div className="dropdown">
                <label htmlFor="state">State</label>
                <Select
                  value={selectedState}
                  defaultValue={{ label: "Select State...", value: null }}
                  onChange={setSelectedState}
                  options={options}
                />
              </div>
              <div className="formGroupControl">
                <label htmlFor="zipcode">Zip Code</label>
                <input type="number" id="zipcode" />
              </div>
            </div>

            <div className="dropdownDept">
              <label htmlFor="departement">Departement</label>
              <Select
                value={selectedDepartement}
                defaultValue={{ label: "Select Departement...", value: null }}
                onChange={setSelectedDepartement}
                options={departement}
              />
            </div>

            <input type="submit" value="save" className="submit" />
          </form>
          <ModalComponent />
          {/* <Modal isActive={isSubmit} setIsActive={setIsSubmit} message="L'employé a bien été ajouté !" /> */}
        </div>
      </div>
    </section>
  );
}

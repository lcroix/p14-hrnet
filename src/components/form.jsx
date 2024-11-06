import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "./form.css";
import districts from "../data/states.json";
import departement from "../data/departementsJobs.json";
import { useradd, employeesAdd } from "../redux/actions/formAction";
import { useDispatch } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import ModalComponent from "lcroix-confirm-popup";

export default function Form() {
  const [selectedState, setSelectedState] = useState(null);
  const [selectedDepartement, setSelectedDepartement] = useState(null);
  const [birthDate, setBirthDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
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
    if (
      !postData.firstname ||
      !postData.lastname ||
      !postData.birthdate ||
      !postData.startdate ||
      !postData.street ||
      !postData.city ||
      !postData.state ||
      !postData.zipcode ||
      !postData.departement
    ) {
      alert("Veuillez remplir tous les champs obligatoires.");
      setIsLoading(false);
      return;
    }

    try {
      await dispatch(useradd(postData));
      await dispatch(employeesAdd(postData));
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setIsLoading(false);
  };

  const options = districts.map((district) => ({
    value: district.abbreviation,
    label: district.name,
  }));

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


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

            <input
              type="submit"
              value={isLoading ? "Adding..." : "Add Employee"}
              className="submit-button"
              disabled={isLoading}
            />
          </form>
        </div>
        {isModalOpen && (
          <ModalComponent
            className="modal-content"
            message={"L'employé a bien été ajouté "}
            navigatePage= '/employee-list'
            buttonText="OK"
            onClose={handleCloseModal}
         
            buttonColor="blue"
          />
        )}
      </div>
    </section>
  );
}

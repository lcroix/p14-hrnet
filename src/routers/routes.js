import { Routes, Route } from "react-router-dom";
import Home from "../pages/home"
import CreateEmployee from "../pages/employee";
import EmployeesList from "../pages/employees-list";

const RoutesIndex = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-employee" element= {<CreateEmployee />} />
            <Route path="/employee-list" element={<EmployeesList />} />

        </Routes>
    )
}
export default RoutesIndex;
import { Link } from "react-router-dom";
import Banner from "../components/banner"
import Card from "../components/card";
import './home.css'
const features = [
     {
          title: "Employee Management",
          content: "Easily manage all your employee records in one place.",
     },
     {
          title: "Performance Tracking",
          content: "Track and analyze the performance of your employees.",
     },
     {
          title: "Secure Data",
          content: "Ensure your employee data is secure and confidential.",
     },
];
function Home() {
     return (
          <div>
               <Banner />
               <div className="features">
                    <h2 className="features-title">Features</h2>
                    <div className="feature-cards">
                         {features.map((feature, index) => (
                              <Card
                                   key={index}
                                   title={feature.title}
                                   content={feature.content}
                              />
                         ))}
                    </div>
               </div>
               <div className="cta">
                    <h2 className="cta-title ">Get Started</h2>
                    <div className="cta-links">
                         <Link to="/employee-list" className="cta-button">
                              View Current Employees
                         </Link>
                         <Link to="/create-employee" className="cta-button">
                              Add New Employee
                         </Link>
                    </div>
               </div>
          </div>
     );
}

export default Home;
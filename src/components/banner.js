import "./banner.css";
import React from "react";
import banner from "../assets/banner.avif";
import { useNavigate } from 'react-router-dom';
function Banner() {
     const navigate = useNavigate();

     const handleClick = () => {
          navigate("/"); 
     };

     return (
          <div className="banner">
               <img src={banner} className="banner-img" alt="banner" />
               <div className="banner-text" onClick={handleClick} style={{ cursor: "pointer" }}>
                    <h1>Welcome to HRnet</h1>
                    <p className="text">
                         Manage your employee records efficiently and
                         effectively.
                    </p>
               </div>
          </div>
     );
}

export default Banner;
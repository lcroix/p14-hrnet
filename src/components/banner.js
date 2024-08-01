import "./banner.css";
import banner from "../assets/banner.avif";
function Banner() {
     return (
          <div className="banner">
               <img src={banner} className="banner-img" alt="banner" />
               <div className="banner-text">
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
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";

import "./Header.css";
const Header = () => {
    return (
        <>
            <Navbar/>
            <Banner/>
            <div className="product-card-container"> 
                <Products/>  
            </div>
        </>
      );
    }
export default Header;

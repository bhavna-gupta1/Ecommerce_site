import React, { useState } from 'react';
import './NavbarCustomer.css';
import logo from './ctilogo.png';
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [showLedDropdown, setShowLedDropdown] = useState(false);
 const navigate=useNavigate();
  const toggleLedDropdown = () => {
    setShowLedDropdown(!showLedDropdown);
  };
  function Del_account(){
    navigate('/order_cancel')
  }
function User_profile(){
  navigate('/userprofile')
}
function CustomerOrder(){
  navigate('/myorder')
}
  return (
    <nav className="navbar_customer">
      <div className="navbar-logo_customer">
        <img src={logo} alt="Company Logo" className="logo_customer" />
      </div>
     <div className='menu_list_customer'>
     <ul className="navbar-menu_customer">
        <li><Link to="/home">Home</Link></li>

        {/* Products Dropdown */}
        <li className="dropdown_customer">
          <Link to="/product">
            Products <FaChevronDown className="dropdown-icon_customer" />
          </Link>
          <ul className="dropdown-menu_customer">
            <li 
              className="dropdown_customer"
              onMouseEnter={toggleLedDropdown} 
              onMouseLeave={toggleLedDropdown}
            >
              <Link to="/product/led-lights">
                LED Lights Products <FaChevronDown className="dropdown-icon_customer" />
              </Link>
              {showLedDropdown && (
                <ul className="sub-dropdown-menu_customer">
                  <li><Link to="/product/led-lights/raw-material">Raw Material</Link></li>
                  <li><Link to="/product/led-lights/finished-material">Finished Material</Link></li>
                  <li><Link to="/product/led-lights/smart-lighting">Smart Lighting</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/product/electrical-solar">Electrical / Solar Turnkey</Link></li>
            <li><Link to="/product/refrigeration">Refrigeration Equipment</Link></li>
            <li><Link to="/product/automotive">Automotive Products</Link></li>
            <li><Link to="/product/accessories">Electrical Accessories</Link></li>
            <li><Link to="/product/testing-kit">Testing Kit</Link></li>
          </ul>
        </li>

        {/* Services Dropdown */}
        <li className="dropdown_customer">
          <Link to="/services">
            Services <FaChevronDown className="dropdown-icon_customer" />
          </Link>
          <ul className="dropdown-menu_customer">
            <li><Link to="/services/consulting">Consulting</Link></li>
            <li><Link to="/services/installation">Installation</Link></li>
            <li><Link to="/services/maintenance">Maintenance</Link></li>
          </ul>
        </li>

        <li>
        <li className="profile-container_customer">
  <Link to="/profile">
    <CgProfile className="profile-cart-icon_customer" />
  </Link>
  <div className="profile-dropdown_customer">
    <div className="profile-option_customer">
      <CgProfile className="profile-icon_customer" onClick={User_profile} />
      <div className="profile-info_customer">
        <p className="profile-name_customer" onClick={User_profile}>John Doe</p>
        <p className="profile-phone_customer" onClick={User_profile}>+123 456 7890</p>
      </div>
    </div>
    <div className="profile-option_customer" onClick={CustomerOrder}>My Orders</div>
    <div className="profile-option_customer" onClick={Del_account}>Delete Account</div>
    <div className="profile-option_customer">Log out</div>
  </div>
</li>

</li>
        <li><Link to="/cart"><IoCartOutline className='profile-cart-icon_customer' /></Link></li>
      </ul>
     </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faUser, faCreditCard, faGift, faStar, faHandshake, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './ProfileSidebar.css';
import { CgProfile } from "react-icons/cg";
import userimg from '../user.png';
import { useNavigate } from 'react-router-dom';

const ProfileSidebar = () => {
    const navigate=useNavigate();
    function user_profile_side(){
        navigate('/userprofile')
    }
    function Manage_address(){
      navigate('/manage_address')
    }
    function Myorder(){
      navigate('./myorder')
    }
  return (
    <div className="sidebar_customer">
      <div className="profile-option_sidebar_customer">
     <div className="profile-icon-sidebar_customer">
     <img src={userimg} onClick={user_profile_side}  />
     </div>
     
      <div className="profile-info-side_customer">
        <p className="profile-name-side_customer" >John Doe</p>
        <p className="profile-phone-side_customer" >+123 456 7890</p>
      </div>
    </div>
      <div className="menu_customer">
        <div className="menu-section_customer">
          <FontAwesomeIcon icon={faBox} className="menu-icon_customer" onClick={Myorder} />
          <span onClick={Myorder}>MY ORDERS</span>
        </div>
        
        <div className="menu-section_customer">
          <FontAwesomeIcon icon={faUser} className="menu-icon_customer" />
          <span>ACCOUNT SETTINGS</span>
        </div>
        <ul className="submenu_customer">
          <li>Profile Information</li>
          <li onClick={Manage_address}>Manage Addresses</li>
          <li>Documents Information</li>
        </ul>

        <div className="menu-section_customer">
          <FontAwesomeIcon icon={faCreditCard} className="menu-icon_customer" />
          <span>PAYMENTS</span>
        </div>
        <ul className="submenu_customer">
          <li>Gift Cards</li>
        </ul>

        <div className="menu-section_customer">
          <FontAwesomeIcon icon={faGift} className="menu-icon_customer" />
          <span>MY STUFF</span>
        </div>
        <ul className="submenu_customer">
          <li>My Coupons</li>
          <li>My Reviews & Ratings</li>
          <li>All Notifications</li>
          <li>My Wishlist</li>
          <li>
            <FontAwesomeIcon icon={faStar} className="submenu-icon_customer" />
            Super Coin Zone
          </li>
        </ul>

        <div className="menu-section_customer">
          <FontAwesomeIcon icon={faHandshake} className="menu-icon_customer" />
          <span>ASSOCIATE WITH US</span>
        </div>

        <div className="menu-section logout_customer">
          <FontAwesomeIcon icon={faSignOutAlt} className="menu-icon_customer" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;

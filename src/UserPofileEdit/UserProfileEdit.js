import React, { useState } from 'react';
import ProfileSidebar from '../ProfilesideBar/ProfileSidebar';
import "./UserProfileEdit.css";
import footerimg from '.././footer_img.png'

const UserProfileEdit = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstName: "Gaurav",
    lastName: "Sharma",
    email: "gauravsharma21804@gmail.com",
    mobile: "+91 8759782045"
  });

  const handleEditToggle = () => {
    setIsEditing((prevState) => !prevState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSave = () => {
    // Add save functionality if needed, e.g., API call to save changes
    setIsEditing(false);
  };

  return (
    <div className='main_div_userprofile_customer'>
      <div className='user_profile_pg_div_customer'>
        <ProfileSidebar />
      </div>
      <div className="userprofile-page_customer">
        <div className="userprofile-content_customer">
          <h2>
            Profile Information
            <button onClick={handleEditToggle} className="edit-link_customer">
              {isEditing ? "Cancel" : "Edit"}
            </button>
          </h2>

          <div className="userprofile-edit-section_customer">
            <input 
              type="text"
              name="firstName"
              placeholder="First Name"
              value={userInfo.firstName}
              onChange={handleChange}
              disabled={!isEditing}
              className="userprofile-input_customer"
            />
            <input 
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={userInfo.lastName}
              onChange={handleChange}
              disabled={!isEditing}
              className="userprofile-input_customer"
            />
          </div>

          <h3>Email Address</h3>
          <div className="userprofile-edit-section_customer">
            <input 
              type="email"
              name="email"
              placeholder="Email Address"
              value={userInfo.email}
              onChange={handleChange}
              disabled={!isEditing}
              className="userprofile-input_customer"
            />
          </div>

          <h3>Mobile Number</h3>
          <div className="userprofile-edit-section_customer">
            <input 
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={userInfo.mobile}
              onChange={handleChange}
              disabled={!isEditing}
              className="userprofile-input_customer"
            />
          </div>

          {isEditing && (
            <button onClick={handleSave} className="userprofile-save-button_customer">
              SAVE
            </button>
          )}

<h3>FAQs</h3>
        <div className="userprofile-faq_customer">
          <p className="userprofile-faq-question_customer">What happens when I update my email address (or mobile number)?</p>
          <p className="userprofile-faq-answer_customer">Your login email id (or mobile number) changes, likewise. You'll receive all your account-related communication on your updated email address (or mobile number).</p>

          <p className="userprofile-faq-question_customer">When will my E-commerce account be updated with the new email address (or mobile number)?</p>
          <p className="userprofile-faq-answer_customer">It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>

          <p className="userprofile-faq-question_customer">What happens to my existing E-commerce account when I update my email address (or mobile number)?</p>
          <p className="userprofile-faq-answer_customer">Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information, and personal details.</p>

          <p className="userprofile-faq-question_customer">Does my Associate account get affected when I update my email address?</p>
          <p className="userprofile-faq-answer_customer">Our E-commerce has a 'single sign-on' policy. Any changes will reflect in your Seller account also.</p>
        </div>

        <div className='del_deactive_btn_customer'>
        <p className='deactive_customer'>Deactivate Account</p>
        <p className='delete_profile_customer'>  Delete Account</p>
        </div>
        <div className='footer_img_customer'>
            <img src={footerimg}/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileEdit;

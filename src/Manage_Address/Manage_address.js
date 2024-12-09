import React, { useState } from 'react';
import ProfileSidebar from '../ProfilesideBar/ProfileSidebar';
import './Manage_address.css';

function Manage_address() {
  const [showAddressForm, setShowAddressForm] = useState(false);

  // Toggle form visibility
  const handleAddNewAddress = () => setShowAddressForm(!showAddressForm);

  return (
    <>
      <div className='manage_address_main_div_customer'>
        <div className='user_profile_pg_div_customer'>
          <ProfileSidebar />
        </div>
        <div className='manage_new_main_div_customer'>
          <div className='manage_new_address_customer'>
            <h4>Manage Addresses</h4>
            <p onClick={handleAddNewAddress}>+ ADD NEW ADDRESS </p>
          </div>

          {showAddressForm && (
            <div className='address_form_customer'>
              <div className='form_row_customer'>
                <input type='text' placeholder='Name' className='input_field_customer' />
                <input type='text' placeholder='Phone Number' className='input_field_customer' />
              </div>
              <div className='form_row_customer'>
                <input type='text' placeholder='Pincode' className='input_field_customer' />
                <input type='text' placeholder='Locality' className='input_field_customer' />
              </div>
              <div className='form_row_customer'>
                <textarea placeholder='Address' className='address_input_customer' />
              </div>
              <div className='form_row_customer'>
                <input type='text' placeholder='City' className='input_field_customer' />
                <select className='input_field_customer'>
                  <option value=''>State</option>
                  <option value='state1'>State 1</option>
                  <option value='state2'>State 2</option>
                  {/* Add other states as options */}
                </select>
              </div>
              <div className='form_row_customer'>
                <label>
                  <input type='radio' name='addressType' value='home' /> Home
                </label>
                <label>
                  <input type='radio' name='addressType' value='work' /> Work
                </label>
              </div>
              <div className='form_row_customer'>
                <button className='save_btn_customer'>Save</button>
                <span className='cancel_text_customer' onClick={handleAddNewAddress}>Cancel</span>
              </div>
            </div>
          )}

          <div className='home_adress_main_div_customer'>
            {/* Existing address details */}
            <div className='home_address_customer'>
              <div className='home_name_div_customer'>
                <p className='home_head_customer'>Home</p>
                <p className='name_head_customer'>Gaurav Sharma</p>
                <p className='address_content_div_customer'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odio Lorem ipsum dolor sit amet.
                </p>
                <p className='address_phn_number_customer'>768898688</p>
              </div>
              <div className='edit_del_address_div_customer'>
                <p className='edit_address_customer'>Edit</p>
                <p className='del_address_customer'>Delete</p>
              </div>
            </div>
            {/* Repeat similar structure for additional addresses */}
            <div className='home_address_customer'>
              <div className='home_name_div_customer'>
                <p className='home_head_customer'>work</p>
                <p className='name_head_customer'>Gaurav Sharma</p>
                <p className='address_content_div_customer'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odio Lorem ipsum dolor sit amet.
                </p>
                <p className='address_phn_number_customer'>768898688</p>
              </div>
              <div className='edit_del_address_div_customer'>
                <p className='edit_address_customer'>Edit</p>
                <p className='del_address_customer'>Delete</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Manage_address;

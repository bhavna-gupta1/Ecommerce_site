import React, { useState } from 'react'
import './Address.css'
import { useLocation, useNavigate } from 'react-router-dom'


function Address() {

    const navigate=useNavigate()
    const location = useLocation();
    const { currentStep = 1, priceDetailData = [] } = location.state || {};



    const [addresses, setAddresses] = useState([
        { id: 1, name: 'Gaurav Sharma', addressLine: 'Lorem ipsum dolor sit amet', phone: '9677890045' }
    ]);
    const [editingAddress, setEditingAddress] = useState(null);
    const [newAddress, setNewAddress] = useState({
        name: '',
        phone: '',
        pincode: '',
        locality: '',
        city: '',
        state: '',
        addressLine: '',
        email: '',
        addressType: 'home'
    });
    const [showAddressForm, setShowAddressForm] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleEdit = (address) => {
        setEditingAddress(address);
        setNewAddress(address);
        setShowAddressForm(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAddress((prev) => ({ ...prev, [name]: value }));
    };

    const saveAddress = () => {
        // Check if any required fields are empty
        if (!newAddress.name || !newAddress.phone || !newAddress.pincode || !newAddress.locality || 
            !newAddress.city || !newAddress.state || !newAddress.addressLine || !newAddress.email) {
            setErrorMessage('All fields are required');
            return;
        }

        if (editingAddress) {
            setAddresses((prev) => prev.map((address) => address.id === editingAddress.id ? newAddress : address));
        } else {
            setAddresses((prev) => [newAddress, ...prev]);  // Add new address at the top
        }
        setShowAddressForm(false);
        setEditingAddress(null);
        setNewAddress({
            name: '',
            phone: '',
            pincode: '',
            locality: '',
            city: '',
            state: '',
            addressLine: '',
            addressType: 'home',
            email: ''
        });
        setErrorMessage('');
    };

    const handleCancel = () => {
        setShowAddressForm(false);
        setEditingAddress(null);
        setNewAddress({
            name: '',
            phone: '',
            pincode: '',
            locality: '',
            city: '',
            state: '',
            addressLine: '',
            addressType: 'home',
            email: ''
        });
        setErrorMessage('');
    };

 

    const handleAddressSelect = (addressId) => {
        if (selectedAddress === addressId) {
            setSelectedAddress(null);  // Deselect the address if it's already selected
        } else {
            setSelectedAddress(addressId);  // Select the new address
        }
    };
    function deliver(){
        navigate('/payment' , { state: { currentStep: 3, priceDetailData } })
    }

  return (
   <>
<div className='address_page_customer'>
       {/* Step Navigation */}
       <div className="step-navigation_customer">
        <div className="step-item_customer">
          <div
            className={`step_customer ${
              currentStep >= 1 ? "completed_customer" : ""
            }`}
          >
            1
          </div>
          <p className="step-label_customer">Cart</p>
        </div>
        <div className={`line_customer ${currentStep >= 2 ? "completed_customer" : ""}`}></div>
        <div className="step-item_customer">
          <div
            className={`step_customer ${
              currentStep >= 2 ? "completed_customer" : ""
            }`}
          >
            2
          </div>
          <p className="step-label_customer">Address</p>
        </div>
        <div className={`line_customer ${currentStep >= 3 ? "completed_customer" : ""}`}></div>
        <div className="step-item_customer">
          <div
            className={`step_customer ${
              currentStep >= 3 ? "completed_customer" : ""
            }`}
          >
            3
          </div>
          <p className="step-label_customer">Payment</p>
        </div>
        <div className={`line_customer ${currentStep >= 4 ? "completed_customer" : ""}`}></div>
        <div className="step-item_customer">
          <div
            className={`step_customer ${
              currentStep === 4 ? "completed_customer" : ""
            }`}
          >
            4
          </div>
          <p className="step-label_customer">Summary</p>
        </div>
      </div>



<div className='address_content_main_div_customer'>
    {/* left side */}
    <div className='left_side_customer'>
                        <div className="select_address_customer">
                            <h4>Select Delivery Address</h4>
                            <h5 onClick={() => setShowAddressForm(true)}>+ ADD NEW ADDRESS</h5>
                        </div>
                        
                        {showAddressForm && (
                            <div className='address_form_customer'>
                                {/* Error message display */}
                                {errorMessage && <div className="error_message_customer">{errorMessage}</div>}
                                <div className='form_row_customer'>
                                    <input 
                                        type='text' 
                                        placeholder='Name' 
                                        className='input_field_customer'
                                        value={newAddress.name}
                                        onChange={handleInputChange}
                                        name="name"
                                    />
                                    <input 
                                        type='text' 
                                        placeholder='Phone Number' 
                                        className='input_field_customer'
                                        value={newAddress.phone}
                                        onChange={handleInputChange}
                                        name="phone"
                                    />
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="Email"
                                        value={newAddress.email} 
                                        onChange={handleInputChange} 
                                    />
                                </div>
                                <div className='form_row_customer'>
                                    <input 
                                        type='text' 
                                        placeholder='Pincode' 
                                        className='input_field_customer'
                                        value={newAddress.pincode}
                                        onChange={handleInputChange}
                                        name="pincode"
                                    />
                                    <input 
                                        type='text' 
                                        placeholder='Locality' 
                                        className='input_field_customer'
                                        value={newAddress.locality}
                                        onChange={handleInputChange}
                                        name="locality"
                                    />
                                </div>
                                <div className='form_row_customer'>
                                    <textarea 
                                        placeholder='Address' 
                                        className='address_input_customer'
                                        value={newAddress.addressLine}
                                        onChange={handleInputChange}
                                        name="addressLine"
                                    />
                                </div>
                                <div className='form_row_customer'>
                                    <input 
                                        type='text' 
                                        placeholder='City' 
                                        className='input_field_customer'
                                        value={newAddress.city}
                                        onChange={handleInputChange}
                                        name="city"
                                    />
                                    <select 
                                        className='input_field_customer'
                                        value={newAddress.state}
                                        onChange={handleInputChange}
                                        name="state"
                                    >
                                        <option value=''>State</option>
                                        <option value='state1'>State 1</option>
                                        <option value='state2'>State 2</option>
                                    </select>
                                </div>
                                <div className='form_row_customer'>
                                    <label>
                                        <input 
                                            type='radio' 
                                            name='addressType' 
                                            value='home' 
                                            checked={newAddress.addressType === 'home'}
                                            onChange={handleInputChange}
                                            name="addressType"
                                        /> Home
                                    </label>
                                    <label>
                                        <input 
                                            type='radio' 
                                            name='addressType' 
                                            value='work' 
                                            checked={newAddress.addressType === 'work'}
                                            onChange={handleInputChange}
                                            name="addressType"
                                        /> Work
                                    </label>
                                </div>
                                <div className='form_row_customer'>
                                    <button className='save_btn_customer' onClick={saveAddress}>Save</button>
                                    <span className='cancel_text_customer' onClick={handleCancel}>Cancel</span>
                                </div>
                            </div>
                        )}

                        {addresses.map((address) => (
                            <div className='address_content_customer' key={address.id}>
                                <div className='name_edit_customer'>
                                    <p> <label>
                                        <input 
                                            type="radio" 
                                            name="selectedAddress" 
                                            checked={selectedAddress === address.id}
                                            onChange={() => handleAddressSelect(address.id)} 
                                            className='radio_select_address'
                                        />
                                       
                                    </label>{address.name}</p>
                                    <h5 onClick={() => handleEdit(address)}>EDIT</h5>
                                </div>
                                <div className='address_para_customer'>
                                    <p>{address.addressLine}</p>
                                    <p>{address.phone}</p>
                                    <p>{address.email}</p>
                                </div>
                                <div className='delivery_customer'>
                                   
                                <button onClick={deliver}>Delivery to this address</button>
                                </div>
                            </div>
                        ))}
                    </div>



   {/* right side */}
   <div className="product_right_side_customer">
    <div className="price_detail_container_customer">
      <div className="pice_detail_customer">
        <h4>Price Detail</h4>
        <div>
          <div className="total_price_customer">
            <p>Total product price</p>
            <p>{priceDetailData?.[0] || "0"}</p>
          </div>
          <div className="total_discount_customer">
            <p>Total Discount</p>
            <p>{priceDetailData?.[1] || "0"}</p>
          </div>
        </div>
      </div>

      <hr />
      <div className="order-total_customer">
        <h4>Order Total</h4>
        <p>{priceDetailData?.[2] || "0"}</p>
      </div>
      {priceDetailData?.[1] > 0 && (
  <div className="total_discount_msg_customer">
    <p>% Yah, your total discount is {priceDetailData?.[1]} rs</p>
  </div>
)}
      <div className="continue_customer">
        <p>Click on continue will not deduct any money</p>
        <button onClick={deliver}>Continue</button>
      </div>
    </div>
  </div>
</div>
</div>
   </>
  )
}

export default Address
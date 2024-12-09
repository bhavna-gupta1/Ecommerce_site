import React from 'react'
import { useState } from 'react';
import './Summary.css'
import { FaCaravan } from "react-icons/fa";
function Summary() {
    const [quantity, setQuantity] = useState(1);
    
      // Handle Quantity Change
      const increaseQuantity = () => setQuantity(quantity + 1);
      const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
    
      // Handle Product Deletion
      const deleteProduct = () => {
        console.log("Product deleted");
      };
      const Place_order=()=>{
        console.log("ORDER PLACED")
      }
  return (
   <>
    <div className='summary_pg_customer'>
   {/* Step Navigation */}
   <div className="step-navigation_customer">
  <div className="step-item_customer">
    <div className="step active_customer">1</div>
    <p className="step-label_customer">Cart</p>
  </div>
  <div className="line_customer"></div>
  <div className="step-item_customer">
    <div className="step_customer">2</div>
    <p className="step-label_customer">Address</p>
  </div>
  <div className="line_customer"></div>
  <div className="step-item_customer">
    <div className="step_customer">3</div>
    <p className="step-label_customer">Payment</p>
  </div>
  <div className="line_customer"></div>
  <div className="step-item_customer">
    <div className="step_customer">4</div>
    <p className="step-label_customer">Summary</p>
  </div>
</div>
<div className='main_summary_div_customer'>
{/* left side div */}
<div className="product_left_side_customer">
  
    <div className="product_head_summary_customer">
      <h4>Product Details</h4>
    </div>
    <div className='estimated_delivery_customer'>
        <p> <FaCaravan className="delivery-icon_customer" /> Estimated Delivery By Wednesday, 20th Nov</p>
    </div>
    <div className="cart-content_summary_customer">
      {/* Product Details */}
      <div className="product-details_customer">
        <div className="product-left_customer">
          {/* Product Image and Info */}
          <div className="product-image_customer">
            <img src="" alt="Product_customer" />
          </div>
          <div className="product-info_customer">
            <h3>Product Name</h3>
            <p>Price</p>
            <p>Qty:1</p>
          </div>
        </div>

        {/* Product Actions */}
      <div className='edit_btn_customer'>
        <h5>EDIT</h5>
      </div>
      </div>
    </div>
 
  <div className='Delivery_address_customer'>
  <div className="product_head_customer">
      <h4>Delivery Address</h4>
    </div>
    <div className='delivery_adress_content_customer'>
        <div className='name_edit_btn_customer'>
   <p>Gaurav Sharma</p>
   <h5>EDIT</h5>
   

   
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, non eius consequuntur culpa voluptatibus repellat aliquid plac</p>
    </div>
    <div className='paymnt_content_customer'>
    <div className="product_head_customer">
      <h4>Payment Mode</h4>
    </div>
    <div className='payment_mode_content_customer'>
        <p>Cash on delivery</p>
        <h5>EDIT</h5>
    </div>
    </div>

  </div>
  </div>

  {/* right side */}
  <div className="product_right_side_customer">
    <div className="price_detail_container_customer">
      <div className="pice_detail_customer">
        <h4>Price Detail</h4>
        <div>
          <div className="total_price_customer">
            <p>Total product price</p>
            <p>200</p>
          </div>
          <div className="total_discount_customer">
            <p>Total Discount</p>
            <p>400</p>
          </div>
        </div>
      </div>

      <hr />
      <div className="order-total_customer">
        <h4>Order Total</h4>
        <p>700</p>
      </div>
      <div className="total_discount_msg_customer">
        <p> % Yah, your total discount is 20rs</p>
      </div>
      <div className="continue_customer">
        
        <button onClick={Place_order}>Place Order</button>
      </div>
    </div>
  </div>
    </div>
    
    </div>
   </>
  )
}

export default Summary
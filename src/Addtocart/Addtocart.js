import React, { useState } from "react";
import './Addtocart.css'
import logo from '../ctilogo.png'
import { useNavigate } from "react-router-dom";

// Main CartPage Component
const Addtocart = () => {
  const [quantity, setQuantity] = useState(1);
const navigate=useNavigate()
  // Handle Quantity Change
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  // Handle Product Deletion
  const deleteProduct = () => {
    console.log("Product deleted");
  };
  const Continue=()=>{
    navigate('/continue')
  }

  return (
    <div className="cart-page_customer">
      
      

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


      {/* Cart Content */}
      <div className="product_add_main_div_customer">
  {/* Left side - Product Details */}
  <div className="product_left_side_customer">
    <div className="product_head_customer">
      <h4>Product Details</h4>
    </div>
    <div className="cart-content_customer">
      {/* Product Details */}
      <div className="product-details_customer">
        <div className="product-left_customer">
          {/* Product Image and Info */}
          <div className="product-image_customer">
            <img src="" alt="Product_customer" />
          </div>
          <div className="product-info_customer">
            <h3>Product Name</h3>
            <p>Product Description</p>
          </div>
        </div>

        {/* Product Actions */}
        <div className="product-actions_customer">
          <span className="delete_customer" onClick={deleteProduct}>
            X
          </span>
          <div className="quantity-counter_customer">
            <button className="minus_customer" onClick={decreaseQuantity}>
              -
            </button>
            <span className="quantity_customer">{quantity}</span>
            <button className="plus_customer" onClick={increaseQuantity}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Right side - Price Details */}
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
        <p>Click on continue will not deduct any money</p>
        <button onClick={Continue}>continue</button>
      </div>
    </div>
  </div>
</div>


     
     
   
   
    </div>
  );
};

export default Addtocart;

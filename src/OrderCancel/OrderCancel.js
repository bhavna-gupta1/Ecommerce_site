import React from "react";
import "./OrderCancel.css";
import { useState } from "react";

const OrderCancel = () => {
    const [status, setStatus] = useState("Your item has been shipped");

    const handlePointerClick = (e) => {
      const newStatus = e.target.getAttribute("data-status");
      setStatus(newStatus);
    };
  return (
    <>
    <div className="order-container">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        Home &gt; My Account &gt; My Orders &gt; OD332064725816664100
      </div>

      {/* Flex Section */}
      <div className="summary-section">
        <div className="delivery-address">
          <h3>Delivery Address</h3>
          <p className="name">Gaurav Sharma</p>
          <p>Dhabai Ji ka Bagh, Near Police Line, Alwar, Rajasthan, 301001</p>
          <p>Phone number: 7597382045</p>
        </div>

        <div className="rewards">
          <h3>Your Rewards</h3>
          <p className="reward-highlight">Early Access to this Sale</p>
          <p >For Cellus Tech Plus Members</p>
        </div>

    
      </div>

      {/* Product Section */}
      <div className="product-section">
        <div className="product-image">
          <img
            src="https://via.placeholder.com/100x150" // Replace with actual image
            alt="CTI-SL 50W FT-D Street Light"
          />
        </div>
        <div className="product-details">
          <h4>CTI-SL 50W FT-D Street Light</h4>
          <p className="price">₹249</p>
        </div>
        {/* Vertical Timeline */}
    
        <div className="order-tracing-container">
  <div className="timeline">
    <div className="timeline-item">
      <span className="label">Order Delivered</span>
      <div className="circle-line">
        <div className="circle"></div>
        <div className="line"></div>
      </div>
    </div>
    <div className="timeline-item">
      <span className="label">Order Cancelled</span>
      <div className="circle-line">
        <div className="line"></div>
        <div className="circle"></div>
      </div>
    </div>
  </div>
</div>



     
    </div>

     </div>  
   
   
</>
   
  );
};

export default OrderCancel;

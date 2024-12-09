import React from "react";
import "./OrderDeliver.css";
import { useState } from "react";

const OrderDeliver = () => {
    const [status, setStatus] = useState("Your item has been shipped");

    const handlePointerClick = (e) => {
      const newStatus = e.target.getAttribute("data-status");
      setStatus(newStatus);
    };
  return (
    
    <>
    <div className="order-container_customer">
      
      {/* Breadcrumbs */}
      <div className="breadcrumbs_customer">
        Home &gt; My Account &gt; My Orders &gt; OD332064725816664100
      </div>

      {/* Flex Section */}
      <div className="summary-section_customer">
        <div className="delivery-address_customer">
          <h3>Delivery Address</h3>
          <p className="name_customer">Gaurav Sharma</p>
          <p>Dhabai Ji ka Bagh, Near Police Line, Alwar, Rajasthan, 301001</p>
          <p>Phone number: 7597382045</p>
        </div>

        <div className="rewards_customer">
          <h3>Your Rewards</h3>
          <p className="reward-highlight_customer">Early Access to this Sale</p>
          <p >For Cellus Tech Plus Members</p>
        </div>

        <div className="more-actions_customer">
          <h3>More Actions</h3>
          <p>Download Invoice</p>
          <button className="download-btn_customer">Download</button>
        </div>
      </div>

      {/* Product Section */}
      <div className="product-section_customer">
        <div className="product-image_customer">
          <img
            src="https://via.placeholder.com/100x150" // Replace with actual image
            alt="CTI-SL 50W FT-D Street Light"
          />
        </div>
        <div className="product-details_customer">
          <h4>CTI-SL 50W FT-D Street Light</h4>
         
        </div>
        <p className="price_customer">₹249</p>
        {/* Vertical Timeline */}
        <div className="order-timeline_customer">
    <div className="timeline-step_customer">
      <span className="step-dot_customer active"></span>
      <div className="step-text_customer">Order Confirmed</div>
      <div className="dots-container_customer">
        <div className="dot1_customer"></div>
       
      </div>
      <div className="step-date_customer">Fri, 16th Aug</div>
    </div>
    <div className="timeline-step_customer">
      <span className="step-dot_customer active"></span>
      <div className="step-text_customer">Shipped</div>
      <div className="dots-container_customer">
        <div className="dot2_customer"></div>
        
      </div>
      <div className="step-date_customer">Sat, 17th Aug</div>
    </div>
    <div className="timeline-step_customer">
      <span className="step-dot_customer active"></span>
      <div className="step-text_customer">Out for Delivery</div>
      <div className="dots-container_customer">
        <div className="dot3_customer"></div>
        
      </div>
      <div className="step-date_customer">Mon, 19th Aug</div>
    </div>
    <div className="timeline-step_customer">
      <span className="step-dot_customer"></span>
      <div className="step-text_customer">Delivered</div>
      <div className="dots-container_customer">
        <div className="dot4_customer"></div>
        
      </div>
      <div className="step-date_customer">Wed, 21st Aug</div>
    </div>
  </div>

      {/* Scrollable Timeline */}
      {/* <div className="scroll-timeline">
        <div
          className="timeline-pointer active"
          data-status="Order Confirmed"
          onClick={handlePointerClick}
        ></div>
        <div
          className="timeline-pointer"
          data-status="Shipped"
          onClick={handlePointerClick}
        ></div>
        <div
          className="timeline-pointer"
          data-status="Out for Delivery"
          onClick={handlePointerClick}
        ></div>
        <div
          className="timeline-pointer"
          data-status="Delivered"
          onClick={handlePointerClick}
        ></div>
      </div> */}

      {/* Dynamic Status Text */}
      {/* <p className="status-text">{status}</p> */}
    </div>

     </div>  
   
   
</>
   
  );
};

export default OrderDeliver;

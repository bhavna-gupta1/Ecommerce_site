import React from "react";
import "./MyOrder.css";
import { Link, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Navigate } from "react-router-dom";
const MyOrder = () => {
    const navigate=useNavigate();

    function Order_deliver_Cancel(){
navigate('/Order_cancel_dilever')
    }
  const orderData = [
    {
      id: 1,
      name: "CTI-SL 50W FT-D Street Light",
      price: 249,
      status: "Cancelled",
      date: "Aug 15, 2024",
      description: "As per your request, your item has been cancelled",
    },
    {
      id: 2,
      name: "CTI-SL 30W FT-D Street Light",
      price: 299,
      status: "Delivered",
      date: "Aug 15, 2024",
      description: "Your item has been delivered",
    },
    {
      id: 3,
      name: "CTI-SL 50W FT-D Street Light",
      price: 249,
      status: "Returned",
      date: "Aug 15, 2024",
      description: "As per your request, your item has been returned",
    },
    {
      id: 4,
      name: "CTI-SL 30W FT-D Street Light",
      price: 299,
      status: "Delivered",
      date: "Aug 15, 2024",
      description: "Your item has been delivered",
    },
  ];

  const statusColor = {
    Delivered: "green",
    Cancelled: "red",
    Returned: "orange",
  };

  return (
    <div className="orders-container_customers">
     <div className="breadcrumb_customer">
        <Link to="/">Home</Link> &gt; 
        <Link to="/userprofile"> My Account</Link> &gt; 
        <span> My Orders</span>
      </div>
      
      <div className="orders-main_customer" >
        <aside className="orders-filter_customer">
          <h3>FILTERS</h3>
          <div>
            <h4>Order Status</h4>
            <label><input type="checkbox" defaultChecked /> On the way</label><br />
            <label><input type="checkbox" /> Delivered</label><br />
            <label><input type="checkbox" /> Cancelled</label><br />
            <label><input type="checkbox" /> Returned</label><br />
          </div>
          <div className="orders-date-filter_customer">
            <h4>Date</h4>
            <label><input type="checkbox" defaultChecked /> Last 30 days</label><br />
            <label><input type="checkbox" /> 2023</label><br />
            <label><input type="checkbox" /> 2022</label><br />
            <label><input type="checkbox" /> Older</label>
          </div>
        </aside>
        
        <div className="orders-content_customer">
          <div className="orders-search_customer">
            <input type="text" placeholder="Search Orders" />
            <button>Search Orders</button>
          </div>
          
          <div className="orders-list_customer" onClick={Order_deliver_Cancel}>
            {orderData.map((order) => (
              <div key={order.id} className="order-card_customer">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Product"
                  className="order-image_customer"
                />
                
                <div className="order-info_customer">
                  <div className="order-details_customer">
                    <p className="order-name_customer">{order.name}</p>
                    
                  </div>
                  <div >
                  <p className="order-price_customer">₹ {order.price}</p>
                  </div>
                  <div className="order-status_customer">
                    <div className="status-text_customer">
                      <span
                        className="status-indicator_customer"
                        style={{ backgroundColor: statusColor[order.status] }}
                      ></span>
                      {order.status} on {order.date}
                    </div>
                    <p className="order-description_customer">{order.description}</p>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;

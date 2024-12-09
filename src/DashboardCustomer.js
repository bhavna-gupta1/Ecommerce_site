import React from 'react';
import './DashboardCustomer.css';
import { Navigate, useNavigate } from "react-router-dom";
import ProductDetail from './ProductDetailCustomer';
import Card from './CardCustomer';
function Dashboard() {
  const navigate=useNavigate()
function Led(){
  navigate('/led_product')
}
  return (
   <>
    <div className="dashboard_customer">
      <div className="left-div_customer">
      <img src="https://media.istockphoto.com/id/1694195918/photo/a-serious-beautiful-cuban-woman-shopping-at-the-supermarket.webp?a=1&b=1&s=612x612&w=0&k=20&c=bfquV1I31Ml89wWTeF3VKYWNwlgtk--3sZJnCFD_OSw=" alt="Product" />
      <div className="overlay_customer">
          <h3>LED Lights</h3>
            <p>This is a description for Led light products.</p>
            <button onClick={Led}>Shop Now</button>
          </div>
      </div>
      
      <div className="right-div_customer">
        <div className="box_customer">
          <img src="https://media.istockphoto.com/id/1694195918/photo/a-serious-beautiful-cuban-woman-shopping-at-the-supermarket.webp?a=1&b=1&s=612x612&w=0&k=20&c=bfquV1I31Ml89wWTeF3VKYWNwlgtk--3sZJnCFD_OSw=" alt="Product" />
          <div className="overlay_customer">
          <h3>WOMEN</h3>
            <p>This is a description for Women’s products.</p>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="box_customer">
          <img src="https://media.istockphoto.com/id/1694195918/photo/a-serious-beautiful-cuban-woman-shopping-at-the-supermarket.webp?a=1&b=1&s=612x612&w=0&k=20&c=bfquV1I31Ml89wWTeF3VKYWNwlgtk--3sZJnCFD_OSw=" alt="Product" />
          <div className="overlay_customer">
          <h3>WOMEN</h3>
            <p>This is a description for Women’s products.</p>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="box_customer">
          <img src="https://media.istockphoto.com/id/1694195918/photo/a-serious-beautiful-cuban-woman-shopping-at-the-supermarket.webp?a=1&b=1&s=612x612&w=0&k=20&c=bfquV1I31Ml89wWTeF3VKYWNwlgtk--3sZJnCFD_OSw=" alt="Product" />
          <div className="overlay_customer">
          <h3>WOMEN</h3>
            <p>This is a description for Women’s products.</p>
            <button>Shop Now</button>
          </div>
        </div>
        <div className="box_customer">
          <img src="https://media.istockphoto.com/id/1694195918/photo/a-serious-beautiful-cuban-woman-shopping-at-the-supermarket.webp?a=1&b=1&s=612x612&w=0&k=20&c=bfquV1I31Ml89wWTeF3VKYWNwlgtk--3sZJnCFD_OSw=" alt="Product" />
          <div className="overlay_customer">
          <h3>WOMEN</h3>
            <p>This is a description for Women’s products.</p>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
    <Card/>
   </>
    
  );
}

export default Dashboard;

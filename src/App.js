import React from 'react';
import './App.css';
import Navbar from './NavbarCustomer';
import Card from './CardCustomer';
import Dashboard from './DashboardCustomer';
import ProductDetail from './ProductDetailCustomer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import EcomRegister from './EcomRegister';
import Addtocart from './Addtocart/Addtocart';
import Address from './Address/Address';
import Payment from './Payment/Payment';
import Summary from './Summary/Summary';
import RawMaterial from './RawMaterial/RawMaterial';
import ProfileSidebar from './ProfilesideBar/ProfileSidebar';
import UserProfileEdit from './UserPofileEdit/UserProfileEdit';
import Manage_address from './Manage_Address/Manage_address';
import Footer from './Footer/Footer';
import MyOrder from './MyOrder/MyOrder';
import OrderDeliver from './OrderDeliver/OrderDeliver';
import OrderCancel from './OrderCancel/OrderCancel';
function App() {
  return (
   <>
  <Router>
  <Navbar/>
{/* <EcomRegister/> */}
 
    <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path='/home' element={<Dashboard/>}/>
   {/* <Route path='/led_product'  element={<Card/>}/> */}
   <Route path="/ProductDetail/:product_id" element={<ProductDetail/>} />
   {/* <Route path ='/ProductDetail' element={<ProductDetail/>}/> */}
  <Route path='/addtocart' element={<Addtocart/>}/>
  <Route path='/continue' element={<Address/>}/>
<Route path='/payment' element={<Payment/>}/>
<Route path='/summary' element={<Summary/>}/>
<Route path='/product/led-lights/raw-material' element={<RawMaterial/>}/>
<Route path='/profilesidebar' element={<ProfileSidebar/>}/>
<Route path='/userprofile' element={<UserProfileEdit/>}/>
<Route path='/manage_address'  element={<Manage_address/>}/>
<Route path='/myorder' element={<MyOrder/>}/>
<Route path='/Order_cancel_dilever' element={<OrderDeliver/>}/>
<Route path='/order_cancel' element={<OrderCancel/>}/>


   </Routes>
   {/* <Footer/> */}

  </Router>
  
   </>
  );
}

export default App;

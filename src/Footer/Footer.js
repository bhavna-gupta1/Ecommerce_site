import React from 'react';
import './Footer.css';
import logo from '.././ctilogo.png';
import { FaPhone, FaWhatsapp, FaEnvelope, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left section - Logo and description */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="Cellus Tech India Logo" className="logo-img" />
           
          </div>
          <p>
            CELLUS TECH INDIA is all LED lighting, innovative technology and solution provider company with a focus on smart IoT-based energy-efficient devices. LED-based lighting systems and energy conservation. The company envisions a green future by embracing innovative, intelligent lighting solutions, green technology that contributes towards reducing carbon emissions. Our extensive product portfolio includes architectural and commercial and household LEDs.
          </p>
        </div>

        {/* Center section - Links */}
        <div className="footer-center">
          <ul>
            <li>Home</li>
            <li>Automotive Solutions</li>
            <li>IIoT Solutions</li>
            <li>Electronic Products</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Right section - Contact Info */}
        <div className="footer-right">
       <div className='phn_no'>
      <div  className='phn_symbol'>
<FaPhone/>
      </div>
         <div className='land_no'>
         <p>Landline:</p>
         <p> +91 1493-452877</p>
         </div>
       </div>
          <p><FaWhatsapp /> Whatsapp: +91 9416922877</p>
          <p><FaEnvelope /> Mail: info@cellustechindia.com</p>
        </div>
      </div>

      {/* Bottom section - Copyright and Social Media */}
      <div className="footer-bottom">
        <p>© 2024 Cellus Tech India. All rights reserved.</p>
        <div className="footer-social">
        <FaInstagram className="instagram" />
  <FaFacebook className="facebook" />
  <FaEnvelope className="mail" />
  <FaLinkedin className="linkedin" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import "./EcomRegister.css";
import desk from "./desk.png";
import axios from "axios";
import InputField from "./InputField";
import { useNavigate } from "react-router-dom";

function EcomRegister() {
  const [isLogin, setIsLogin] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [role, setRole] = useState("");
  const navigate=useNavigate()

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    username: "",
    email: "",
    mobile_number: "",
  });

  const [passwordData, setPasswordData] = useState({
    password: "",
    password_confirm: "",
    otp: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTabClick = (tab) => {
    setIsLogin(tab === "login");
  };

  const handleOtpSubmit = () => {
    if (otp === "123456") {
      setOtpVerified(true);
    } else {
      alert("Invalid OTP");
    }
  };

  const handleSubmit = async (e) => {
    console.log("handlesubmit called");
    e.preventDefault();
    setError("");
    setSuccess("");

    // if (formData.password !== formData.password2) {
    //   setError('Passwords do not match');
    //   return;
    // }

    // Check if password length is greater than 3 characters
    // if (formData.password.length <= 3) {
    //   setError('Password must be greater than 3 characters');
    //   return;
    // }

    if (!/^\d{10}$/.test(formData.mobile_number)) {
      setError("Mobile number must be a 10-digit number");
      return;
    }

    try {
      const link = process.env.REACT_APP_BASE_URL;
      const response = await axios.post(`${link}/auth/api/registeruser`, {
        username: formData.username,
        email: formData.email,
        fName: formData.fName,
        lName: formData.lName,
        mobile_number: formData.mobile_number,
      });

      if (response.status == 200) {
        setError("");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const errorData = error.response.data;
        // Check for specific error messages from the response
        if (errorData.username && errorData.username.length > 0) {
          setError("Username already exists. Please choose a different one.");
        } else if (errorData.email && errorData.email.length > 0) {
          setError("Email already exists. Please use a different email.");
        } else {
          setError(errorData.Error || "An error occurred during registration");
        }
      } else {
        setError("Failed to register. Please try again later.");
      }
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (passwordData.password !== passwordData.password_confirm) {
      setError("Passwords do not match");
      return;
    }
    if (passwordData.password.length <= 3) {
      setError("Password must be greater than 3 characters");
      return;
    }
    try {
      const link = process.env.REACT_APP_BASE_URL;
      const response = await axios.post(`${link}/auth/api/confirmuser`, {
        mobile_number: formData.mobile_number,
        otp: passwordData.otp,
        password: passwordData.password,
        password_confirm: passwordData.password_confirm,
      });

      if (response.status == 201) {
        alert("Account successfully created!");
        setError("");
        // Reset form data
        setPasswordData({
          otp: "",
          password: "",
          password_confirm: "",
        });
        setFormData({
          mobile_number: "",
          email: "",
          fName: "",
          lName: "",
          username: "",
        });
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const errorData = error.response.data;
        // Check for specific error messages from the response
        if (errorData) {
          setError(errorData.error || "An error occurred during registration");
        }
      } else {
        setError("Failed to register. Please try again later.");
      }
    }
  };

 
  
  const handleLogin = async () => {
    const link = 'http://192.168.1.5:8001/api/login';
    try {
      const params = new URLSearchParams();
      params.append("admin_name", "Gaurav");
      params.append("password", "abc");
  
      const response = await fetch(`${link}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: params, // Convert URLSearchParams to a string
        credentials: 'include', // Include credentials if required by the server
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
      } else {
        console.error("Login failed:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Fetch request failed:", error);
    }
  };
  

  const handleApi = async () => {
    if (username === '' || password === '') {
      alert('Please Enter Username and Password');
      return;
    }
    try {
      // Send user input to the login API
      const response = await axios.post('/api/login', {
        username,
        password,
      });
  
      // Log the entire response to inspect it
      console.log(response.data);
  
      if (response.data && response.data.access) {
        console.log('Access Token:', response.data.access);        
  
        // Store tokens
        localStorage.setItem('accessToken', response.data.access);
  
        alert('Logged In Successfully');
     
        // navigate('/products');
      } else {
        console.error('Login failed: No access token in response');
      }
    } catch (error) {
      if (error.response) {
        console.error('Login failed:', error.response.data, error.response.status);
      } else if (error.request) {
        console.error('No response from server:', error.request);
      } else {
        console.error('Error:', error.message);
      }
    }
  };

  return (
    <div className="ecom-register-main">
      <div className="ecom-register">
        {/* Left Side */}
        <div className="ecom-reg-leftside">
          <img src={desk} alt="Desk Image" />
        </div>

        {/* Right Side - Register/Login Form */}
        <div className="ecom-reg-rightside">
          <div className="ecom-reg-rightdiv">
            {/* Tabs for Register/Login */}
            <div className="ecom-reg-tabs">
              <span
                className={isLogin ? "" : "active"}
                onClick={() => handleTabClick("register")}
              >
                Register
              </span>
              <span
                className={isLogin ? "active" : ""}
                onClick={() => handleTabClick("login")}
              >
                Login
              </span>
            </div>

       

            {/* Form */}
            <div className="ecom-reg-form">
              {!isLogin ? (
                <>
                  <div className="ecom-reg-input-group">
                    <InputField
                      type="text"
                      className="ecom-reg-ip"
                      placeholder="First Name"
                      value={formData.fName}
                      onChange={handleChange}
                      name="fName"
                      required
                    />
                    <InputField
                      type="text"
                      className="ecom-reg-ip"
                      placeholder="Last Name"
                      name="lName"
                      value={formData.lName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <InputField
                    type="text"
                    className="ecom-reg-ip"
                    placeholder="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />

                  <InputField
                    type="tel"
                    className="ecom-reg-ip"
                    placeholder="12345 12345"
                    name="mobile_number"
                    value={formData.mobile_number}
                    pattern="[0-9]{10}"
                    onChange={handleChange}
                    required
                  />

                  <div className="ecom-reg-input-group">
                    <InputField
                      className="ecom-reg-ip"
                      type="text"
                      placeholder="OTP"
                      name="otp"
                      value={passwordData.otp}
                      onChange={handlePasswordChange}
                      required
                    />
                    <button
                      type="submit"
                      className="ecom-reg-otp-btn"
                      // onClick={() => setOtpSent(true)}
                      onClick={handleSubmit}
                    >
                      Send OTP
                    </button>
                  </div>

                  {/* {otpSent && (
                    <button
                      type="button"
                      className="verify-btn"
                      onClick={handleOtpSubmit}
                    >
                      Verify OTP
                    </button>
                  )} */}
                </>
              ) : (
                <>
                
                  <select value={role} onChange={handleRoleChange}>
                    <option value=''>Select Role</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                  <InputField
                    type="email"
                    className="ecom-reg-ip"
                    placeholder="Email/Username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                  <InputField
                    type="password"
                    className="ecom-reg-ip"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </>
              )}

              {/* Set Password Fields - Only shown when OTP is verified */}
              {!isLogin && (
                <div className="ecom-password-section">
                  <h5>Set Password</h5>
                  <div className="ecom-reg-password-div">
                    <InputField
                      type="password"
                      className="ecom-reg-ip"
                      placeholder="Password"
                      value={passwordData.password}
                      onChange={handlePasswordChange}
                      required
                    />
                    <InputField
                      className="ecom-reg-ip"
                      type="password"
                      placeholder="Confirm Password"
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordChange}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={handlePasswordSubmit}
                    className="register-btn"
                  >
                    Register
                  </button>
                </div>
              )}

              {isLogin && (
                <>
                  <p className="ecom-forgot-password">Forgot Password ?</p>
                  <button
                    type="submit"
                    className="ecom-login-btn"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EcomRegister;

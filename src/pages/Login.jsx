import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Add your authentication logic here
    // For example: API call to validate credentials
    
    // If login is successful, navigate to dashboard
    navigate("/dashboard");
    
    // Example with validation:
    // if (email && password) {
    //   // Call your API here
    //   navigate("/dashboard");
    // } else {
    //   alert("Please enter email and password");
    // }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-right">
          <h1>Tour Management</h1>

          <form onSubmit={handleLogin}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="login-options">
              <label className="remember-label">
                <input 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                /> 
                Remember me
              </label>
              <span className="forgot-password">Forgot Password?</span>
            </div>

            <button type="submit" className="login-btn">LOGIN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
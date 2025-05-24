import React, { useState } from "react";
import '../../App.css';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/users/login', {
        email,
        password
      }, { withCredentials: true });

      setMessage(response.data.message);
      localStorage.setItem('token', response.data.token); // Store JWT token
      // Redirect or do something on success
      console.log("JWT Token:", response.data.token);

    } catch (error) {
      setMessage(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-image">
          <img src="/loginimage.jpg" alt="Login visual" />
        </div>
        <div className="login-form">
          <h2>Sign in</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="login-options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="/forgot-password">Forgot password?</a>
            </div>
            <button type="submit" >LOGIN</button>
          </form>
          {message && <p className="login-message">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;

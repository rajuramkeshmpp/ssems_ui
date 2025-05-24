import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ← Step 1
import '../../App.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // ← Step 2

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert("User registered successfully!");
        navigate("/login"); 
      } else {
        alert(data.message || "Registration failed");
      }

    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-form">
          <h2>Register now</h2>
          <form onSubmit={handleSubmit}>
            <div className="name-fields">
              <input type="text" name="firstName" placeholder="First name" required onChange={handleChange} />
              <input type="text" name="lastName" placeholder="Last name" required onChange={handleChange} />
            </div>
            <input type="email" name="email" placeholder="Email address" required onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" required onChange={handleChange} />

            <button type="submit" className="form-control">REGISTER</button>
          </form>
        </div>

        <div className="register-image">
          <img src="/loginimage.jpg" alt="Sign up visual" />
        </div>
      </div>
    </div>
  );
};

export default Register;
